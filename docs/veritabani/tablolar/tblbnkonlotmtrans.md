---
title: TBLBNKONLOTMTRANS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkonlotmtrans/
---

# TBLBNKONLOTMTRANS

> Açıklama yok.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `KURUM, ABONENO, ODEMETARIHI, FATURATARIHI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BANKAKODU` | varchar(5) | hayır |  | Banka kodunu tutar. |
| 3 | `KURUM` | varchar(10) | hayır |  | Banka tarafından belirlenen kurum kodunu tutar. |
| 4 | `ABONENO` | varchar(20) | hayır |  | Abone numarasının tutulduğu sahadır |
| 5 | `DURUM` | varchar(1) | hayır |  | Default olarak 0 değeri atılır. |
| 6 | `ODEMETARIHI` | smalldatetime | hayır |  | Vade tarihi |
| 7 | `FATURATARIHI` | smalldatetime | hayır |  | Fatura kesilme tarihi |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKONLOTMTRANS_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBNKONLOTMTRANS_FKEY2` | `BANKAKODU, KURUM, ABONENO` |
| PRIMARY KEY | `TBLBNKONLOTMTRANS_PKEY` | `KURUM, ABONENO, ODEMETARIHI, FATURATARIHI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKONLOTMTRANS_IND_1` | `SUBE_KODU, KURUM, ABONENO, ODEMETARIHI, FATURATARIHI` | Nonclustered |
| `TBLBNKONLOTMTRANS_PKEY` | `KURUM, ABONENO, ODEMETARIHI, FATURATARIHI` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BANKAKODU, KURUM, ABONENO, DURUM, ODEMETARIHI
FROM dbo.TBLBNKONLOTMTRANS WITH (NOLOCK);
```
