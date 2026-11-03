// Logo DYS (dys.logo.cloud) sayfalarının tarayıcıdan alınmış dökümünü kaynak/logo-dys/ altına Markdown olarak yazar.
// Kullanım: node tools/import-dys.js <dys-pages.json>
//
// Girdi: [{ cid, link, parent, root, title, html }] (sayfanın iframe içeriği). Sayfalar Vaadin ile yüklendiği için
// düz HTTP ile alınamaz; döküm tarayıcıda alınır. Ekler (dys.logo.cloud/asset/...) ayrıca kaynak/logo-dys/ekler/ altına indirilir.

const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const { gfm } = require('turndown-plugin-gfm');

const ROOT = path.join(__dirname, '..', 'kaynak', 'logo-dys');
const pages = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const TENANT = 'cdd87e13-3009-4dd1-a5b8-2a005c0e58da';

const TR = { ç: 'c', ğ: 'g', ı: 'i', İ: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', Ö: 'o', Ş: 's', Ü: 'u' };
const slugify = s => String(s).replace(/[çğıİöşüÇĞÖŞÜ]/g, c => TR[c]).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'sayfa';

// DYS/Polaris bağlantısından cid çıkar
function cidOf(href) {
  try {
    let u = href.replace(/&amp;/g, '&');
    if (u.includes('/detail/')) {
      u = u.split('/detail/')[1];
      // Polaris bağlantıları bazen iki kez kodlanmış (%253F)
      while (/%25|%3F|%26|%3D/i.test(u)) u = decodeURIComponent(u);
      u = 'https://dys.logo.cloud/' + u;
    }
    const p = new URL(u);
    return p.pathname.startsWith('/external') ? p.searchParams.get('cid') : null;
  } catch { return null; }
}

// Sayfa ağacı: kök → klasör, alt sayfa → klasör içinde dosya
const byCid = new Map(pages.map(p => [p.cid, p]));
const rootDir = new Map();
for (const p of pages.filter(p => !p.parent)) rootDir.set(p.cid, slugify(p.title.trim()));
const usedNames = new Map();
for (const p of pages) {
  const dir = rootDir.get(p.root) || 'diger';
  let name = p.parent ? slugify(p.title.trim()) : 'index';
  const key = dir + '/' + name;
  const n = usedNames.get(key) || 0;
  usedNames.set(key, n + 1);
  if (n) name += '-' + (n + 1);
  p.file = `sayfalar/${dir}/${name}.md`;
}

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.use(gfm);
// Confluence kod panelleri: <div class="code panel"> içinde başlık (.code-title) ve satır başına bir <p>
// ya da tek bir <pre>. Satırları ayrı ayrı toplamazsak textContent satır sonlarını kaybeder.
const LANGS = { 'c#': 'csharp', csharp: 'csharp', vb: 'vb', delphi: 'delphi', sql: 'sql', js: 'javascript', xml: 'xml', java: 'java' };
// <br> satır sonu sayılır; textContent bunları yutar.
const codeText = el => {
  let s = '';
  (function walk(n) {
    for (const c of n.childNodes) {
      if (c.nodeType === 3) s += c.data;
      else if (c.nodeName === 'BR') s += '\n';
      else walk(c);
    }
  })(el);
  return s.replace(/ /g, ' ');
};
td.addRule('confluenceCodePanel', {
  filter: node => node.nodeName === 'DIV' && /\bcode\b/.test(node.getAttribute('class') || '') && /\bpanel\b/.test(node.getAttribute('class') || ''),
  replacement: (content, node) => {
    const title = node.querySelector('.code-title');
    const body = node.querySelector('.codeContent') || node;
    const pre = body.querySelector('pre');
    const brush = ((pre && pre.getAttribute('data-syntaxhighlighter-params')) || '').match(/brush:\s*([\w#+-]+)/);
    const lang = brush ? (LANGS[brush[1].toLowerCase()] || brush[1]) : '';
    // Satırlar bazen .codeContent'te, bazen (bozuk sayfalarda) .codeHeader içinde duruyor: panelin tüm <p>'lerini al.
    const paras = Array.from(node.getElementsByTagName('p'));
    let text = paras.length ? paras.map(codeText).join('\n') : codeText(pre || body);
    text = text.replace(/^\s*\n/, '').replace(/\s+$/, '');
    return `\n\n${title ? `**${codeText(title).trim()}**\n\n` : ''}\`\`\`${lang}\n${text}\n\`\`\`\n\n`;
  },
});
td.addRule('pre', {
  filter: 'pre',
  replacement: (content, node) => {
    const brush = (node.getAttribute('data-syntaxhighlighter-params') || '').match(/brush:\s*([\w#+-]+)/);
    const lang = brush ? (LANGS[brush[1].toLowerCase()] || brush[1]) : '';
    const text = codeText(node).replace(/^\s*\n/, '').replace(/\s+$/, '');
    return text ? `\n\n\`\`\`${lang}\n${text}\n\`\`\`\n\n` : '';
  },
});

fs.mkdirSync(path.join(ROOT, 'gorseller'), { recursive: true });
let imgCount = 0;
const missingAssets = new Set();
const assetFiles = new Set(fs.existsSync(path.join(ROOT, 'ekler')) ? fs.readdirSync(path.join(ROOT, 'ekler')) : []);

for (const p of pages) {
  let html = p.html;
  const rel = to => path.posix.relative(path.posix.dirname(p.file), to);

  // Gömülü base64 görselleri dosyaya çıkar
  let i = 0;
  html = html.replace(/src="data:image\/(png|jpe?g|gif);base64,([^"]+)"/g, (m, ext, b64) => {
    const name = `${path.basename(p.file, '.md')}-${++i}.${ext === 'jpeg' ? 'jpg' : ext}`;
    const dir = path.join(ROOT, 'gorseller', path.basename(path.dirname(p.file)));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, name), Buffer.from(b64, 'base64'));
    imgCount++;
    return `src="${rel(`gorseller/${path.basename(path.dirname(p.file))}/${name}`)}"`;
  });

  // Bağlantıları yerel dosyalara çevir
  html = html.replace(/(href|src)="([^"]+)"/g, (m, attr, href) => {
    const h = href.replace(/&amp;/g, '&');
    const asset = h.match(/dys\.logo\.cloud\/asset\/[^/]+\/[^/]+\/(.+)$/);
    if (asset) {
      const name = decodeURIComponent(asset[1]);
      if (assetFiles.has(name)) return `${attr}="${rel('ekler/' + encodeURI(name))}"`;
      missingAssets.add(name);
      return m;
    }
    const cid = cidOf(h);
    if (cid && byCid.has(cid)) return `${attr}="${rel(byCid.get(cid).file)}"`;
    return m;
  });

  const md = td.turndown(html).replace(/\n{3,}/g, '\n\n').trim();
  const source = `https://dys.logo.cloud/external?cid=${p.cid}&link=${p.link}&tenantId=${TENANT}&hideName=True&locale=tr_TR`;
  const parent = p.parent && byCid.get(p.parent);
  const header = [
    '---',
    `title: ${JSON.stringify(p.title.trim())}`,
    `source: ${source}`,
    ...(parent ? [`parent: ${rel(parent.file)}`] : []),
    `retrieved: ${new Date().toISOString().slice(0, 10)}`,
    '---',
    '',
    `> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [${p.title.trim()}](${source})`,
    '',
  ].join('\n');
  const out = path.join(ROOT, p.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, header + '\n' + md + '\n');
}

