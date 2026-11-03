---
title: TBLSABLONMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsablonmas/
---

# TBLSABLONMAS

> YARDIMCI PROGRAMLAR>KAYIT>NETSIS TRANSFER>ŞABLON HAZIRLAMA>ŞABLON SABİT SEKMESİNDE GİRİLEN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 27
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SABLON_ADI` | varchar(15) | evet |  | Oluşturulacak şablona verilecek ismi gösterir. |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `HAREKET_TURU` | char(1) | evet | `A` | Hareket türü alanında seçileni gösterir. |
| 5 | `ISLEMKES` | char(1) | evet | `H` | Hata durumunda işlem kes parametresini gösterir. |
| 6 | `SIPIRSCREATE` | char(1) | evet | `H` | Sipariş oluşturulurken irsaliye oluşturulsun parametresini gösterir. |
| 7 | `CIKISSIPKONT` | char(1) | evet | `H` | Bu alan kullanılmamaktadır. |
| 8 | `DOSWIN` | char(1) | evet | `N` | Text karakter tipini gösterir. |
| 9 | `LOGNAME` | varchar(70) | evet |  | Log adı sahasına girilen log dizinini gösterir. |
| 10 | `STARTROW` | TDBBYTE | evet | `-1` | Başlangıç satırını gösterir. |
| 11 | `TFILENAME` | varchar(70) | evet |  | Text dosya adı sahasına girilen text dizinini gösterir. |
| 12 | `LOGGOSTER` | char(1) | evet | `H` | Log görüntülensin parametresini gösterir. |
| 13 | `FULLTRAN` | char(1) | evet | `H` | Fulltrans parametresini gösterir. |
| 14 | `SIFRE` | varchar(15) | evet |  | Bu alan kullanılmamaktadır. |
| 15 | `IMPORT` | char(1) | evet | `H` | Yükle/sakla yı gösterir. |
| 16 | `IMEXPORTTYPE` | TDBBYTE | evet | `0` | Dosya tipini gösterir. Dosya tipi text dosya ise '0'+excel dosya ise '1' değerini gösterir. |
| 17 | `EXPORTWHERE` | TDBMEMO | evet |  | Bu alan kullanılmamaktadır. |
| 18 | `YEDEK1` | char(1) | evet |  | Fatura/irsaliyede varsa kayır etme parametresini gösterir. |
| 19 | `YEDEK2` | char(1) | evet |  | Barkod kontrolü yapılsın parametresini gösterir. |
| 20 | `YEDEK3` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK4` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK9` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK10` | varchar(100) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSABLONMAS_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSABLONMAS_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSABLONMAS_IND1` | `SUBE_KODU+SABLON_ADI+INCKEYNO` | Unique+Non-clustered |
| `TBLSABLONMAS_IND2` | `SABLON_ADI` | Unique+Non-clustered |
| `TBLSABLONMAS_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SABLON_ADI, INCKEYNO, HAREKET_TURU, ISLEMKES, SIPIRSCREATE
FROM dbo.TBLSABLONMAS WITH (NOLOCK);
```
