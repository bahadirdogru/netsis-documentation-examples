---
title: TBLOPERATIONS_KATALOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbloperations-katalog/
---

# TBLOPERATIONS_KATALOG

> KAYIT>OPERASYON TANIMLAMA EKRANINDA TANIMLANAN KAYITLARI GÖSTERİR.AYRICA İLERİ ÜRETİM ÇİZELGELEME OPERASYON TANIMLAMA BİLGİLERİ YER ALIR

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 34

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `OPKODU` | varchar(35) | hayır |  | Tanımlanan operasyon kodunu gösterir. |
| 3 | `OPISIM` | varchar(50) | evet |  | Tanımlanan operasyon kodunun ismini gösterir. |
| 4 | `ISTKODU` | varchar(5) | evet |  | Tanımlanan operasyonun hangi iş istasyonunda yapıldığını gösterir. |
| 5 | `ACIKLAMA` | TDBMEMO | evet |  | Tanımlanan operasyonla ilgili varsa açıklamasını gösterir. |
| 6 | `OPMIK` | TDBFLOAT | evet |  | Simultane tezgah miktarına girilen değeri gösterir. |
| 7 | `OVERLAPMIK` | TDBFLOAT | evet |  | Geçiş miktarına girilen miktari gösterir. |
| 8 | `SETUPSURE` | TDBFLOAT | evet |  | Hazırlık süresine girilen süreyi gösterir. |
| 9 | `PRODSURE` | TDBFLOAT | evet |  | Üretim süresine girilen süreyi gösterir. |
| 10 | `GECISSURE` | TDBFLOAT | evet |  | Geçiş süresine girilen süreyi gösterir. |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere yedek bırakılan saha |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgiis yer alır. |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgiis yer alır. |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |
| 25 | `GRUP` | varchar(15) | evet |  | Grup kodu bilgisi yer alır. |
| 26 | `URETSURETIPI` | char(1) | evet |  | Üretim süresi tipini gösteris S-aniye gibi |
| 27 | `URETMIKTARI` | TDBFLOAT | evet |  | Üretim miktarı bilgisi yer alır. |
| 28 | `URETMIKTARITIPI` | char(1) | evet |  | Üretim miktarı tipip yer alır. Öçlü Br-1 gibi |
| 29 | `SETUPSURETIPI` | char(1) | evet |  | Geçiş süresi tipini gösterir. S-aniye gibi |
| 30 | `PARTIMIKTARI` | TDBFLOAT | evet |  | Parti büyüklüğü bilgisi yer alır. |
| 31 | `PARTIMIKTARITIPI` | char(1) | evet |  | Parti miktarı tipi bilgisi yer alır |
| 32 | `GECISSURETIPI` | char(1) | evet |  | Geçiş süresi tipi bilgisi yer alır. |
| 33 | `GECISMIKTIPI` | char(1) | evet |  | Geçiş miktarı bilgisi yer alır. |
| 34 | `GECISMIK_TANIMTIPI` | char(1) | evet |  | geçiş miktarı tanım tipi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, OPKODU, OPISIM, ISTKODU, ACIKLAMA, OPMIK
FROM dbo.TBLOPERATIONS_KATALOG WITH (NOLOCK);
```
