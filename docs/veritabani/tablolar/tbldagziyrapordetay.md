---
title: TBLDAGZIYRAPORDETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagziyrapordetay/
---

# TBLDAGZIYRAPORDETAY

> DETAYLI ZIYARET RAPORU KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `ZTARIH, PLSKOD, CARIKOD, ISLEMKOD, BELGENO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ZTARIH` | TDBDATETIME | hayır |  | Ziyaret tarihini tutar. |
| 3 | `PLSKOD` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutar. |
| 4 | `CARIKOD` | TDBCARIKOD | hayır |  | Ziyaret edilen cari kodunu tutar. |
| 5 | `ISLEMKOD` | TDBINTEGER | hayır |  | Yapılan islemin kodunu tutar. |
| 6 | `BELGENO` | varchar(50) | hayır |  | Belge noyu tutar. |
| 7 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisini tutar. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGZIYRAPORDETAY` | `ZTARIH, PLSKOD, CARIKOD, ISLEMKOD, BELGENO` |
| FOREIGN KEY | `TBLDGZIYRAPOR_ISKODU_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGZIYRAPORDETAY` | `ZTARIH, PLSKOD, CARIKOD, ISLEMKOD, BELGENO` | clustered, unique |
| `TBLDAGZIYRAPORDETAY_IND_1` | `ISLETME_KODU, ZTARIH, PLSKOD, CARIKOD, ISLEMKOD, BELGENO` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ZTARIH, PLSKOD, CARIKOD, ISLEMKOD, BELGENO
FROM dbo.TBLDAGZIYRAPORDETAY WITH (NOLOCK);
```
