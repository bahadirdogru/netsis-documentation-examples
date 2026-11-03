---
title: TBLKASAEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkasaek/
---

# TBLKASAEK

> Açıklama yok.

- **Modül:** [KASA](/veritabani/moduller/kasa/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `INCKEY_NO`
- **Identity:** `INCKEY_NO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEY_NO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KSMAS_KOD` | varchar(8) | hayır |  | Kasa Kodunu gösterir. |
| 4 | `KASATARIH` | TDBDATETIME | hayır |  | Kasa tarihini gösterir |
| 5 | `KASAIO` | char(1) | hayır |  | Gelir gider ise G - Tahsil ise C |
| 6 | `KASASIRA` | TDBINTEGER | hayır |  | Kasa sıra numarasını tutar |
| 7 | `FTSERI_NO` | char(2) | evet |  | Fatura seri numarasını tutar |
| 8 | `CARIUNVAN` | varchar(100) | evet |  | Cari ünvan kodunu tutar |
| 9 | `CARIKIMLIKVERGI_NO` | varchar(15) | evet |  | Cari kimlik numarasını gösterir |
| 10 | `MALCINS` | TDBMEMO | evet |  |  |
| 11 | `MALMIKTAR` | TDBMEMO | evet |  | Mal miktar bilgisini tutar |
| 12 | `GGB_NO` | varchar(16) | evet |  | Gümrükten çıkış beyaname numarasını gösterir |
| 13 | `ARACIKIMLIKVERGI_NO` | varchar(15) | evet |  | Aracın kimlik vergi numarasını tutan sahadır |
| 14 | `KDVDONEMI` | varchar(6) | evet |  | KDV dönemi bilgisini tutar |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `VERGI_DAIRESI` | varchar(50) | evet |  | Vergi dairesi bilgini gösterir |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKASAEK_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLKASAEK_PKEY` | `INCKEY_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKASAEK_IND_1` | `KSMAS_KOD, KASATARIH, KASAIO, KASASIRA` | nonclustered, unique |
| `TBLKASAEK_PKEY` | `INCKEY_NO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEY_NO, SUBE_KODU, KSMAS_KOD, KASATARIH, KASAIO, KASASIRA
FROM dbo.TBLKASAEK WITH (NOLOCK);
```
