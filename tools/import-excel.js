// Netsis veritabanı şeması Excel'ini (TEMELSET şema dokümanı) data/schema.json'a çevirir.
// Kullanım: node tools/import-excel.js <dosya.xlsm> [data/schema.json]
//
// Excel yapısı: her modül bir sayfa. Sayfada tablolar art arda bloklar hâlinde durur:
//   TABLE NAME | | <TABLO>
//   AÇIKLAMA   | (<açıklama>)
//   COLUMN_NAME | DEFINITION | TYPE | COMPUTED | LENGTH | PREC | SCALE | NULLABLE
//   ... kolonlar ...
//   KEYS / CONSTRAİNTS (DEFAULT) / INDEXES / IDENTITY bölümleri
// "TABLO AÇIKLAMALARI" ve "ORTAK KOLON AÇIKLAMALARI" sayfaları ayrıca okunur.
// "Sheet2" bir canlı veritabanındaki tüm nesnelerin listesidir.

const fs = require('fs');
const path = require('path');
const X = require('xlsx');

const src = process.argv[2];
const out = process.argv[3] || path.join(__dirname, '..', 'data', 'schema.json');
if (!src) {
  console.error('Kullanım: node tools/import-excel.js <dosya.xlsm> [çıktı.json]');
  process.exit(1);
}

const wb = X.readFile(src);
const t = v => String(v ?? '').replace(/\s+/g, ' ').trim();
const num = x => (x === '' || x === 'NULL') ? null : (isNaN(+x) ? x : +x);
const META_SHEETS = ['TABLO AÇIKLAMALARI', 'ORTAK KOLON AÇIKLAMALARI', 'Sheet1', 'Sheet2', 'Sheet3', 'Sheet4'];
const KEY_RE = /^(PRIMARY KEY|FOREIGN KEY|UNIQUE)/;
const warnings = [];

const tables = [];
for (const sheet of wb.SheetNames) {
  if (META_SHEETS.includes(sheet)) continue;
  const rows = X.utils.sheet_to_json(wb.Sheets[sheet], { header: 1, defval: '' });
  let cur = null, sec = null, sub = null;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i].map(t);
    const a = r[0], au = a.toUpperCase();
    const at = `${sheet}!${i + 1}`;

    // Bir blokta "TABLE NAME" etiketi yerine sayı yazılmış (CARİ sayfası, TBLNAKITAKIS_GELIRGIDERTIP).
    const brokenHeader = !r[1] && /^TBL[A-Z0-9_]+$/.test(r[2]) && (/^\d*$/.test(a)) && !r[3];
    if (au === 'TABLE NAME' || brokenHeader) {
      cur = { name: r[2] || r[1], module: sheet, description: '', columns: [], keys: [], defaults: [], indexes: [], identity: null, source: at };
      tables.push(cur);
      sec = 'head';
      continue;
    }
    if (!cur) continue;
    if (au === 'AÇIKLAMA') { cur.description = (r[1] || '').replace(/^\(|\)$/g, '').trim(); continue; }
    if (au === 'COLUMN_NAME') { sec = 'cols'; continue; }
    if (au === 'KEYS') { sec = 'keys'; continue; }
    if (au === 'CONSTRAİNTS' || au === 'CONSTRAINTS') { sec = 'cons'; sub = r[1] || null; continue; }
    if (au === 'INDEXES') { sec = 'idx'; continue; }
    if (au === 'INDEX' && r[1] === 'COLUMN_NAME') continue;
    if (au === 'IDENTITY' && r[1] === 'SEED') { sec = 'ident'; continue; }
    if (!r.some(Boolean)) continue;

    // Bazı tablolarda COLUMN_NAME başlığı eksik; tip sütunu doluysa kolon kabul et.
    if (sec === 'head' && r[2]) sec = 'cols';

    if (sec === 'cols') {
      // Başlıksız KEYS / INDEXES / DEFAULT satırları kolon bölümüne karışmış olabilir.
      if (KEY_RE.test(a)) { cur.keys.push({ type: a.replace(/ \(clustered\)$/, ''), name: r[1], columns: r[2] }); continue; }
      if (/clustered/i.test(r[2])) { cur.indexes.push({ name: a, columns: r[1], definition: r[2] }); continue; }
      if (!r[2]) { cur.defaults.push({ column: a, value: r[1] }); continue; }
      if (!a || /^\d+$/.test(a) || r[2] === 'TYPE') { warnings.push(`atlandı ${at} ${JSON.stringify(r.slice(0, 4))}`); continue; }
      cur.columns.push({
        name: a,
        description: r[1],
        type: r[2].replace(/\+C\d+$/, ''),
        computed: r[3] === 'yes',
        length: num(r[4]),
        precision: num(r[5]),
        scale: num(r[6]),
        nullable: r[7] === 'yes',
      });
    } else if (sec === 'keys') {
      if (/^No key/i.test(a)) continue;
      cur.keys.push({ type: a.replace(/ \(clustered\)$/, ''), name: r[1], columns: r[2] });
    } else if (sec === 'cons') {
      if (sub && sub.toUpperCase() === 'DEFAULT') cur.defaults.push({ column: a, value: r[1] });
    } else if (sec === 'idx') {
      cur.indexes.push({ name: a, columns: r[1], definition: r[2] });
    } else if (sec === 'ident') {
      if (!/^No identity/i.test(a)) cur.identity = { column: a, seed: num(r[1]), increment: num(r[2]), notForReplication: r[3] === '1' };
    } else {
      warnings.push(`bölüm dışı satır ${at} ${JSON.stringify(r.slice(0, 4))}`);
    }
  }
}

