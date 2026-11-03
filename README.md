# Netsis Dokümantasyonu

Logo **Netsis** ERP için insanlar ve LLM'ler için başvuru dokümantasyonu: veritabanı şeması, NetOpenX COM ve NetOpenX REST.

**Site:** https://netsis.bahadirdogru.com · **LLM giriş noktası:** https://netsis.bahadirdogru.com/llms.txt

## Yapı

```text
content/            El yazımı sayfalar (Markdown, front matter: title, description)
  _nav.json         Kenar çubuğu sırası
data/schema.json    Veritabanı şeması (Excel'den üretilir, elle düzenlemeyin)
tools/
  import-excel.js   TEMELSET şema Excel'i → data/schema.json
  import-dys.js     Logo DYS sayfa dökümü → kaynak/logo-dys/
  import-indirme.js Logo indirme sunucusu listesi → content/surumler/, content/logo-araclari/e-belge-kodlari.md
  build.js          content/ + data/ → docs/
  serve.js          docs/ klasörünü yerelde sunar
  assets/           CSS ve JS
docs/               ÜRETİLEN site (GitHub Pages buradan yayınlar). Elle düzenlemeyin.
kaynak/README.md    Kaynak notları: sitedeki her bölümün hangi kaynaktan alındığı (yayınlanmaz).
kaynak/logo-dys/    Logo DYS "Netsis Uyarlama Araçları" sayfalarının Markdown kopyası ve ekleri (PDF, örnek projeler).
                    Sitede yayınlanmaz; içerik Logo Yazılım'a aittir.
kaynak/logo-indirme/ download.logo.com.tr NETSISERP ve TOOLS klasörlerinin listeleri (files.json, agac.tsv, tools-agac.tsv) ve TOOLS'tan küçük belgeler (tools/).
```

Her sayfa iki biçimde üretilir: `/<yol>/index.html` ve `/<yol>.md`. Ayrıca `llms.txt`, `llms-full.txt`, `veritabani/sema.txt`, `data/schema.json`, `search-index.json`, `sitemap.xml` üretilir.

## Geliştirme

```bash
npm install
npm run build        # docs/ klasörünü yeniden üretir
npm run serve        # http://localhost:4000
```

Şema Excel'i güncellendiğinde:

```bash
node tools/import-excel.js "C:\yol\TEMELSET.xlsm"
npm run build
```

İçe aktarım sırasında kaynaktaki bilinen hatalar düzeltilir (yanlış kolon adı, kırık tablo başlığı, tekrar eden kolon, başka tablodan kopyalanmış varsayılanlar). Düzeltmeler `tools/import-excel.js` içindedir ve çalıştırınca uyarı olarak listelenir.

**`content/` ya da `data/` değiştiğinde `npm run build` çalıştırıp `docs/` ile birlikte commit edin.**

## Yayın (GitHub Pages)

1. Depo **Settings → Pages → Build and deployment**: *Deploy from a branch*, dal `main`, klasör `/docs`.
2. *Custom domain*: `netsis.bahadirdogru.com` (`docs/CNAME` her derlemede yazılır). *Enforce HTTPS* açık.
3. DNS: `netsis` için `CNAME` kaydı → `<github-kullanıcı-adı>.github.io`.

## Katkı

- Yeni sayfa: `content/` altına `.md` ekleyin ve `content/_nav.json`'a yolunu yazın.
- İç bağlantılar kök göreli yazılır: `[Uçlar](/rest/uclar/)`.
- Metinde `` `TBLXXX` `` biçiminde geçen tablo adları otomatik olarak tablo sayfasına bağlanır.
- Doğrulanmamış bilgiyi "doğrulanmadı" diye işaretleyin. Gerçek şirket verisi, sunucu adresi ya da kimlik bilgisi eklemeyin.

## Lisans

MIT. Netsis, NetOpenX ve Logo, Logo Yazılım'ın ticari markalarıdır; bu proje Logo ile bağlantılı değildir.
