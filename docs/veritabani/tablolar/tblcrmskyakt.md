---
title: TBLCRMSKYAKT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskyakt/
---

# TBLCRMSKYAKT

> MUSTERI SIKAYET AKTIVITE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `AKTIVITE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AKTIVITE_KODU` | TDBSKYAKTIVITEKOD | hayır |  | Sikayet aktivite kodunu tutar. |
| 2 | `SIKAYET_KODU` | TDBSIKAYETKOD | hayır |  | Sikayet kodunu tutar. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KONU` | varchar(100) | evet |  | Sikayet konusunu tutar. |
| 5 | `TARIH` | TDBDATETIME | evet | `getdate()` | Aktivitenin yapıldıgı tarihi tutar. |
| 6 | `ACIKLAMA` | text | evet |  | Aktivite acıklamasını tutar. |
| 7 | `DURUMU` | char(1) | evet | `A` | Acık=A ;Kapalı=K degerini alır. |
| 8 | `AKTIVITETIPI` | TDBGRUPKOD | evet |  | Aktivite tipini tutar. |
| 9 | `MUSTERITEMSILCISI` | TDBSMALLINT | hayır |  | Aktiviteyi yapan musteri temsilcisi bilgisini tutar. |
| 10 | `SURETIPI` | TDBBYTE | evet | `1` | Zaman birimini tutar;Dakika=1;Saat=2;Gun=3 degerini alır. |
| 11 | `SURE` | TDBINTEGER | evet | `0` | Yapılan aktivitenin suresini tutar. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYAKT_FKEY1` | `SIKAYET_KODU` |
| FOREIGN KEY | `TBLCRMSKYAKT_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCRMSKYAKT_FKEY3` | `AKTIVITETIPI` |
| FOREIGN KEY | `TBLCRMSKYAKT_FKEY4` | `SUBE_KODU, MUSTERITEMSILCISI` |
| PRIMARY KEY | `TBLCRMSKYAKT_PKEY` | `AKTIVITE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYAKT_IND_1` | `SUBE_KODU, SIKAYET_KODU, DURUMU` | Nonclustered |
| `TBLCRMSKYAKT_IND_2` | `SUBE_KODU, MUSTERITEMSILCISI, DURUMU, TARIH` | Nonclustered |
| `TBLCRMSKYAKT_IND_3` | `SUBE_KODU, TARIH, DURUMU` | Nonclustered |
| `TBLCRMSKYAKT_IND_4` | `SUBE_KODU, AKTIVITETIPI, DURUMU` | Nonclustered |
| `TBLCRMSKYAKT_IND_5` | `SUBE_KODU, KONU, DURUMU` | Nonclustered |
| `TBLCRMSKYAKT_PKEY` | `AKTIVITE_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 AKTIVITE_KODU, SIKAYET_KODU, SUBE_KODU, KONU, TARIH, ACIKLAMA
FROM dbo.TBLCRMSKYAKT WITH (NOLOCK);
```
