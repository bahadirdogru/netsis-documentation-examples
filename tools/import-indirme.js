// Logo indirme sunucusundaki (download.logo.com.tr/#/Windows/NETSISERP/) Netsis ERP setlerini content/surumler/ altına yazar.
// Kullanım: node tools/import-indirme.js
//
// Girdi: kaynak/logo-indirme/files.json (sunucunun kendi sürüm listesi) ve kaynak/logo-indirme/agac.tsv
// (klasör ağacı; CrushFTP getXMLListing komutuyla tarayıcıda alınır).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'kaynak', 'logo-indirme');
const OUT = path.join(ROOT, 'content', 'surumler');
const BASE = 'https://download.logo.com.tr/Windows/NETSISERP/';
const UI = 'https://download.logo.com.tr/#/Windows/NETSISERP/';

const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'files.json'), 'utf8').replace(/^﻿/, ''));
const tree = fs.readFileSync(path.join(SRC, 'agac.tsv'), 'utf8').trim().split('\n').slice(1)
  .map(l => { const [type, p, size, mtime] = l.split('\t'); return { type, path: p, size: +size, mtime: +mtime }; });

const verKey = v => v.split(/[._]/).map(n => n.padStart(4, '0')).join('.');
const fmtSize = b => b >= 1024 ** 3 ? (b / 1024 ** 3).toFixed(2) + ' GB' : b >= 1024 ** 2 ? (b / 1024 ** 2).toFixed(1) + ' MB' : Math.max(1, Math.round(b / 1024)) + ' KB';
const isoDate = d => d.split('/').reverse().join('-');
const enc = p => p.split('/').map(encodeURIComponent).join('/');

const versions = manifest.Files.map(f => {
  const v = f.FileVersion;
  const [, , set, patch] = v.split('.').map(Number);
  return { v, set, patch, file: f.FilePath, size: +f.FileSizeKB * 1024, date: isoDate(f.ReleaseDate), doc: f.DocumentURL };
}).sort((a, b) => verKey(a.v).localeCompare(verKey(b.v)));

// Sunucuda durup files.json'da olmayan arşiv dosyaları
const listed = new Set(versions.map(x => x.file));
const extra = tree.filter(e => e.type === 'F' && /^Archive\/[\d_]+\.rar$/.test(e.path) && !listed.has(e.path));

const hr = tree.filter(e => e.type === 'F' && /^NetsisHR\/.+\.rar$/.test(e.path))
  .map(e => ({ v: e.path.match(/(\d+_\d+_\d+_\d+)/)[1].replace(/_/g, '.'), file: e.path, size: e.size, date: new Date(e.mtime).toISOString().slice(0, 10) }))
  .sort((a, b) => verKey(a.v).localeCompare(verKey(b.v)));

