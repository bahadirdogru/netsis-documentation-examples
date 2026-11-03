---
title: TBLPROJEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprojek/
---

# TBLPROJEK

> İŞLETME KODU VE PROJE KODLARINI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 2
- **Birincil anahtar:** `PROJEKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETMEKODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PROJEKODU` | TDBPROJEKOD | hayır |  | Yardımcı programlardan proje kodu uygulaması parametresi işaretlendiğinde proje sabit tanımları ekranında proje kodu sahasına girilen kodu gösterir. İşletmelerde ortak bulunan 99999999 nolu proje kodunu göstermez. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PROJEEK_PKEY` | `PROJEKODU` |
| FOREIGN KEY | `TBLPROJEEK_FKE1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLPROJEEK_FKEY2` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PROJEEK_PKEY` | `PROJEKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETMEKODU, PROJEKODU
FROM dbo.TBLPROJEK WITH (NOLOCK);
```
