---
title: E-belge
description: E-fatura, e-arşiv ve e-irsaliye taslağı oluşturma ve HTML görüntüleme.
---

# E-belge (e-fatura, e-arşiv, e-irsaliye)

E-belge işlemleri `EBelge` nesnesiyle yapılır. Akış iki adımdır:

1. **Taslak:** Netsis'teki fatura/irsaliyeden e-belge taslağı (UBL) oluşturulur. GİB numarası atanır.
2. **Gönderim / görüntüleme:** Taslak entegratöre gönderilir ya da HTML olarak görüntülenir.

> Gönderim (GİB'e iletim) geri alınamaz. Geliştirme sırasında yalnızca taslak ve görüntüleme adımlarını deneyin.

## Tipler

| `TEBelgeTip` | Belge | Görüntüleme kutusu (`TEBelgeBoxType`) |
|--------------|-------|---------------------------------------|
| `ebtEFatura` | E-fatura | `ebAll` |
| `ebtArsiv` | E-arşiv fatura | `ebAll` |
| `ebtEIrs` | E-irsaliye | `ebOutbox` |

Hangisinin kullanılacağı carinin durumuna bağlıdır: `FatUst.EfaturaCarisiMi` `true` ise e-fatura, değilse e-arşiv.

## Faturadan e-fatura / e-arşiv taslağı

```csharp
Fatura fatura = kernel.yeniFatura(sirket, TFaturaTip.ftSFat);
fatura.OkuUst(faturaNo, cariKod);
bool efaturaCarisi = fatura.Ust().EfaturaCarisiMi;

EBelge eb = kernel.yeniEBelge(sirket, efaturaCarisi ? TEBelgeTip.ebtEFatura : TEBelgeTip.ebtArsiv);
eb.BelgeNo  = faturaNo;              // Netsis fatura numarası
eb.DizaynNo = efaturaCarisi ? eFaturaDizaynNo : eArsivDizaynNo;
if (!efaturaCarisi) eb.FiyatBilgileriBasilsin = true;
eb.kayitYeni();                       // taslağı oluştur
```

## İrsaliyeden e-irsaliye taslağı

```csharp
EBelge eb = kernel.yeniEBelge(sirket, TEBelgeTip.ebtEIrs);
eb.KaynakTip = TEBelgeKaynakTipi.eitIrs;
eb.BelgeNo   = irsaliyeNo;
eb.DizaynNo  = eIrsaliyeDizaynNo;
eb.FiyatBilgileriBasilsin = fiyatliMi;   // fiyatlı / fiyatsız irsaliye
eb.kayitYeni();
```

## Dizayn numaraları

Dizaynlar `TBLDIZAYNSABIT` tablosundadır:

```sql
SELECT DIZAYNNO, dbo.TRK(DZNADI + ' [' + DZNACIK + ']') AS ADI
FROM TBLDIZAYNSABIT
WHERE DIZAYNTIPI = @tip AND ISLETME_KODU = 1 AND SUBE_KODU = 0;
-- @tip: 99 e-fatura, 100 e-arşiv, 104 e-irsaliye
```

## GİB numarasını bulmak

Taslak oluştuktan sonra GİB numarası faturaya yazılır:

```sql
SELECT GIB_FATIRS_NO FROM TBLFATUIRS WHERE FATIRS_NO = @no AND CARI_KODU = @cari;
```

`eb.BelgeNo`'nun döndürdüğü değer ile bu sorgunun sonucunu karşılaştırmak, taslağın doğru belgeye bağlandığını doğrulamanın pratik yoludur.

## HTML görüntüleme

```csharp
EBelge eb = kernel.yeniEBelge(sirket, TEBelgeTip.ebtEFatura);
string htmlYolu = eb.EBelgeGoruntuleme(
    gibNo,                    // GİB numarası (GIB_FATIRS_NO)
    @"C:\Temp\efatura",       // çıktı klasörü
    TEBelgeBoxType.ebAll,     // kutu
    "");                      // zarf (envelope) id, boş geçilebilir
```

Dönen değer oluşturulan HTML dosyasının yoludur. PDF gerekiyorsa HTML'i bir HTML→PDF aracıyla dönüştürün (NetsisQuick bunu kendi `cPdf` sınıfıyla yapar).

## Seri bilgileri

```sql
SELECT BIRIMKOD FROM TBLEFATPRM   WHERE SUBE_KODU = 0;   -- e-fatura serisi
SELECT BIRIMKOD FROM TBLEARSIVPRM WHERE SUBE_KODU = 0;   -- e-arşiv serisi
SELECT SERI     FROM TBLEIRSSERI  WHERE C_YEDEK1 IS NULL AND SUBE_KODU = 0;   -- e-irsaliye serileri
```

REST karşılıkları: `POST api/v2/EDocument` (taslak), `POST api/v2/EDocument/SendEDocument`, `POST api/v2/EDocument/ShowEDocument` ([JSON örnekleri](/rest/json-ornekleri/#e-belge)).
