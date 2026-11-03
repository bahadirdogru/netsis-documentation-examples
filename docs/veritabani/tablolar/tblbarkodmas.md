---
title: TBLBARKODMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbarkodmas/
---

# TBLBARKODMAS

> STOKBAR ISLEMLERI-BARKOD GENEL BILGILERINI TUTAN TABLODUR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `DIZAYN_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DIZAYN_KODU` | varchar(20) | hayır |  | Barkod dizaynının kodunu tutan sahadır. |
| 3 | `DIZAYN_ADI` | varchar(40) | evet |  | Barkod dizaynının ismini tutan sahadır. |
| 4 | `PRINTER_TIPI` | varchar(10) | evet |  | Yazıcı tipini tutan sahadır. |
| 5 | `BASLIK_BILGISI` | varchar(100) | evet |  | Başlık bilgisini tutar |
| 6 | `BITIS_BILGISI` | varchar(100) | evet |  | Bitiş bilgisini tutar |
| 7 | `ETIKET_EN` | TDBFLOAT | evet | `0` | Etiketin genisligini tutan sahadır. |
| 8 | `ETIKET_BOY` | TDBFLOAT | evet | `0` | Etiketin boyunu tutan sahadır. |
| 9 | `ETIKET_SAYISI` | TDBBYTE | evet | `-1` | Etiketin sayısını tutan sahadır. |
| 10 | `SATIR_BOSLUK` | TDBFLOAT | evet | `0` | Satıs bosluk bilgisini tutan sahadır. |
| 11 | `SUTUN_BOSLUK` | TDBFLOAT | evet | `0` | Sutun bosluk bilgisini tutan sahadır. |
| 12 | `PARCA_ET_BOS` | TDBFLOAT | evet | `0` | Bir satırda bulunan etiketler arasındaki dot cinsinden boşluğu tutan sahadır. |
| 13 | `PARCA_ET_BOY` | TDBFLOAT | evet | `0` | Bir satırda bulunan etiketlerin net uzunluklarını dot cinsinden tutan sahadır. |
| 14 | `PORT` | char(1) | evet |  | Dizaynın basılacagı port kodunu tutan sahadır. |
| 15 | `RIBBON` | char(1) | evet |  | Ribbon evet isaretli ise E; hayır isaretli ise H degerini tutar. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `CARISTOKTIP` | char(1) | evet |  | Cari stok tipini gösterir |
| 21 | `OUTPUT` | text | evet |  | TXT dosyasından yuklenen alanı tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBARKODMAS_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBARKODMAS_PKEY` | `DIZAYN_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBARKODMAS_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLBARKODMAS_PKEY` | `DIZAYN_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, DIZAYN_KODU, DIZAYN_ADI, PRINTER_TIPI, BASLIK_BILGISI, BITIS_BILGISI
FROM dbo.TBLBARKODMAS WITH (NOLOCK);
```
