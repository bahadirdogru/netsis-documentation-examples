---
title: TBLFATUISK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuisk/
---

# TBLFATUISK

> OZEL KOD2 ILE DEĞİŞİM PARAMETRESİ İŞARETLENDİĞİNDE ÖZEL KOD2 İLE KAYDEDİLEN ISKONTO MUHASEBE HESAPLARINI TUTAR.

- **Modül:** [ENTEGRASYON](/veritabani/moduller/entegrasyon/)
- **Kolon sayısı:** 12

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `OZELKOD2DEGERI` | char(1) | evet |  | ozel kod 2 değerini gösterir. |
| 3 | `ALIS_HES_KOD_1` | TDBMUHKOD | evet |  | 1. alış iskonto hesabını gösterir. |
| 4 | `ALIS_HES_KOD_2` | TDBMUHKOD | evet |  | 2. alış iskonto hesabını gösterir. |
| 5 | `ALIS_HES_KOD_3` | TDBMUHKOD | evet |  | 3. alış iskonto hesabını gösterir. |
| 6 | `ALIS_HES_KOD_4` | TDBMUHKOD | evet |  | 4. alış iskonto hesabını gösterir. |
| 7 | `ALIS_HES_KOD_5` | TDBMUHKOD | evet |  | 5. alış iskonto hesabını gösterir. |
| 8 | `VERISK_HES_KOD_1` | TDBMUHKOD | evet |  | 1. satış iskonto hesabını gösterir. |
| 9 | `VERISK_HES_KOD_2` | TDBMUHKOD | evet |  | 2. satış iskonto hesabını gösterir. |
| 10 | `VERISK_HES_KOD_3` | TDBMUHKOD | evet |  | 3. satış iskonto hesabını gösterir. |
| 11 | `VERISK_HES_KOD_4` | TDBMUHKOD | evet |  | 4. satış iskonto hesabını gösterir. |
| 12 | `VERISK_HES_KOD_5` | TDBMUHKOD | evet |  | 5. satış iskonto hesabını gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLFATUISK_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATUISK_IND_1` | `SUBE_KODU+OZELKOD2DEGERI` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, OZELKOD2DEGERI, ALIS_HES_KOD_1, ALIS_HES_KOD_2, ALIS_HES_KOD_3, ALIS_HES_KOD_4
FROM dbo.TBLFATUISK WITH (NOLOCK);
```
