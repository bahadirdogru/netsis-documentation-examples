---
title: TBLNETBIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnetbil/
---

# TBLNETBIL

> İŞLETME BİLANÇOSU EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 6
- **Birincil anahtar:** `AY`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AY` | TDBBYTE | hayır |  | İşletme bilançosu alınan en son ay bilgisini gösterir. |
| 2 | `ONCEKIDONEM` | varchar(30) | evet |  | Bir önceki yılın şirket ismini gösterir. |
| 3 | `DBUSER` | varchar(30) | evet |  | Bir önceki yıl şirketinin kullanıcı ismini gösterir. |
| 4 | `DBPASSWORD` | varchar(30) | evet |  | Bir önceki yıl şirketinin kullanıcı şifresini gösterir. |
| 5 | `DIPNOT` | varchar(60) | evet |  | İşletme bilançosu ekranında dipnot dosyası için girilen pathi gösterir. (BIL94.TXT) |
| 6 | `OLCU` | TDBBYTE | evet |  | Default olarak 0 değerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNETBIL_PKEY` | `AY` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNETBIL_PKEY` | `AY` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 AY, ONCEKIDONEM, DBUSER, DBPASSWORD, DIPNOT, OLCU
FROM dbo.TBLNETBIL WITH (NOLOCK);
```
