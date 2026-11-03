---
title: TBLACIKREC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblacikrec/
---

# TBLACIKREC

> Rapor modulu Ek analizler içerisinde Açık Reçete Listesinin ek analiz hazırlığı çalıştırıldığında oluşan kayıtları tutan tablodur.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 14

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ANAMAMUL_KODU` | TDBSTOKKOD | hayır |  | Ana mamul kodunu tutan sahadır. |
| 3 | `SEVIYE` | TDBSMALLINT | evet |  | Seviye sahasıdır. |
| 4 | `SIRA` | TDBSMALLINT | hayır |  | Sıra numarasını tutan sahadır. |
| 5 | `RECETEMIKTAR` | TDBFLOAT | evet | `0` | Recete miktarını tutan sahadır. |
| 6 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Mamul kodunu tutan sahadır. |
| 7 | `HAM_KODU` | TDBSTOKKOD | hayır |  | Hammadde kodunu tutan sahadır. |
| 8 | `KAYIT_TARIHI` | TDBDATETIME | evet |  | Kayıt tarihini tutan sahadır. |
| 9 | `GEC_FLAG` | TDBBYTE | evet | `0` | Geçerlilik olup olmadığını belirleyen sahadır. |
| 10 | `SETNO` | varchar(25) | evet | `0` | Reçete bilgileri-2 sekmesinde geçerlilik bilgileri alanındaki revizyon numarasını gösterir. |
| 11 | `OPNO` | varchar(8) | hayır |  | Operasyon numarası |
| 12 | `ANAMAMULYAPKOD` | varchar(15) | evet | `NULL` | Ana mamul kodunu tutan sahadır. |
| 13 | `MAMULYAPKOD` | varchar(15) | evet | `NULL` | Mamul yapılandırma kodunu tutan sahadır. |
| 14 | `HAMYAPKOD` | varchar(15) | evet | `NULL` | Hammadde yapılandırma kodunu tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLACIKREC_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLACIKREC_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `ACIKREC_IND` | `ISLETME_KODU, SUBE_KODU, ANAMAMUL_KODU, ANAMAMULYAPKOD, SIRA` | Unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ANAMAMUL_KODU, SEVIYE, SIRA, RECETEMIKTAR, MAMUL_KODU
FROM dbo.TBLACIKREC WITH (NOLOCK);
```
