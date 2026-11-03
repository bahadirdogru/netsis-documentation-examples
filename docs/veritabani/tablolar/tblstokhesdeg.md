---
title: TBLSTOKHESDEG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokhesdeg/
---

# TBLSTOKHESDEG

> KAYIT>DÜZELTİLECEK STOK HESAPLARI TANIMLARI EKRANINDA TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `HESAPKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `HESAPKODU` | TDBMUHKOD | hayır |  | Hesap kodunu gösterir. |
| 2 | `DURMAGUNU` | TDBINTEGER | evet | `0` | İlk madde oran için durma gününü gösterir. |
| 3 | `ILKMADDEORAN` | TDBFLOAT | evet | `0` | İlk madde oranını gösterir. |
| 4 | `ISCILIKORAN` | TDBFLOAT | evet | `0` | Direkt işçilik oranını gösterir. |
| 5 | `AMORTISMANORAN` | TDBFLOAT | evet | `0` | Amortisman oranını gösterir. |
| 6 | `GENURETIMGIDERORAN` | TDBFLOAT | evet | `0` | Genel üretim gider oranını gösterir. |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `FINANSMANGIDERORAN` | TDBFLOAT | evet | `0` | Finansman gider oranını gösterir. |
| 22 | `ISCILIKDURMAGUNU` | TDBINTEGER | evet | `0` | Direkt işçilik için girilen oranın durma gününü gösterir. |
| 23 | `AMORTISMANDURMAGUNU` | TDBINTEGER | evet | `0` | Amortisman oranı için girilen durma gününü gösterir. |
| 24 | `GENURETIMGIDERDURMAGUNU` | TDBINTEGER | evet | `0` | Genel üretim gider oranı için girilen durma gününü gösterir. |
| 25 | `FINANSMANGIDERDURMAGUNU` | TDBINTEGER | evet | `0` | Finansman gider oranı için girilen durma gününü gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKHESDEG_PKEY` | `HESAPKODU` |
| FOREIGN KEY | `TBLSTOKHESDEG_FKEY` | `HESAP_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKHESDEG_PKEY` | `HESAPKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 HESAPKODU, DURMAGUNU, ILKMADDEORAN, ISCILIKORAN, AMORTISMANORAN, GENURETIMGIDERORAN
FROM dbo.TBLSTOKHESDEG WITH (NOLOCK);
```
