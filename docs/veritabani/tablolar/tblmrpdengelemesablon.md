---
title: TBLMRPDENGELEMESABLON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpdengelemesablon/
---

# TBLMRPDENGELEMESABLON

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SABLON_KODU` | varchar(15) | hayır |  | Şablon kodunu tutar |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı numarasını gösterir. |
| 5 | `SABLON_ADI` | varchar(50) | hayır |  | Şablon adını tutar |
| 6 | `ACIKLAMA` | varchar(200) | evet |  | Tanımlanan operasyonla ilgili varsa açıklamasını gösterir. |
| 7 | `SIP_ISEMRI` | char(1) | hayır |  | İsemri olusturulacak ise I;siparis olusturulacak ise S degerini tutan sahadır. |
| 8 | `KISIT_DATA` | image | evet |  |  |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMEYAPANKUL` | varchar(50) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMRPDENGELEMESABLON_FKEY_1` | `SUBE_KODU, KULLANICI_NO` |
| PRIMARY KEY | `TBLMRPDENGELEMESABLON_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRPDENGELEMESABLON_IND_1` | `SUBE_KODU, KULLANICI_NO, SIP_ISEMRI, SABLON_KODU` | nonclustered, unique |
| `TBLMRPDENGELEMESABLON_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SABLON_KODU, SUBE_KODU, KULLANICI_NO, SABLON_ADI, ACIKLAMA
FROM dbo.TBLMRPDENGELEMESABLON WITH (NOLOCK);
```
