---
title: TBLREFERANS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblreferans/
---

# TBLREFERANS

> İŞLEM TİPİ TANIMLAMA EKRANINDAKİ KAYITLARI TUTAR

- **Modül:** [ENTEGRASYON](/veritabani/moduller/entegrasyon/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `ENTEG_REF_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ENTEG_REF_KOD` | varchar(8) | hayır |  | İşlem tipi tanımlamalarında işlem kodu alanına girilen kodu gösterir. |
| 3 | `ENTEG_ISIM` | varchar(35) | evet |  | İşlem tipi tanımlamalarında işlem kodu alanına girilen kodun açıklamasını gösterir. |
| 4 | `YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `YEDEK5` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK6` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLEREFERANSPKEY` | `ENTEG_REF_KOD` |
| FOREIGN KEY | `TBLREFERANS_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLEREFERANSPKEY` | `ENTEG_REF_KOD` | Clustered |
| `TBLREFERANS_IND_1` | `ENTEG_REF_KOD` | Unique, Non-clustered |
| `TBLREFERANS_IND_2` | `ENTEG_ISIM` | Unique, Non-clustered |
| `TBLREFERANS_IND_3` | `ISLETME_KODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ENTEG_REF_KOD, ENTEG_ISIM, YEDEK1, YEDEK2, YEDEK3
FROM dbo.TBLREFERANS WITH (NOLOCK);
```
