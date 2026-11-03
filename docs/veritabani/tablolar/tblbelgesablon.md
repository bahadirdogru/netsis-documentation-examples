---
title: TBLBELGESABLON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbelgesablon/
---

# TBLBELGESABLON

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `SABLON_ID`
- **Identity:** `SABLON_ID` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SABLON_ID` | int | hayır |  | Sablon numarasının tutulduğu sahadır |
| 3 | `SABLON_KODU` | varchar(15) | evet |  | Sablon kodunun tutulduğu sahadır |
| 4 | `SABLON_ADI` | varchar(100) | evet |  | Şablon adını tutar |
| 5 | `PAKET_NO` | TDBSMALLINT | evet |  | Paket numarasının tutulduğu sahadır |
| 6 | `MODUL_NO` | TDBSMALLINT | evet |  | Yetki veirlen modul numarasını gösterir |
| 7 | `PROGRAM_NO` | TDBSMALLINT | evet |  | Program numarasını gösterir |
| 8 | `SABLON_DATA` | image | evet |  | Hazırlanan metni tutar. |
| 9 | `SABLON_DATA_VERSIYON` | varchar(15) | evet |  | Sablon versiyonunu tutar |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBELGESABLON_FKEY_1` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBELGESABLON_PKEY` | `SABLON_ID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBELGESABLON_IND_1` | `ISLETME_KODU, PAKET_NO, MODUL_NO, PROGRAM_NO, SABLON_KODU` | nonclustered |
| `TBLBELGESABLON_IND_2` | `PAKET_NO, MODUL_NO, PROGRAM_NO, SABLON_KODU` | nonclustered |
| `TBLBELGESABLON_PKEY` | `SABLON_ID` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SABLON_ID, SABLON_KODU, SABLON_ADI, PAKET_NO, MODUL_NO
FROM dbo.TBLBELGESABLON WITH (NOLOCK);
```
