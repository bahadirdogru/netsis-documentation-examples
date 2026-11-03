// content/ (elle yazılmış Markdown) + data/schema.json (veritabanı şeması) → docs/ (GitHub Pages)
// Her sayfa iki biçimde yazılır: /yol/index.html (insanlar için) ve /yol.md (LLM'ler için).
// Ayrıca llms.txt, llms-full.txt, veritabanı için sema.txt ve schema.json üretilir.

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content');
const OUT = path.join(ROOT, 'docs');
const SITE = {
  name: 'Netsis Dokümantasyonu',
  url: 'https://netsis.bahadirdogru.com',
  domain: 'netsis.bahadirdogru.com',
  repo: 'https://github.com/bahadirdogru/netsis-documentation-examples',
  description: "Netsis ERP için veritabanı şeması, NetOpenX COM ve NetOpenX REST başvuru dokümantasyonu. İnsanlar ve LLM'ler için.",
};

// ---------------------------------------------------------------- yardımcılar

const TR = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' };
const slugify = s => String(s).replace(/[çğıİöşüÇĞÖŞÜ]/g, c => TR[c]).toLowerCase()
  .replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const mdCell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');

function write(rel, data) {
  const f = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, data);
}

function parseFrontMatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: src };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: src.slice(m[0].length) };
}

// content/rest/index.md → /rest/ ; content/rest/uclar.md → /rest/uclar/
const urlOf = rel => {
  const p = rel.replace(/\\/g, '/').replace(/\.md$/, '');
  if (p === 'index') return '/';
  return '/' + p.replace(/\/index$/, '') + '/';
};
// Markdown kopyası: sondaki "/" yerine ".md". /rest/ → rest.md ; /rest/uclar/ → rest/uclar.md ; / → index.md
const mdPathOf = url => url === '/' ? 'index.md' : url.slice(1, -1) + '.md';

// ---------------------------------------------------------------- şema

const schema = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'schema.json'), 'utf8'));
const tables = schema.tables;
const tableByName = new Map();
for (const t of tables) if (!tableByName.has(t.name)) tableByName.set(t.name, t);

// Aynı adla iki kez belgelenmiş tablolar için ikinci kopya -2 ekiyle ayrı sayfa alır.
const seenSlug = {};
for (const t of tables) {
  let s = slugify(t.name);
  if (seenSlug[s]) { seenSlug[s]++; s += '-' + seenSlug[s]; } else seenSlug[s] = 1;
  t.slug = s;
  t.url = `/veritabani/tablolar/${s}/`;
}

const modules = [];
for (const t of tables) {
  let m = modules.find(x => x.name === t.module);
  if (!m) modules.push(m = { name: t.module, slug: slugify(t.module), tables: [] });
  m.tables.push(t);
}
for (const m of modules) m.url = `/veritabani/moduller/${m.slug}/`;

