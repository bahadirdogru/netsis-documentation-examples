---
title: TBLKKARIZA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkariza/
---

# TBLKKARIZA

> KAYIT>ARIZA KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `ARIZAKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ARIZAKODU` | varchar(8) | hayır |  | Arıza Kodunu gösterir. |
| 2 | `OLCUMTIPI` | varchar(8) | evet |  | Ölçüm Tipini gösterir. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama kaydını gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKARIZAPKEY` | `ARIZAKODU` |
| FOREIGN KEY | `TBLKKARIZAFKEY1` | `KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKARIZA_IND1` | `ARIZAKODU+OLCUMTIPI` | Non-unique, Non-clustered |
| `TBLKKARIZA_IND2` | `ISLETME_KODU+ARIZAKODU` | Non-unique, Non-clustered |
| `TBLKKARIZAPKEY` | `ARIZAKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ARIZAKODU, OLCUMTIPI, ACIKLAMA, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLKKARIZA WITH (NOLOCK);
```
