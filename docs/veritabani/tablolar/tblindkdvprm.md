---
title: TBLINDKDVPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblindkdvprm/
---

# TBLINDKDVPRM

> Açıklama yok.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `ISLETME_KODU, MODULTIPI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MODULTIPI` | char(1) | hayır |  | Modul tipinin tutulduğu sahadır |
| 3 | `GENELKISIT` | text | evet |  | Genel kısıt bilgisinin tutulduğu sahadır |
| 4 | `KDVTUTARKISIT` | text | evet |  | KDV tutar kısıt bilgisinin tutulduğu sahadır |
| 5 | `KDVMATRAHKISIT` | text | evet |  | KDV matrah kısıt bilgisinin tutulduğu sahadır |
| 6 | `SIRA` | text | evet |  | Sıra no bilgisini tutan sahadır. |
| 7 | `GRUP` | text | evet |  | Grup bilgisini tutan sahadır. |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `MALCINSSTR` | varchar(200) | evet |  |  |
| 25 | `KDVLIMATRAH` | char(1) | evet | `E` |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLINDKDVPRM_FKEY1` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLINDKDVPRM_PKEY` | `ISLETME_KODU, MODULTIPI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLINDKDVPRM_PKEY` | `ISLETME_KODU, MODULTIPI` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MODULTIPI, GENELKISIT, KDVTUTARKISIT, KDVMATRAHKISIT, SIRA
FROM dbo.TBLINDKDVPRM WITH (NOLOCK);
```