// Tabloyu doğrudan ilgilendiren el yazımı sayfalar (tablo sayfasında "İlgili sayfalar" olarak görünür).
const RELATED = {
  TBLCASABIT: [['Cari kartı (NetOpenX COM)', '/netopenx/cari-ve-stok/'], ['Cari uçları (REST ARPs)', '/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions'], ['Temel tablolar', '/veritabani/temel-tablolar/']],
  TBLCASABITEK: [['Cari uçları (REST ARPs)', '/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions']],
  TBLCAHAR: [['Cari hareket (REST ARPTransactions)', '/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions'], ['Temel tablolar', '/veritabani/temel-tablolar/']],
  TBLSTSABIT: [['Stok kartı (NetOpenX COM)', '/netopenx/cari-ve-stok/'], ['Stok uçları (REST Items)', '/rest/uclar/#stok-items-ve-stok-hareketi-itemtransactions'], ['Temel tablolar', '/veritabani/temel-tablolar/']],
  TBLSTSABITEK: [['Stok uçları (REST Items)', '/rest/uclar/#stok-items-ve-stok-hareketi-itemtransactions']],
  TBLSTHAR: [['Fatura ve irsaliye (NetOpenX COM)', '/netopenx/fatura-ve-irsaliye/'], ['Temel tablolar', '/veritabani/temel-tablolar/']],
  TBLFATUIRS: [['Fatura ve irsaliye (NetOpenX COM)', '/netopenx/fatura-ve-irsaliye/'], ['ItemSlips (REST)', '/rest/uclar/#fatura-irsaliye-ve-siparis-itemslips'], ['Temel tablolar', '/veritabani/temel-tablolar/']],
  TBLFATUEK: [['Fatura ve irsaliye (NetOpenX COM)', '/netopenx/fatura-ve-irsaliye/']],
  TBLSIPAMAS: [['Belge dönüşümleri (NetOpenX COM)', '/netopenx/belge-donusumleri/'], ['ItemSlips (REST)', '/rest/uclar/#fatura-irsaliye-ve-siparis-itemslips']],
  TBLSIPATRA: [['Belge dönüşümleri (NetOpenX COM)', '/netopenx/belge-donusumleri/']],
  TBLKASA: [['Kasa (REST SafeDeposits)', '/rest/uclar/#kasa-safedeposits']],
  TBLMCEK: [['Çek/senet (REST)', '/rest/uclar/#cek-ve-senet-checkandpnotesmain']],
  TBLMSEN: [['Çek/senet (REST)', '/rest/uclar/#cek-ve-senet-checkandpnotesmain']],
  TBLBCEK: [['Çek/senet (REST)', '/rest/uclar/#cek-ve-senet-checkandpnotesmain']],
  TBLBSEN: [['Çek/senet (REST)', '/rest/uclar/#cek-ve-senet-checkandpnotesmain']],
  TBLEFATPRM: [['E-belge (NetOpenX COM)', '/netopenx/e-belge/']],
  TBLEARSIVPRM: [['E-belge (NetOpenX COM)', '/netopenx/e-belge/']],
  TBLEIRSSERI: [['E-belge (NetOpenX COM)', '/netopenx/e-belge/']],
  TBLDIZAYNSABIT: [['E-belge (NetOpenX COM)', '/netopenx/e-belge/'], ['Basım (REST Print)', '/rest/uclar/#basim-print']],
  TBLMUPLAN: [['Muhasebe (REST GLAccounts)', '/rest/uclar/#muhasebe-fisi-glslips-ve-hesap-plani-glaccounts']],
  TBLMUHFIS: [['Muhasebe (REST GLSlips)', '/rest/uclar/#muhasebe-fisi-glslips-ve-hesap-plani-glaccounts']],
  TBLPROJE: [['Proje (REST Project)', '/rest/uclar/#siparis-makbuz-ve-diger-belgeler']],
};

const isCommonRef = d => /ortak kolon/i.test(d || '');
const typeStr = c => {
  const ty = c.type;
  if (/^(n?varchar|n?char|varbinary)$/i.test(ty) && c.length != null) return `${ty}(${c.length})`;
  if (/^decimal$/i.test(ty) && c.precision != null) return `${ty}(${c.precision},${c.scale ?? 0})`;
  return ty;
};

