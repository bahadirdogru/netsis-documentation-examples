---
title: TBLMSENTAKPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmsentakprm/
---

# TBLMSENTAKPRM

> MÜŞTERİ SENETLERİ MODÜLÜNE BAĞLI TAKSİTLİ SATIŞ PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 36
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ODEMEPLAN` | char(1) | evet | `S` | Ödeme planının tutulduğu sahadır |
| 3 | `GECIKMEFAIZ` | char(1) | evet | `H` | Gecikme Faizi Hesaplansın parametresinin işaretlenmesi ile E değerini alır. İşaretli olmadığında H değerini almaktadır. |
| 4 | `TOLERANSGUN` | TDBBYTE | evet | `-30` | Tolerans Günü gösterir. |
| 5 | `FAIZORAN` | TDBFLOAT | evet | `0` | Faiz Oranını gösterir. |
| 6 | `TAKSITSAY` | TDBBYTE | evet | `0` | Taksit Sayısını gösterir. |
| 7 | `TAKSITTIP` | char(1) | evet | `A` | Taksit Tipi G gün A ay değerini gösterir. |
| 8 | `YETSATKOD` | TDBCARIKOD | evet |  | Yetkili satış kodunu gösterir |
| 9 | `YETSATUNV` | varchar(30) | evet |  | Yetkili satış unvanını gösterir |
| 10 | `KOCFINANS` | char(1) | evet | `H` | "Kullanılmıyor" |
| 11 | `BSMVORAN` | TDBFLOAT | evet | `-5` | "Kullanılmıyor" |
| 12 | `KKDFORAN` | TDBFLOAT | evet | `-10` | "Kullanılmıyor" |
| 13 | `AYFAIZORAN` | TDBFLOAT | evet | `0` | Aylık faiz oranını belirtir |
| 14 | `TAHSILBAS` | char(1) | evet | `H` | Senet Tahsil Makbuzu Basılsın parametresinin işaretlenmesi ile E değerini alır. İşaretli olmadığında H değerini almaktadır. |
| 15 | `TAHCARIKAYIT` | char(1) | evet | `H` | Senet Tahsilde Cariye Kayıt Yapılsın parametresinin işaretlenmesi ile E değerini alır. İşaretli olmadığında H değerini almaktadır. |
| 16 | `TAKCARIKAYIT` | char(1) | evet | `H` | Senet Tanzimde Cariye Kayıt Yapılsın parametresinin işaretlenmesi ile E değerini alır. İşaretli olmadığında H değerini almaktadır. |
| 17 | `YEDEK1` | char(1) | evet |  | Ödeme Planı Dizayndan Basılsın parametresinin işaretlenmesi ile E değerini alır. İşaretli olmadığında H değerini almaktadır. |
| 18 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK8` | TDBBYTE | evet | `0` | Taksit tipi G olduğunda belirtilen gün sayısını gösterir. |
| 25 | `YEDEK9` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK10` | varchar(10) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `FARKLI_PORTFOY` | char(1) | evet | `H` | Rapor Kodu Bazında Ayrı Portföy Hesabı Tutulacak parametresinin işaretlenmesi ile E değerini alır. İşaretli olmadığında H değerini almaktadır. |
| 32 | `AKOD` | TDBMUHKOD | evet |  | A kodunu gösterir. |
| 33 | `BKOD` | TDBMUHKOD | evet |  | B kodunu gösterir. |
| 34 | `CKOD` | TDBMUHKOD | evet |  | C kodunu gösterir. |
| 35 | `KKOD` | TDBMUHKOD | evet |  | K kodunu gösterir. |
| 36 | `NKOD` | TDBMUHKOD | evet |  | N kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMSENTAKPRM_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMSENTAKPRM_PKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMSENTAKPRM_PKEY` | `ISLETME_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ODEMEPLAN, GECIKMEFAIZ, TOLERANSGUN, FAIZORAN, TAKSITSAY
FROM dbo.TBLMSENTAKPRM WITH (NOLOCK);
```
