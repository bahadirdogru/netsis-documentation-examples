---
title: TBLTMPDAGIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltmpdagit/
---

# TBLTMPDAGIT

> İŞLEMLER>YARDIMCI SERVİS DAĞITIM İŞLEMLERİ> DAĞITIM FİŞİ OLUŞTURMA EKRANINDA GİRİLEN KAYITLAR İÇİN GEÇİCİ OLARAK BU TABLODA TUTULUR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DAGITIMKODU` | varchar(35) | evet |  | Dağıtım tablosundaki dağıtım kodunu gösterir. |
| 3 | `DAGITIMREFKOD` | TDBREFKOD | evet |  | Dağıtım tablosundaki dağıtım koduna ait varsa referans kodunu gösterir. |
| 4 | `DAGITIMPROJE` | TDBPROJEKOD | evet |  | Dağıtım tablosundaki dağıtım koduna ait varsa proje kodunu gösterir. |
| 5 | `ALACAKKODU` | TDBMUHKOD | evet |  | Dağıtım tablosundaki alacak kodunu gösterir. |
| 6 | `ALACAKREFKOD` | TDBREFKOD | evet |  | Dağıtım tablosundaki alacak kodununa ait varsa referans numarasını gösterir. |
| 7 | `ALACAKPROJE` | TDBPROJEKOD | evet |  | Dağıtım tablosundaki alacak kodununa ait varsa proje kodunu gösterir. |
| 8 | `TUTAR` | TDBFLOAT | evet | `0` | Alacak koduna aktarılan tutarı gösterir. |
| 9 | `FIRMADOVTUT` | TDBFLOAT | evet | `0` | Dağıtım tablosunda girilen orana göre kalan tutarı gösterir. |
| 10 | `ACIKLAMA2` | varchar(35) | evet |  | Dağıtım tablosundaki oran alanına girilen oranı gösterir. |
| 11 | `TUTARVADE` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `TUTARDZLT` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `FIRMADOVTUTVADE` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `FIRMADOVTUTDZLT` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTMPDAGIT_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLTMPDAGIT_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTMPDAGIT_IND_1` | `SUBE_KODU+DAGITIMKODU+DAGITIMREFKOD+DAGITIMPROJE+ALACAKKODU+ALACAKREFKOD+ALACAKPROJE` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, DAGITIMKODU, DAGITIMREFKOD, DAGITIMPROJE, ALACAKKODU, ALACAKREFKOD
FROM dbo.TBLTMPDAGIT WITH (NOLOCK);
```
