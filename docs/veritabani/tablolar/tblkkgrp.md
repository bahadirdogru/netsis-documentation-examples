---
title: TBLKKGRP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkgrp/
---

# TBLKKGRP

> KAYIT>GRUP/ÖLÇÜM TANIMLARI>KALİTE GRUP TANIMLARI EKRANINDAKİ GRUP TANIMLAMA SEKMESİNDEKİ KAYITLARI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | TDBINTEGER | hayır |  | Grup Kodunu gösterir. |
| 2 | `ACIKLAMA` | varchar(8) | hayır |  | Açıklamayı gösterir. |
| 3 | `KKORAN` | varchar(8) | hayır | `0` | Oran(%)ı gösterir. |
| 4 | `YENIORNEKLEMMIK` | TDBFLOAT | hayır | `0` | Örneklem Miktarını gösterir. |
| 5 | `METOTACIKLAMA` | TDBFLOAT | hayır |  | Metot Açıklama sahasını gösterir. |
| 6 | `KAYITYAPANKUL` | TDBFLOAT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBFLOAT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `ISLETME_KODU` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | TDBDATETIME | evet |  | Örnekler Hurda parametresi işaretli ise 'E', değil ise 'H' değerini gösterir. |
| 12 | `C_YEDEK2` | char(1) | evet |  | Kalite Kontrol Ölçümleri Örnekleme Göre Oluşsun parametresi işaretli ise 'E', değil ise 'H' değerini gösterir. |
| 13 | `I_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBINTEGER | evet |  | Sabit Miktarı gösterir. |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKGRPPKEY` | `KOD` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKGRP_IND1` | `ACIKLAMA` | Non-unique, Non-clustered |
| `TBLKKGRPPKEY` | `KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, ACIKLAMA, KKORAN, YENIORNEKLEMMIK, METOTACIKLAMA, KAYITYAPANKUL
FROM dbo.TBLKKGRP WITH (NOLOCK);
```
