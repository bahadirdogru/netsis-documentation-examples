---
title: Depo ve ambar fişleri
description: Lokal depolar arası transfer ve ambar giriş/çıkış fişi kaydı.
---

# Depo ve ambar fişleri

Depolar arası transfer ve ambar fişleri de `Fatura` nesnesiyle yazılır. Farkı başlıktaki birkaç alandır.

## Lokal depolar arası transfer

```csharp
Fatura dat = kernel.yeniFatura(sirket, TFaturaTip.ftLokalDepo);
FatUst ust = dat.Ust();
ust.FATIRS_NO   = dat.YeniNumara("N");
ust.Tarih       = DateTime.Today;
ust.FiiliTarih  = DateTime.Today;
ust.TIPI        = TFaturaTipi.ft_Bos;
ust.AMBHARTUR   = TAmbarHarTur.htMuhtelif;
ust.Proje_Kodu  = "1";
// CariKod verilmez

FatKalem k = dat.kalemYeni("STK001");
k.STra_GCMIK    = 10;
k.STra_BF       = 0;
k.DEPO_KODU     = 5;   // çıkış deposu
k.Gir_Depo_Kodu = 1;   // giriş deposu: 5'ten 1'e transfer
k.ProjeKodu     = "1";

dat.kayitYeni();
```

Tabloda `TBLFATUIRS.FTIRSIP = '8'`, `YEDEK = 'D'` olarak görünür; her kalem için çıkış ve giriş stok hareketi oluşur.

## Ambar giriş / çıkış fişi

Ambar fişi stoğu bir cariye bağlı olmadan artırır ya da azaltır (sarf, sayım farkı, numune…). Çıkış fişinde masraf merkezi ve muhasebe kodu verilir.

```csharp
Fatura ambar = kernel.yeniFatura(sirket, TFaturaTip.ftAmbarC);   // giriş için ftAmbarG
FatUst ust = ambar.Ust();
ust.FATIRS_NO  = ambar.YeniNumara("AMB");
ust.CariKod    = "MM01";                  // ambar fişinde masraf merkezi kodu (TBLMASRAF.MKOD)
ust.Tarih      = DateTime.Today;
ust.FiiliTarih = DateTime.Today;
ust.DovBazTarihi = DateTime.Today;
ust.AMBHARTUR  = TAmbarHarTur.htMuhtelif;
ust.CikisYeri  = TCikisYeri.cyMasrafMer;  // ya da cyStokKod
ust.Proje_Kodu = "1";

FatKalem k = ambar.kalemYeni("STK001");
k.STra_GCMIK   = 3;
k.STra_BF      = 0;
k.DEPO_KODU    = 1;
k.MuhasebeKodu = "770-01-001";            // çıkış için gider hesabı
k.Ekalan       = "MM01";                  // NetsisQuick masraf kodunu kalemde de taşır

ambar.kayitYeni();
```

| Alan | Değerler (gözlenen) |
|------|---------------------|
| `AMBHARTUR` (`TAmbarHarTur`) | `htMuhtelif`, `htUretim`, `htDepolar` |
| `CikisYeri` (`TCikisYeri`) | `cyStokKod`, `cyMasrafMer` |

Masraf merkezlerini listelemek için:

```sql
SELECT MKOD, dbo.TRK(ISNULL(ACIKLAMA,'')) AS ACIKLAMA, MUHKOD, SATMUHKOD
FROM TBLMASRAF WHERE ISLETME_KODU = 1 AND SUBE_KODU = 0 AND MKOD IS NOT NULL;
```

Tabloda ambar fişleri `TBLFATUIRS.YEDEK = 'X'` ile işaretlenir.
