---
title: Genel bakış
url: https://netsis.bahadirdogru.com/genel-bakis/
---

# Genel bakış

Netsis, Logo Yazılım'ın orta ve büyük işletmelere yönelik ERP ürünüdür. Masaüstü uygulama Delphi ile yazılmıştır, veriyi **Microsoft SQL Server** (eski kurulumlarda Oracle da desteklenir) üzerinde tutar. Ürün adları sürüme göre değişir: Netsis Enterprise, Netsis Standard, Netsis 3. Bu sitedeki bilgiler **8.x ve 9.0.x** serisine dayanır.

## Temel kavramlar

| Kavram | Netsis'teki karşılığı | Veritabanında |
|--------|----------------------|---------------|
| **Şirket** | Muhasebe bütünlüğü olan firma. Her şirket ayrı bir SQL Server veritabanıdır. | Veritabanı adı = şirket kodu (ör. `ACME2024`). |
| **Şirket listesi** | Sunucudaki tüm şirketler ve yılları | `NETSIS` adlı ana veritabanında `SIRKETLER30` tablosu |
| **Şube** | Şirket içinde ayrı kayıt tutan birim | Hemen her tabloda `SUBE_KODU` (çoğunlukla `0`) |
| **İşletme** | Şubelerin üstünde, ayrı raporlanan birim | `ISLETME_KODU` (çoğunlukla `1`). Aktif olan: `TBLISLETMELER.AKTIF = 'E'` |
| **TEMELSET** | Netsis'in kurulum klasörü ve varsayılan veritabanı kullanıcısı | NetOpenX bağlantısında DB kullanıcısı olarak geçer |
| **Netsis kullanıcısı** | Programa giriş yapan kullanıcı (ör. `NETSIS`) | Kayıtlarda `KAYITYAPANKUL`, `DUZELTMEYAPANKUL` |
| **Modül** | Cari, Stok, Fatura, Muhasebe, Banka, Üretim… | Tablo adları modüle göre gruplanır |

Ortak kolonların tam listesi: [Ortak kolonlar](/veritabani/ortak-kolonlar/).

### Tablo adlandırma

- Kalıcı tablolar `TBL` önekiyle başlar: `TBLCASABIT` (cari sabit), `TBLSTHAR` (stok hareket).
- Son ekler anlam taşır: `SABIT` kart/ana kayıt, `HAR` hareket, `MAS` belge başlığı (master), `TRA` belge satırı (transaction), `PRM` parametre, `EK` ek bilgi, `LOG` iz kaydı.
- Örnek çiftler: `TBLSIPAMAS` (sipariş başlığı) / `TBLSIPATRA` (sipariş kalemi); `TBLFATUIRS` (fatura/irsaliye başlığı) / `TBLSTHAR` (fatura/irsaliye kalemleri stok hareketi olarak).
- `MG`, `WOR_`, `WM_` önekli tablolar ek ürünlere (mağaza, saha satış, depo yönetimi) aittir.

### Belge tipi alanı: FTIRSIP

Fatura, irsaliye, sipariş ve depo fişleri aynı tablolarda tutulur. Hangisi olduğunu `FTIRSIP` kolonu söyler (`TBLFATUIRS.FTIRSIP`, `TBLSTHAR.STHAR_FTIRSIP`, `TBLSIPAMAS.FTIRSIP`):

| Değer | Belge |
|-------|-------|
| `1` | Satış faturası |
| `2` | Alış faturası |
| `3` | Satış irsaliyesi |
| `4` | Alış irsaliyesi |
| `6` | Müşteri siparişi (satış) |
| `7` | Satıcı siparişi (alış) |
| `8` | Depolar arası transfer çıkışı, lokal depo ve ambar çıkış fişi |
| `9` | Ambar giriş fişi, şubeler arası transfer girişi |
| `A` / `B` | Faturalanmış (saklanmış) irsaliye, satış / alış |
| `E` / `F` | Parçalı irsaliye, satış / alış |
| `Z` | Birleştirilip tek proformaya bağlanmış irsaliye kayıtları |

