---
title: TBLSAYIMPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsayimprm/
---

# TBLSAYIMPRM

> SAYIM FARKINI SATIŞ HAREKET İŞLEME EKRANINDA MAHSUP OLUŞTURULSUN PARAMETRESİ İŞARETLENDİĞİNDE SAYIM FAZLASI MUHASEBE KAYITLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FAZLABORCDKOD` | char(1) | evet |  | Sayım faz. Borç detay kodu sahasına girilen detay kodunu gösterir. |
| 3 | `FAZLABORCMKOD` | TDBMUHKOD | evet |  | Sayım faz. Borç muhasebe kodu sahasına girilen muhasebe hesabını gösterir. |
| 4 | `FAZLAALACDKOD` | char(1) | evet |  | Sayım faz. alacak detay kodu sahasına girilen detay kodunu gösterir. |
| 5 | `FAZLAALACMKOD` | TDBMUHKOD | evet |  | Sayım faz. alacak muhasebe kodu sahasına girilen muhasebe kodunu gösterir. |
| 6 | `ESKIBORCDKOD` | char(1) | evet |  | Sayım eks. Borç deyat kodu sahasına girilen detay kodunu gösterir. |
| 7 | `ESKIBORCMKOD` | TDBMUHKOD | evet |  | Sayım eks. Borç muhasebe kodu sahasına girilen muhasebe kodunu gösterir. |
| 8 | `ESKIALACDKOD` | char(1) | evet |  | Sayım eks. alacak deyat kodu sahasına girilen detay kodunu gösterir. |
| 9 | `ESKIALACMKOD` | TDBMUHKOD | evet |  | Sayım eks. alacak muhasebe kodu sahasına girilen muhasebe kodunu gösterir. |
| 10 | `YEDEK` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSAYIMPRM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSAYIMPRM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSAYIMPRM_PKEY` | `ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, FAZLABORCDKOD, FAZLABORCMKOD, FAZLAALACDKOD, FAZLAALACMKOD, ESKIBORCDKOD
FROM dbo.TBLSAYIMPRM WITH (NOLOCK);
```
