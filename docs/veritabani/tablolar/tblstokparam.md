---
title: TBLSTOKPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokparam/
---

# TBLSTOKPARAM

> STOK PARAMETRELERİNİ TUTAR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 38
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MIK_HANE` | TDBSMALLINT | evet | `0` |  |
| 3 | `SATICI` | char(1) | evet |  | Cari bilgisi aransın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 4 | `ING_ISIM` | char(1) | evet |  | Grup açıklama parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 5 | `OZEL_MALIYET` | char(1) | evet |  | Maliyet sistemi parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 6 | `BASLIK1` | varchar(25) | evet |  | Sayısal1 saha başlığını gösterir. |
| 7 | `BASLIK2` | varchar(25) | evet |  | Sayısal2 saha başlığını gösterir. |
| 8 | `BASLIK3` | varchar(25) | evet |  | Sayısal3 saha başlığını gösterir. |
| 9 | `BASLIK4` | varchar(25) | evet |  | Sayısal4 saha başlığını gösterir. |
| 10 | `BASLIK5` | varchar(25) | evet |  | Sayısal5 saha başlığını gösterir. |
| 11 | `BASLIK6` | varchar(25) | evet |  | Sayısal6 saha başlığını gösterir. |
| 12 | `BASLIK7` | varchar(25) | evet |  | Sayısal7 saha başlığını gösterir. |
| 13 | `BASLIK8` | varchar(25) | evet |  | Sayısal8 saha başlığını gösterir. |
| 14 | `BASLIK9` | varchar(25) | evet |  | Alfasayısal saha1 başlığını gösterir. |
| 15 | `BASLIK10` | varchar(25) | evet |  | Alfasayısal saha2 başlığını gösterir. |
| 16 | `BASLIK11` | varchar(25) | evet |  | Alfasayısal saha3 başlığını gösterir. |
| 17 | `BASLIK12` | varchar(25) | evet |  | Alfasayısal saha4 başlığını gösterir. |
| 18 | `BASLIK13` | varchar(25) | evet |  | Alfasayısal saha5 başlığını gösterir. |
| 19 | `BASLIK14` | varchar(25) | evet |  | Alfasayısal saha6 başlığını gösterir. |
| 20 | `BASLIK15` | varchar(25) | evet |  | Alfasayısal saha7 başlığını gösterir. |
| 21 | `BASLIK16` | varchar(25) | evet |  | Alfasayısal saha8 başlığını gösterir. |
| 22 | `FIELD_SEC` | char(1) | evet |  |  |
| 23 | `CHECK_DIGIT` | char(1) | evet |  | Check digit parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 24 | `URETICI_K` | char(1) | evet |  | Üretici kodunda barkod kontrolü parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 25 | `C_YEDEK1` | char(1) | evet |  | Sayımda açıklama ve fiş no girilsin parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 26 | `C_YEDEK2` | char(1) | evet |  | Şubeler dahil maliyet sistemi parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 27 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `C_YEDEK4` | char(1) | evet |  | Fiyatlar sadece fiyat listelerinden getirilsin parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 29 | `C_YEDEK5` | char(1) | evet |  | Esnek yapılandırma parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 30 | `C_YEDEK6` | char(1) | evet |  | Tarihsel planlama kayıtları yapılsın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 31 | `C_YEDEK7` | char(1) | evet |  | Şube bazında planlama kayıtları yapılmayacak parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 32 | `C_YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `C_YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `C_YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 36 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 37 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 38 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKPARAM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLSTOKPARAM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKPARAM_PKEY` | `ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MIK_HANE, SATICI, ING_ISIM, OZEL_MALIYET, BASLIK1
FROM dbo.TBLSTOKPARAM WITH (NOLOCK);
```
