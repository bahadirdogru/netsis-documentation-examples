---
title: TBLCRMPAZALTAKT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmpazaltakt/
---

# TBLCRMPAZALTAKT

> PAZARLAMA AKTIVITE NOT KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `ALTAKTKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ALTAKTKOD` | TDBAKTIVITEKOD | hayır |  | Pazarlama aktivite not kodunu tutar. |
| 2 | `PAZAKTKOD` | TDBAKTIVITEKOD | hayır |  | Pazarlama aktivite kodunu tutar. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KULLANICI_NO` | TDBSMALLINT | evet |  | Aktivite sahibi kullanıcının kodunu tutar. |
| 5 | `BASTARIH` | TDBDATETIME | evet |  | Not kayıt tarihini tutar. |
| 6 | `BITTARIH` | TDBDATETIME | evet |  | Bitis tarihini tutar. |
| 7 | `ACIKLAMA` | varchar(255) | evet |  | Not kaydının acıklamasını tutar. |
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
| FOREIGN KEY | `TBLCRMPAZALTAKT_FKEY1` | `PAZAKTTIPKOD` |
| FOREIGN KEY | `TBLCRMPAZALTAKT_FKEY2` | `SUBE_KODU, KULLANICI_NO` |
| FOREIGN KEY | `TBLCRMPAZALTAKT_FKEY3` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCRMPAZALTAKT_PKEY` | `ALTAKTKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMPAZALTAKT_IND1` | `SUBE_KODU, ALTAKTKOD` | Nonclustered, Unique |
| `TBLCRMPAZALTAKT_IND2` | `SUBE_KODU, PAZAKTKOD` | Nonclustered |
| `TBLCRMPAZALTAKT_IND3` | `SUBE_KODU, KULLANICI_NO` | Nonclustered |
| `TBLCRMPAZALTAKT_IND4` | `SUBE_KODU, BASTARIH, BITTARIH` | Nonclustered |
| `TBLCRMPAZALTAKT_PKEY` | `ALTAKTKOD` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 ALTAKTKOD, PAZAKTKOD, SUBE_KODU, KULLANICI_NO, BASTARIH, BITTARIH
FROM dbo.TBLCRMPAZALTAKT WITH (NOLOCK);
```
