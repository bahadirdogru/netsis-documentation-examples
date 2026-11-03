---
title: TBLREPPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblrepparam/
---

# TBLREPPARAM

> STOK>İŞLEMLER>NETSİS SİPAİRŞ ÖNERİSİ>PARAMETRE GİRİŞİ EKRANINA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 6
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ONCEKI_DATABASE` | varchar(20) | evet |  | Hesaplamada Geri Gidilecek Gün parametresi için kullanılacak olan şirket ismini gösterir. |
| 3 | `FIYAT` | TDBSMALLINT | evet | `0` | Stokların ABC' nin (önem kodları) bulunmasında baz alınacak fiyatı gösterir. |
| 4 | `YAR_GERI_GUN` | TDBSMALLINT | evet | `0` | Verilecek gün değerinden daha önce açılmış olan stoklar için ortalama kullanım miktarı için girilen gün bilgisini gösterir. |
| 5 | `HES_GERI_GUN` | TDBSMALLINT | evet | `0` | Ortalama kullanım miktarı hesaplamasında geri gidilecek gün sayısı alanına girilen gün sayısını gösterir. |
| 6 | `BOLEN` | TDBSMALLINT | evet | `0` | Ortalama kullanım miktarı hesaplamasında bölen alanına girilen sayıyı gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLREPPARAM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLREPPARAM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLREPPARAM_PKEY` | `ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ONCEKI_DATABASE, FIYAT, YAR_GERI_GUN, HES_GERI_GUN, BOLEN
FROM dbo.TBLREPPARAM WITH (NOLOCK);
```
