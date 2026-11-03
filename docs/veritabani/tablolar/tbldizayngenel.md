---
title: TBLDIZAYNGENEL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldizayngenel/
---

# TBLDIZAYNGENEL

> DİZAYN KAYITLARI GENEL BİLGİLER SEKMESİNDEKİ KAYITLARI TUTAR.

- **Modül:** [DİZAYN](/veritabani/moduller/dizayn/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `GENELID`
- **Identity:** `GENELID` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GENELID` | TDBINTEGER | hayır |  | İlk dizayndan itibaren sırayla artan unique değeri gösterir. Program tarafından otomatik olarak atılmaktadır |
| 2 | `SABITID` | TDBINTEGER | hayır |  | İlk dizayndan itibaren sırayla artan unique değeri gösterir. Program tarafından otomatik olarak atılmaktadır |
| 3 | `SATSAY` | TDBBYTE | hayır |  | Satır sayısını gösterir. |
| 4 | `SUTSAY` | TDBBYTE | hayır |  | Sütun syısını gösterir. |
| 5 | `MAXKALADEDI` | TDBBYTE | evet |  | mal kalemlerinin yazılacağı bölgeye en fazla kaç satır mal kaleminin basılacağını gösterir. |
| 6 | `KALBASSAT` | TDBBYTE | evet |  | Kalem başlangıç satırını gösterir. |
| 7 | `NAKLIYEKSAT` | TDBBYTE | evet |  | Nakli Yekun Satırını gösterir. |
| 8 | `TOPKALSONUNDA` | char(1) | evet |  | Top. Kalem Sonunda Mı parametresini gösterir. Evet işaretli ise 'E'+hayır işaretli ise 'H'+boş işaretli ise 'B' değerini gösterir. |
| 9 | `TOPBASSAT` | TDBBYTE | evet |  | Top. Başlangıç Satırını gösterir. |
| 10 | `BASIMADEDI` | TDBSMALLINT | evet |  | Nüsha Sayısını gösterir. |
| 11 | `KDVDAHILMI` | char(1) | evet |  | KDV Dahil Mi parametresini gösterir. Evet işaretli ise 'E'+hayır işaretli ise 'H'+boş işaretli ise 'B' değerini gösterir. |
| 12 | `PRINTERPORT` | TDBBYTE | evet |  | Printer Portunu gösterir.(PRN+LPT1,LPT2,COM1,COM2,DOSYA,NULL+WINDOWS+WINDOWS GRAFIK+E-NETSIS) |
| 13 | `BASMAMODU` | char(1) | hayır | `N` | Basım modunu gösterir. Normal seçili ise 'n'+Condense (Sıkışık) seçili ise 'C' değerini gösterir. |
| 14 | `YAZICIKODU` | varchar(2) | hayır | `S1` | Dizaynın hangi tip yazıcıdan çıktığını gösterir. |
| 15 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK2` | varchar(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK3` | TDBBYTE | evet |  | Kit master kodu basılsın mı parametresini gösterir. İşaretli ise '1' değerini gösterir. |
| 18 | `YEDEK4` | TDBBYTE | evet |  | Kit bileşen kodu basılsın mı parametresini gösterir. |
| 19 | `YEDEK5` | TDBFLOAT | evet |  | Baskı önizleme yapılsın mı parametresini gösterir. |
| 20 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `NUMARAARTSIN` | char(1) | evet | `E` | Nakli yekunlu faturada numara arttırılsın parametresini gösterir. |
| 22 | `DBNAKYEKACIK` | varchar(30) | evet |  | Nakli yekun açıklama sahasını gösterir. |
| 23 | `NORMALFONTBUYUKLUK` | TDBBYTE | evet |  | Normal Font Büyüklük bilgisini gösterir. |
| 24 | `CONDENSEFONTBUYUKLUK` | TDBBYTE | evet |  | Condence Font Büyüklük bilgisini gösterir. |
| 25 | `SATIRARALIK` | TDBFLOAT | evet |  | Satır aralık bilgisini gösterir. |
| 26 | `BASKIONIZLEME` | char(1) | evet | `H` | Baskı ön izleme yapılacak mı bilgisi |
| 27 | `SABLONDOSYAPATH` | varchar(255) | evet |  | Şablon dosya adını gösterir. |
| 28 | `BASVESAKLA` | TDBBYTE | evet |  | Bas+Sakla ve bas ve sakla dan hangisi işaretli ise gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDIZAYNGENEL_PKEY` | `GENELID` |
| FOREIGN KEY | `TBLDIZAYNGENEL_FKEY_1` | `SABITID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDIZAYNGENEL_IND_1` | `SABITID` | Unique, Non-clustered |
| `TBLDIZAYNGENEL_PKEY` | `GENELID` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 GENELID, SABITID, SATSAY, SUTSAY, MAXKALADEDI, KALBASSAT
FROM dbo.TBLDIZAYNGENEL WITH (NOLOCK);
```
