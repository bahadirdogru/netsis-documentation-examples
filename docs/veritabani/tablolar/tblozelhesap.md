---
title: TBLOZELHESAP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblozelhesap/
---

# TBLOZELHESAP

> OZEL HESAP KAPATMA EKRANINDA İLGİLİ CARİ İÇİN KAPATILMIŞ KAYITLARINI VE YAPILAN İŞLEMLER SONRASINDA ÇIKAN ÖZEL HESAP KAPATMA EKRANINDA KAPATILAN KAYITLARI TUTAR

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 12

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `BORCNO` | TDBINTEGER | hayır | `0` | İlgili cariye ait olan özel hesap kapatma ekranındaki alacak kaydıyla kapatılmış olan borç numarasını gösterir. (ilgili cariye ait olan tüm borç kayıtlarını göstermez) |
| 2 | `ALACAKNO` | TDBINTEGER | hayır | `0` | İlgili cariye ait olan özel hesap kapatma ekranındaki borç kaydıyla kapatılmış olan alacak numarasını gösterir. (ilgili cariye ait olan tüm borç kayıtlarını göstermez) |
| 3 | `TUTAR` | TDBFLOAT | evet | `0` | Kapatılmış olan tutarı gösterir. |
| 4 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `TUTAR_ALACAK` | TDBFLOAT | evet |  |  |
| 10 | `KURBORC` | TDBFLOAT | evet |  | Farklı döviz cinslerine göre kapatmada kullanılan kur bilgisi yer almaktadır. |
| 11 | `KURALACAK` | TDBFLOAT | evet |  | Farklı döviz cinslerine göre kapatmada kullanılan kur bilgisi yer almaktadır. |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLOZELHESAP_IND_2` | `BORCNO+ALACAKNO` | Unique, Non-clustered |
| `TBLOZELHESAPPKEY` | `BORCNO+ALACAKNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 BORCNO, ALACAKNO, TUTAR, F_YEDEK1, F_YEDEK2, S_YEDEK1
FROM dbo.TBLOZELHESAP WITH (NOLOCK);
```
