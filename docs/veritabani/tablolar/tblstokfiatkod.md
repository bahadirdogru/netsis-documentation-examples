---
title: TBLSTOKFIATKOD
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokfiatkod/
---

# TBLSTOKFIATKOD

> STOK PARAMETRELERİNDE ÖZEL FİYAT SİSTEMİ PARAMETRESİ AÇIK OLDUĞUNDA FİYAT KODU TANIMLAMALARINDA GİRİLEN KAYITLARIN TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 7
- **Birincil anahtar:** `FIYATKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FIYATKODU` | TDBGRUPKOD | hayır |  | Stok kartında fiyatlar sekmesinde bulunan fiyat kodu alanına girilen değeri gösterir. Fiyat kodu tanımlamalarından tanımlanır. |
| 3 | `ACIKLAMA` | varchar(30) | evet |  | Tanımlanan fiyat kodunun açıklamasını gösterir. |
| 4 | `SORUMLUGRUP` | TDBGRUPKOD | evet |  | Tanımlanmış olan fiyat grubundan sorumlu olacak, sorumlu grubun girileceği sahadır. |
| 5 | `KARMARJI` | TDBFLOAT | evet | `0` | Yüzde olarak girilen kar marjını gösterir. |
| 6 | `ALT_UST` | char(1) | evet | `A` | Alt fiyat seçili ise 'A', üst fiyat seçili ise 'U' değerini gösterir. |
| 7 | `SATISFIATKDVDAHIL` | char(1) | evet | `H` | Satış fiyatına kdv dahil mi parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKFIATKOD_PKEY` | `FIYATKODU` |
| FOREIGN KEY | `TBLSTOKFIATKOD_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKFIATKOD_IND_1` | `ISLETME_KODU+FIYAT_KODU` | Unique, Non-clustered |
| `TBLSTOKFIATKOD_PKEY` | `FIYAT_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, FIYATKODU, ACIKLAMA, SORUMLUGRUP, KARMARJI, ALT_UST
FROM dbo.TBLSTOKFIATKOD WITH (NOLOCK);
```
