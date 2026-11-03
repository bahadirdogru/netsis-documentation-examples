---
title: TBLESNOZFIY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnozfiy/
---

# TBLESNOZFIY

> KAYIT>ESNEK YAPILANDIRMA>ESNEK YAPILANDIRMA ÖZELLİK FİYAT TANIMLAMALARIMENÜSÜNDEKİ KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 31
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOK_KODU` | TDBSTOKKOD | evet |  | Fiyat listesi tanımlanacak olan stokğun kodunu gösterir. |
| 3 | `A_S` | char(1) | hayır | `A` | Alış fiyatı mı yoksa satış fiyatı mı tanımlanacağının belirlendiği alandır. Satış fiyatı seçili ise 'S', alış fiyatı seçili ise 'A' değerini gösterir. |
| 4 | `BASTAR` | TDBDATETIME | hayır |  | Fiyat listesinin başlangıç tarihini gösterir. |
| 5 | `BITTAR` | TDBDATETIME | evet |  | Fiyat listesinin bitiş tarihini gösterir. |
| 6 | `FIYATGRUBU` | varchar(15) | evet |  | Fiyat grubunu gösterir. (farklı carilere farklı liste fiyatları ile satış yapabilmek ya da satıcılara göre farklı fiyat listelerinin oluşturulması amacıyla kullanılmaktadır.) |
| 7 | `FIYATDOVIZTIPI` | TDBBYTE | evet | `0` | Fiyat listesinin tanımlanacağı döviz tipini gösterir. |
| 8 | `FIYAT1` | TDBFLOAT | evet | `0` | Fiyat listesinde bulunması istenen fiyatları gösterir. Fiyat-1 alanına girilen fiyatı gösterir. |
| 9 | `FIYAT2` | TDBFLOAT | evet | `0` | Fiyat listesinde bulunması istenen fiyatları gösterir. Fiyat-2 alanına girilen fiyatı gösterir. |
| 10 | `FIYAT3` | TDBFLOAT | evet | `0` | Fiyat listesinde bulunması istenen fiyatları gösterir. Fiyat-3 alanına girilen fiyatı gösterir. |
| 11 | `FIYAT4` | TDBFLOAT | evet | `0` | Fiyat listesinde bulunması istenen fiyatları gösterir. Fiyat-4 alanına girilen fiyatı gösterir. |
| 12 | `OZMASKOD` | varchar(8) | evet |  | Öellik kodunu gösterir. |
| 13 | `OZTRADEGKOD` | varchar(8) | evet |  | Seçilen özelliğin alabileceği değer kodunu gösterir. |
| 14 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLESNOZFIY_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLESNOZFIY_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLESNOZFIY_FKEY1` | `OZMASKOD` |
| FOREIGN KEY | `TBLESNOZFIY_FKEY2` | `OZMASKOD+OZTRADEGKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNOZFIY_IND_1` | `A_S+BASTAR+FIYATGRUBU+STOK_KODU+OZMASKOD+OZTRADEGKOD` | Unique, Non-clustered |
| `TBLESNOZFIY_IND_2` | `A_S+BASTAR+FIYATGRUBU+OZMASKOD+OZTRADEGKOD` | Non-unique, Non-clustered |
| `TBLESNOZFIY_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, STOK_KODU, A_S, BASTAR, BITTAR, FIYATGRUBU
FROM dbo.TBLESNOZFIY WITH (NOLOCK);
```
