---
title: TBLBNKONLOTMODEME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkonlotmodeme/
---

# TBLBNKONLOTMODEME

> Açıklama yok.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 41
- **Birincil anahtar:** `BANKAKODU, KURUM, ABONENO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BANKAKODU` | varchar(5) | hayır |  | Banka kodunu tutar. |
| 3 | `KURUM` | varchar(10) | hayır |  | Banka tarafından belirlenen kurum kodunu tutar. |
| 4 | `ABONENO` | varchar(20) | hayır |  | Abone numarasını tutar |
| 5 | `ACIKLAMA` | varchar(2000) | evet |  | Açıklamayı gösterir. |
| 6 | `CARIMUHKODU` | varchar(35) | hayır |  | Cari muhasebe kodunu tutuar |
| 7 | `C_M` | varchar(1) | hayır |  | Hesap Kodu sahasına Cari, Muhasebe, Banka ya da Stok kodu girilir. Kod bilgisi bu sahada saklanır. (Cari=C, Muhasebe=M, Banka=B, Stok=S) |
| 8 | `PROJEKODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `ONODEMELI` | varchar(1) | evet |  |  |
| 10 | `ONCARIMUHKODU` | varchar(35) | evet |  |  |
| 11 | `ONC_M` | varchar(1) | evet |  |  |
| 12 | `ONPROJEKODU` | TDBPROJEKOD | evet |  | On proje kod bilgisini tutar |
| 13 | `GIDERHESKODU` | TDBMUHKOD | evet |  | Gider hesap kodunun tutulduğu sahadır |
| 14 | `KDVHESKODU` | TDBMUHKOD | evet |  | Kdv hesap kodunun tutulduğu sahadır |
| 15 | `GIDERPROJEKOD` | TDBPROJEKOD | evet |  | Gider proje kodunun tutlduğu sahadır |
| 16 | `GIDERREFKOD` | TDBREFKOD | evet |  |  |
| 17 | `OZILETHESKOD` | TDBMUHKOD | evet |  |  |
| 18 | `OZILETPROJEKOD` | TDBPROJEKOD | evet |  |  |
| 19 | `OZILETREFKOD` | TDBREFKOD | evet |  |  |
| 20 | `OZISLEMHESKOD` | TDBMUHKOD | evet |  |  |
| 21 | `OZISLEMPROJEKOD` | TDBPROJEKOD | evet |  |  |
| 22 | `OZISLEMREFKOD` | TDBREFKOD | evet |  |  |
| 23 | `FARKHESKOD` | TDBMUHKOD | evet |  |  |
| 24 | `FARKPROJEKOD` | TDBPROJEKOD | evet |  |  |
| 25 | `FARKREFKOD` | TDBREFKOD | evet |  |  |
| 26 | `PLASIYERKOD` | TDBPLASIYER | evet |  |  |
| 27 | `DEKONTSERI` | varchar(2) | evet |  |  |
| 28 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKONLOTMODEME_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBNKONLOTMODEME_PKEY` | `BANKAKODU, KURUM, ABONENO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKONLOTMODEME_IND_1` | `SUBE_KODU, BANKAKODU, KURUM, ABONENO` | Nonclustered |
| `TBLBNKONLOTMODEME_PKEY` | `BANKAKODU, KURUM, ABONENO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BANKAKODU, KURUM, ABONENO, ACIKLAMA, CARIMUHKODU
FROM dbo.TBLBNKONLOTMODEME WITH (NOLOCK);
```
