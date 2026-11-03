---
title: TBLSUBELER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsubeler/
---

# TBLSUBELER

> YARDIMCI PROGRAMLARDA TANIMLANAN ŞUBE KAYITLARINI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `UNVAN` | varchar(150) | evet |  | Tanımlanan şubenin adını gösterir. |
| 4 | `ADRES` | varchar(100) | evet |  | Tanımlanan şubenin adres bilgisini gösterir. |
| 5 | `ILCE` | varchar(15) | evet |  | Tanımlanan şubenin bulunduğu ilçeyi gösterir. |
| 6 | `ULKEKODU` | varchar(4) | evet |  | Tanımlanan şubenin bulunduğu ülke kodunu gösterir. |
| 7 | `SEHIRKODU` | varchar(5) | evet |  | Tanımlanan şubenin bulunduğu şehir kodunu gösterir. |
| 8 | `VDAIRE` | varchar(30) | evet |  | Tanımlanan şubenin vergi dairesini gösterir. |
| 9 | `VNO` | varchar(30) | evet |  | Tanımlanan şubenin vergi numarasını gösterir. |
| 10 | `WEBADRESI` | varchar(100) | evet |  | Tanımlanan şubenin varsa web adres bilgisini gösterir. |
| 11 | `MERKEZMI` | char(1) | evet |  | Tanımlanan şubenin merkez şube olup olmadığını gösterir. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `T_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `AKTIF` | char(1) | hayır | `E` | Tanımlanan şubelerin bağlantı ekranında aktif olarak gelip gelmediğini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `SUBELER_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `ISLETMEKODU_FKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `SUBELER_PKEY` | `SUBE_KODU` | Clustered |
| `TBLSUBELER_IND_1` | `AKTIF` | Non-unique+Non-clustered |
| `TBLSUBELER_IND1` | `ISLETME_KODU+SUBE_KODU` | Unique+Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ISLETME_KODU, UNVAN, ADRES, ILCE, ULKEKODU
FROM dbo.TBLSUBELER WITH (NOLOCK);
```
