---
title: TBLSERIPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblseriparam/
---

# TBLSERIPARAM

> KAYIT > SERİ TAKİBİ > SERİ PARAMETRE KAYITLARINI TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 30

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `URUN_BAZINDA` | char(1) | evet |  | Seri ürün bazında tek olsun parametre bilgisini gösterir. |
| 3 | `GIRIS_OTOMATIK` | char(1) | evet |  | Seri kodu girişler için otomatik hesaplansın parametre bilgisini gösterir. |
| 4 | `CIKIS_OTOMATIK` | char(1) | evet |  | Seri kodu çıkışlar için otomatik hesaplansın parametre bilgisini gösterir. |
| 5 | `STOKKOD_BASLANGIC` | char(1) | evet |  | Stok kodu başlangıç değer kabul edilsin parametre bilgisini gösterir. ("Seri kodu girişler/çıkışlar için otomatik hesaplansın parametrelerinden biri işaretli ise işlev kazanır.) |
| 6 | `SERIYIL` | char(1) | evet |  | Seri numarasında yıl bilgisi olsun parametre bilgisini gösterir. ("Seri kodu girişler/çıkışlar için otomatik hesaplansın parametrelerinden biri işaretli ise işlev kazanır.) |
| 7 | `SERIAY` | char(1) | evet |  | Seri numarasında ay bilgisi olsun parametre bilgisini gösterir. ("Seri kodu girişler/çıkışlar için otomatik hesaplansın parametrelerinden biri işaretli ise işlev kazanır.) |
| 8 | `SERIGUN` | char(1) | evet |  | Seri numarasında gün bilgisi olsun parametre bilgisini gösterir. ("Seri kodu girişler/çıkışlar için otomatik hesaplansın parametrelerinden biri işaretli ise işlev kazanır.) |
| 9 | `SERIUZ` | TDBBYTE | evet |  | Seri numarası uzunluğu parametre bilgisini gösterir. ("Seri kodu girişler/çıkışlar için otomatik hesaplansın parametrelerinden biri işaretli ise işlev kazanır.) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK3` | char(1) | evet |  | Sayım yapılacak stoğun ait olduğu proje kodunu gösterir. |
| 13 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK6` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK7` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `OPSIYONEL_SAHALAR` | TDBSMALLINT | evet |  | Opsiyonel saha bilgileri yer alır. |
| 18 | `TARIHSEL` | char(1) | evet |  | Tarhisel seri bakiye kontrolü yapılsın parametresi yer alır. |
| 19 | `SERIZORUNLU` | char(1) | evet |  | Seri takibi ekranında seri girişi zorunlu olsun parametresi yer alır. |
| 20 | `MALFAZSERI` | char(1) | evet |  | Miktarsız kalem için seri girişi yapılsın parametresi yer alır. |
| 21 | `FIFOSIRA` | varchar(25) | evet |  | Fifo seri için sıralama kriteri bilgisi yer alır. |
| 22 | `OTOKAPAMA` | char(1) | evet |  | Miktar girişinde sonra seri ekranı otomatik kapansın parametresi yer alır. |
| 23 | `FIFOPROJE` | char(1) | evet |  | Fifo seri için proje kodu kontrol edilsin parametresi yer alır. |
| 24 | `IADESERI` | char(1) | evet |  | İade tipli girişlerde seri girişi yapılsın parametresi yer alır. |
| 25 | `ISEMRISERI` | char(1) | evet |  | iş emri reçetesinde seri girişi yapılsın parametresi yer alır. |
| 26 | `MIKTARBIR` | char(1) | evet |  | seri rehberinden miktar bilgisi 1 olarak alınsın parametresi yer alır. |
| 27 | `GIRISLERI_OTOMATIK_BOL` | char(1) | evet |  | Seri numarası girişler için otomatik hesaplansın parametresi yer alır. |
| 28 | `CIKISLARI_OTOMATIK_BOL` | char(1) | evet |  | Seri numarası çıkışlar için otomatik hesaplansın parametresi yer alır. |
| 29 | `SKT_RISKE_GORE_HESAPLANSIN` | char(1) | evet |  | Son kullanma tarihi risk süresine göre hesaplansın parametresi yer alır. |
| 30 | `SKT_DEGISTIRILEMESIN` | char(1) | evet |  | Hesaplanan son kullanma tarihi değiştirilemesin parametresi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, URUN_BAZINDA, GIRIS_OTOMATIK, CIKIS_OTOMATIK, STOKKOD_BASLANGIC, SERIYIL
FROM dbo.TBLSERIPARAM WITH (NOLOCK);
```
