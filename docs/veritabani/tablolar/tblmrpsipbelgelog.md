---
title: TBLMRPSIPBELGELOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpsipbelgelog/
---

# TBLMRPSIPBELGELOG

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 33
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MGPMAS_ID` | varchar(50) | evet |  |  |
| 3 | `MRPSIP_ID` | TDBINTEGER | evet |  |  |
| 4 | `SAT_SIP_SUBE_KODU` | TDBSMALLINT | evet |  | Satış sipariş şube kodunu tutar |
| 5 | `BELGENO` | varchar(15) | hayır |  | Fis no alanını tutar. |
| 6 | `SIPKONT` | TDBINTEGER | evet |  | Stokların sipariş içerisinde girilen sırasını gösterir. |
| 7 | `AYRILAN_MIKTAR` | TDBFLOAT | evet |  |  |
| 8 | `BELGE_MIKTAR` | TDBFLOAT | evet |  |  |
| 9 | `ESKI_BELGE_MIKTAR` | TDBFLOAT | evet |  |  |
| 10 | `TESLIM_TARIHI` | TDBDATETIME | evet |  | Teslim tarihini tutar |
| 11 | `ESKI_TESLIM_TARIHI` | TDBDATETIME | evet |  | Değişmeden önceki teslimat tarihini tutar |
| 12 | `ONERI` | char(1) | evet |  | Öneri sahasıdır |
| 13 | `MUSSIPNO` | varchar(15) | evet |  | Müsteri sipariş numarasını tutar |
| 14 | `MUSSIPKONT` | TDBINTEGER | evet |  |  |
| 15 | `MUSSIPMIK` | TDBFLOAT | evet |  | Müşteri sipariş miktarınu tutar |
| 16 | `MUSSIPTAR` | TDBDATETIME | evet |  | Müstari sipariş tarihini tutar |
| 17 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `BELGE_TIPI` | char(1) | evet |  | Belge tipini tutar |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMRPSIPBELGELOG_FKEY_1` | `SAT_SIP_SUBE_KODU` |
| PRIMARY KEY | `TBLMRPSIPBELGELOG_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRPSIPBELGELOG_IND_1` | `MGPMAS_ID, BELGE_TIPI, SAT_SIP_SUBE_KODU, BELGENO, SIPKONT` | nonclustered |
| `TBLMRPSIPBELGELOG_IND_2` | `MGPMAS_ID, BELGE_TIPI, BELGENO` | nonclustered |
| `TBLMRPSIPBELGELOG_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MGPMAS_ID, MRPSIP_ID, SAT_SIP_SUBE_KODU, BELGENO, SIPKONT
FROM dbo.TBLMRPSIPBELGELOG WITH (NOLOCK);
```
