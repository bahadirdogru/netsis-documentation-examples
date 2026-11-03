---
title: TBLMALIPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmaliprm/
---

# TBLMALIPRM

> MALIYET MUHASEBESI PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/)
- **Kolon sayısı:** 42
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `X151YAZ` | char(1) | evet |  | Üretim Hattı Hammadde transferi 151 hesaba yazılsın parametresi isaretli ise E degerini tutan sahadır. |
| 3 | `SNO` | TDBBYTE | evet | `0` | Üretim hattı sube kodunu tutan sahadır. |
| 4 | `X151DETAY` | char(1) | evet |  | 151 hesaba hammadde bazında yazılsın parametresi isaretli ise E degerini tutan sahadır. |
| 5 | `X151KOD` | TDBMUHKOD | evet |  | 151 Hesap muavin hesap kodunu tutan sahadır. |
| 6 | `X151DKOD` | char(1) | evet |  | 151 hesap hammadde bazında tutulacak ise kullanılacak detay kodunu tutan sahadır. |
| 7 | `X710DETAY` | char(1) | evet |  | 710 hesaba hammadde bazında yazılsın parametresi isaretli ise E degerini tutan sahadır. |
| 8 | `X710KOD` | TDBMUHKOD | evet |  | 710 Hesap muavin hesap kodunu tutan sahadır. |
| 9 | `X710DKOD` | char(1) | evet |  | 710 hesap hammadde bazında tutulacak ise kullanılacak detay kodunu tutan sahadır. |
| 10 | `X711BENZER` | char(1) | evet |  | 711 hesap 710 gibi parametresi isaretli ise E degerini tutan sahadır. |
| 11 | `X711DETAY` | char(1) | evet |  | 711 hesaba hammadde bazında yazılsın parametresi isaretli ise E degerini tutan sahadır. |
| 12 | `X711KOD` | TDBMUHKOD | evet |  | 711 Hesap muavin hesap kodunu tutan sahadır. |
| 13 | `X711DKOD` | char(1) | evet |  | 711 hesap hammadde bazında tutulacak ise kullanılacak detay kodunu tutan sahadır. |
| 14 | `BRIM_ORAN` | char(1) | evet |  | Birim Katsayılar % (Yüzde) Kabul Edilsin parametresi isaretli ise E degerini tutan sahadır. |
| 15 | `SADECE710` | char(1) | evet |  | Üretim Hattı Transferinde Sadece 150 ve 710 Çalışsın parametresi isaretli ise E degerini tutan sahadır. |
| 16 | `STOKMALIYET` | char(1) | evet |  | Stokta Durma Maliyeti Toplam Maliyete Eklensin parametresi isaretli ise E degerini tutan sahadır. |
| 17 | `SDEPOKODU` | TDBSMALLINT | evet | `0` | Durma maliyeti hesaplanacak lokal depo kodunun girileceği sahadır. |
| 18 | `STOKMUHKOD` | TDBMUHKOD | evet |  | Muhasebe Kodu Maskesi sahasıdır. |
| 19 | `MALGIDER_1` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-1 sahasıdır. |
| 20 | `MALGIDER_2` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-2 sahasıdır. |
| 21 | `MALGIDER_3` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-3 sahasıdır. |
| 22 | `MALGIDER_4` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-4 sahasıdır. |
| 23 | `MALGIDER_5` | TDBMUHKOD | evet |  | Maliyet Gider Hesapları-2 Gider-5 sahasıdır. |
| 24 | `YEDEK1` | TDBMUHKOD | evet |  | Şube Bazında Maliyet Kullanımı İçin Üretim Merkezi Şube Kodunu tutan sahadır. |
| 25 | `YEDEK2` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK3` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK4` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK5` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK6` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK7` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK8` | char(1) | evet |  | Maliyet olusturma tipini tutan sahadır. |
| 32 | `YEDEK9` | char(1) | evet |  | Ana Grup Bazında Yapılan Sarflar Mamullere Yedirilsin parametresi isaretli ise E degerini tutan sahadır. |
| 33 | `YEDEK10` | char(1) | evet |  | Hammadde transfer hesabı sahasıdır. |
| 34 | `YEDEK11` | char(1) | evet |  | Mal. Mahsubunda 151 Hesap Ham.,İsc.,Gen. Ür.,Amort Bazında Detaylansın parametresi isaretli ise E degerini tutan sahadır. |
| 35 | `YEDEK12` | char(1) | evet |  | Yurtdışı Satılan Malın Maliyeti Ayrı Çalışsın parametresi isaretli ise E degerini tutan sahadır. |
| 36 | `YEDEK13` | char(1) | evet |  | Mamul İadeleri Otomatik Hesaplansın parametresi isaretli ise E degerini tutan sahadır. |
| 37 | `YEDEK14` | char(1) | evet |  | Mamul Virmanları Hesaplansın parametresi isaretli ise E degerini tutan sahadır. |
| 38 | `YEDEK15` | char(1) | evet |  | İrsaliyeler maliyet muhasebesine dahil edilsin parametresi isaretli ise E degerini tutan sahadır. |
| 39 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 42 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMALIPRM_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLMALIPRM_PKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMALIPRM_PKEY` | `ISLETME_KODU` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, X151YAZ, SNO, X151DETAY, X151KOD, X151DKOD
FROM dbo.TBLMALIPRM WITH (NOLOCK);
```
