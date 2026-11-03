---
title: TBLTMPPRJKUMULE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltmpprjkumule/
---

# TBLTMPPRJKUMULE

> KAYITLAR>PROJE KODU GİRİŞİ>KÜMÜLE RAPOR ŞABLON TANIMLAMA EKRANINA GİRİLEN KAYITLARDAN SONRA HAZIRLIK ÇALIŞTIR BUTONUNA BASILDIKTAN SONRA TABLOYA KAYIT ATAR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `RAPORKOD+SIRANO+VTISIM`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `RAPORKOD` | varchar(15) | hayır |  | Genel tanımlamalar sekmesindeki rapor kodunu gösterir. |
| 4 | `SIRANO` | TDBSMALLINT | hayır |  | Detay tanımlamalar sekmesindeki sıra numarasını gösterir. |
| 5 | `VTISIM` | varchar(30) | hayır |  | Rapor koduna bağlı sıra numaraları bazında tanımlanan veritabanı isimlerini gösterir. |
| 6 | `MIKTAR` | TDBFLOAT | evet |  | Detay tanımları sekmesinde sql cümlesi girişi alanında miktarı gösterir. |
| 7 | `BIRIM` | varchar(2) | evet |  | Detay tanımları sekmesinde sql cümlesi girişi alanında birimi gösterir. |
| 8 | `TUTAR` | TDBFLOAT | evet |  | Detay tanımları sekmesinde sql cümlesi girişi alanında tutarı gösterir. |
| 9 | `FIRMADOVTUT` | TDBFLOAT | evet |  | Detay tanımları sekmesinde sql cümlesi girişi alanında firma döviz tutarını gösterir. |
| 10 | `DOVTIP` | TDBSMALLINT | evet |  | Detay tanımları sekmesinde sql cümlesi girişi alanında döviz tipini gösterir. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK1` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK2` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `IYEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `IYEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `TYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `TYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `TYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `TYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLTMPPRJKUMULE_PKEY` | `RAPORKOD+SIRANO+VTISIM` |
| FOREIGN KEY | `TBLPRJKUMULE_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLPRJKUMULE_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TMPPRJKUMULE_FKEY1` | `RAPORKOD+SIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLTMPPRJKUMULE_PKEY` | `RAPORKOD+SIRANO+VTISIM` | Clustered |
| `TMPPRJKUMULE_IND1` | `ISLETME_KODU+SUBE_KODU+RAPORKOD+SIRANO` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, RAPORKOD, SIRANO, VTISIM, MIKTAR
FROM dbo.TBLTMPPRJKUMULE WITH (NOLOCK);
```
