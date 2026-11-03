---
title: TBLKARALISTE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkaraliste/
---

# TBLKARALISTE

> MÜŞTERİ ÇEKLERİ>KAYIT>KARA LİSTE KAYDI KAYITLARINI TUTAR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 6
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISIM` | varchar(100) | evet |  | Karşılıksız çek ya da prostestolu senet kaydı olan müşteri kodunu gösterir. |
| 2 | `SEHIR` | varchar(15) | evet |  | Müşterinin bulunduğu şehiri gösterir. |
| 3 | `ACIKLAMA` | varchar(50) | evet |  | Yapılan kayda ait varsa açıklamayı gösterir. |
| 4 | `INCKEYNO` | TDBINTEGER | hayır |  | Program tarafından atanan ve unique olan rakamları gösterir. |
| 5 | `TCKIMLIKNO` | varchar(15) | evet |  | Asıl borçlu Tc kimlik numarası ilgisi yer alır. |
| 6 | `VERGI_NUMARASI` | varchar(15) | evet |  | Asıl borçlu Vergi numarası bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKARALISTE_PKEY` | `INCKEYNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKARALISTE_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISIM, SEHIR, ACIKLAMA, INCKEYNO, TCKIMLIKNO, VERGI_NUMARASI
FROM dbo.TBLKARALISTE WITH (NOLOCK);
```
