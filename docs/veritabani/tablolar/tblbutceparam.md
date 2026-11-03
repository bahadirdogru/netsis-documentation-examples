---
title: TBLBUTCEPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutceparam/
---

# TBLBUTCEPARAM

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DEVIR_KDV_KODU` | TDBMUHKOD | evet |  |  |
| 3 | `DEVIR_KDV_DEGER` | TDBFLOAT | evet |  |  |
| 4 | `BIL_NAKIT_HESAP_KODU` | TDBMUHKOD | evet |  |  |
| 5 | `BORC_BIL_TAKIP_HES_KODU` | TDBMUHKOD | evet |  |  |
| 6 | `ALACAK_BIL_TAKIP_HES_KODU` | TDBMUHKOD | evet |  |  |
| 7 | `BORC_KDV_HES_KODU` | TDBMUHKOD | evet |  |  |
| 8 | `BORC_KDV_ORAN` | TDBFLOAT | evet |  |  |
| 9 | `ALACAK_KDV_HES_KODU` | TDBMUHKOD | evet |  |  |
| 10 | `ALACAK_KDV_ORAN` | TDBFLOAT | evet |  |  |
| 11 | `BORC_ODEME_PLAN_KODU` | varchar(35) | evet |  |  |
| 12 | `ALACAK_ODEME_PLAN_KODU` | varchar(35) | evet |  |  |
| 13 | `REPO_FAIZ_ORANI` | TDBFLOAT | evet |  |  |
| 14 | `KREDI_FAIZ_ORANI` | TDBFLOAT | evet |  |  |
| 15 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCEPARAM_FKEY_1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCEPARAM_IND_1` | `ISLETME_KODU` | nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DEVIR_KDV_KODU, DEVIR_KDV_DEGER, BIL_NAKIT_HESAP_KODU, BORC_BIL_TAKIP_HES_KODU, ALACAK_BIL_TAKIP_HES_KODU
FROM dbo.TBLBUTCEPARAM WITH (NOLOCK);
```
