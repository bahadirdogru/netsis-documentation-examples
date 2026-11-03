---
title: TBLKULEMAIL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkulemail/
---

# TBLKULEMAIL

> KULLANICI EPOSTA TANIMLAMALARI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 7

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLEMTIPI` | char(1) | hayır | `A` | Kullanıcının bilgilendirilecegi secilen islem tipini tutan sahadır. |
| 3 | `EMAILKULID` | varchar(100) | evet |  | Bilgilendirme gonderilecek kullanıcının kodunu tutan sahadır. |
| 4 | `CCMAILKULID` | varchar(100) | evet |  | Bilgilendirme epostasında CC de yer alan kullanıcının kodunu tutan sahadır. |
| 5 | `SMSKULID` | varchar(100) | evet |  | Kısa mesaj gonderilecek kullanıcının kodunu tutan sahadır. |
| 6 | `NOTIF_SSO_USERID` | varchar(100) | evet |  | Bildirim gönderilecek kullanıcının sso user id bilgisi yer alır. |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKULEMAIL_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLKULEMAIL_PKEY` | `ISLEMTIPI` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ISLEMTIPI, EMAILKULID, CCMAILKULID, SMSKULID, NOTIF_SSO_USERID
FROM dbo.TBLKULEMAIL WITH (NOLOCK);
```
