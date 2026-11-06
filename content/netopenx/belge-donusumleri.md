---
title: Belge dönüşümleri
description: Siparişten irsaliye ve fatura, irsaliyeden fatura, belge numarası değiştirme.
---

# Belge dönüşümleri

Netsis'te sipariş → irsaliye → fatura zinciri, kaynak belgeyi okuyup hedef belge nesnesine aktaran metotlarla yapılır. Dönüşüm, kaynak belgedeki bağlantıları (sipariş bakiyesi, irsaliyenin faturalandı işareti) de günceller. Kalemleri elle kopyalamak bu bağlantıyı kurmaz.

| Metot | Kaynak | Hedef |
|-------|--------|-------|
| `siparis.Siparis2IrsFat(hedef)` | `ftSSip` / `ftASip` | irsaliye (`ftSIrs`/`ftAIrs`) ya da fatura (`ftSFat`/`ftAFat`) |
| `irsaliye.Irsaliye2Fatura(hedef)` | `ftSIrs` / `ftAIrs` | fatura |
| `belge.NumaraDegistir(yeniNo, cariKod, bool)` | herhangi | aynı belge, yeni numara |

## Siparişten irsaliye

```csharp
Fatura siparis = kernel.yeniFatura(sirket, TFaturaTip.ftASip);   // satıcı siparişi
siparis.OkuUst(siparisNo, cariKod);
siparis.OkuKalem();

Fatura irsaliye = kernel.yeniFatura(sirket, TFaturaTip.ftAIrs);  // alış irsaliyesi
FatUst irsUst = irsaliye.Ust();
irsUst.EIrsaliye = eIrsaliyeMi;
irsUst.FATIRS_NO = eIrsaliyeMi
    ? irsaliye.YeniEIrsaliyeNumara(seri)
    : irsaliye.YeniNumara(seri);

siparis.Siparis2IrsFat(irsaliye);      // kaydı da yapar
string irsaliyeNo = irsUst.FATIRS_NO;
```

Satış tarafı için `ftSSip` → `ftSIrs`.

## Siparişten fatura (e-fatura / e-arşiv serisiyle)

Hedef faturanın serisi, carinin e-fatura mükellefi olup olmamasına göre seçilir:

```csharp
Fatura siparis = kernel.yeniFatura(sirket, TFaturaTip.ftSSip);
siparis.OkuUst(siparisNo, cariKod);
siparis.OkuKalem();
FatUst sipUst = siparis.Ust();

// e-fatura mükellefi ise e-fatura serisi, değilse e-arşiv serisi
string seri = sipUst.EfaturaCarisiMi
    ? Sql("SELECT TOP 1 BIRIMKOD FROM TBLEFATPRM")
    : Sql("SELECT TOP 1 BIRIMKOD FROM TBLEARSIVPRM");

Fatura fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
FatUst fatUst = fatura.Ust();
fatUst.FATIRS_NO = fatura.YeniNumara(seri);
fatUst.GIB_FATIRS_NO = GibNumarasi(seri, fatUst.FATIRS_NO);
fatUst.EFatOzelKod = sipUst.EFatOzelKod;    // istisna kodunu taşı

siparis.Siparis2IrsFat(fatura);
string faturaNo = fatUst.FATIRS_NO;
```

### GİB numarası

E-fatura numarası 16 karakterdir: `SERİ(3) + YIL(4) + SIRA(9)`, ör. `ABC2024000000123`. Netsis'in iç `FATIRS_NO` alanı 15 karakter olduğundan bazı kurulumlarda yılın iki hanesi tutulur (`ABC024000000123`). NetsisQuick bu durumda GİB numarasını şöyle üretir:

```csharp
// "ABC024000000123" → "ABC2024000000123"
static string GibNumarasi(string seri, string netsisNo)
    => seri.Trim() + "2" + netsisNo.Substring(seri.Length);
```

Bu dönüşüm kurulumun numaralama ayarına bağlıdır; kendi verinizde `TBLFATUIRS.FATIRS_NO` ile `GIB_FATIRS_NO`'yu karşılaştırarak doğrulayın.

## İrsaliyeden fatura

```csharp
Fatura irsaliye = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
irsaliye.OkuUst(irsaliyeNo, cariKod);
irsaliye.OkuKalem();
FatUst irsUst = irsaliye.Ust();

Fatura fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
FatUst fatUst = fatura.Ust();
fatUst.FATIRS_NO = fatura.YeniNumara(seri);
fatUst.GIB_FATIRS_NO = GibNumarasi(seri, fatUst.FATIRS_NO);
fatUst.EFatOzelKod = irsUst.EFatOzelKod;

irsaliye.Irsaliye2Fatura(fatura);
```

## Numara değiştirme

```csharp
// İrsaliye numarası
Fatura irs = kernel.yeniFatura(sirket, TFaturaTip.ftSIrs);
irs.OkuUst(eskiNo, cariKod);
irs.OkuKalem();
irs.NumaraDegistir(yeniNo, cariKod, true);

// Sipariş numarası (cari değişmiyor)
Fatura sip = kernel.yeniFatura(sirket, TFaturaTip.ftSSip);
sip.OkuUst(sipNo, cariKod);
sip.OkuKalem();
sip.NumaraDegistir(yeniSipNo, null, false);
```

Değişikliği doğrulamak için belgeyi yeni numarayla tekrar okuyun (`OkuUst(yeniNo, cariKod)`) ve `Ust().FATIRS_NO`'yu kontrol edin. Üçüncü parametrenin anlamı belgelenmemiştir; örneklerde cari kodu verildiğinde `true`, verilmediğinde `false` kullanılmıştır.

## Sipariş onayı

Sipariş onay durumu `TBLSIPAMAS.TIPI` alanındadır (`2` onaylı yurt içi, `3` onaylanmamış). NetOpenX'te ayrı bir metot gözlenmedi; NetsisQuick bunu SQL ile yapar, bkz. [Dikkatli güncellemeler](/veritabani/sql-ornekleri/#dikkatli-guncellemeler).

Onaysız sipariş dönüştürülemez: `Sipariş onaysız işlem yapılamaz`. REST ile yazılan sipariş `TIPI = 3` kalır, gövdedeki `TIPI` bunu değiştirmedi ([Canlı denemeler](/rest/canli-denemeler/#siparis-onayi)).

REST karşılıkları: `POST api/v2/ItemSlips/SiparisToIrsFat`, `POST api/v2/ItemSlips/IrsToFat`, `POST api/v2/ItemSlips/ChangeNumber` ([REST uçları](/rest/uclar/#fatura-irsaliye-ve-siparis-itemslips)).
