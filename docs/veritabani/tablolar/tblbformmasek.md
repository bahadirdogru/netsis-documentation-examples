---
title: TBLBFORMMASEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbformmasek/
---

# TBLBFORMMASEK

> Mükellef ve düzenleyen bilgileri ekranındaki -Tam tasdik düzenleyen bilgileri yer alır.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 34

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 3 | `TTSTIPI` | char(1) | evet |  | Tam Tasdik düzenleyen tipi yer alır. |
| 4 | `TTSTICSICILNO` | varchar(15) | evet |  | Tam tasdik ticaret sicil no bilgisi yer alır. |
| 5 | `TTSVERGINUMARASI` | varchar(15) | evet |  | T.T. Vergi numarası bilgisi yer alır. |
| 6 | `TTSEPOSTA` | varchar(60) | evet |  | Tam tasdik eposta bilgisi yer alır. |
| 7 | `TTSSOYADI` | varchar(150) | evet |  | T.t. Soyadı bilgisi yer alır. |
| 8 | `TTSALANKOD` | varchar(8) | evet |  | T.T. Alan kodu bilgisi yer alır. |
| 9 | `TTSADI` | varchar(150) | evet |  | T.T. Adı bilgisi yer alır. |
| 10 | `TTSTELNO` | varchar(10) | evet |  | T.T. telefon bilgisi yer alır. |
| 11 | `TTSTCKIMLIKNO` | varchar(35) | evet |  | T.T. Kimlik numarası bilgisi yer alır. |
| 12 | `TTSFAXNO` | TDBTELFAX | evet |  | T.T. fax bilgisi yer alır. |
| 13 | `TTSMAHALLE` | varchar(50) | evet |  | T.T. mahalle bilgisi yer alır. |
| 14 | `TTSSOKAK` | varchar(50) | evet |  | T.T. sokak bilgisi yer alır. |
| 15 | `TTSBINA_NUM` | varchar(15) | evet |  | T.T. Bina numarası bilgisi yer alır. |
| 16 | `TTSSEHIR` | varchar(15) | evet |  | T.T. şehir bilgisi yer alır. |
| 17 | `TTSPOSTAKODU` | varchar(8) | evet |  | T.T. Posta kodu bilgisi yer alır. |
| 18 | `TTSULKE` | varchar(15) | evet |  | T.T. ülke bilgisi yer alır. |
| 19 | `TTSWEB` | varchar(60) | evet |  | T.T. Web adresi bilgisi yer alır. |
| 20 | `TTSACIKLAMA` | varchar(100) | evet |  | T.T. Sözleşme açıklaması bilgisi yer alır. |
| 21 | `TTSCESIDI` | varchar(50) | evet |  | T.T. Sözleşme çeşidi bilgisi yer alır. |
| 22 | `TTSNUMARASI` | varchar(15) | evet |  | T.T. Sözleşme numarası bilgisi yer alır. |
| 23 | `TTSIRTTEL` | TDBTELFAX | evet |  | T.T. İrtibal tel no bilgisi yer alır. |
| 24 | `TTSIRTEPOSTA` | varchar(60) | evet |  | T.T. İrtibat eposta bilgisi yer alır. |
| 25 | `TTSTARIHI` | TDBDATETIME | evet |  | T.T. Sözleşme tarihi bilgisi yer alır. |
| 26 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, TTSTIPI, TTSTICSICILNO, TTSVERGINUMARASI, TTSEPOSTA
FROM dbo.TBLBFORMMASEK WITH (NOLOCK);
```
