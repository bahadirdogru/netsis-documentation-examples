---
title: TBLNFDMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnfdmas/
---

# TBLNFDMAS

> FORMBAZI GÜVENLİK KAYITLARINI TUTAR

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `RECID`
- **Identity:** `RECID` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `RECID` | int | hayır |  | Formbazı güvenlik kayıtları için program tarafından atanan değerleri gösterir. Bu rakamlar unique olmalıdır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı bilgileri alanında kullanıcı seçili ise kullanıcı kodunu, gurp kodu seçili ise grup kodunu gösterir. |
| 4 | `MODULNO` | smallint | hayır |  | Formbazı güvenlik yapılacak modülün numarasını gösterir. |
| 5 | `PROGNO` | smallint | hayır |  | Formbazı güvenlik yapılacak programın numarasını gösterir. |
| 6 | `FORMADI` | varchar(30) | hayır |  | Formbazı güvenlik yapılacak formun adını gösterir. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNFDMAS_PKEY` | `RECID` |
| FOREIGN KEY | `TBLNFDMAS_FKEY1` | `SUBE_KODU+KULLANICI_NO` |
| FOREIGN KEY | `TBLNFDMAS_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNFDMAS_IND1` | `SUBE_KODU+KULLANICI_NO+MODULNO+PROGNO+FORMADI` | Unique, Non-clustered |
| `TBLNFDMAS_PKEY` | `RECID` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 RECID, SUBE_KODU, KULLANICI_NO, MODULNO, PROGNO, FORMADI
FROM dbo.TBLNFDMAS WITH (NOLOCK);
```
