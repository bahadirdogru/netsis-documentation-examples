---
title: TBLMUPLANEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuplanek/
---

# TBLMUPLANEK

> MUHASEBE HESAP PLANI EKRANINDA EK BİLGİLER SEKMESİNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 30
- **Birincil anahtar:** `KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOD` | TDBMUHKOD | hayır |  | Hesap planı ekranında seviye takibine göre tanımlanan muhasebe hesap kodunu gösterir. |
| 2 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KULL1N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 7 | `KULL2N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 8 | `KULL3N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 9 | `KULL4N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 10 | `KULL5N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 11 | `KULL6N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 12 | `KULL7N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 13 | `KULL8N` | TDBFLOAT | evet | `0` | Hesap planı ekranında ekbilgiler sekmesinde sayısal sahalara yazılanları gösterir. |
| 14 | `KULL1S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 15 | `KULL2S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 16 | `KULL3S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 17 | `KULL4S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 18 | `KULL5S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 19 | `KULL6S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 20 | `KULL7S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 21 | `KULL8S` | varchar(35) | evet |  | Hesap planı ekranında ekbilgiler sekmesinde alfasayısal sahalara yazılanları gösterir. |
| 22 | `YEDEK1` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK2` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK9` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUPLANEK_PKEY` | `KOD` |
| FOREIGN KEY | `TBLMUPLANEK_FKEY` | `HESAP_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUPLANEK_IND_K1N` | `KULL1N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K1S` | `KULL1S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K2N` | `KULL2N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K2S` | `KULL2S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K3N` | `KULL3N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K3S` | `KULL3S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K4N` | `KULL4N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K4S` | `KULL4S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K5N` | `KULL5N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K5S` | `KULL5S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K6N` | `KULL6N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K6S` | `KULL6S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K7N` | `KULL7N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K7S` | `KULL7S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K8N` | `KULL8N+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_IND_K8S` | `KULL8S+KOD` | Unique, Non-clustered |
| `TBLMUPLANEK_PKEY` | `KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOD, KAYITTARIHI, KAYITYAPANKUL, DUZELTMETARIHI, DUZELTMEYAPANKUL, KULL1N
FROM dbo.TBLMUPLANEK WITH (NOLOCK);
```
