---
title: TBLSTOKFIAT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokfiat/
---

# TBLSTOKFIAT

> STOK FİYAT İŞLEMLERİ İÇİN TANIMLANAN BİLGİLERİ TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 24
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOKKODU` | TDBSTOKKOD | hayır |  | Fiyatı için özel fiyat listeleri hazırlanacak stok kodudur. |
| 3 | `A_S` | char(1) | hayır |  | Alış fiyatı seçili ise 'A', satış fiyatı seçili ise 'S' değerini gösterir. |
| 4 | `FIYAT1` | TDBFLOAT | evet |  | Stok fiyat işlemlerindeki fiyat girişinde tanımlanan alış fiyatı1 veya satış fiyatı1' i gösterir. |
| 5 | `FIYAT2` | TDBFLOAT | evet |  | Stok fiyat işlemlerindeki fiyat girişinde tanımlanan alış fiyatı2 veya satış fiyatı2' yi gösterir. |
| 6 | `FIYAT3` | TDBFLOAT | evet |  | Stok fiyat işlemlerindeki fiyat girişinde tanımlanan alış fiyatı3 veya satış fiyatı3' ü gösterir. |
| 7 | `FIYAT4` | TDBFLOAT | evet |  | Stok fiyat işlemlerindeki fiyat girişinde tanımlanan alış fiyatı4 veya satış fiyatı4' ü gösterir. |
| 8 | `FIYATDOVIZTIPI` | TDBBYTE | evet |  | Alış ya da satış fiyatlaeı dövizli ise döviz tipini gösterir. |
| 9 | `KAYITTAR` | TDBDATETIME | evet |  | Tanımlanan fiyat listelerinin kayıt tarihlerini gösterir. |
| 10 | `DEGISIKTAR` | TDBDATETIME | evet |  | Tanımlanan fiyat listelerinin eğer üzerinde bir değişiklik yapılmışsa değişiklik tarihlerini gösterir. Değişiklik yapılmamışsa kayıt tarihini gösterir. |
| 11 | `BASTAR` | TDBDATETIME | hayır |  | İlgili stok için güncel fiyat listesinin başlangıç tarihini gösterir. |
| 12 | `BITTAR` | TDBDATETIME | evet |  | İlgili stok için güncel fiyat listesinin bitiş tarihini gösterir. |
| 13 | `FIYATGRUBU` | varchar(15) | evet |  | İlgili stoğun hangi fiyat grubuna dahil olduğunu gösterir. |
| 14 | `KAYITKULLID` | TDBSMALLINT | evet |  | Fiyat listelerini oluşturan kullanıcıların id' lerini gösterir. |
| 15 | `DEGISIKLIKKULLID` | TDBSMALLINT | evet |  | Tanımlanan fiyat listeleri üzerinde değişiklik yapan kullanıcıların id' lerini gösterir. |
| 16 | `ONAYTIPI` | char(1) | evet |  | Onay tipi bilgisi yer alır. |
| 17 | `ONAYNUM` | TDBINTEGER | evet |  | Onay numarası bilgisi yer alır. |
| 18 | `FIYATLISTEKODU` | varchar(15) | evet |  | Yeni ekrandaki fiyat liste kodu bilgisi yer alır. |
| 19 | `FIYATLISTEACIK` | varchar(255) | evet |  | Yeni ekrandaki fiyat liste açıklaması bilgisi yer alır. |
| 20 | `YAPKOD` | varchar(15) | evet |  | Yapılandırma kodu bilgisi yer alır. |
| 21 | `OLCUBR` | TDBSMALLINT | evet |  | Ölçü birim bilgisi yer alır. |
| 22 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 23 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 24 | `KAYIT_SUBE_KODU` | TDBSMALLINT | evet |  | Kayıtlı şube kodu bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKFIAT_IND_1` | `STOKKODU+FIYATGRUBU+BASTAR` | Unique, Non-clustered |
| `TBLSTOKFIAT_IND_2` | `STOKKODU+FIYATGRUBU+BASTAR+A_S+BITTAR+FIYATDOVIZTIPI` | Unique, Non-clustered |
| `TBLSTOKFIAT_IND_FGRUP` | `STOKKODU+FIYATGRUBU+BASTAR+A_S` | Unique, Non-clustered |
| `TBLSTOKFIAT_PKEY` | `INCKEYNO` | Unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, STOKKODU, A_S, FIYAT1, FIYAT2, FIYAT3
FROM dbo.TBLSTOKFIAT WITH (NOLOCK);
```