function tableMarkdown(t) {
  const L = [];
  const pk = t.keys.find(k => k.type === 'PRIMARY KEY');
  const defaults = new Map(t.defaults.map(d => [d.column, d.value]));
  const dup = tables.filter(x => x.name === t.name && x !== t);
  L.push(`# ${t.name}`, '');
  L.push(`> ${t.description || 'Açıklama yok.'}`, '');
  L.push(`- **Modül:** [${t.module}](${modules.find(m => m.name === t.module).url})`);
  L.push(`- **Kolon sayısı:** ${t.columns.length}`);
  if (pk) L.push(`- **Birincil anahtar:** \`${pk.columns}\``);
  if (t.identity) L.push(`- **Identity:** \`${t.identity.column}\` (seed ${t.identity.seed}, artış ${t.identity.increment})`);
  for (const d of dup) L.push(`- **Not:** Bu tablo şema dokümanında ikinci kez, [${d.module} modülünde](${d.url}) de belgelenmiş. Kolon listeleri farklı olabilir.`);
  L.push('');
  if (RELATED[t.name]) {
    L.push('## İlgili sayfalar', '');
    for (const [title, url] of RELATED[t.name]) L.push(`- [${title}](${url})`);
    L.push('');
  }
  L.push('## Kolonlar', '');
  L.push('| # | Kolon | Tip | Null | Varsayılan | Açıklama |');
  L.push('|---|-------|-----|------|------------|----------|');
  t.columns.forEach((c, i) => {
    const desc = isCommonRef(c.description) ? '[Ortak kolon](/veritabani/ortak-kolonlar/)' : mdCell(c.description);
    const def = defaults.has(c.name) ? '`' + mdCell(defaults.get(c.name)) + '`' : '';
    L.push(`| ${i + 1} | \`${c.name}\` | ${typeStr(c)}${c.computed ? ' (hesaplanan)' : ''} | ${c.nullable ? 'evet' : 'hayır'} | ${def} | ${desc} |`);
  });
  L.push('');
  if (t.keys.length) {
    L.push('## Anahtarlar', '', '| Tür | Ad | Kolonlar |', '|-----|----|----------|');
    for (const k of t.keys) L.push(`| ${k.type} | \`${mdCell(k.name)}\` | \`${mdCell(k.columns)}\` |`);
    L.push('');
    if (t.keys.some(k => k.type === 'FOREIGN KEY')) L.push('Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.', '');
  }
  if (t.indexes.length) {
    L.push('## İndeksler', '', '| Ad | Kolonlar | Tanım |', '|----|----------|-------|');
    for (const x of t.indexes) L.push(`| \`${mdCell(x.name)}\` | \`${mdCell(x.columns)}\` | ${mdCell(x.definition)} |`);
    L.push('');
  }
  L.push('## Örnek sorgu', '', '```sql', `SELECT TOP 100 ${t.columns.slice(0, 6).map(c => c.name).join(', ')}`, `FROM dbo.${t.name} WITH (NOLOCK);`, '```', '');
  return L.join('\n');
}

function moduleMarkdown(m) {
  const L = [`# ${m.name} modülü tabloları`, ''];
  L.push(`Bu modülde şema dokümanında ayrıntısı bulunan **${m.tables.length}** tablo var.`, '');
  L.push('| Tablo | Kolon | Açıklama |', '|-------|------:|----------|');
  for (const t of [...m.tables].sort((a, b) => a.name.localeCompare(b.name))) L.push(`| [\`${t.name}\`](${t.url}) | ${t.columns.length} | ${mdCell(t.description)} |`);
  L.push('');
  const listed = schema.tableList.filter(x => slugify(x.module) === m.slug && !tableByName.has(x.name));
  if (listed.length) {
    L.push('## Ayrıntısı olmayan tablolar', '', 'Aşağıdaki tablolar tablo listesinde bu modülle anılıyor ama kolon ayrıntısı şema dokümanında yok.', '');
    L.push('| Tablo | Açıklama |', '|-------|----------|');
    for (const x of listed) L.push(`| \`${x.name}\` | ${mdCell(x.description)} |`);
    L.push('');
  }
  return L.join('\n');
}

function allTablesMarkdown() {
  const L = ['# Tüm tablolar', ''];
  L.push(`Şema dokümanında ayrıntısı bulunan **${tables.length}** tablo kaydı, toplam **${tables.reduce((s, t) => s + t.columns.length, 0).toLocaleString('tr-TR')}** kolon. Kolon adına göre aramak için üstteki arama kutusunu kullanın (ör. \`CARI_KOD\`).`, '');
  L.push('<input id="table-filter" class="filter" type="search" placeholder="Tabloları süz: ad, modül veya açıklama…" aria-label="Tabloları süz">', '');
  L.push('| Tablo | Modül | Kolon | Açıklama |', '|-------|-------|------:|----------|');
  for (const t of [...tables].sort((a, b) => a.name.localeCompare(b.name))) L.push(`| [\`${t.name}\`](${t.url}) | ${t.module} | ${t.columns.length} | ${mdCell(t.description)} |`);
  L.push('');
  const undocumented = schema.dbObjects.filter(n => !tableByName.has(n));
  if (undocumented.length) {
    L.push('## Veritabanında olup şemada ayrıntısı olmayan nesneler', '');
    L.push(`Bir Netsis şirket veritabanında listelenen ${schema.dbObjects.length} nesneden ${undocumented.length} tanesinin kolon ayrıntısı şema dokümanında yok. Çoğu görünüm (view), yardımcı ya da sürüme özel tablodur. Ayrıntı için \`sp_help\` veya \`INFORMATION_SCHEMA.COLUMNS\` kullanın.`, '');
    L.push('<details><summary>Listeyi göster</summary>', '', undocumented.map(n => '`' + n + '`').join(' · '), '', '</details>', '');
  }
  return L.join('\n');
}

