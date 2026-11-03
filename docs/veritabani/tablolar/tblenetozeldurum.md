---
title: TBLENETOZELDURUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblenetozeldurum/
---

# TBLENETOZELDURUM

> E-NETSIS ÖZEL DURUM TANIMLAMALARINI TUTAR.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `SIRA`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TIP` | TDBBYTE | evet |  | Tipi alanında seçileni gösterir. (Bilgi, Onaylama ya da Düzenleme) |
| 3 | `SIRA` | TDBINTEGER | hayır |  | Birden fazla kontrol tanımlanmışsa çalışma sıralarını gösterir. |
| 4 | `ADI` | varchar(50) | evet |  | Yapılacak kontrole ait başlığın girileceği satırı gösterir. |
| 5 | `KOSUL` | image | evet |  | VBScript ekranındaki bilgileri gösterir. |
| 6 | `DURUM` | image | evet |  | Durum tanımlama, VBScript haricinde extra tanımları gösterir. |
| 7 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `IYEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `IYEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `FYEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `FYEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `DYEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `DYEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `SYEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `SYEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLENETOZELDURUM_PKEY` | `SIRA` |
| FOREIGN KEY | `TBLENETOZELDURUM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLENETOZELDURUM_PKEY` | `SIRA` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TIP, SIRA, ADI, KOSUL, DURUM
FROM dbo.TBLENETOZELDURUM WITH (NOLOCK);
```
