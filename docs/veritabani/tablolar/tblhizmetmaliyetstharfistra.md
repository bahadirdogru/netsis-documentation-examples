---
title: TBLHIZMETMALIYETSTHARFISTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmetmaliyetstharfistra/
---

# TBLHIZMETMALIYETSTHARFISTRA

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MASINCKEYNO` | TDBINTEGER | hayır |  | Tblhızmetmalıyetsthafıstra tablosundaki inckeyno fieldıyla aynı rakamı gösterir. |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `STHARINCKEYNO` | TDBINTEGER | hayır |  | Stok hareket inckey numarasını tutar |
| 4 | `DAGITIMYAPILACAK` | char(1) | hayır |  | Aktif satıra dağıtım yapılıp yapılmadığı bilgisini tutar |
| 5 | `TUTAR` | TDBFLOAT | hayır |  | Bir malın hangi önem kodunda olduğunu gösteren tutar bilgisini gösterir. |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLHIZMETMALIYETSTHARFISTRA_FKEY1` | `MASINCKEYNO` |
| FOREIGN KEY | `TBLHIZMETMALIYETSTHARFISTRA_FKEY2` | `STHARINCKEYNO` |
| PRIMARY KEY | `TBLHIZMETMALIYETSTHARFISTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHIZMETMALIYETSTHARFISTRA_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 MASINCKEYNO, INCKEYNO, STHARINCKEYNO, DAGITIMYAPILACAK, TUTAR, C_YEDEK1
FROM dbo.TBLHIZMETMALIYETSTHARFISTRA WITH (NOLOCK);
```
