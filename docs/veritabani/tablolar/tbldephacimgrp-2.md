---
title: TBLDEPHACIMGRP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldephacimgrp-2/
---

# TBLDEPHACIMGRP

> Açıklama yok.

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `HACIMGRKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `HACIMGRKOD` | varchar(8) | hayır |  | hacim kodlarının girileceği sahadır |
| 3 | `HUCREGRKOD` | varchar(8) | hayır |  | Tanımlanan hacim koduna sahip ürünlerin, hangi hücre grubuna yerleştirileceği bu sahada belirlenmektedir. |
| 4 | `KAPASITE` | TDBFLOAT | evet | `0` | Tanımlanan hacme sahip olan ürünlerin, ilgili gruptaki bir rafa en fazla ne kadar yerleştirilebileceği bu sahada girilmektedir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDEPHACIMGRP_FKEY` | `HUCREGRKOD` |
| FOREIGN KEY | `TBLDEPHACIMGRP_FKEY1` | `HACIMGRKOD` |
| FOREIGN KEY | `TBLDEPHACIMGRP_FKEY2` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLDEPHACIMGRP_PKEY` | `HACIMGRKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPHACIMGRP_IND1` | `ISLETME_KODU` | nonclustered |
| `TBLDEPHACIMGRP_PKEY` | `HACIMGRKOD` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, HACIMGRKOD, HUCREGRKOD, KAPASITE, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLDEPHACIMGRP WITH (NOLOCK);
```
