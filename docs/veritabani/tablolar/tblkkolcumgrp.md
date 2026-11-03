---
title: TBLKKOLCUMGRP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkolcumgrp/
---

# TBLKKOLCUMGRP

> KAYIT>GRUP/ÖLÇÜM KAYITLARI>GRUP ÖLÇÜM BİLGİSİ GİRİŞİ KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `KOD+OLCUKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(8) | hayır |  | Grup Kodunu gösterir. |
| 2 | `OLCUKODU` | varchar(8) | hayır |  | Ölçü Kodunu gösterir. |
| 3 | `SAYISALMIN` | TDBFLOAT | evet |  | Min Değeri gösterir. |
| 4 | `SAYISALMAX` | TDBFLOAT | evet |  | Max Değeri gösterir. |
| 5 | `ALFASAYISALMIN` | varchar(50) | evet |  | Min Alfı gösterir. |
| 6 | `ALFASAYISALMAX` | varchar(50) | evet |  | Max Alfı gösterir. |
| 7 | `ACIKLAMA` | text | evet |  | Açıklama sahasını gösterir. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `KKOLCUMGRPKKOLCUMGRPPKEY` | `KOD+OLCUKODU` |
| FOREIGN KEY | `KKOLCUMGRPKKOLCUMGRPFKEY1` | `KOD` |
| FOREIGN KEY | `KKOLCUMGRPKKOLCUMGRPFKEY2` | `KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `KKOLCUMGRPKKOLCUMGRPPKEY` | `KOD+OLCUKODU` | Clustered |
| `TBLKKOLCUMGRP_IND1` | `ISLETME_KODU+KOD+OLCUKODU` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, OLCUKODU, SAYISALMIN, SAYISALMAX, ALFASAYISALMIN, ALFASAYISALMAX
FROM dbo.TBLKKOLCUMGRP WITH (NOLOCK);
```
