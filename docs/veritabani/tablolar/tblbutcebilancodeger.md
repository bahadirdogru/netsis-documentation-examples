---
title: TBLBUTCEBILANCODEGER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutcebilancodeger/
---

# TBLBUTCEBILANCODEGER

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 27
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BUTCE_ID` | TDBINTEGER | hayır |  | Bütçe numarasının tutulduğu sahadır |
| 3 | `BILESEN_ID` | TDBINTEGER | hayır |  | Bileşen numarasının tutulduğu sahadır |
| 4 | `DONEM_ID` | TDBINTEGER | hayır |  | Dönem bilgisinin girildiği sahadır |
| 5 | `HESAP_KODU` | TDBMUHKOD | hayır |  | Hesap kodunun saklandığı saha |
| 6 | `TUTAR` | TDBFLOAT | evet |  | Bütçede tutar bilgisini tutar |
| 7 | `DOV_TUTAR` | TDBFLOAT | evet |  | Döviz tutar bilgisi |
| 8 | `FIRMA_DOV_TUTAR` | TDBFLOAT | evet |  | Firmanın döviz tutarı |
| 9 | `DEGER_TIPI` | char(1) | hayır |  | Alt sınır ust sınır bilgilerinn ciro mu miktar mı oldğunu belirtir |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCEBILANCODEGER_FKEY_1` | `BUTCE_ID` |
| FOREIGN KEY | `TBLBUTCEBILANCODEGER_FKEY_2` | `DONEM_ID` |
| FOREIGN KEY | `TBLBUTCEBILANCODEGER_FKEY_3` | `BILESEN_ID` |
| PRIMARY KEY | `TBLBUTCEBILANCODEGER_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCEBILANCODEGER_IND_1` | `BUTCE_ID, BILESEN_ID, DONEM_ID, HESAP_KODU, DEGER_TIPI` | nonclustered,unique |
| `TBLBUTCEBILANCODEGER_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, BUTCE_ID, BILESEN_ID, DONEM_ID, HESAP_KODU, TUTAR
FROM dbo.TBLBUTCEBILANCODEGER WITH (NOLOCK);
```
