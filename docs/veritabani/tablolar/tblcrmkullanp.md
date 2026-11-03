---
title: TBLCRMKULLANP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmkullanp/
---

# TBLCRMKULLANP

> KULLANICI PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `CRMKULKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CRMKULKOD` | TDBCRMKULKOD | hayır |  | CRM kullanıcı kodunu tutar. |
| 3 | `KULLANICI_NO` | TDBSMALLINT | evet |  | Kullanıcı kodunu tutar. |
| 4 | `KULLANICI_ISIM` | varchar(100) | evet |  | Kullanıcı ismini tutar. |
| 5 | `YONETICIKOD` | TDBCRMKULKOD | evet |  | Kullanıcının bağlı oldugu yonetici kodunu tutar. En ust seviyedeki kullanıcı icin bostur. |
| 6 | `HARSATORG` | char(1) | evet | `H` | Harıcı satıs organizayonundan bir kullanıcı ise E, degil ise H degerini alır. |
| 7 | `PLASIYERKODU` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |
| 8 | `FIRMAADI` | varchar(100) | evet |  | Harıcı satıs organizaysonuna dahil olan kullanıcının calıstıgı firma adını tutar. |
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

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMKULLANP_FKEY1` | `SUBE_KODU, KULLANICI_NO` |
| FOREIGN KEY | `TBLCRMKULLANP_FKEY2` | `YONETICIKOD` |
| FOREIGN KEY | `TBLCRMKULLANP_FKEY3` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCRMKULLANP_PKEY` | `CRMKULKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMKULLANP_IND1` | `SUBE_KODU, YONETICIKOD, CRMKULKOD` | Nonclustered |
| `TBLCRMKULLANP_IND2` | `SUBE_KODU, KULLANICI_NO` | Nonclustered |
| `TBLCRMKULLANP_IND3` | `SUBE_KODU, KULLANICI_ISIM` | Nonclustered |
| `TBLCRMKULLANP_IND4` | `SUBE_KODU, FIRMAADI` | Nonclustered |
| `TBLCRMKULLANP_IND5` | `SUBE_KODU, HARSATORG` | Nonclustered |
| `TBLCRMKULLANP_IND6` | `CRMKULKOD, PLASIYERKODU` | Nonclustered |
| `TBLCRMKULLANP_PKEY` | `CRMKULKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, CRMKULKOD, KULLANICI_NO, KULLANICI_ISIM, YONETICIKOD, HARSATORG
FROM dbo.TBLCRMKULLANP WITH (NOLOCK);
```
