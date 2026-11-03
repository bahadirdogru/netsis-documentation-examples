---
title: TBLKKDEP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkdep/
---

# TBLKKDEP

> KAYIT>KALİTE KONTROL DEPARTMAN GİRİŞİ KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 28

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | varchar(8) | hayır |  | Departman kodunu gösterir. |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 3 | `DEPARTMANTIPI` | varchar(8) | hayır |  | Oran(%)ı gösterir. |
| 4 | `SUBE_KODU` | TDBSMALLINT | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `SERIKARAKTER` | char(1) | evet | `A` | kullanıcı tarafından girilen seri karakterini gösterir. |
| 6 | `DEPOKODU` | TDBSMALLINT | evet | `0` | Depo Kodunu gösterir. |
| 7 | `REDDEPOKODU` | TDBSMALLINT | evet | `0` | Red Depo Kodunu gösterir. |
| 8 | `KABULDEPOKODU` | TDBSMALLINT | evet | `0` | Kabul Depo Kodunu gösterir. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `HURDADEPOKODU` | TDBSMALLINT | evet |  | Hurda Kabul Depo Kodunu gösterir. |
| 24 | `SKABULDEPOKODU` | TDBSMALLINT | evet |  | Şartlı kabul depo kodu bilgisi yer alır. |
| 25 | `KABULSERIKARAKTER` | char(1) | evet |  | Kabul seri karakteri yer alır. |
| 26 | `REDSERIKARAKTER` | char(1) | evet |  | Red seri karakteri bilgisi yer alır. |
| 27 | `HURDASERIKARAKTER` | char(1) | evet |  | Hurda seri karakteri bilgisi yer alır. |
| 28 | `SKABULSERIKARAKTER` | char(1) | evet |  | Şartlı kabul seri karakteri bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKDEP_IND1` | `SUBE_KODU+DEPARTMANTIPI` | Non-unique, Non-clustered |
| `TBLKKDEP_IND2` | `ACIKLAMA` | Non-unique, Non-clustered |
| `TBLKKDEPPKEY` | `KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, ACIKLAMA, DEPARTMANTIPI, SUBE_KODU, SERIKARAKTER, DEPOKODU
FROM dbo.TBLKKDEP WITH (NOLOCK);
```
