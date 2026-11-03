---
title: TBLKULPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkulparam/
---

# TBLKULPARAM

> KULLANICI PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 27
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MIN_KUL_ISMI` | TDBBYTE | evet | `0` | Minimum kullanıcı isim uzunlugunu tutan sahadır. |
| 3 | `MIN_SIFRE_UZ` | TDBBYTE | evet | `0` | Minimum sifre uzunlugunu tutan sahadır. |
| 4 | `MAX_SIFRE_DS` | TDBINTEGER | evet | `0` | Maximum sifre degistirme suresini tutan sahadır. |
| 5 | `MAX_GIRIS_SAYI` | TDBINTEGER | evet | `0` | Maximum kullanıcı sayısını tutan sahadır. |
| 6 | `IZINSIZ_GIRIS` | char(1) | evet | `E` | İzinsiz girisler takip edilecek parametresi isareti ise E degerini tutar. |
| 7 | `MAX_GSIZ_LOG_SAY` | TDBBYTE | evet | `0` | Maximum gecersiz sifre sayısını tutan sahadır. |
| 8 | `GSIZ_LOG_ARA_IP_SURE` | TDBINTEGER | evet | `0` | Gecersiz loginlerin iptal edilme suresini tutan sahadır. |
| 9 | `LOGIN_KILIT_SURE` | TDBINTEGER | evet | `0` | Kullanıcının kilitli kalacagi sureyi tutar. |
| 10 | `LOGIN30_GUN` | char(1) | evet |  | Belirtilen gun suresince login olmayan kullanıcının otomatik silinmesi isaretlendi ise E degerini tutar. |
| 11 | `KACGUN` | TDBBYTE | evet | `0` | Login olmayan kullanıcıların kac gun icerisinde silinecegini tutar. |
| 12 | `SIFRE24_SAAT` | char(1) | evet |  | "Kullanılmıyor" |
| 13 | `KACSAAT` | TDBINTEGER | evet | `0` | "Kullanılmıyor" |
| 14 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK7` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK8` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK9` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK10` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKULPARAM_FKEY` | `SUBE_KODU` |
| PRIMARY KEY | `TBLKULPARAM_PKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKULPARAM_PKEY` | `SUBE_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, MIN_KUL_ISMI, MIN_SIFRE_UZ, MAX_SIFRE_DS, MAX_GIRIS_SAYI, IZINSIZ_GIRIS
FROM dbo.TBLKULPARAM WITH (NOLOCK);
```
