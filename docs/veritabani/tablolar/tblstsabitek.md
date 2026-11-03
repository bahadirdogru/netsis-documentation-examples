---
title: TBLSTSABITEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstsabitek/
---

# TBLSTSABITEK

> STOK>KAYIT>STOK KARTI KAYITLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 41
- **Birincil anahtar:** `STOK_KODU`

## İlgili sayfalar

- [Stok uçları (REST Items)](/rest/uclar/#stok-items-ve-stok-hareketi-itemtransactions)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TUR` | char(1) | evet |  | Ek bilgiler sekmesinde maliyet bilgileri alanında türü alanında seçileni gösterir. |
| 3 | `MGRUP` | varchar(35) | evet |  | Ek bilgiler sekmesinde maliyet bilgileri alanında mamul grup alanına girileni gösterir. |
| 4 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `INGISIM` | varchar(50) | evet |  | Stok kartı1 sekmesinde ingilizce isim alanına girileni gösterir. |
| 9 | `BIRIM_MALIYET` | TDBFLOAT | evet | `0` | Tutar/miktar bilgileri sekmesindeki birim maliyeti gösterir. |
| 10 | `KULL1N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 11 | `KULL2N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 12 | `KULL3N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 13 | `KULL4N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 14 | `KULL5N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 15 | `KULL6N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 16 | `KULL7N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 17 | `KULL8N` | TDBFLOAT | evet | `0` | kull tan. Sahalar sekmesinde nümerik sahaları gösterir. |
| 18 | `KULL1S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 19 | `KULL2S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 20 | `KULL3S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 21 | `KULL4S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 22 | `KULL5S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 23 | `KULL6S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 24 | `KULL7S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 25 | `KULL8S` | varchar(25) | evet |  | kull tan. Sahalar sekmesinde alfanümerik sahaları gösterir. |
| 26 | `SON_SATAL_FIAT` | TDBFLOAT | evet | `0` | Stok modülünde, son sat. Al+tarih seçilerek fiyat oluşturma çalıştırıldığında son satın alma fiyatını gösterir. |
| 27 | `SON_SATAL_TAR` | TDBDATETIME | evet |  | Stok modülünde, son sat. Al+tarih seçilerek fiyat oluşturma çalıştırıldığındaki tarihi gösterir. |
| 28 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha (default 0 değeri atılır) |
| 31 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `B_YEDEK1` | TDBBYTE | evet |  | Stok kartında ek bilgiler sekmesinde ötv alanında, ötv yok işaretli ise '0', satış işaretli ise '1', alış işaretli ise '2' değerini gösterir. |
| 35 | `I_YEDEK1` | TDBSMALLINT | evet |  | Ölçü birimleri sekmesinde birim seçimi 1 alanına girilen ölçü birimini gösterir.(TBLSTBIRIM-INCKEYNO) |
| 36 | `L_YEDEK1` | TDBINTEGER | evet |  | Ölçü birimleri sekmesinde birim seçimi 2 alanına girilen ölçü birimini gösterir. |
| 37 | `SONSATTAR` | TDBDATETIME | evet |  | Son satıs tarihini tutar |
| 38 | `DAGITICI_KODU` | TDBCARIKOD | evet |  | Ek bilgiler sekmesinde dağıtıcı kodu alanına girileni gösterir. |
| 39 | `CURBIRIM_MALIYET` | TDBFLOAT | evet | `0` | Tutar/miktar bilgileri sekmesindeki döviz birim maliyeti gösterir. |
| 40 | `AMBARMASRAF` | varchar(15) | evet |  | Ek bilgiler sekmesinde ambar giriş/çıkış alanında masraf merkezi alanına girileni gösterir. |
| 41 | `AMBARCIKISYERI` | char(1) | evet |  | Ek bilgiler sekmesinde ambar giriş/çıkış alanında çıkış yeri alanında seçileni gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTSABITEKPKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTSABITEK_FKEY1` | `STOK_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTSABITEK_IND_K1N` | `KULL1N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K1S` | `KULL1S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K2N` | `KULL2N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K2S` | `KULL2S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K3N` | `KULL3N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K3S` | `KULL3S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K4N` | `KULL4N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K4S` | `KULL4S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K5N` | `KULL5N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K5S` | `KULL5S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K6N` | `KULL6N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K6S` | `KULL6S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K7N` | `KULL7N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K7S` | `KULL7S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K8N` | `KULL8N+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_K8S` | `KULL8S+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_MGRP` | `MGRUP+STOK_KODU` | Unique, Non-Clustered |
| `TBLSTSABITEK_IND_TUR` | `TUR` | Non-unique, Non-Clustered |
| `TBLSTSABITEKPKEY` | `STOK_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, TUR, MGRUP, KAYITTARIHI, KAYITYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLSTSABITEK WITH (NOLOCK);
```
