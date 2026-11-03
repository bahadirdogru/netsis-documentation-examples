---
title: TBLCONFIGYENIOZELLIKDEGERLER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigyeniozellikdegerler/
---

# TBLCONFIGYENIOZELLIKDEGERLER

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `CONFIGTRA_ID` | TDBINTEGER | hayır |  | Configrasyon numarasını tutar |
| 5 | `OZELLIK_ID` | TDBINTEGER | hayır |  | Bağlanılan özellik numarasını tutar |
| 6 | `DEGER_ID` | TDBINTEGER | evet |  | Özelliğin değer numarasını tutar |
| 7 | `YENI_DEGER` | varchar(100) | evet |  | Özelliğe ait yeni değer bilgisini içerir |
| 8 | `YENI_INSERT_NODE` | char(1) | evet | `H` | Yeni kaydedilecek bileşene ait olup olmadığını gösterir |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGYENIOZELLIKDEGERLER_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGYENIOZELLIKDEGERLER_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCONFIGYENIOZELLIKDEGERLER_FKEY3` | `CONFIGTRA_ID` |
| FOREIGN KEY | `TBLCONFIGYENIOZELLIKDEGERLER_FKEY4` | `OZELLIK_ID` |
| PRIMARY KEY | `TBLCONFIGYENIOZELLIKDEGERLER_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGYENIOZELLIKDEGERLER_IND_1` | `CONFIGTRA_ID` | nonclustered |
| `TBLCONFIGYENIOZELLIKDEGERLER_IND_2` | `ISLETME_KODU, SUBE_KODU, CONFIGTRA_ID` | nonclustered |
| `TBLCONFIGYENIOZELLIKDEGERLER_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, CONFIGTRA_ID, OZELLIK_ID, DEGER_ID
FROM dbo.TBLCONFIGYENIOZELLIKDEGERLER WITH (NOLOCK);
```
