---
title: TBLCONFIGACIKLAMALAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigaciklamalar/
---

# TBLCONFIGACIKLAMALAR

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `CONFIGMAS_ID` | varchar(5) | hayır |  | Configmas tabolosundaki inckey numarasını gösterir |
| 5 | `ACIKLAMA` | varchar(30) | evet |  | İlgili girilen açıklama |
| 6 | `SYSTEM_MESSAGE` | TDBSTOKKOD | evet | `E` | Açıklamanın sistem yada uygulama seviyesinde mi olduğunu belirtir |
| 7 | `C_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | varchar(35) | hayır |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBFLOAT | hayır |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBDATETIME | hayır |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBDATETIME | hayır |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBBELGENO | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK4` | varchar(5) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | varchar(30) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBCARIKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBBELGENO | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | char(1) | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGACIKLAMALAR_FKEY1` | `CONFIGMAS_ID` |
| FOREIGN KEY | `TBLCONFIGACIKLAMALAR_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGACIKLAMALAR_FKEY3` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCONFIGACIKLAMALAR_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGACIKLAMALAR_IND_1` | `CONFIGMAS_ID` | nonclustered |
| `TBLCONFIGACIKLAMALAR_IND_2` | `ISLETME_KODU, SUBE_KODU, CONFIGMAS_ID` | nonclustered |
| `TBLCONFIGACIKLAMALAR_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, CONFIGMAS_ID, ACIKLAMA, SYSTEM_MESSAGE
FROM dbo.TBLCONFIGACIKLAMALAR WITH (NOLOCK);
```