// Kaynaktaki bilinen yazım hataları: [tablo, Excel'deki ad, doğru ad]
const RENAMES = [
  ['TBLFATUIRS', 'TBLTEKLIFMAS', 'FTIRSIP'], // açıklaması FTIRSIP'e ait (1 satış fat., 2 alış fat., ...)
];
for (const [tn, from, to] of RENAMES) {
  const c = tables.find(x => x.name === tn)?.columns.find(x => x.name === from);
  if (c) { c.name = to; warnings.push(`${tn}.${from} → ${to} olarak düzeltildi`); }
}

for (const tb of tables) {
  // "OZEL_MATRAH_DAHIL_ OLMAYAN" gibi araya boşluk girmiş adlar; birden çok boşluklu "ad" ise açıklama metnidir.
  tb.columns = tb.columns.filter(c => {
    if (/\s\S+\s/.test(c.name)) { warnings.push(`${tb.name}: kolon adı değil, atlandı: ${c.name}`); return false; }
    c.name = c.name.replace(/\s+/g, '');
    return true;
  });
  // Aynı adla iki kez yazılmış kolonlar (SQL'de olanaksız): ilkini tut.
  const seen = new Set();
  tb.columns = tb.columns.filter(c => {
    if (seen.has(c.name)) { warnings.push(`${tb.name}: tekrar eden kolon atlandı: ${c.name}`); return false; }
    seen.add(c.name);
    return true;
  });
}

// Excel'de bazı DEFAULT listeleri başka tablodan kopyalanmış; yalnızca tabloda olan kolonları tut.
for (const tb of tables) {
  const cols = new Set(tb.columns.map(c => c.name));
  const before = tb.defaults.length;
  tb.defaults = tb.defaults.map(d => ({ column: d.column.trim(), value: String(d.value) })).filter(d => cols.has(d.column));
  if (tb.defaults.length !== before) warnings.push(`${tb.name}: ${before - tb.defaults.length} varsayılan değer kolonla eşleşmedi, atıldı`);
}

const rowsOf = name => X.utils.sheet_to_json(wb.Sheets[name], { header: 1, defval: '' }).slice(1).map(r => r.map(t));
const tableList = rowsOf('TABLO AÇIKLAMALARI').filter(r => r[0]).map(r => ({ name: r[0], module: r[1], description: r[2] }));
const commonColumns = rowsOf('ORTAK KOLON AÇIKLAMALARI').filter(r => r[0]).map(r => ({ name: r[0], description: r[1] }));
// Sheet2 gerçek bir şirket veritabanından alınmış; o kuruluma özel yedek/geçici/test nesnelerini yayına koyma.
const LOCAL_OBJECT = /^(TEMP|TEST|AA_|YEDEK|YDK|sysdiagrams)/i;
const dbObjects = wb.Sheets.Sheet2 ? rowsOf('Sheet2').map(r => r[1]).filter(n => n && !LOCAL_OBJECT.test(n)) : [];

const schema = {
  source: path.basename(src),
  generated: new Date().toISOString().slice(0, 10),
  tables,
  tableList,
  commonColumns,
  dbObjects,
};
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(schema, null, 1));

console.log(`${tables.length} tablo, ${tables.reduce((s, x) => s + x.columns.length, 0)} kolon → ${out}`);
if (warnings.length) console.log(`${warnings.length} uyarı:\n  ` + warnings.join('\n  '));
