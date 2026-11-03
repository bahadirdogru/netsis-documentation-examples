---
title: TBLMRPSIPBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpsipbaglanti/
---

# TBLMRPSIPBAGLANTI

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BAGLANTI_ID` | TDBINTEGER | evet |  | Bağlantı numarasını gösterir |
| 3 | `SATSIP_INCKEYNO` | TDBINTEGER | evet |  | Satiş şipariş inckey numarasını gösterir |
| 4 | `ISEMRINO` | TDBBELGENO | evet |  | İs emri numarasını tutar |
| 5 | `MIKTAR` | TDBFLOAT | evet |  | Miktar alanını tutar. |
| 6 | `TESLIM_TARIHI` | TDBDATETIME | evet |  | Teslim tarihini tutar |
| 7 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `YENIBELGENO` | TDBINTEGER | evet |  | Yeni belge nurasasının tutulduğu sahadır |
| 24 | `BELGE_TIPI` | char(1) | evet |  | Belge tipini tutar |
| 25 | `IUP_ISEMRINO` | TDBBELGENO | evet |  | Çizelgelemeden MRP güncelleme için eklenmiştir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMRPSIPBAGLANTI_FKEY_1` | `BAGLANTI_ID` |
| FOREIGN KEY | `TBLMRPSIPBAGLANTI_FKEY_3` | `ISEMRINO` |
| PRIMARY KEY | `TBLMRPSIPBAGLANTI_PKEY_1` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRPSIPBAGLANTI_IND_1` | `BAGLANTI_ID` | nonclustered |
| `TBLMRPSIPBAGLANTI_PKEY_1` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, BAGLANTI_ID, SATSIP_INCKEYNO, ISEMRINO, MIKTAR, TESLIM_TARIHI
FROM dbo.TBLMRPSIPBAGLANTI WITH (NOLOCK);
```