// Açık (rar'a ek olarak klasör hâlinde de duran) setler
const openDirs = [...new Set(tree.filter(e => /^9_0_\d+_\d+\//.test(e.path)).map(e => e.path.split('/')[0]))]
  .sort((a, b) => verKey(a).localeCompare(verKey(b)));
const filesIn = dir => tree.filter(e => e.type === 'F' && e.path.startsWith(dir + '/'));

const frontMatter = (title, description) => `---\ntitle: ${title}\ndescription: ${description}\n---\n\n`;
// Listelerin sunucudan alındığı gün (betiğin çalıştığı gün değil); listeyi yenileyince güncelleyin.
const today = JSON.parse(fs.readFileSync(path.join(SRC, 'alinma.json'), 'utf8')).NETSISERP;

// --- tum-surumler.md ---
{
  let md = frontMatter('Tüm sürümler', `Logo indirme sunucusundaki ${versions.length} Netsis ERP setinin listesi: sürüm, tarih, boyut, indirme ve yenilikler bağlantısı.`);
  md += `# Tüm sürümler\n\n`;
  md += `Logo'nun indirme sunucusundaki Netsis ERP setleri, sunucunun kendi listesinden ([files.json](${BASE}files.json)) alındı. Liste ${today} tarihinde alındı; yeni setler için [indirme sayfasına](${UI}) bakın.\n\n`;
  md += `- **Tam set:** sürümün son hanesi \`0\` olanlar (ör. \`9.0.72.0\`). Kurulum için gereken her şeyi içerir.\n`;
  md += `- **Yama (hotfix):** son hanesi \`0\` dışında olanlar (ör. \`9.0.72.3\`). Yalnızca değişen dosyaları içerir; aynı setin tam sürümünün üzerine kurulur.\n`;
  md += `- **Yenilikler** sütunu Logo'nun sürüm notuna bağlanır. Eski PDF bağlantılarının bir kısmı artık çalışmıyor olabilir.\n\n`;

  const sets = [...new Set(versions.map(x => x.set))].sort((a, b) => b - a);
  for (const set of sets) {
    const rows = versions.filter(x => x.set === set);
    const major = rows[0].v.split('.').slice(0, 2).join('.');
    md += `## ${major}.${set}\n\n| Sürüm | Tür | Tarih | Boyut | İndir | Yenilikler |\n|---|---|---|---:|---|---|\n`;
    for (const x of rows.sort((a, b) => b.patch - a.patch)) {
      md += `| \`${x.v}\` | ${x.patch === 0 ? 'Tam set' : 'Yama'} | ${x.date} | ${fmtSize(x.size)} | [${x.file.split('/').pop()}](${BASE}${enc(x.file)}) | ${x.doc ? `[not](${x.doc})` : '—'} |\n`;
    }
    md += '\n';
  }
  if (extra.length) {
    md += `## Listede olmayan arşiv dosyaları\n\nSunucunun \`Archive\` klasöründe olup \`files.json\`'da geçmeyen dosyalar:\n\n| Dosya | Tarih | Boyut |\n|---|---|---:|\n`;
    for (const e of extra) md += `| [${e.path}](${BASE}${enc(e.path)}) | ${new Date(e.mtime).toISOString().slice(0, 10)} | ${fmtSize(e.size)} |\n`;
    md += '\n';
  }
  md += `## Netsis HR\n\nNetsis İK (HR) setleri ayrı numaralanır ve \`NetsisHR\` klasöründedir. Tarih, dosyanın sunucuya yüklendiği gündür.\n\n| Sürüm | Tarih | Boyut | İndir |\n|---|---|---:|---|\n`;
  for (const x of [...hr].reverse()) md += `| \`${x.v}\` | ${x.date} | ${fmtSize(x.size)} | [${x.file.split('/').pop()}](${BASE}${enc(x.file)}) |\n`;
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'tum-surumler.md'), md);
}

// --- yama-icerikleri.md ---
{
  const patches = openDirs.filter(d => !d.endsWith('_0'));
  const key = /^(TemelSet\/NetOpenX50\.dll|Kurulum\/NetsisNoxRestSetup\.exe)$/;
  let md = frontMatter('Yama içerikleri', 'Güncel Netsis ERP yamalarının hangi dosyaları değiştirdiği; NetOpenX50.dll ve NetOpenX REST kurulumunu güncelleyen yamalar.');
  md += `# Yama içerikleri\n\n`;
  md += `Sunucu, güncel setlerin içeriğini \`.rar\` dosyasının yanında açık klasör olarak da tutar. Bu sayfa her yamanın hangi dosyaları getirdiğini listeler. Klasör yolları kurulum dizinine göredir (ör. \`TemelSet/NetOpenX50.dll\` → \`C:\\NETSIS\\TemelSet\\NetOpenX50.dll\` gibi). Liste ${today} tarihinde alındı.\n\n`;
  md += `## NetOpenX ve REST'i güncelleyen yamalar\n\nEntegrasyon yazıyorsanız önemli olan iki dosya \`TemelSet/NetOpenX50.dll\` (COM) ve \`Kurulum/NetsisNoxRestSetup.exe\` (REST servisi). Bir yamada bu dosyalar varsa NetOpenX davranışı değişmiş olabilir; uygulamanızı yamadan sonra yeniden test edin.\n\n`;
  md += `| Yama | Tarih | NetOpenX50.dll | NetsisNoxRestSetup.exe |\n|---|---|---|---|\n`;
  const dateOf = d => (versions.find(x => x.v === d.replace(/_/g, '.')) || {}).date || '';
  for (const d of [...patches].reverse()) {
    const f = filesIn(d).map(e => e.path.slice(d.length + 1));
    const dll = f.includes('TemelSet/NetOpenX50.dll'), rest = f.includes('Kurulum/NetsisNoxRestSetup.exe');
    if (dll || rest) md += `| [\`${d.replace(/_/g, '.')}\`](#${d.replace(/_/g, "-")}) | ${dateOf(d)} | ${dll ? 'var' : '—'} | ${rest ? 'var' : '—'} |\n`;
  }
  md += `\nAşağıda listelenen yamalardan bu tabloda olmayanlar bu iki dosyaya dokunmaz. Açık klasörü olmayan eski yamaların içeriği bu sayfada yok.\n\n`;
  for (const d of [...patches].reverse()) {
    const v = d.replace(/_/g, '.');
    const files = filesIn(d);
    md += `## ${v}\n\n`;
    md += `${dateOf(d) ? dateOf(d) + ' · ' : ''}${files.length} dosya · [klasörü aç](${UI}${d}/) · [${d}.rar](${BASE}${d}.rar)\n\n`;
    const groups = {};
    for (const e of files) {
      const rel = e.path.slice(d.length + 1);
      const dir = rel.includes('/') ? rel.slice(0, rel.lastIndexOf('/')) : '.';
      (groups[dir] = groups[dir] || []).push(rel.slice(rel.lastIndexOf('/') + 1) + (key.test(rel) ? ' ★' : ''));
    }
    md += `| Klasör | Dosyalar |\n|---|---|\n`;
    for (const dir of Object.keys(groups).sort()) md += `| \`${dir}\` | ${groups[dir].sort().map(n => '`' + n.replace(' ★', '') + '`' + (n.endsWith('★') ? ' ★' : '')).join(', ')} |\n`;
    md += '\n';
  }
  md += `★ NetOpenX COM ya da REST dosyası.\n`;
  fs.writeFileSync(path.join(OUT, 'yama-icerikleri.md'), md);
}

// --- tam set klasör özeti (index.md içine elle yazılan bölüm için) ---
{
  const latest = openDirs.filter(d => d.endsWith('_0')).pop();
  const top = {};
  for (const e of filesIn(latest)) {
    const rel = e.path.slice(latest.length + 1);
    const t = rel.includes('/') ? rel.split('/')[0] : '.';
    top[t] = top[t] || { n: 0, size: 0 };
    top[t].n++; top[t].size += e.size;
  }
  fs.writeFileSync(path.join(SRC, 'tam-set-ozeti.json'), JSON.stringify({ set: latest, klasorler: top }, null, 2));
}

// --- logo-araclari/e-belge-kodlari.md (Windows/TOOLS altındaki Logo kod XML'lerinden) ---
{
  const TOOLS = path.join(SRC, 'tools', 'e-devlet-uygulamalari');
  const TOOLS_URL = 'https://download.logo.com.tr/Windows/TOOLS/e-devlet-uygulamalari/';
  // Dosyalar ISO-8859-9 (Türkçe) kodlu; Node'da latin1 okuyup Türkçe harfleri eşle.
  const TR9 = { '\u00d0': 'Ğ', '\u00dd': 'İ', '\u00de': 'Ş', '\u00f0': 'ğ', '\u00fd': 'ı', '\u00fe': 'ş' };
  const read = f => fs.readFileSync(path.join(TOOLS, f), 'latin1').replace(/[\u00d0\u00dd\u00de\u00f0\u00fd\u00fe]/g, c => TR9[c]);
  const cell = s => s.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();
  const toolsTree = fs.readFileSync(path.join(SRC, 'tools-agac.tsv'), 'utf8').trim().split('\n').slice(1).map(l => l.split('\t'));
  const dateOf = rel => { const e = toolsTree.find(x => x[1] === 'e-devlet-uygulamalari/' + rel); return e ? new Date(+e[3]).toISOString().slice(0, 10) : ''; };
  const src = rel => `[\`${rel.split('/').pop()}\`](${TOOLS_URL}${enc(rel)}) (${dateOf(rel)})`;

  const deducts = f => [...read(f).matchAll(/<CODE>([^<]*)<\/CODE><NAME>([^<]*)<\/NAME><DEDUCTRATE>([^<]*)/g)].map(m => ({ code: m[1], name: m[2], rate: m[3] }));
  const vd = deducts('Tevkifat_KdvMuafiyet_Xml/VatDeducts.xml');
  const vdOld = deducts('Tevkifat_XML/VatDeducts.xml');
  const vd2 = deducts('Tevkifat_KdvMuafiyet_Xml/VatDeducts2.xml');
  const ex = [...read('Tevkifat_KdvMuafiyet_Xml/VatExcepts.xml').matchAll(/<CODE>([^<]*)<\/CODE><NAME>([^<]*)<\/NAME><\/VATEXCEPTREASON><TURU>([^<]*)/g)].map(m => ({ code: m[1], name: m[2], type: m[3] }));
  const pay = [...read('E-Fatura/PayMeansCodes.xml').matchAll(/<CODE>([^<]*)<\/CODE><NAME>([^<]*)<\/NAME><EXPLANATION>([^<]*)/g)].map(m => ({ code: m[1], name: m[2], exp: m[3] }));

  let md = frontMatter('E-belge kod listeleri', 'KDV tevkifat kodları ve oranları, KDV istisna kodları ve e-fatura ödeme şekli kodları; Logo\'nun e-devlet araçları klasöründeki XML listelerinden.');
  md += `# E-belge kod listeleri\n\n`;
  md += `E-fatura ve e-arşiv faturada kullanılan GİB kodları. Listeler Logo'nun indirme sunucusundaki [e-devlet araçları](/logo-araclari/) klasöründe duran XML dosyalarından alındı. Bu dosyalar Logo ürünlerine kod tablosu aktarmak için hazırlanmıştır (\`DBOP="INS"\` biçimi), ama içerdikleri kodlar GİB'in kodlarıdır ve Netsis'te de aynıdır.\n\n`;
  md += `> **Tarihe dikkat.** XML'lerin en yenisi ${dateOf('Tevkifat_KdvMuafiyet_Xml/VatExcepts.xml')} tarihlidir. GİB kod listelerini zaman zaman günceller (yeni tevkifat ve istisna kodları eklenir, adlar değişir). Faturada kullanmadan önce GİB'in güncel [e-Fatura kod listelerini](https://ebelge.gib.gov.tr/) kontrol edin.\n\n`;
  md += `Netsis'te bu kodlar e-fatura başlık ve kalem alanlarında kullanılır. NetOpenX'te KDV istisna kodu \`FatUst.EFatOzelKod\` alanına yazılır: [Fatura ve irsaliye](/netopenx/fatura-ve-irsaliye/#fatust-alanlari). Tevkifatlı fatura örneği: [bahadirdogru.com](https://bahadirdogru.com/c-tevkifatl%C4%B1-fatura/).\n\n`;

  md += `## KDV tevkifat kodları\n\nKaynak: ${src('Tevkifat_KdvMuafiyet_Xml/VatDeducts.xml')}. Oran, KDV'nin alıcı tarafından tevkif edilen kısmıdır (ör. \`9/10\`: KDV'nin onda dokuzu).\n\n| Kod | Tevkifat oranı | Açıklama |\n|---|---|---|\n`;
  for (const x of vd) md += `| \`${x.code}\` | ${x.rate} | ${cell(x.name)} |\n`;
  const diffs = vdOld.filter(o => { const n = vd.find(x => x.code === o.code); return !n || cell(n.name) !== cell(o.name); });
  if (diffs.length) {
    md += `\nAynı klasördeki daha eski liste (${src('Tevkifat_XML/VatDeducts.xml')}) şu satırlarda farklıdır:\n\n| Kod | Oran | Eski listedeki açıklama |\n|---|---|---|\n`;
    for (const x of diffs) md += `| \`${x.code}\` | ${x.rate} | ${cell(x.name)} |\n`;
  }
  const same2 = vd2.length === vd.length && vd2.every((x, i) => cell(x.name) === cell(vd[i].name) && x.rate === vd[i].rate);
  md += `\n${src('Tevkifat_KdvMuafiyet_Xml/VatDeducts2.xml')} ${same2 ? `aynı ${vd2.length} kalemi \`6xx\` yerine \`2xx\` numaralarıyla (\`${vd2[0].code}\`–\`${vd2[vd2.length - 1].code}\`) içerir.` : 'farklı bir liste içerir.'} Dosyada \`2xx\` numaralarının ne zaman kullanıldığı yazmıyor; GİB'in e-fatura tevkifat kodları \`6xx\` aralığındadır.\n\n`;

  md += `## KDV istisna kodları\n\nKaynak: ${src('Tevkifat_KdvMuafiyet_Xml/VatExcepts.xml')}. ${ex.length} kod. Açıklamanın başındaki madde numarası (ör. \`17/1\`) 3065 sayılı KDV Kanunu'nun maddesidir; birkaç kodda madde numarası yoktur.\n\n| Kod | Tür | Açıklama |\n|---|---|---|\n`;
  for (const x of ex) md += `| \`${x.code}\` | ${cell(x.type).replace('KISMİ İSTİSNA', 'Kısmi').replace('TAM İSTİSNA', 'Tam')} | ${cell(x.name)} |\n`;

  md += `\n## Ödeme şekli kodları\n\nKaynak: ${src('E-Fatura/PayMeansCodes.xml')}. UBL-TR \`cac:PaymentMeans/cbc:PaymentMeansCode\` alanının değerleri (UN/EDIFACT 4461 listesi). ${pay.length} kod.\n\n| Kod | Ad | Açıklama |\n|---|---|---|\n`;
  for (const x of pay) md += `| \`${x.code}\` | ${cell(x.name)} | ${/^\((İfade kendini açıklıyor|Açıklaması yapılacak)\.\)$/.test(cell(x.exp)) ? '' : cell(x.exp)} |\n`;
  fs.mkdirSync(path.join(ROOT, 'content', 'logo-araclari'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'content', 'logo-araclari', 'e-belge-kodlari.md'), md);
  console.log(`e-belge kodları: ${vd.length} tevkifat, ${ex.length} istisna, ${pay.length} ödeme şekli`);
}

console.log(`${versions.length} sürüm, ${hr.length} HR seti, ${openDirs.length} açık klasör → content/surumler/`);
