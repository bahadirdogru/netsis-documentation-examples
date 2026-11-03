---
title: TBLKKGRPARALIK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkgrparalik/
---

# TBLKKGRPARALIK

> KAYIT>GRUP/ÖLÇÜM TANIMLARI>KALİTE GRUP TANIMLARI EKRANINDAKİ MUAYENE ARALIKLI GRUP TANIMLAMA SEKMESİNDEKİ KAYITLARI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `GRPKOD` | varchar(8) | hayır |  | Grup kodunu gösterir. |
| 3 | `MYNKOD` | varchar(8) | hayır |  | Muayene kodunu gösterir. |
| 4 | `MIKTAR` | TDBFLOAT | hayır | `0` | Başlangıç miktarını gösterir. |
| 5 | `KKORAN` | TDBFLOAT | hayır | `0` | Oran(%)ı gösterir. |
| 6 | `YENIORNEKLEMMIK` | TDBFLOAT | hayır | `0` | Örnekleme Miktarını gösterir. |
| 7 | `SABITMIKTAR` | TDBFLOAT | hayır | `0` | Stok Miktarını gösterir. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Sabit Miktarı gösterir. |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKGRPARALIK_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLKKGRPARALIK_FKEY1` | `KOD` |
| FOREIGN KEY | `TBLKKGRPARALIK_FKEY2` | `MYNKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKGRPARALIK_IND_1` | `GRPKOD+MYNKOD+MIKTAR` | Unique, Non-clustered |
| `TBLKKGRPARALIK_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, GRPKOD, MYNKOD, MIKTAR, KKORAN, YENIORNEKLEMMIK
FROM dbo.TBLKKGRPARALIK WITH (NOLOCK);
```
