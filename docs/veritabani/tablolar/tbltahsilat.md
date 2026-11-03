---
title: TBLTAHSILAT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltahsilat/
---

# TBLTAHSILAT

> HIZLI TAHSİLAT KAYITLARI EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SOZKODU` | TDBBELGENO | evet |  | Tahsilat şekli alanına girilen kodu gösterir. |
| 3 | `TAKSITSAY` | TDBINTEGER | evet |  | Taksit sayısını gösterir. |
| 4 | `DOVTIP` | TDBSMALLINT | evet |  | Döviz tipini gösterir. |
| 5 | `DOVTUTAR` | TDBFLOAT | evet |  | Döviz tutarını gösterir. |
| 6 | `KUR` | TDBFLOAT | evet |  | Döviz kurunu gösterir. |
| 7 | `TUTAR` | TDBFLOAT | evet |  | Tutar alanına girilen toplam tutarı gösterir. |
| 8 | `KARTNO` | varchar(50) | evet |  | Kart numarasını gösterir. |
| 9 | `KRTSOZMASINCKEYNO` | TDBINTEGER | evet |  | Sozlesme inckey numarasını tutan sahadır. |
| 10 | `KRTSOZTRAINCKEYNO` | TDBINTEGER | evet |  | Sozlesme inckey numarasını tutan sahadır. |
| 11 | `CRAPKOD1` | char(1) | evet |  | Cari rapor kodu sahasına girilen kodu gösterir. |
| 12 | `CRAPKOD2` | varchar(15) | evet |  | Cari rapor kodu2 sahasına girilen kodu gösterir. |
| 13 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `REFERANS_KODU` | TDBREFKOD | evet |  | Referans kodunu gösterir. |
| 16 | `ENTEGREFKEY` | TDBENTKEY | evet |  | Program tarafından verilen kullanıcının müdahale edemediği anahtar kodu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TAHSILAT_PKEY` | `INCKEYNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TAHSILAT_PKEY` | `INCKEYNO` | Clustered |
| `TBLTAHSILAT_IND_1` | `ENTEGREFKEY` | Non-unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SOZKODU, TAKSITSAY, DOVTIP, DOVTUTAR, KUR
FROM dbo.TBLTAHSILAT WITH (NOLOCK);
```