function commonColumnsMarkdown() {
  const L = ['# Ortak kolonlar', ''];
  L.push('Netsis tablolarının çoğunda aynı anlamla tekrar eden kolonlar. Tablo sayfalarında "Ortak kolon" olarak işaretlenen alanlar bunlardır.', '');
  L.push('| Kolon | Açıklama | Bulunduğu tablo sayısı |', '|-------|----------|-----------------------:|');
  for (const c of schema.commonColumns) {
    const names = c.name.split(/\s*-\s*/);
    const n = tables.filter(t => t.columns.some(col => names.includes(col.name))).length;
    L.push(`| \`${c.name}\` | ${mdCell(c.description) || '—'} | ${n} |`);
  }
  L.push('');
  L.push('## Yedek sahalar', '');
  L.push('`C_YEDEK1..`, `I_YEDEK1..`, `F_YEDEK1..`, `S_YEDEK1..`, `B_YEDEK1..`, `L_YEDEK1..` gibi kolonlar "daha sonra kullanılmak için bırakılan yedek saha"dır. Önek tipi gösterir: `C` char, `I` integer, `F` float, `S` string (varchar), `B` byte, `L` long/integer. Bazı ekranlar bu sahaları kullanıcı tanımlı bilgi için kullanır; dolu olup olmadığını kendi verinizde kontrol edin.', '');
  L.push('## Kullanıcı tanımlı sahalar', '');
  L.push('Ek bilgi tablolarında (`TBLCASABITEK`, `TBLSTSABITEK`) `KULL1S..KULL8S` metin, `KULL1N..KULL8N` sayısal kullanıcı tanımlı sahalardır. NetOpenX\'te `EkBilgi()` nesnesinin `Kull1S`, `Kull1N` özellikleriyle yazılır.', '');
  return L.join('\n');
}