// Dizin
const L = ['# Logo DYS kopyası: Netsis Uyarlama Araçları', '',
  'Logo DYS (`dys.logo.cloud`) üzerindeki Netsis Uyarlama Araçları sayfalarının Markdown kopyası ve ekleri. İçerik Logo Yazılım\'a aittir; bu klasör çevrimdışı başvuru ve bu sitenin içeriğini hazırlamak için tutulur.', '',
  `Alınma tarihi: ${new Date().toISOString().slice(0, 10)} · ${pages.length} sayfa · ${imgCount} gömülü görsel · ${assetFiles.size} ek`, '',
  'Yeniden üretmek için: sayfaları tarayıcıda döküp `node tools/import-dys.js <dys-pages.json>`.', ''];
function tree(parentCid, depth) {
  for (const p of pages.filter(x => (x.parent || null) === parentCid)) {
    L.push(`${'  '.repeat(depth)}- [${p.title.trim()}](${p.file.replace(/ /g, '%20')})`);
    tree(p.cid, depth + 1);
  }
}
tree(null, 0);
L.push('', '## Ekler', '', '| Dosya | Boyut |', '|-------|------:|');
for (const f of [...assetFiles].sort()) L.push(`| [${f}](ekler/${encodeURI(f)}) | ${(fs.statSync(path.join(ROOT, 'ekler', f)).size / 1024).toFixed(0)} KB |`);
L.push('', 'Arşiv dosyaları (`.rar`, `.zip`) açılmadan olduğu gibi saklanır. İçlerindeki kodu çalıştırmadan önce inceleyin.');
fs.writeFileSync(path.join(ROOT, 'README.md'), L.join('\n') + '\n');

console.log(`${pages.length} sayfa, ${imgCount} görsel → ${path.relative(process.cwd(), ROOT)}`);
if (missingAssets.size) console.log('İndirilmemiş ekler:', [...missingAssets].join(', '));
