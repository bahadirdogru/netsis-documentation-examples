---
title: TBLCONFIGBELGELER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigbelgeler/
---

# TBLCONFIGBELGELER

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `CONFIGMAS_ID` | TDBINTEGER | hayır |  | Configmas tabolosundaki inckey numarasını gösterir |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `BELGE_ID` | TDBINTEGER | evet |  | Configrator ile ilgili olan belge numarasını tutuar |
| 22 | `BELGE_TIPI` | char(1) | evet |  | Configrator ile ilgili olan belge tipini tutar |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGBELGELER_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGBELGELER_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCONFIGBELGELER_FKEY3` | `CONFIGMAS_ID` |
| PRIMARY KEY | `TBLCONFIGBELGELER_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGBELGELER_IND_1` | `BELGE_ID, BELGE_TIPI, CONFIGMAS_ID` | nonclustered |
| `TBLCONFIGBELGELER_IND_2` | `CONFIGMAS_ID, BELGE_ID, BELGE_TIPI` | nonclustered |
| `TBLCONFIGBELGELER_IND_3` | `ISLETME_KODU, SUBE_KODU, BELGE_ID, BELGE_TIPI, CONFIGMAS_ID` | nonclustered |
| `TBLCONFIGBELGELER_IND_4` | `ISLETME_KODU, SUBE_KODU, CONFIGMAS_ID, BELGE_ID, BELGE_TIPI` | nonclustered |
| `TBLCONFIGBELGELER_IND1` | `BELGE_ID, BELGE_TIPI` | nonclustered, unique |
| `TBLCONFIGBELGELER_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, CONFIGMAS_ID, C_YEDEK1, C_YEDEK2
FROM dbo.TBLCONFIGBELGELER WITH (NOLOCK);
```