Belge numarası `FATIRS_NO` tek başına benzersiz değildir. Bir belgeyi tanımlamak için **`FTIRSIP` + `FATIRS_NO` + `CARI_KODU`** (ve şube) birlikte kullanılır. NetOpenX'te `OkuUst(belgeNo, cariKod)` da bu yüzden iki parametre ister.

## Entegrasyon yolları

```text
                ┌──────────────────────────────┐
  Rapor / BI ──▶│ SQL Server (şirket veritabanı)│◀── yalnızca SELECT
                └──────────────▲───────────────┘
                               │ iş kuralları, numara, bakiye, entegrasyon
                ┌──────────────┴───────────────┐
  .NET / VB ──▶ │  NetOpenX50.dll (COM)         │
                └──────────────▲───────────────┘
                               │
                ┌──────────────┴───────────────┐
  Her dil  ───▶ │  NetOpenX REST (api/v2, HTTP) │
                └──────────────────────────────┘
```

| Yol | Ne zaman | Artı | Eksi |
|-----|----------|------|------|
| [SQL](/veritabani/) | Okuma, raporlama | Hızlı, esnek, ek lisans yok | Yazma iş kurallarını atlar |
| [NetOpenX COM](/netopenx/) | Netsis'in kurulu olduğu Windows makinesinden yazma | Tüm nesneler, olgun, hızlı | Yalnızca Windows ve COM; 32/64 bit uyumu; NetOpenX lisansı |
| [NetOpenX REST](/rest/) | Uzak sistemden, herhangi bir dilden yazma | HTTP/JSON, dil bağımsız | Ayrı servis kurulumu; bazı uçlar az belgelenmiş; NetOpenX lisansı |

### Yazma kuralı

Netsis'te bir satış faturası kaydedildiğinde program en az şunları yapar: belge numarasını ilerletir, `TBLFATUIRS` başlığını ve `TBLSTHAR` stok hareketlerini yazar, `TBLCAHAR` cari hareketini oluşturur, bakiye ve risk alanlarını günceller, muhasebe entegrasyonu için `TBLMUHAGEC` kaydı atar, e-fatura/e-arşiv işaretlerini ayarlar. Bunları SQL ile elle taklit etmek veri bozulmasına yol açar.

- **Okuma:** SQL serbest. Kilitlenmeyi önlemek için raporlarda `WITH (NOLOCK)` yaygındır (kirli okuma riskini bilerek).
- **Yazma:** NetOpenX COM veya REST. İstisna olarak, Netsis'in kendi ekranının da yalnızca tek bir alanı değiştirdiği bilinen durumlarda (ör. sipariş onay durumu `TBLSIPAMAS.TIPI`) dikkatli `UPDATE` kullanılabilir; bu bile risklidir ve [örnekleri](/veritabani/sql-ornekleri/#dikkatli-guncellemeler) ayrı işaretlenmiştir.

## Türkçe karakterler

Netsis bazı kurulumlarda metin alanlarını kendi kod sayfası dönüşümüyle saklar. SQL'den okunan isimlerde Türkçe harfler bozuk görünüyorsa şirket veritabanındaki `dbo.TRK()` fonksiyonu kullanılır:

```sql
SELECT CARI_KOD, dbo.TRK(CARI_ISIM) AS CARI_ISIM
FROM TBLCASABIT WITH (NOLOCK);
```

`TRK` her kurulumda olmayabilir; yoksa veritabanı harmanlamasını (collation, genellikle `Turkish_CI_AS`) kontrol edin.

## Sürümler

- NetOpenX REST, **Netsis 8.06 ve üzeri** gerektirir.
- 9.0.x sürümleri yılda 6–8 kez çıkar (ör. `9.0.45-2023.R1` … `9.0.53-2024.R1`). Yeni REST uçları ve NetOpenX özellikleri bu sürümlerle gelir (ör. işlem tipi desteği 9.0.40 ile).
- Kurulu NetOpenX sürümü: REST'te `GET api/v2/public/Version`.
