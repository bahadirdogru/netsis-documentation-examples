---
title: TBLCONFIGBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigbaglanti/
---

# TBLCONFIGBAGLANTI

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 5 | `ALTGRUP_ID` | TDBINTEGER | hayır |  | Alternatif grup numarasının tutulduğu sahadır. |
| 6 | `OZELLIK_ID` | TDBINTEGER | evet |  | Bağlanılan özellik numarasını tutar |
| 7 | `DEGER_ID` | TDBINTEGER | evet |  | özelliğin değer numarasının tutulduğu sahadır |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGBAGLANTI_FKEY1` | `STOKKODU` |
| FOREIGN KEY | `TBLCONFIGBAGLANTI_FKEY2` | `ALTGRUP_ID` |
| FOREIGN KEY | `TBLCONFIGBAGLANTI_FKEY3` | `OZELLIK_ID` |
| FOREIGN KEY | `TBLCONFIGBAGLANTI_FKEY4` | `DEGER_ID` |
| FOREIGN KEY | `TBLCONFIGBAGLANTI_FKEY5` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGBAGLANTI_FKEY6` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCONFIGBAGLANTI_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGBAGLANTI_IND_1` | `STOKKODU, ALTGRUP_ID, OZELLIK_ID, DEGER_ID` | nonclustered |
| `TBLCONFIGBAGLANTI_IND_2` | `ISLETME_KODU, SUBE_KODU, STOKKODU, ALTGRUP_ID, OZELLIK_ID, DEGER_ID` | nonclustered |
| `TBLCONFIGBAGLANTI_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, STOKKODU, ALTGRUP_ID, OZELLIK_ID
FROM dbo.TBLCONFIGBAGLANTI WITH (NOLOCK);
```
