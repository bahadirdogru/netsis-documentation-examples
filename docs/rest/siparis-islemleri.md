---
title: Sipariş hesaplama ve değiştirme
url: https://netsis.bahadirdogru.com/rest/siparis-islemleri/
---

# Sipariş hesaplama ve değiştirme

Bu sayfa `ItemSlips` ile satış (`FaturaTip` 7, `ftSSip`) ve alış (`FaturaTip` 6, `ftASip`) siparişi yazarken gözlenenleri toplar. Bulgular tek bir test şirketinde, Netsis çekirdeği 9.0.72.5 ve NetOpenX REST v2 ile yapılan canlı denemelerden gelir; başka sürümde ya da başka şirket parametreleriyle davranış değişebilir. Genel deneme notları: [Canlı denemeler](/rest/canli-denemeler/). Fiyat koşulunun veritabanı tarafı: [Fiyat koşulları](/veritabani/fiyat-kosullari/). Risk hesabı: [Cari risk](/veritabani/cari-risk/).

## Calculate

`POST api/v2/ItemSlips/Calculate` belgeyi kaydetmeden fiyatlar.

- **Net fiyat yanıtta 0 gelir.** Satırdaki `STra_NF` ve `STra_KDV` 0 döndü. Net birim fiyatı brüt fiyattan ve kademeli iskontolardan kendiniz hesaplayın: `net = STra_BF × Π (1 − iskonto / 100)`, iskontolar `STra_SatIsk`, `STra_SatIsk2` … `STra_SatIsk6`. (Önceki turda net fiyatın `YedekKalems` içinde geldiği not edilmişti; bu turda `Kalems` içindeki değerler 0 idi. Yanıtınızda hangisinin dolu olduğunu kendi sürümünüzde kontrol edin.)
- **`KosulluHesapla: true`.** Netsis fiyatı ve iskontoları carinin fiyat koşulundan doldurur; satır fiyatsız gönderilse bile `STra_BF`, `STra_SatIsk`, `Stra_KosulK` ve `STra_ODEGUN` (koşulun vade günü) döner. Yazılan `STra_SatIsk` koşuldakiyle **ezilir**; yazılan `STra_SatIsk2` ve `STra_SatIsk3` 0 olarak döner.
- **`KosulluHesapla: false`.** Yazılan iskontolar olduğu gibi kalır. `Stra_KosulK` ve `FatUst.KOSULKODU` yine de saklanır; `STra_ODEGUN` 0 döner, gerekiyorsa kendiniz verin.
- **Koşul seçimi.** `FatUst.KOSULKODU` carinin koşulunu o belge için geçersiz kılar. Her satır kendi koşulunu `Stra_KosulK` ile alabilir (`tra` küçük harfle). İkisi de yanıtta geri yansır.
- `DEPO_KODU` satırda olmadan ve `DEPO_KODU: 0` ile de çalışır.
- `FatUst.FATIRS_NO` göndermeyin.
- **Risk kontrolü yapmaz.** `Calculate`'ten geçen belge `POST ItemSlips` sırasında risk nedeniyle reddedilebilir.
- **Cari kilidi.** Aynı cari için iki `Calculate` üst üste binerse ikincisi şunu döndürdü: `Hata Kodu : 700 … Kodlu cari kilitli. Kilitli cari`. Gözlenen durumda kilit çağrılardan yaklaşık 20 saniye uzun yaşadı. Hesaplamaları cari başına sıraya alın.

Koşulu kendiniz çözmeye çalışmayın; `Calculate`'e sorun. Tablo yapısı bilgi içindir: [Fiyat koşulları](/veritabani/fiyat-kosullari/).

### Fiyatlama anahtarları

`KosulluHesapla`, `FiyatSistemineGoreHesapla` ve `StokKartinaGoreHesapla` açıkken Netsis, kaydedilen her siparişin satırlarını yeniden fiyatlar. Fiyatları tam olarak verildiği gibi yazmak için üçünü de `false` gönderin ve her satırı açıkça doldurun.

## Risk reddi

`RiskKontrol: true` iken carinin riskini aşan sipariş `POST ItemSlips` sırasında şu hatayla reddedildi (kod 700):

```text
Kayıt Yeni işleminde hata oluştu. Hata detayı: … (Acik)Dikkat ! MÜŞTERİ RİSKLİ Belge tutarı … Risk değeri …
Toplam Riski … (Info)… (Ikaz)Dikkat ! MÜŞTERİ RİSKLİ …
```

Metin `(Info)` cümleleri ve `<ErrorHeader>` blokları taşır; kullanıcıya göstermek için okunur bir ileti ayıklamak gerekir. Aynı değerleri SQL ile önceden hesaplamak için: [Cari risk](/veritabani/cari-risk/).

