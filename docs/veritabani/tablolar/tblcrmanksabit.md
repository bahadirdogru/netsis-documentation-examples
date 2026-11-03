---
title: TBLCRMANKSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmanksabit/
---

# TBLCRMANKSABIT

> ANKET SABIT BILGILERINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `ANKETKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ANKETKODU` | TDBANKETKODU | hayır |  | Hazırlanan ankeltin kodunu tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KONU` | varchar(100) | evet |  | Tanımlanan anketin konusunu tutar. |
| 5 | `GRUPKODU` | TDBGRUPKOD | evet |  | Tanımlanan anketin kategorisini tutar. |
| 6 | `BASTARIH` | TDBDATETIME | evet |  | Tanımlanan anketin gecerli olacagı baslangıc tarihi. |
| 7 | `BITTARIH` | TDBDATETIME | evet |  | Tanımlanan anketin gecerli olacagı bitis tarihi. |
| 8 | `ACIKLAMA` | text | evet |  | Anket tanımlamada acıklma alanına girilen bilgiyi tutar. |
| 9 | `DURUM` | char(1) | evet | `U` | Duzeltiliyor=U;Inaktif=I;Aktif=A degeri ile tutuluyor. |
| 10 | `WEBKULLANIM` | char(1) | evet | `H` | E-Netsis'in web sitesinde gorunecekmi bilgisini tutar. |
| 11 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `ANKETHTMLBASLIK` | text | evet |  | Hazırlanan baslıgı tutar. |
| 13 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANKSABIT_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCRMANKSABIT_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCRMANKSABIT_FKEY3` | `GRUPKODU` |
| FOREIGN KEY | `TBLCRMANKSABIT_FKEY4` | `PROJE_KODU` |
| PRIMARY KEY | `TBLCRMANKSABIT_PKEY` | `ANKETKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANKSABIT_IND_1` | `ISLETME_KODU, SUBE_KODU, WEBKULLANIM, DURUM, BASTARIH, BITTARIH` | Nonclustered |
| `TBLCRMANKSABIT_IND_2` | `ISLETME_KODU, SUBE_KODU, GRUPKODU, DURUM` | Nonclustered |
| `TBLCRMANKSABIT_IND_3` | `ISLETME_KODU, SUBE_KODU, PROJE_KODU, DURUM` | Nonclustered |
| `TBLCRMANKSABIT_IND_4` | `ISLETME_KODU, SUBE_KODU, KONU` | Nonclustered |
| `TBLCRMANKSABIT_IND_5` | `ISLETME_KODU, SUBE_KODU, DURUM` | Nonclustered |
| `TBLCRMANKSABIT_IND_6` | `ISLETME_KODU, SUBE_KODU, ONAYTIPI` | Nonclustered |
| `TBLCRMANKSABIT_IND_7` | `ISLETME_KODU, SUBE_KODU, ONAYNUM` | Nonclustered |
| `TBLCRMANKSABIT_PKEY` | `ANKETKODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ANKETKODU, SUBE_KODU, ISLETME_KODU, KONU, GRUPKODU, BASTARIH
FROM dbo.TBLCRMANKSABIT WITH (NOLOCK);
```
