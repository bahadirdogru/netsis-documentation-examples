---
title: TBLKVKKPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkvkkparam/
---

# TBLKVKKPARAM

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 29

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `EPOSTAIZIN` | char(1) | evet |  | Eposta gönderiminde iletişim izin kayıtları kontrol edilsin işaretli ise E değerini alır. |
| 3 | `EPOSTAUYARI` | char(1) | evet |  | Gönderilemeyen E-postalar için uyarı mesajı verilsin işaretli ise E değerini alır. |
| 4 | `SMSIZIN` | char(1) | evet |  | SMS gönderiminde iletişim izin kayıtları kontrol edilsin işaretli ise E değerini alır. |
| 5 | `SMSUYARI` | char(1) | evet |  | Gönderilemeyen SMS'ler için uyarı mesajı verilsin işaretli ise E değerini alır. |
| 6 | `ANONIMKILITTIPI` | TDBBYTE | evet |  | Anonimleşen kayıtlar kilitlensin parametresinde seçili olan alana karşılık gelen sayıdır. |
| 7 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kayıt yapan kullanıcı bligisi yer alır. |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 9 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi yer alır. |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `ONLINE_ONAY_SISTEMI` | char(1) | evet |  | KVKK parametreleri online onay sistemi parametresi yer alır. |
| 28 | `ONAY_KAYNAK_MAIL_KULLAN` | char(1) | evet |  | KVVK parametreleri KVKK Onay E-postaları için kaynak mail adresi tanımlansın parametresi değeri yer alır. |
| 29 | `ONAY_KAYNAK_MAIL` | varchar(60) | evet |  | Kaynak e-posta bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, EPOSTAIZIN, EPOSTAUYARI, SMSIZIN, SMSUYARI, ANONIMKILITTIPI
FROM dbo.TBLKVKKPARAM WITH (NOLOCK);
```
