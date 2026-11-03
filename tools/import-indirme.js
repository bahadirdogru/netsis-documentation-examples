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
const today = new Date().toISOString().slice(0, 10);

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

console.log(`${versions.length} sürüm, ${hr.length} HR seti, ${openDirs.length} açık klasör → content/surumler/`);
