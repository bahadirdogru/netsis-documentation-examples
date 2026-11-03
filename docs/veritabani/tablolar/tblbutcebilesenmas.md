---
title: TBLBUTCEBILESENMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutcebilesenmas/
---

# TBLBUTCEBILESENMAS

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 52
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BUTCE_ID` | TDBINTEGER | hayır |  | Bütçe numarasının tutulduğu sahadır |
| 3 | `BILESEN_KODU` | varchar(35) | hayır |  | Bileşen kodunun tutulduğu sahadır |
| 4 | `BILESEN_ISMI` | varchar(100) | hayır |  | Bileşen isminin tutulduğu sahadır |
| 5 | `ACIKLAMA` | text | evet |  | Acıklama alanını tutar. |
| 6 | `BILESEN_TIPI` | TDBBYTE | hayır |  | Bileşen tipini gösteren alandır |
| 7 | `BUTCE_BILESEN_TIPI` | varchar(35) | evet |  | Bütçe-bileşen tipinin tutulduğu sahadır |
| 8 | `DURUMU` | TDBBYTE | hayır | `1` | Butçe durumunu gösteren sahasır |
| 9 | `DOVIZ_TIPI` | TDBBYTE | evet | `0` | Doviz tipinin tutuldugu sahadır. |
| 10 | `HESAP_KODU` | TDBMUHKOD | evet |  | Hesap kodunun saklandığı saha |
| 11 | `BILANCO_HESAP_KODU` | TDBMUHKOD | evet |  |  |
| 12 | `NAKIT_HESAP_KODU` | TDBMUHKOD | evet |  | Nakit hesap kodunu tutar |
| 13 | `ODEME_KODU` | varchar(35) | evet |  | Ödeme kodunu tutar |
| 14 | `KDV_HESAP_KODU` | TDBMUHKOD | evet |  | KDV hesap kodunu gösterir |
| 15 | `KDV_ORAN` | TDBFLOAT | evet |  | KDV oranının tutulduğu sahadır |
| 16 | `UST_BILESEN_ID` | TDBINTEGER | evet |  |  |
| 17 | `G_MIKTAR_BILGI` | image | evet |  |  |
| 18 | `G_MIKTAR_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 19 | `P_MIKTAR_BILGI` | image | evet |  |  |
| 20 | `P_MIKTAR_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 21 | `F_MIKTAR_BILGI` | image | evet |  |  |
| 22 | `F_MIKTAR_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 23 | `G_TUTAR_FIYAT_BILGI` | image | evet |  |  |
| 24 | `G_TUTAR_FIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 25 | `G_DTUTAR_FIYAT_BILGI` | image | evet |  |  |
| 26 | `G_DTUTAR_FIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 27 | `G_FIRMDTUTFIYAT_BILGI` | image | evet |  |  |
| 28 | `G_FIRMDTUTFIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 29 | `P_TUTAR_FIYAT_BILGI` | image | evet |  |  |
| 30 | `P_TUTAR_FIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 31 | `F_TUTAR_FIYAT_BILGI` | image | evet |  |  |
| 32 | `F_TUTAR_FIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 33 | `F_DTUTAR_FIYAT_BILGI` | image | evet |  |  |
| 34 | `F_DTUTAR_FIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 35 | `F_FIRMDTUTFIYAT_BILGI` | image | evet |  |  |
| 36 | `F_FIRMDTUTFIYAT_BILGI_VERSIYON` | varchar(15) | evet |  |  |
| 37 | `REFERANS_BILESEN_ID` | TDBINTEGER | evet |  |  |
| 38 | `DEVIR_BILESEN_ID` | TDBINTEGER | evet |  |  |
| 39 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 48 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 49 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 50 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 51 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 52 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCEBILESENMAS_FKEY_1` | `BUTCE_ID` |
| FOREIGN KEY | `TBLBUTCEBILESENMAS_FKEY_2` | `REFERANS_BILESEN_ID` |
| FOREIGN KEY | `TBLBUTCEBILESENMAS_FKEY_3` | `UST_BILESEN_ID` |
| FOREIGN KEY | `TBLBUTCEBILESENMAS_FKEY_4` | `ODEME_KODU` |
| PRIMARY KEY | `TBLBUTCEBILESENMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCEBILESENMAS_IND_1` | `BUTCE_ID, BILESEN_TIPI` | nonclustered |
| `TBLBUTCEBILESENMAS_IND_2` | `BUTCE_ID, BUTCE_BILESEN_TIPI, BILESEN_TIPI` | nonclustered |
| `TBLBUTCEBILESENMAS_IND_3` | `BUTCE_ID, DURUMU` | nonclustered |
| `TBLBUTCEBILESENMAS_IND_4` | `BUTCE_ID, UST_BILESEN_ID` | nonclustered |
| `TBLBUTCEBILESENMAS_IND_5` | `BUTCE_ID, BILESEN_KODU` | nonclustered, unique |
| `TBLBUTCEBILESENMAS_IND_6` | `BUTCE_ID, HESAP_KODU` | nonclustered |
| `TBLBUTCEBILESENMAS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, BUTCE_ID, BILESEN_KODU, BILESEN_ISMI, ACIKLAMA, BILESEN_TIPI
FROM dbo.TBLBUTCEBILESENMAS WITH (NOLOCK);
```
