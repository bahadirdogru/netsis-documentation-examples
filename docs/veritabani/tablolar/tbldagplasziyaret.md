---
title: TBLDAGPLASZIYARET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagplasziyaret/
---

# TBLDAGPLASZIYARET

> ZIYARET BILGILERI GIRIS/IZLEME KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `ZAMAN, PLASIYERKOD, CARIKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ZAMAN` | TDBDATETIME | hayır |  | Ziyaret tarihini tutar. |
| 3 | `PLASIYERKOD` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutar. |
| 4 | `CARIKOD` | TDBCARIKOD | hayır |  | Ziyaret edilen cari kodunu tutar. |
| 5 | `BARKODOKUTTUMU` | char(1) | evet |  | Barkod okuttu mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 6 | `NEDENKOD` | TDBINTEGER | evet |  | Eger siparis alınamamıs ise neden kodunu tutar. |
| 7 | `MNOT` | TDBMEMO | evet |  | Cari notu alnını tutar. |
| 8 | `ZIYARETEDILDIMI` | char(1) | evet |  | Ziyaret edildi mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 9 | `SAAT` | TDBDATETIME | evet |  | Saat bilgisini tutar. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Plasiyer kodunu tutar. |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `C_YEDEK1` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `ZIYARETSIRA` | TDBINTEGER | hayır | `0` | Ziyaret sıra noyu tutar. |
| 25 | `DAGITIMSIRA` | TDBINTEGER | hayır | `0` | Dagıtım sıra noyu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGPLASZIYARET` | `ZAMAN, PLASIYERKOD, CARIKOD` |
| FOREIGN KEY | `TBLDGZIYBILGI_ISKODU_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGPLASZIYARET` | `ZAMAN, PLASIYERKOD, CARIKOD` | clustered, unique |
| `TBLDAGPLASZIYARET_IND_1` | `ISLETME_KODU, ZAMAN, PLASIYERKOD, CARIKOD` | nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ZAMAN, PLASIYERKOD, CARIKOD, BARKODOKUTTUMU, NEDENKOD
FROM dbo.TBLDAGPLASZIYARET WITH (NOLOCK);
```