function dataTypesMarkdown() {
  const counts = {};
  const sample = {};
  for (const t of tables) for (const c of t.columns) {
    counts[c.type] = (counts[c.type] || 0) + 1;
    if (!sample[c.type]) sample[c.type] = c;
  }
  const known = {
    TDBSMALLINT: 'smallint tabanlı; şube, işletme kodu gibi küçük sayılar',
    TDBINTEGER: 'int tabanlı tam sayı',
    TDBFLOAT: 'Tutar, miktar, fiyat. Ondalıklı sayı (şemada uzunluk 13, hassasiyet 28, ölçek 8)',
    TDBDATETIME: 'Tarih / tarih-saat',
    TDBNETSISKUL: 'Netsis kullanıcı adı (12 karakter)',
    TDBBYTE: 'tinyint tabanlı; tip/durum kodları',
    TDBMUHKOD: 'Muhasebe hesap kodu (35 karakter)',
    TDBCARIKOD: 'Cari hesap kodu',
    TDBSTOKKOD: 'Stok kodu',
    TDBBELGENO: 'Belge / fiş numarası (genellikle 15 karakter)',
    TDBPROJEKOD: 'Proje kodu',
    TDBPLASIYER: 'Plasiyer (satış temsilcisi) kodu',
    TDBGRUPKOD: 'Grup kodu',
    TDBREFKOD: 'Referans kodu',
    TDBKDVORAN: 'KDV oranı',
    TDBMEMO: 'Uzun metin',
    TDBTELFAX: 'Telefon / faks numarası',
    TDBENTKEY: 'Entegrasyon anahtarı',
  };
  const L = ['# Veri tipleri', ''];
  L.push('Netsis şeması SQL Server\'ın yerleşik tiplerinin yanında `TDB` önekli **kullanıcı tanımlı tipler** (user-defined data type) kullanır. Bunlar yerleşik bir tipin takma adıdır; sorgu yazarken altta yatan tip gibi davranırlar.', '');
  L.push('| Tip | Kullanım sayısı | Örnek uzunluk | Anlamı |', '|-----|---------------:|--------------:|--------|');
  for (const [ty, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    if (n < 2 && !known[ty]) continue;
    L.push(`| \`${ty}\` | ${n} | ${sample[ty].length ?? ''} | ${known[ty] || (/^TDB/.test(ty) ? 'Netsis kullanıcı tanımlı tipi' : 'SQL Server yerleşik tipi')} |`);
  }
  L.push('', 'Bir kullanıcı tanımlı tipin altındaki gerçek tipi görmek için:', '', '```sql', "SELECT name, TYPE_NAME(system_type_id) AS base_type, max_length, precision, scale", "FROM sys.types WHERE is_user_defined = 1 AND name LIKE 'TDB%';", '```', '');
  L.push('## Evet/Hayır alanları', '', "Netsis mantıksal alanları çoğunlukla `char(1)` içinde `'E'` (evet) / `'H'` (hayır) olarak tutar. Bazı parametre alanları `'1'`/`'0'` kullanır. Kolon açıklamasını kontrol edin.", '');
  return L.join('\n');
}

// ---------------------------------------------------------------- sayfalar

const pages = new Map(); // url → {url, title, description, body(md), isIndex, kind}

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.md')) {
      const rel = path.relative(CONTENT, full);
      const { meta, body } = parseFrontMatter(fs.readFileSync(full, 'utf8'));
      const url = urlOf(rel);
      pages.set(url, { url, title: meta.title || f, description: meta.description || '', body, isIndex: /(^|[\\/])index\.md$/.test(rel), kind: 'page', src: 'content/' + rel.replace(/\\/g, '/') });
    }
  }
}
walk(CONTENT);

const addGen = (url, title, description, body, kind = 'gen', isIndex = false) =>
  pages.set(url, { url, title, description, body, isIndex, kind });

addGen('/veritabani/tum-tablolar/', 'Tüm tablolar', `${tables.length} tablonun alfabetik listesi`, allTablesMarkdown());
addGen('/veritabani/ortak-kolonlar/', 'Ortak kolonlar', 'Netsis tablolarında tekrar eden kolonlar', commonColumnsMarkdown());
addGen('/veritabani/veri-tipleri/', 'Veri tipleri', 'TDB önekli kullanıcı tanımlı tipler', dataTypesMarkdown());
for (const m of modules) addGen(m.url, `${m.name} modülü`, `${m.name} modülündeki ${m.tables.length} tablo`, moduleMarkdown(m), 'module');
for (const t of tables) addGen(t.url, t.name, t.description, tableMarkdown(t), 'table');

// Veritabanı ana sayfasına modül listesini ekle.
const dbIndex = pages.get('/veritabani/');
if (dbIndex) {
  dbIndex.body += '\n\n## Modüller\n\n| Modül | Tablo | Örnek tablolar |\n|-------|------:|----------------|\n' +
    modules.map(m => `| [${m.name}](${m.url}) | ${m.tables.length} | ${m.tables.slice(0, 4).map(t => '`' + t.name + '`').join(', ')} |`).join('\n') + '\n';
}

// ---------------------------------------------------------------- navigasyon

const NAV = JSON.parse(fs.readFileSync(path.join(CONTENT, '_nav.json'), 'utf8'));
NAV.push({ title: 'Veritabanı modülleri', collapsed: true, items: modules.map(m => m.url) });

