---
title: TBLDEKOTRAEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekotraek/
---

# TBLDEKOTRAEK

> Açıklama yok.

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `INCKEY_NO`
- **Identity:** `INCKEY_NO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEY_NO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `DEKSERI_NO` | varchar(2) | hayır |  | Dekont seri numarasını gösterir |
| 4 | `DEKDEKONT_NO` | TDBINTEGER | hayır |  | Dekont numarasını gösterir |
| 5 | `DEKSIRA_NO` | TDBINTEGER | hayır |  | Dekont sıra numarasını gösterir |
| 6 | `FTSERI_NO` | char(2) | evet |  | Fatura seri numarasını gösterir |
| 7 | `CARIUNVAN` | varchar(100) | evet |  | Cari ünvan kodunu tutar |
| 8 | `CARIKIMLIKVERGI_NO` | varchar(15) | evet |  | Cari kimlik numarasını gösterir |
| 9 | `MALCINS` | TDBMEMO | evet |  |  |
| 10 | `MALMIKTAR` | TDBMEMO | evet |  | Mal miktar bilgisini tutar |
| 11 | `GGB_NO` | varchar(16) | evet |  | Gümrükten çıkış beyaname numarasını gösterir |
| 12 | `ARACIKIMLIKVERGI_NO` | varchar(15) | evet |  | Araç kimlik vergi numarasını tutan sahadır. |
| 13 | `KDVDONEMI` | varchar(6) | evet |  | KDV dönemi bilgisini tıtar |
| 14 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `VERGI_DAIRESI` | varchar(50) | evet |  | Vergi dairesi bilgisini tutar |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDEKOTRAEK_FKEY1` | `SUBE_KODU, DEKSERI_NO, DEKDEKONT_NO, DEKSIRA_NO` |
| FOREIGN KEY | `TBLDEKOTRAEK_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLDEKOTRAEK_PKEY` | `INCKEY_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKOTRAEK_IND1` | `SUBE_KODU, DEKSERI_NO, DEKDEKONT_NO, DEKSIRA_NO` | nonclustered, unique |
| `TBLDEKOTRAEK_PKEY` | `INCKEY_NO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEY_NO, SUBE_KODU, DEKSERI_NO, DEKDEKONT_NO, DEKSIRA_NO, FTSERI_NO
FROM dbo.TBLDEKOTRAEK WITH (NOLOCK);
```
