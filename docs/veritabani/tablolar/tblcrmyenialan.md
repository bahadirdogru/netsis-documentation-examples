---
title: TBLCRMYENIALAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmyenialan/
---

# TBLCRMYENIALAN

> SERBEST TANIMLAMALARI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `ALANADI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ALANADI` | varchar(30) | hayır |  | Alan adını tutar. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ALANTIPI` | TDBSMALLINT | hayır |  | Alan tipi;Karakter=0;Karakter dizesi=1;Tamsayı=2;Ondalık sayı=3;Bayt=4;Tarih=5 degerini alır. |
| 4 | `BASLIK` | varchar(100) | evet |  | Baslık alanını tutar. |
| 5 | `COMPONENTTIP` | TDBINTEGER | hayır |  | Bilesen tipi Kombo Secim Alanı=0;Yazı Alanı=1;Onay Kutusu=2;Coklu Onay Grubu=3;Metin Alanı=4 degerini alır. |
| 6 | `ONDEGER` | varchar(200) | evet |  | Ondeger alanını tutar. |
| 7 | `UZUNLUK` | TDBINTEGER | evet |  | Uzunluk alanını tutar. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMYENIALAN_FKEY1` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLCRMYENIALAN_PKEY` | `ALANADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMYENIALAN_IND1` | `ISLETME_KODU, ALANADI` | Nonclustered, Unique |
| `TBLCRMYENIALAN_IND2` | `ISLETME_KODU, BASLIK` | Nonclustered |
| `TBLCRMYENIALAN_IND3` | `ISLETME_KODU, COMPONENTTIP` | Nonclustered |
| `TBLCRMYENIALAN_IND4` | `ISLETME_KODU, ALANTIPI` | Nonclustered |
| `TBLCRMYENIALAN_PKEY` | `ALANADI` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 ALANADI, ISLETME_KODU, ALANTIPI, BASLIK, COMPONENTTIP, ONDEGER
FROM dbo.TBLCRMYENIALAN WITH (NOLOCK);
```
