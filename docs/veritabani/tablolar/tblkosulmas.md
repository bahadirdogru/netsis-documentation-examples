---
title: TBLKOSULMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkosulmas/
---

# TBLKOSULMAS

> KOŞUL SABİT KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `KOSUL_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KOSUL_KOD` | varchar(8) | hayır |  | Koşul Kodunu gösterir. |
| 4 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 5 | `KOSRAPORKODU` | TDBBYTE | evet | `-1` | Koşul Rapor Kodunu gösterir. |
| 6 | `URUNKISITLA` | char(1) | evet | `H` | Koşul Kodunu gösterir. Stok Grup Kodu 1, Stok Kod1 2, Stok Kod2 3, Stok Kod3 4, Stok Kod4 5, Stok Kod5 6,Stok Fiyat Kod 7, Çoklu Seçinm 8 değerini ifade etmektedir. |
| 7 | `EKKOSULUSTEYAZ` | char(1) | evet | `H` | Faturada Sadece Koşul Detaydaki Stoklar Girilsin parametresi işaretli ise E, değil ise H değerini alır. |
| 8 | `EKKOSULTOPLA` | char(1) | evet | `H` | Faturada İlave Koşullar Girişindeki Üste Yaz Koşulları Kullanılsın parametresi işaretli ise E, değil ise H değerini alır. |
| 9 | `VADEISKVEYAFAIZ` | char(1) | evet | `H` | Vade İskontosu veya Faiz Uygulaması parametresi işaretli ise E, değil ise H değerini alır. |
| 10 | `FIYATTANDUSULSUN` | char(1) | evet | `H` | Peşin İskonto Fiyattan Düşülsün parametresi işaretli ise E, değil ise H değerini alır. |
| 11 | `PESISKHANGIISK` | TDBBYTE | evet | `0` | Peşin İskonto İçin Genel İskontonu gösterir. |
| 12 | `PESISKHANGISATISK` | TDBBYTE | evet | `0` | Peşin İskonto İçin Satır İskontonu gösterir. |
| 13 | `VADEBAZLISTEFIATI` | char(1) | evet | `H` | Vade Bazında Liste Fiyatı Uygulaması parametresi işaretli ise E, değil ise H değerini alır. |
| 14 | `CAHESVADEBOLAT` | char(1) | evet | `H` | Cari Hesaba Vadelere Bölünerek Atılsın parametresi işaretli ise E, değil ise H değerini alır. |
| 15 | `CARIYEKDVAYRIAT` | char(1) | evet | `H` | Cari Hesaba KDV Ayrı Kayıt Olarak Atılsın parametresi işaretli ise E, değil ise H değerini alır. |
| 16 | `SIPDFIATFATTLCEV` | char(1) | evet | `H` | Siparişteki Döviz Fiyatları Faturada Türk Lirasına Çevrilsin parametresi işaretli ise E, değil ise H değerini alır. |
| 17 | `SIPFYENGECTARGUN` | char(1) | evet | `H` | Siparişteki Fiyatları Yeni Geçerlilik Tarihine Göre Güncellensin Mi parametresi işaretli ise E, değil ise H değerini alır. |
| 18 | `KOSTABFIATNETLES` | char(1) | evet | `H` | Koşul Tablosundaki Fiyatlar Netleştirilsin parametresi işaretli ise E, değil ise H değerini alır. |
| 19 | `KOSTABGIRDEGFIAT` | char(1) | evet | `H` | Koşul Tablosuna girilen Değerler Fiyat Kabul Edilsin parametresi işaretli ise E, değil ise H değerini alır. |
| 20 | `IRSFYENGECTARGUN` | char(1) | evet | `H` | İrsaliye Faturalaştırmada Koşullar Güncellensin parametresi işaretli ise E, değil ise H değerini alır. |
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `CIRODAKULLAN` | char(1) | evet | `H` | Koşul Ciro Primi İçin Kullanılsın parametresi işaretli ise E, değil ise H değerini alır. |
| 26 | `CIROMAXISKORAN` | TDBFLOAT | evet | `0` | Fatura Satırında Maksimum Mal Fazlası İskonta Oran(%)ını gösterir. |
| 27 | `KOSTIPKODU` | varchar(8) | evet |  | Koşul Tipini gösterir. |
| 28 | `AP` | char(1) | evet |  | Aktif parametresi işaretli ise E değil ise NULL değerini alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKOSULMAS_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLKOSULMAS_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLKOSULMAS_FKEY3` | `KOSTIPKODU` |
| PRIMARY KEY | `TBLKOSULMAS_PKEY` | `KOSUL_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSULMAS_IND_1` | `ISLETME_KODU` | Nonclustered |
| `TBLKOSULMAS_IND_ADI` | `ISLETME_KODU, SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLKOSULMAS_PKEY` | `KOSUL_KOD` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, KOSUL_KOD, ACIKLAMA, KOSRAPORKODU, URUNKISITLA
FROM dbo.TBLKOSULMAS WITH (NOLOCK);
```
