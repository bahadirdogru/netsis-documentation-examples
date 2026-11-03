---
title: TBLBSENPAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbsenpar/
---

# TBLBSENPAR

> BORC SENETLERI PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SC_CARIDETAY` | char(1) | evet |  | Cariye tek tek aktarılsın parametresi isaretli ise E; degil ise H degerini tutar. |
| 3 | `SC_MUHDETAY` | char(1) | evet |  | Muhasebeye tek tek aktarılsın parametresi isaretli ise E; degil ise H degerini tutar. |
| 4 | `SC_TAHTEMC_CARIDEN` | char(1) | evet |  | Tahsil/teminata cıkıs cariden parametresi isaretli ise E; degil ise H degerini tutar. |
| 5 | `SC_VERENK_ARANSIN` | char(1) | evet |  | Giriste veren kodu aransın parametresi isaretli ise E; degil ise H degerini tutar. |
| 6 | `SC_VERILENK_ARANSIN` | char(1) | evet |  | Cıkısta verilen kodu aransın parametresi isaretli ise E; degil ise H degerini tutar. |
| 7 | `SC_ALBOR_GCIK` | char(1) | evet |  | Alındı bordrolarında ortalama gun basılsın parametresi isaretli ise E; degil ise H degerini tutar. |
| 8 | `SC_VERBOR_GCIK` | char(1) | evet |  | Verildi bordrolarında ortalama gun basılsın parametresi isaretli ise E; degil ise H degerini tutar. |
| 9 | `S_PORAN` | TDBSMALLINT | evet | `0` | "Kullanılmıyor" |
| 10 | `IL` | varchar(15) | evet |  | İl sahasıdır. |
| 11 | `SADECE_TL` | char(1) | evet |  | Doviz uygulaması var parametresi isaretli ise E; degil ise H degerini tutar. |
| 12 | `BORD_SAT` | char(1) | evet |  | Bordro basımında acıklama bulunsun parametresi isaretli ise E; degil ise H degerini tutar. |
| 13 | `KAYIT_TAR` | char(1) | evet |  | Cari Hareket Kayıt Tarihi Olarak Giriş/Çıkış Tarihi seçildiğinde E, Adat Baz Tarihi seçildiğinde H değerini almaktadır. |
| 14 | `BORD_SAYUZ` | TDBSMALLINT | evet | `0` | Bordro basım kagıt uzunlugunu tutar. |
| 15 | `KARS_CEK` | char(1) | evet |  | Karsılıksız cek uyarısı verildin mi parametresi isaretli ise E; degil ise H degerini tutar. |
| 16 | `BANKA_KOD` | char(1) | evet |  | Banka kodu gısırı parametresi isaretli ise E; degil ise H degerini tutar. |
| 17 | `MATBU_CEK` | char(1) | evet |  | Matbu cek girisi parametresi isaretli ise E; degil ise H degerini tutar. |
| 18 | `BASIM_DIZAYN` | varchar(50) | evet |  | Basım dizayn dosyasını tutar. |
| 19 | `YEDEK1` | char(1) | evet |  | Bordro basımında sıralama bilgisini tutar. |
| 20 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBSENPAR_FKEY` | `ISLETME_KODU` |
| PRIMARY KEY | `TBLBSENPAR_PKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBSENPAR_PKEY` | `ISLETME_KODU` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SC_CARIDETAY, SC_MUHDETAY, SC_TAHTEMC_CARIDEN, SC_VERENK_ARANSIN, SC_VERILENK_ARANSIN
FROM dbo.TBLBSENPAR WITH (NOLOCK);
```