function navHtml(current) {
  return NAV.map(sec => {
    const items = sec.items.map(u => {
      const p = pages.get(u);
      if (!p) throw new Error(`_nav.json: sayfa yok ${u}`);
      const active = u === current || (current.startsWith('/veritabani/tablolar/') && u === moduleUrlOfTable(current));
      return `<li><a href="${u}"${active ? ' aria-current="page"' : ''}>${esc(p.title)}</a></li>`;
    }).join('');
    const open = !sec.collapsed || sec.items.some(u => u === current || u === moduleUrlOfTable(current));
    return `<details class="nav-sec"${open ? ' open' : ''}><summary>${esc(sec.title)}</summary><ul>${items}</ul></details>`;
  }).join('');
}
const tableByUrl = new Map(tables.map(t => [t.url, t]));
const moduleUrlOfTable = url => {
  const t = tableByUrl.get(url);
  return t ? modules.find(m => m.name === t.module).url : null;
};

// ---------------------------------------------------------------- render

const tableNameRe = /^(TBL[A-Z0-9_]+)$/;
const headingIds = new Map();

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw) => {
  const base = slugify(raw) || 'bolum';
  const n = headingIds.get(base) || 0;
  headingIds.set(base, n + 1);
  const id = n ? `${base}-${n}` : base;
  return `<h${level} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true">#</a>${text}</h${level}>\n`;
};
renderer.codespan = text => {
  const m = text.match(tableNameRe);
  if (m && tableByName.has(m[1])) return `<a class="tbl" href="${tableByName.get(m[1]).url}"><code>${text}</code></a>`;
  return `<code>${text}</code>`;
};
renderer.table = (header, body) => `<div class="table-wrap"><table>\n<thead>\n${header}</thead>\n<tbody>${body}</tbody></table></div>\n`;
renderer.link = (href, title, text) => {
  const ext = /^https?:/.test(href) && !href.startsWith(SITE.url);
  return `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ''}${ext ? ' rel="noopener" target="_blank"' : ''}>${text}</a>`;
};
marked.use({ renderer, gfm: true });

function toc(html) {
  const hs = [...html.matchAll(/<h([23]) id="([^"]+)">(?:<a[^>]*>#<\/a>)?([\s\S]*?)<\/h\1>/g)];
  if (hs.length < 3) return '';
  return '<nav class="toc" aria-label="Bu sayfada"><div class="toc-title">Bu sayfada</div><ul>' +
    hs.map(h => `<li class="l${h[1]}"><a href="#${h[2]}">${h[3].replace(/<[^>]+>/g, '')}</a></li>`).join('') + '</ul></nav>';
}

const ICON = `<svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true"><rect width="32" height="32" rx="7" fill="currentColor"/><path d="M9 23V9h3l7 9V9h3v14h-3l-7-9v9z" fill="var(--bg)"/></svg>`;
const FAVICON = 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#1f6feb"/><path d="M9 23V9h3l7 9V9h3v14h-3l-7-9v9z" fill="#fff"/></svg>`);

function pageHtml(p) {
  headingIds.clear();
  const content = marked.parse(p.body);
  const mdUrl = '/' + mdPathOf(p.url);
  const title = p.url === '/' ? SITE.name : `${p.title} · ${SITE.name}`;
  const edit = p.src ? `<a href="${SITE.repo}/edit/main/${p.src}">GitHub'da düzenle</a> · ` : '';
  const crumbs = breadcrumbs(p);
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.description || SITE.description)}">
<link rel="canonical" href="${SITE.url}${p.url}">
<link rel="alternate" type="text/markdown" href="${mdUrl}" title="Markdown">
<link rel="icon" href="${FAVICON}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description || SITE.description)}">
<meta property="og:url" content="${SITE.url}${p.url}">
<script>try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="/assets/site.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css" media="(prefers-color-scheme: light)" id="hl-light">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css" media="(prefers-color-scheme: dark)" id="hl-dark">
</head>
<body>
<a class="skip" href="#main">İçeriğe geç</a>
<header class="top">
  <button class="menu-btn" aria-label="Menü" aria-expanded="false" aria-controls="sidebar">☰</button>
  <a class="brand" href="/">${ICON}<span>${SITE.name}</span></a>
  <div class="search">
    <input id="q" type="search" placeholder="Ara: tablo, kolon, uç, nesne…  ( / )" autocomplete="off" aria-label="Ara">
    <ul id="results" role="listbox" hidden></ul>
  </div>
  <button class="theme-btn" aria-label="Tema değiştir" title="Tema değiştir">◐</button>
