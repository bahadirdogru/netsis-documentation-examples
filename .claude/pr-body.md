## Ne değişti

`netsis.bahadirdogru.com` üzerinde yayınlanacak Netsis dokümantasyon sitesi. Site hem insanlar hem LLM'ler için hazırlandı.

- **`docs/`**: GitHub Pages için üretilmiş statik site (779 sayfa). `CNAME`, `.nojekyll`, `sitemap.xml`, `404.html` dahil.
- **Veritabanı**: 714 tablonun her biri ayrı sayfada (kolonlar, tipler, varsayılanlar, anahtarlar, indeksler). Ayrıca 32 modül sayfası ve şu el yazımı sayfalar: temel tablolar ve ilişkiler, SQL örnekleri, ortak kolonlar, veri tipleri.
- **NetOpenX (COM)**: kurulum, bağlantı, fatura/irsaliye, belge dönüşümleri, depo/ambar fişleri, cari/stok, e-belge, NetRS/transaction, enum'lar, hatalar. Bunlara ek olarak 40'tan fazla `kernel.yeni…` nesnesini listeleyen bir nesne kataloğu.
- **NetOpenX REST**: kurulum, token, sorgu parametreleri, uç kataloğu, istemci kütüphanesi, JSON gövdeleri, kimlik biçimleri, transaction, güvenlik, bilinen sorunlar.
- **LLM'ler için**: `llms.txt`, `llms-full.txt`, `veritabani/sema.txt`, `data/schema.json`, ayrıca her sayfanın `.md` kopyası.
- **`tools/`**: şema içe aktarımı (`import-excel.js`), Logo DYS içe aktarımı (`import-dys.js`), site derleyicisi (`build.js`), yerel sunucu (`serve.js`).
- **`kaynak/logo-dys/`**: Logo DYS'deki Netsis Uyarlama Araçları sayfalarının Markdown kopyası (76 sayfa) ve ekleri (PDF'ler, örnek projeler, NDI XML'leri). Sitede yayınlanmıyor.

## Neden

Netsis entegrasyonu için dağınık duran bilgiyi (şema, NetOpenX COM, REST) tek bir başvuru noktasında toplamak. Örnekler gerçek proje kodundan (NetsisQuick) ve Logo'nun resmî örneklerinden alındı.

## İnceleyenin bilmesi gerekenler

- `docs/` derleme çıktısıdır; elle düzenlenmemeli. İçerik `content/` altında, yeniden üretmek için `npm run build`.
- Yayın için depo ayarlarında **Pages → Deploy from branch → `main` / `/docs`** seçilmeli. DNS'te de `netsis` için `CNAME` kaydı açılmalı.
- `kaynak/logo-dys/` Logo Yazılım'a ait içeriğin kopyası. Repo herkese açıksa bu içerik de açık olur.
- `data/schema.json` ve `tools/import-excel.js` kaynak Excel'e atıf içeriyor. Yayınlanan sitedeki atıflar kaldırıldı.
- Canlı sistemde doğrulanmamış bilgiler sayfalarda "doğrulanmadı" diye işaretli.
- Yerelde kırık iç bağlantı denetimi yapıldı (0 kırık). Masaüstü, mobil ve koyu temada görünüm kontrol edildi.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
