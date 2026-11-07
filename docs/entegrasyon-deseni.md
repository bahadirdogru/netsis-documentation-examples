---
title: Okuma SQL, yazma REST
url: https://netsis.bahadirdogru.com/entegrasyon-deseni/
---

# Okuma SQL, yazma REST

[Genel bakış](/genel-bakis/#yazma-kurali) okuma için SQL'i, yazma için NetOpenX'i önerir. Bu sayfa o kuralı bir uygulamada nasıl kurduğumuzu anlatır: liste, detay ve analiz ekranları veritabanından **salt okunur** okur; kayıt oluşturma, değiştirme ve silme yalnızca **NetOpenX REST** üzerinden gider. Desen 2026-11'de bir test şirketinde (canlının yedekten kopyası) 19 okuma ekranı ve 20'den fazla yazma işlemiyle sınandı; sonuçlar [Canlı denemeler](/rest/canli-denemeler/) sayfasındadır.

## Katmanlar

```text
  Kullanıcı ekranı
      │ liste · süzgeç · sayfa · Excel · detay            │ form · toplu Excel
      ▼                                                    ▼
  Okuma kataloğu  ── SELECT ──▶  SQL Server          Yazma işlemleri ── HTTP ──▶ NetOpenX REST
  (varlık tanımı)   salt okunur    (şirket vt)        (doğrula → önizle → onayla → yaz)
      ▲                                                    │
      └──────────── süreç bağları (satırdan işleme) ───────┘
```

| Katman | Ne yapar | Netsis tarafı |
|--------|----------|---------------|
| Okuma | Her ekran bir **varlık**tır: SQL, kolonlar, anahtar, varsayılan sıralama, arama kolonları, detay bölümleri | `TBLCASABIT`, `TBLCAHAR`, `TBLSTSABIT`, `TBLSTHAR`, `TBLSTOKPH`, `TBLSIPAMAS`, `TBLFATUIRS`, `TBLKASA`, `TBLBNKHESTRA`, `TBLMCEK`…, `TBLDEKOMAS` |
| Yazma | Her işlem bir Excel şablonu ve tek kayıt formu alır, satırları doğrular, REST gövdesini kurar, onaydan sonra sırayla gönderir | `ItemSlips`, `ARPs`, `ARPTransactions`, `Items`, `SafeDeposits`, `CheckAndPNotesMain` |
| Süreç | Okuma satırından yazma formuna ön doldurulmuş geçiş | sipariş → irsaliye/fatura, cari → tahsilat/ödeme/cari hareket |

## Okuma tarafı

### Salt okunur kullanıcı

Okuma bağlantısı için SQL Server'da yalnızca `db_datareader` yetkili bir giriş açın. Uygulama, bağlantıyı kullanmadan önce yönetici olmadığını denetlesin:

```sql
SELECT IS_SRVROLEMEMBER('sysadmin');   -- 1 dönerse bağlantıyı reddet
```

Böylece bir yönetici bağlantısı yanlışlıkla okuma bağlantısı olarak seçilirse ekranlar açılmaz; `sa` ile çalışan bir ekran, bir gün birinin SQL ile yazmasına kapı açar.

### Üç parçalı ad

REST bağlantısı hangi şirkete yazıyorsa okuma da o şirketten yapılmalıdır. Sorgular tabloyu `[ŞİRKET].dbo.[TBLCASABIT]` biçiminde açar; şirket adı REST ayarındaki veritabanı adından gelir ve `^[A-Za-z0-9_]{1,64}$` desenine uymuyorsa sorgu çalışmaz. Okuma ve yazma hiçbir zaman farklı şirkete bakmaz.

### Parametre ve sayfalama

- Süzgeç değerleri her zaman parametredir; kolon adları varlık tanımındaki izin listesinden seçilir.
- `WITH (NOLOCK)` raporlarda kirli okuma riskini bilerek kullanılır.
- Netsis kurulumları eski SQL Server sürümlerinde çalışabilir (2008 R2 görülür). `OFFSET … FETCH` ve `SUM() OVER (ORDER BY …)` yoktur; sayfalama `ROW_NUMBER()` ile, yürüyen bakiye ilişkili alt sorguyla yazılır. Örnekler: [SQL örnekleri](/veritabani/sql-ornekleri/#sayfalama-ve-eski-surumler).
- `SUBE_KODU` ve `ISLETME_KODU` süzgeci koymayın; veride `-1` ve `0` karışık görülür.
- Hareket listeleri (`TBLCAHAR`, `TBLSTHAR`, `TBLBNKHESTRA`) ana anahtar süzgeci olmadan açılmaz; yoksa milyonlarca satır sayılır.

### Anahtarlar

Detay sayfasına gidebilmek için her varlığın tekil anahtarı bilinmeli. Netsis'te bunlar her zaman tek kolon değildir:

| Varlık | Anahtar | Not |
|--------|---------|-----|
| Cari kartı | `CARI_KOD` | |
| Cari hareket | `CARI_KOD` + `INC_KEY_NUMBER` | REST'in `Inc_Key_Number` değeriyle aynı |
| Stok hareketi | `STOK_KODU` + `FISNO` + `INCKEYNO` | tekillik canlıda sınanmadı |
| Sipariş, irsaliye, fatura | `FTIRSIP` + `FATIRS_NO` + `CARI_KODU` | [Belge tipi alanı](/genel-bakis/#belge-tipi-alani-ftirsip) |
| Kasa hareketi | `SIRA` | REST `SafeDeposits/{id}` de bunu ister; `FISNO` kimlik değildir |
| Banka hareketi | `NETHESKODU` + `INCKEYNO` | |
| Çek / senet | tablo (`TBLMCEK`…) + `SC_NO` | dört tablo birleştirilirken tür sütunu eklenir |
| Dekont | `SERI_NO` + `DEKONT_NO` | `INCKEYNO` başlık ve satır tablolarında ayrı sayaçtır, bağ değildir |

Ayrıntı: [Finans tabloları](/veritabani/finans-tablolari/).

## Yazma tarafı

### Akış

1. **Doğrula.** Cari, stok, depo, kasa, plasiyer gibi referanslar okuma bağlantısından çekilir; satırdaki kod yoksa belge geçersiz işaretlenir. Netsis'in zorunlu tuttuğu ama belgelenmemiş alanlar burada yakalanır: plasiyersiz carinin kasa ve çek kaydı yazılamaz (`Hata 203 Plasiyer Kodu boş geçilemez`).
2. **Önizle.** Kurulan REST gövdesi ve hesaplanan toplamlar kullanıcıya gösterilir; `ItemSlips/Calculate` kayıt yapmadan Netsis'in toplamını verir.
3. **Onayla.** Geri alınamayan işlemler (çek bordrosu) ayrı uyarıyla onay ister.
4. **Yaz.** Belgeler **sırayla** gönderilir, aynı anda değil ([servis kesintisi](/rest/canli-denemeler/#servis-kesintisi)). Her belgenin sonucu (`FATIRS_NO`, `Inc_Key_Number`, `Sira`) saklanır.
5. **Doğrula.** Kayıt sonrası kontrol tablodan yapılır; REST yanıtındaki bazı bayraklar gönderileni yansıtmaz ([Yanıt alanları](/rest/canli-denemeler/#yanit-alanlari)).

### Netsis'in verdiği kimlikleri saklayın

Silme ve güncelleme, uygulamanın ürettiği değil Netsis'in verdiği kimlikle yapılır:

| Kaynak | Yanıttaki kimlik | Silme |
|--------|------------------|-------|
| `ItemSlips` | `Data.FatUst.FATIRS_NO` | `DELETE ItemSlips/{FaturaTip;FATIRS_NO;CARI_KOD}` |
| `ARPTransactions` | `Inc_Key_Number` (`SonKayitNoAl: true` ile) | `DELETE ARPTransactions/{Inc_Key_Number}` |
| `SafeDeposits` | `Sira` | `DELETE SafeDeposits/{Sira}`; kasa kaydıyla birlikte ürettiği cari hareketi de siler |
| `CheckAndPNotesMain` | yanıttaki `SC_NO` ve bordro no (gövdedekiler yok sayılır) | REST ile silinemedi; Netsis içinden |

### Yan etkileri bilin

Bir REST çağrısı tek tabloya yazmaz. Kasa tahsilatı `TBLKASA` satırının yanında `TBLCAHAR`'a cari hareket (`HAREKET_TURU = 'D'`) ve muhasebe fişi yazar; müşteri çeki `TBLMCEK` yanında `TBLCAHAR`'a `HAREKET_TURU = 'G'` hareket yazar. Okuma ekranları bu satırları göstereceği için kullanıcı "ben cari hareket girmedim" diyebilir; ekranlarda hareket türünü gösterin. Ayrıntı: [Finans tabloları](/veritabani/finans-tablolari/#kasa-ve-cek-kaydinin-yan-etkileri).

### Kısmi güncelleme

`PUT ARPs/{kod}` ve `PUT Items/{kod}` yalnızca gönderilen alanları değiştirir, diğerleri korunur (canlı deneme). Güncelleme formu bu yüzden yalnız dolu alanları gönderebilir.

## Süreç bağları

Okuma satırından yazma formuna geçerken formun alanları satırdan doldurulur, kullanıcı tamamlar ve aynı önizle → onayla → yaz akışına girer:

| Satır | İşlem | Ön doldurma |
|-------|-------|-------------|
| Sipariş | İrsaliye / fatura (`SiparisToIrsFat`) | `DocumentNumber`, `CustomerCode`; sipariş onaylı değilse Netsis reddeder |
| Cari kartı | Kasa tahsilat / ödeme (`SafeDeposits`) | cari kodu, plasiyer |
| Cari kartı | Cari hareket (`ARPTransactions`) | cari kodu |
| Cari kartı | Düzenle (`PUT ARPs`) | kartın tüm alanları |

## Test şirketi kuralları

- Yazma denemeleri yalnızca test şirketine; uygulamada izinli veritabanı adlarını bir listeyle kısıtlayın.
- E-belge gönderen uçları ve `EPostaGonderilsin: true` değerini test şirketinde de çağırmayın; kopya gerçek ayarları taşır.
- Her deneme kaydını silin, silinemeyenleri (çek bordrosu) not edin.
- Yönetici SQL kullanıcısı yalnızca geliştirme sırasında şema okumak için gerekir; iş bitince kaldırın.
