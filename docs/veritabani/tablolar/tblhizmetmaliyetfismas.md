---
title: TBLHIZMETMALIYETFISMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmetmaliyetfismas/
---

# TBLHIZMETMALIYETFISMAS

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `FISNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FISNO` | TDBBELGENO | hayır |  | Stok hareket kayıtlarının fis numaralarını gösterir. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Tarihini gösterir. |
| 4 | `DAGITIMID` | TDBINTEGER | evet |  | Dağıtım için kullanılan dağıtım anahtar bilgisini tutar |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLHIZMETMALIYETFISMAS_FKEY1` | `DAGITIMID` |
| PRIMARY KEY | `TBLHIZMETMALIYETFISMAS_PKEY` | `FISNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHIZMETMALIYETFISMAS_IND_1` | `INCKEYNO` | nonclustered, unique |
| `TBLHIZMETMALIYETFISMAS_PKEY` | `FISNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, FISNO, TARIH, DAGITIMID, C_YEDEK1, C_YEDEK2
FROM dbo.TBLHIZMETMALIYETFISMAS WITH (NOLOCK);
```
