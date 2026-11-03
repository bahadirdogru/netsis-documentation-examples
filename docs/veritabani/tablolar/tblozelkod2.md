---
title: TBLOZELKOD2
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblozelkod2/
---

# TBLOZELKOD2

> ÖZEL KOD2 TANIMLAMA KAYITLARINI TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 5
- **Birincil anahtar:** `OZELKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `OZELKOD` | char(1) | hayır |  | Tanımlanan kod2 değerini gösterir. |
| 3 | `ACIKLAMA` | varchar(30) | evet |  | Tanımlanan kod2 değerine ait açıklamayı gösterir. |
| 4 | `HESAP_KODU` | TDBMUHKOD | evet |  | İlgili kod2 değeri için girilmesi gereken muhasebe hesap kodunu gösterir. |
| 5 | `REF_KOD` | TDBREFKOD | evet |  | Muhasebe parametrelerinde referans kodu parametresi işaretlendiğinde ilgili muhasebe hesap koduna ait referans kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLOZELKOD2_PKEY` | `OZELKOD` |
| FOREIGN KEY | `TBLOZELKOD2_FKEY` | `HESAP_KODU` |
| FOREIGN KEY | `TBLOZELKOD2_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLOZELKOD2_IND1` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLOZELKOD2_PKEY` | `OZELKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, OZELKOD, ACIKLAMA, HESAP_KODU, REF_KOD
FROM dbo.TBLOZELKOD2 WITH (NOLOCK);
```
