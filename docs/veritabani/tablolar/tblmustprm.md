---
title: TBLMUSTPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmustprm/
---

# TBLMUSTPRM

> KAYIT>PARAMETRE GİRİŞİ EKRANINDA TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MÜSTAHSİL](/veritabani/moduller/mustahsil/)
- **Kolon sayısı:** 30
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOPAJ` | TDBFLOAT | evet | `0` | Makbuz kaydı yapılacak ürünün stopaj yüzdesini gösterir. |
| 3 | `STOPAJ_MUHASEBE_KODU` | TDBMUHKOD | evet |  | Stopaj hesap kodunu gösterir. |
| 4 | `FON` | TDBFLOAT | evet | `0` | Savunma sanayi destekleme fonu yüzde oranını gösterir. |
| 5 | `FON_MUHASEBE_KODU` | TDBMUHKOD | evet |  | S.s.d.fonu muhasebe kodunu gösterir. |
| 6 | `BORSA` | TDBFLOAT | evet | `0` | Ticaret borsaları tarafından belirlenen müstahsil makbuzlarından alınan yüzde değerini gösterir. |
| 7 | `BORSA_MUHASEBE_KODU` | TDBMUHKOD | evet |  | Borsa tutarlarının aktarılacağı muhasebe hesap kodunu gösterir. |
| 8 | `BAGKUR_ORANI` | TDBBYTE | evet | `0` | Bağkur adına kesilen primlerin girilen yüzde ya da binde değerlerini gösterir. |
| 9 | `BAGKUR_OND` | TDBBYTE | evet | `1` | Bağkur oranının yüzde ya da binde olarak seçimini gösterir. |
| 10 | `BAGKUR_KODU` | varchar(35) | evet |  | Bağkur oranının muhasebe hesap kodunu gösterir. |
| 11 | `MBAZ_SORAN` | char(1) | evet |  | Genel parametreler sekmesinde mal bazında stopaj oranı parametresini gösterir. |
| 12 | `ZEYTIN` | char(1) | evet |  | Genel parametreler sekmesinde zeytinyağı fiyat uygulaması parametresini gösterir. |
| 13 | `IRSALIYE` | char(1) | evet |  | Genel parametreler sekmesinde irsaliye bağlantılı parametresini gösterir. |
| 14 | `TUTARDAN_BIRIM_FIATA` | char(1) | evet |  | Genel parametreler sekmesinde tutardan birim fiyata geçilsin parametresini gösterir. |
| 15 | `MERA` | TDBFLOAT | evet | `0` | Mera kesintisinin girilen binde değerini gösterir. |
| 16 | `MERA_MUHASEBE_KODU` | TDBMUHKOD | evet |  | Mera oranının muhasebe hesap kodunu gösterir. |
| 17 | `YEDEK1` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK2` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK3` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK5` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK7` | char(1) | evet |  | Genel parametreler sekmesinde emanet takibi yapılsın parametresini gösterir. |
| 24 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `EMANETSIRANO` | char(1) | evet |  | Genel parametreler sekmesinde emanet takibi yapılsın parametresi işaretli olduğunda aktif olan emanet kayıt sıra no sorulsun parametresini gösterir. |
| 30 | `CARIDE_BOLUNSUN` | char(1) | evet |  | Vadelere bölme ekranı desteği sağlanmıştır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUSTPRM_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMUSTPRM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUSTPRM_PKEYTBLMUSTPRM_FKEY` | `SUBE_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, STOPAJ, STOPAJ_MUHASEBE_KODU, FON, FON_MUHASEBE_KODU, BORSA
FROM dbo.TBLMUSTPRM WITH (NOLOCK);
```
