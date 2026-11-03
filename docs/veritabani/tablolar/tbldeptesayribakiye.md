---
title: TBLDEPTESAYRIBAKIYE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldeptesayribakiye/
---

# TBLDEPTESAYRIBAKIYE

> Açıklama yok.

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 9
- **Birincil anahtar:** `FISNO, STRA_SIPKONT, STHAR_ACIKLAMA`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FISNO` | TDBBELGENO | hayır |  | Tblsipamas tablosundaki fatirs_no yu (belge numarasını) gösterir. |
| 3 | `STRA_SIPKONT` | TDBSMALLINT | hayır |  | Sipariş içine girilen stok kontrolünü sağlar. Sira field ında program tarafından atılan sıra numaralarıyla aynı kayıtların tutar. |
| 4 | `STHAR_ACIKLAMA` | varchar(35) | hayır |  | Fatura/siparişten gelen kayıtlar için cari kodu gösterir. |
| 5 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu bilgisi |
| 6 | `FIRMA_DOVTUT` | TDBFLOAT | evet |  | Firma döviz tutarını gösterir. İrsaliyeleşen ya da faturalaşan siparişlerin teslim miktarını gösterir. |
| 7 | `FIRMA_DOVMAL` | TDBFLOAT | evet |  | Firma döviz tutarını gösterir. |
| 8 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDEPTESAYRIBAKIYE_FKEY1` | `SUBE_KODU` |
| PRIMARY KEY | `TBLDEPTESAYRIBAKIYE_PKEY` | `FISNO, STRA_SIPKONT, STHAR_ACIKLAMA` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPTESAYRIBAKIYE_PKEY` | `FISNO, STRA_SIPKONT, STHAR_ACIKLAMA` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FISNO, STRA_SIPKONT, STHAR_ACIKLAMA, STOK_KODU, FIRMA_DOVTUT
FROM dbo.TBLDEPTESAYRIBAKIYE WITH (NOLOCK);
```
