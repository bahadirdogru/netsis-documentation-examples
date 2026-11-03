---
title: TBLISEMRIREZERVESTOK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblisemrirezervestok/
---

# TBLISEMRIREZERVESTOK

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISEMRINO` | TDBBELGENO | evet |  | Girilen iş emri numarasını gösterir. |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | İş emri içindeki stok kodunu gösterir. |
| 4 | `YAPKOD` | varchar(15) | evet |  | Stoğun varsa yapılandırma kodunu gösterir. |
| 5 | `MIKTAR` | TDBFLOAT | evet |  | İş emrime bağlı mamül ya da yarı mamülün reçete içindeki yarımamül ya da bileşen miktarını gösterir. |
| 6 | `TARIH` | TDBDATETIME | evet |  | Tarihi gösterir. |
| 7 | `GIR_DEPO` | TDBSMALLINT | evet |  | Giriş deposunu gösterir |
| 8 | `REF_TYPE` | TDBBYTE | evet |  |  |
| 9 | `REF_KEY` | varchar(15) | evet |  |  |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLISEMRIREZERVESTOK_FKEY_1` | `ISEMRINO` |
| PRIMARY KEY | `TBLISEMRIREZERVESTOK_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLISEMRIREZERVESTOK_IND_1` | `ISEMRINO, STOK_KODU, YAPKOD, GIR_DEPO` | nonclustered |
| `TBLISEMRIREZERVESTOK_IND_2` | `GIR_DEPO, ISEMRINO` | nonclustered |
| `TBLISEMRIREZERVESTOK_IND_3` | `STOK_KODU, YAPKOD` | nonclustered |
| `TBLISEMRIREZERVESTOK_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISEMRINO, STOK_KODU, YAPKOD, MIKTAR, TARIH
FROM dbo.TBLISEMRIREZERVESTOK WITH (NOLOCK);
```