## Onay

Gövdedeki `TIPI` ve `OnayTipi` siparişi onaylamaz. REST ile yazılan sipariş `TBLSIPAMAS.TIPI = 3` (onaysız) kalırken yanıt 2 gösterir. Onay ucu yoktur; son çare olarak SQL kullanılır ve yalnızca onaysız kaydı hedefler:

```sql
UPDATE TBLSIPAMAS SET TIPI = 2
WHERE FTIRSIP = '6' AND FATIRS_NO = @SiparisNo AND CARI_KODU = @CariKod AND TIPI = 3;
-- etkilenen satır sayısı 1 değilse işlemi geri al
```

Ayrıntı: [Dikkatli güncellemeler](/veritabani/sql-ornekleri/#dikkatli-guncellemeler).

## Mevcut siparişi değiştirme

`ItemSlips` için `PUT` yoktur.

| Yol | Sonuç |
|-----|-------|
| Aynı numarayla yeniden `POST` | `Hata 402 … Nolu Evrak Daha önceden kaydedilmiş` |
| `POST ItemSlips/ChangeNumber` | Var, ama sipariş başlığına `UPDATE` çalıştırır. `TBLSIPAMAS` üzerinde şirkete özel tetikleyici hata verirse çağrı da `700` ile ve tetikleyicinin SQL hata metniyle düşer |
| `POST ItemSlips/ChangeCode` | Aynı: başlıkta `UPDATE`, aynı tetikleyici engeli |
| `POST ItemSlips/OrderRevision` | Düzenlemez: kaynağın bütün kalemleriyle **yeni** bir sipariş oluşturur, kaynağı kapatır (ayrıntı aşağıda) |
| Sil, sonra tam gövdeyle yeniden `POST` | Çalıştı |

Gövdeler:

```json
// ChangeNumber
{ "DocumentType": "ftSSip", "CustomerCode": "CARI001", "DocumentNumber": "000000000000001",
  "NewDocumentNumber": "000000000000002", "NewCustomerCode": "CARI001", "NotChangeDeliveryCode": false }

// ChangeCode
{ "DocumentType": "ftSSip", "CustomerCode": "CARI001", "DocumentNumber": "000000000000001",
  "NewCustomerCode": "CARI002", "DependentCustomerCode": "", "ChangeDependentCustomerCode": false,
  "NotChangeDeliveryCode": false, "ChangeAdditionalField": false }

// OrderRevision
{ "ItemSlip": { "FatUst": { "FATIRS_NO": "000000000000002", "CariKod": "CARI001", "Tarih": "2026-01-01", "TIPI": 2 },
                "Kalems": [ { "StokKodu": "STK001", "DEPO_KODU": 1, "STra_GCMIK": 1, "STra_BF": 100, "STra_KDV": 20 } ] },
  "RevisionOrderNumber": "000000000000001", "DeliverStartingDate": "2026-01-01" }
```

### Sipariş revizyonu (`OrderRevision`)

Canlı denemede (9.0.72.5, test şirketi) gözlenenler:

- **Kalemsiz gövde reddedilir.** `ItemSlip` içinde en az bir kalem olmalı; yoksa `Hata Kodu : 204 … Sipariş Revizyon için nesne içinde kalem bilgisi bulunamadı`.
- **Yeni sipariş oluşur.** Yeni siparişin numarası gövdedeki `FatUst.FATIRS_NO` değeridir. Yeni sipariş, kaynak siparişin **bütün kalemlerini** ve gövdedeki kalemleri birlikte taşır. Gövdedeki bir stok kaynakta zaten varsa, o stok ikinci bir satır olarak eklenir; mevcut satırın yerini almaz ve birleştirilmez.
- **Kaynak numara.** Yeni başlığın `S_YEDEK1` alanı kaynak siparişin numarasını taşır.
- **Kaynak kapanır, silinmez.** Kaynak siparişin satırlarındaki `TBLSIPATRA.STHAR_HTUR` değeri `H` iken `K` (kapalı) olur; başlık satırı yerinde kalır. Revizyona uğramış kaynak REST ile silinemez: `(Acik)Revizyona uğramış sipariş silinemez`. Revizyon siparişi silindikten sonra kaynak silinebilir.
- **Numara sayacı.** `SonNumaraYazilsin: false` gövdede verilse de yok sayılır; `TBLFATUNO` sayacı revizyonun numarasına çekilir.

Sonuç: `OrderRevision` siparişi düzenlemenin ya da numarasını değiştirmenin bir yolu değildir. Yalnızca kaynağın bir kopyasına satır ekler ve kaynağı kapatır. COM karşılığı `Fatura.SiparisRevizyon(eskiNo, tarih)`dir; bu metot COM üzerinden denenmedi.

Düzenleme olarak çalışan yol: `DELETE ItemSlips/{ftSSip|ftASip};{no};{cari}`, ardından eski numarayla tam gövdeli `POST ItemSlips`:

- `FatUst.FATIRS_NO` tam 15 karakter olmalı; yoksa `Hata 204 … 15 karakter`.
- `KayitliNumaraOtomatikGuncellensin: false` ve `SonNumaraYazilsin: false`.
- `Seri` numaranın ilk harfi.
- İşlem atomik değildir: silme başarılı, yeniden yazma başarısız olabilir. Önce gövdeyi saklayın.
- Yeni kayıt yeni bir `KAYITTARIHI` alır.
- Revizyona uğramış (`STHAR_HTUR` `K` olmuş) bir sipariş silinemez; önce revizyon siparişi silinmeli, sonra kaynak silinebilir.

`GET ItemSlips/{tip};{no};{cari}` gövdesini yazma isteğine olduğu gibi kopyalamayın: `"YEDEK": "\u0000"` gibi değerler ve `EPostaGonderilsin: true` gibi bayraklar taşır. Gövdeyi yeniden kurun.

## Numara sayacı (`TBLFATUNO`)

`TBLFATUNO` belge tipi ve seri (numaranın ilk harfi) başına bir satır tutar.

| İşlem | Sayaç |
|-------|-------|
| Otomatik numaralı `POST` | İlerler |
| `NewNumber` | Okur, ilerletmez |
| Açık numaralı `POST`, `SonNumaraYazilsin: false` olmadan | Sayaç yazılan numaraya çekilir, numara daha küçük olsa bile |
| Açık numaralı `POST`, `SonNumaraYazilsin: false` ile | Sayaç kıpırdamaz |
| Açık numara, daha önce kullanılmamış bir ilk harfle | Yeni bir sayaç satırı doğar; REST ile silinemez |
| `OrderRevision` (`SonNumaraYazilsin: false` gövdede olsa da) | Sayaç revizyonun numarasına çekilir |

## Üst düzey ve alan adları

`GET` ile görülen üst düzey özellikler: `KosulluHesapla`, `FiyatSistemineGoreHesapla`, `StokKartinaGoreHesapla`, `RiskKontrol`, `EPostaGonderilsin`, `KayitliNumaraOtomatikGuncellensin`, `SonNumaraYazilsin`, `OtoIskontoGetir`, `OtoVadeGunGetir`, `ProjeKodKontrol`, `BaglantiKontrol`, `Seri`, `FaturaTip`, `Kalems`, `FatUst`.

Satır: `StokKodu`, `DEPO_KODU`, `STra_GCMIK`, `STra_BF`, `STra_NF`, `STra_SatIsk` … `STra_SatIsk6`, `STra_KDV`, `STra_ODEGUN`, `Stra_KosulK`, `Stra_KosTar`, `Stra_FiyatTar`, `ProjeKodu`, `Plasiyer_Kodu`, `Ekalan`, `Ekalanneden`, `SatirBaziAciks` (10 metin), `Fiyatlar1` … `Fiyatlar7`, `MALADI`, `OBR1`, `OBR2`, `Sira`, `Vadetar`, `STra_testar`.

Başlık: `CariKod`, `CARI_KOD2` (teslim cari), `Tarih`, `FiiliTarih`, `ENTEGRE_TRH`, `FIYATTARIHI`, `KOSULTARIHI`, `KOSULKODU`, `KOSVADEGUNU`, `SIPARIS_TEST`, `DovBazTarihi`, `KDV_DAHILMI`, `KOD1`, `KOD2`, `PLA_KODU`, `Proje_Kodu`, `TIPI`, `EKACK1` … `EKACK16`, `BRUTTUTAR`, `SAT_ISKT`, `KDV`, `GENELTOPLAM`.

## Kayıt kullanıcısı

`ItemSlips` gövdesinde `KAYITYAPANKUL` ya da `DUZELTMEYAPANKUL` için özellik yoktur; REST ile yazılan her siparişte `KAYITYAPANKUL` servis kullanıcısıdır (`NETOPENX`). Ayrıntı ve SQL ile düzeltme: [Kayıt kullanıcısı](/veritabani/kayit-kullanicisi/).

## Şirkete özel tetikleyiciler

Netsis tablolarındaki şirkete özel tetikleyiciler REST yazmalarında da çalışır (REST'in kendi `UPDATE` ifadeleri de dahil). Hata veren bir tetikleyici REST çağrısını `700` ve tetikleyicinin SQL hata metniyle düşürür. Yazmadan önce `sys.triggers` ve `sys.sql_modules` ile tabloyu izleyen tetikleyicileri listeleyin.