</header>
<div class="layout">
<aside id="sidebar" class="sidebar">${navHtml(p.url)}</aside>
<main id="main" class="content">
${crumbs}
<article>
${content}
</article>
<footer class="page-foot">${edit}${p.url === '/404/' ? '' : `<a href="${mdUrl}">Markdown</a> · `}<a href="/llms.txt">llms.txt</a></footer>
</main>
${toc(content)}
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/csharp.min.js"></script>
<script src="/assets/site.js"></script>
</body>
</html>
`;
}

function breadcrumbs(p) {
  if (p.url === '/') return '';
  const parts = p.url.split('/').filter(Boolean);
  const out = ['<a href="/">Ana sayfa</a>'];
  let acc = '/';
  for (let i = 0; i < parts.length - 1; i++) {
    acc += parts[i] + '/';
    let crumb = pages.get(acc);
    // /veritabani/tablolar/ diye bir sayfa yok; tablonun modülüne bağla.
    if (!crumb && acc === '/veritabani/tablolar/') crumb = pages.get(moduleUrlOfTable(p.url));
    if (crumb) out.push(`<a href="${crumb.url}">${esc(crumb.title)}</a>`);
  }
  return `<nav class="crumbs" aria-label="Konum">${out.join(' <span>/</span> ')}</nav>`;
}

// ---------------------------------------------------------------- çıktı

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const p of pages.values()) {
  write(p.url.slice(1) + 'index.html', pageHtml(p));
  const header = `---\ntitle: ${p.title}\nurl: ${SITE.url}${p.url}\n---\n\n`;
  write(mdPathOf(p.url), header + p.body.trim() + '\n');
}

// Statik varlıklar
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
for (const f of fs.readdirSync(path.join(__dirname, 'assets'))) fs.copyFileSync(path.join(__dirname, 'assets', f), path.join(OUT, 'assets', f));

write('CNAME', SITE.domain + '\n');
write('.nojekyll', '');
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  [...pages.keys()].map(u => `<url><loc>${SITE.url}${u}</loc></url>`).join('\n') + '\n</urlset>\n');
write('404.html', pageHtml({ url: '/404/', title: 'Sayfa bulunamadı', description: '', body: '# Sayfa bulunamadı\n\nAradığınız sayfa yok. Üstteki arama kutusunu deneyin ya da [ana sayfaya](/) dönün.\n' }).replace(/<link rel="(canonical|alternate)"[^>]*>\n/g, ''));

// Arama dizini: el yazımı sayfalar + tablolar (kolon adlarıyla).
const searchIndex = [];
for (const p of pages.values()) {
  if (p.kind === 'table') continue;
  const headings = [...p.body.matchAll(/^#{2,3} (.+)$/gm)].map(m => m[1].replace(/[`*]/g, ''));
  searchIndex.push({ t: p.title, u: p.url, d: p.description, k: p.kind === 'module' ? 'modül' : 'sayfa', h: headings.join(' | ') });
}
// p: temel tablolar (RELATED'da olanlar) aramada öne çıkar.
for (const t of tables) searchIndex.push({ t: t.name, u: t.url, d: t.description, k: 'tablo', m: t.module, c: t.columns.map(c => c.name).join(' '), ...(RELATED[t.name] ? { p: 1 } : {}) });
write('search-index.json', JSON.stringify(searchIndex));

