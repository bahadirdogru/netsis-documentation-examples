---
title: TBLCRMPAZAKT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmpazakt/
---

# TBLCRMPAZAKT

> PAZARLAMA AKTIVITE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 30
- **Birincil anahtar:** `PAZAKTKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PAZAKTKOD` | TDBAKTIVITEKOD | hayır |  | Pazarlama aktivite kodunu tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `PAZAKTTIPKOD` | TDBGRUPKOD | hayır |  | Pazarlama aktivite tipini tutar. |
| 4 | `KULLANICI_NO` | TDBSMALLINT | evet |  | Pazaralama aktivite sahibi kullanıcı kodunu tutar. |
| 5 | `DURUM` | char(1) | evet | `G` | Aktivite durum bilgisini tutar.Planlı=P;Plansız=S;Gecerli=G;Iptal=I;Tamamlandı=T degerini alır. |
| 6 | `BASTARIH` | TDBDATETIME | evet |  | Aktivitenin siteme kayıt yada baslangıc tarihini tutar. |
| 7 | `BITTARIH` | TDBDATETIME | evet |  | Aktivitenin bittigi tarihi tutar. |
| 8 | `BEKLENENBUTCE` | TDBFLOAT | evet | `0` | Elde edilmesi beklenen geliri tutar. |
| 9 | `PLANBUTCE` | TDBFLOAT | evet | `0` | Aktivitenin gerceklestirilebilmesi için plannan butceyi tutar. |
| 10 | `GERCEKBUTCE` | TDBFLOAT | evet | `0` | İlgili aktivitenin gerceklestirilmesi için odenen tutarı tutar. |
| 11 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DOVBEKLENENBUTCE` | TDBFLOAT | evet | `0` | Beklenen butceyi dovız cinsinden tutar. |
| 13 | `DOVPLANBUTCE` | TDBFLOAT | evet | `0` | Planlanan butceyi dovız cinsinden tutar. |
| 14 | `DOVGERCEKBUTCE` | TDBFLOAT | evet | `0` | Gercek butceyi dovız cınsınden tutar. |
| 15 | `ACIKLAMA` | varchar(255) | evet |  | Acıklama alanına girilen bilgileri tutar. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `PAZAKTISIM` | varchar(100) | evet |  | Pazaralama aktivite ismini tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMPAZAKT_FKEY1` | `PAZAKTTIPKOD` |
| FOREIGN KEY | `TBLCRMPAZAKT_FKEY2` | `SUBE_KODU, KULLANICI_NO` |
| FOREIGN KEY | `TBLCRMPAZAKT_FKEY3` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCRMPAZAKT_PKEY` | `PAZAKTKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMPAZAKT_IND1` | `SUBE_KODU, PAZAKTKOD` | Nonclustered, Unique |
| `TBLCRMPAZAKT_IND2` | `SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMPAZAKT_IND3` | `SUBE_KODU, KULLANICI_NO` | Nonclustered |
| `TBLCRMPAZAKT_IND4` | `SUBE_KODU, BASTARIH, BITTARIH` | Nonclustered |
| `TBLCRMPAZAKT_IND5` | `SUBE_KODU, DURUM` | Nonclustered |
| `TBLCRMPAZAKT_IND6` | `SUBE_KODU, PAZAKTTIPKOD` | Nonclustered |
| `TBLCRMPAZAKT_PKEY` | `PAZAKTKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PAZAKTKOD, SUBE_KODU, PAZAKTTIPKOD, KULLANICI_NO, DURUM, BASTARIH
FROM dbo.TBLCRMPAZAKT WITH (NOLOCK);
```
