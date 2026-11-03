---
title: TBLREPALNISH
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblrepalnish/
---

# TBLREPALNISH

> İŞLEMLER>NETSİS SİPARİŞ ÖNERİSİ>SİPARİŞ OLUŞTURMA SIRASINDA OLUŞAN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TARIH` | TDBDATETIME | evet |  | Tarihi gösterir. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DEPO_KODU` | TDBSMALLINT | evet | `0` | Stoğa ait depo kodunu gösterir. |
| 5 | `SATICI_KODU` | TDBCARIKOD | evet |  | Stoğu tedarik edildiği satıcı kodunu gösterir. |
| 6 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 7 | `NETSIS_MIK` | TDBFLOAT | evet | `0` | Netsisin önerdiği miktar |
| 8 | `SIP_MIK` | TDBFLOAT | evet | `0` | Siparişi miktarını gösterir. |
| 9 | `MAD` | TDBFLOAT | evet | `0` | Default 0 değeri atılmaktadır. |
| 10 | `ABC_KODU` | varchar(8) | evet |  | Stoğun ABC kodunu gösterir. |
| 11 | `SOQ` | TDBFLOAT | evet | `0` | Default 0 değeri atılmaktadır. |
| 12 | `MUSBAK` | TDBFLOAT | evet | `0` | Müşteri sipariş bakiyesini gösterir. |
| 13 | `SATBAK` | TDBFLOAT | evet | `0` | Satıcı sipariş bakiyesini gösterir. |
| 14 | `STOKBAK` | TDBFLOAT | evet | `0` | Stok bakiyesini gösterir. |
| 15 | `SIPARIS_NO` | varchar(8) | evet |  | Sipariş numarasını gösterir. |
| 16 | `GRKOD` | TDBGRUPKOD | evet |  | Stoğun grup kodunu gösterir. |
| 17 | `KOD1` | TDBGRUPKOD | evet |  | Stoğun kod-1 kodunu gösterir. |
| 18 | `KOD2` | TDBGRUPKOD | evet |  | Stoğun kod-2 kodunu gösterir. |
| 19 | `FIATKOD` | TDBGRUPKOD | evet |  | Stoğun varsa fiyat kodunu gösterir. |
| 20 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `YAPKOD` | varchar(15) | evet | `NULL` | Stoğun varsa yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLREPLANISH_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLREPLANISH_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLREPLANISH_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLREPLANISHYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLREPLANISH_1` | `TARIH+ SATICI_KODU` | Non-unique, Non-clustered |
| `TBLREPLANISH_2` | `STOK_KODU` | Non-unique, Non-clustered |
| `TBLREPLANISH_3` | `SUBE_KODU+ TARIH+ DEPO_KODU+ SATICI_KODU+ STOK_KODU` | Unique, Non-clustered |
| `TBLREPLANISH_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, TARIH, SUBE_KODU, DEPO_KODU, SATICI_KODU, STOK_KODU
FROM dbo.TBLREPALNISH WITH (NOLOCK);
```