// Şema: tam JSON ve LLM'ler için sıkıştırılmış metin.
// Kaynak dosya adı ve sayfa/satır konumları yayınlanmaz.
const { source: _src, ...publicSchema } = schema;
write('data/schema.json', JSON.stringify({ ...publicSchema, tables: tables.map(({ slug, url, source, ...t }) => ({ ...t, url: SITE.url + url })) }));
const semaTxt = [
  `# Netsis veritabanı şeması (sıkıştırılmış metin)`,
  `# ${tables.length} tablo. Biçim: TABLE <ad> [<modül>] <açıklama> / PK / satır başına "  <kolon> <tip> [NULL] — <açıklama>"`,
  `# Ortak kolonlar (SUBE_KODU, ISLETME_KODU, KAYITYAPANKUL, ...) açıklaması: ${SITE.url}/veritabani/ortak-kolonlar/`,
  '',
  ...tables.flatMap(t => {
    const pk = t.keys.find(k => k.type === 'PRIMARY KEY');
    return [
      `TABLE ${t.name} [${t.module}] ${t.description}`,
      ...(pk ? [`  PK ${pk.columns}`] : []),
      ...t.columns.map(c => `  ${c.name} ${typeStr(c)}${c.nullable ? ' NULL' : ''}${c.description && !isCommonRef(c.description) ? ' — ' + c.description : ''}`),
      '',
    ];
  }),
].join('\n');
write('veritabani/sema.txt', semaTxt);

// llms.txt (https://llmstxt.org) ve llms-full.txt
const llmsSections = NAV.filter(s => !s.collapsed).map(sec => `## ${sec.title}\n\n` + sec.items.map(u => {
  const p = pages.get(u);
  return `- [${p.title}](${SITE.url}/${mdPathOf(u)})${p.description ? ': ' + p.description : ''}`;
}).join('\n')).join('\n\n');
const llms = `# ${SITE.name}

> ${SITE.description} Netsis, Logo Yazılım'ın kurumsal ERP ürünüdür (Netsis 3 / Enterprise / Standard). Bu site üç entegrasyon yolunu belgeler: SQL Server veritabanı şeması (salt okunur raporlama), NetOpenX COM kütüphanesi (NetOpenX50.dll) ve NetOpenX REST servisi (api/v2).

Önemli kurallar:
- Netsis verisine YAZMA işlemi doğrudan SQL ile değil, NetOpenX (COM veya REST) üzerinden yapılmalıdır. SQL yalnızca okuma için güvenlidir.
- Doğrulanmamış bilgiler sayfalarda "doğrulanmadı" diye işaretlidir.
- Her sayfanın Markdown hâli, HTML adresindeki son "/" yerine ".md" konarak alınır (ör. ${SITE.url}/rest/uclar.md).

${llmsSections}

## Veritabanı şeması (makine okunur)

- [Sıkıştırılmış şema metni](${SITE.url}/veritabani/sema.txt): ${tables.length} tablo, tüm kolonlar, tek dosya
- [Şema JSON](${SITE.url}/data/schema.json): tablolar, kolonlar, anahtarlar, indeksler, varsayılanlar
- Tek tablo: ${SITE.url}/veritabani/tablolar/<tablo_adı_küçük_harf>.md (ör. ${SITE.url}/veritabani/tablolar/tblcasabit.md)

## Optional

- [Tam metin (llms-full.txt)](${SITE.url}/llms-full.txt): tüm el yazımı sayfalar tek dosyada
- [Tüm tabloların listesi](${SITE.url}/veritabani/tum-tablolar.md)
`;
write('llms.txt', llms);

const fullOrder = NAV.filter(s => !s.collapsed).flatMap(s => s.items);
const full = `# ${SITE.name} — tam metin\n\n> ${SITE.description}\n> Kaynak: ${SITE.url}. Tablo ayrıntıları için ${SITE.url}/veritabani/sema.txt dosyasına bakın.\n\n` +
  fullOrder.map(u => {
    const p = pages.get(u);
    if (p.kind === 'gen' && u === '/veritabani/tum-tablolar/') return `<!-- ${SITE.url}${u} -->\n# Tüm tablolar\n\nBkz. ${SITE.url}/veritabani/sema.txt\n`;
    return `<!-- ${SITE.url}${u} -->\n${p.body.trim()}\n`;
  }).join('\n\n---\n\n');
write('llms-full.txt', full);

console.log(`${pages.size} sayfa üretildi → ${path.relative(ROOT, OUT)}/`);
