---
title: TBLPOSODEME
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblposodeme/
---

# TBLPOSODEME

> POS MODÜLÜ>KAYIT>POS PARAMETRELERİ>ÖDEME DETAY KAYITLARI SEKMESİNDE TANIMLANAN KAYITLARI TUTAR.

- **Modül:** [POS](/veritabani/moduller/pos/)
- **Kolon sayısı:** 11
- **Birincil anahtar:** `SUBE_KODU+POS_TIPI+ODEME_TIP`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `POS_TIPI` | TDBBYTE | hayır |  | Pos parametreleri sekmesinde kullanılacak pos tipini gösterir. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ODEME_TIP` | varchar(2) | hayır |  | Marketlerde farklı ödeme şekilleri (taksitli satış, kredi kartı, peşin vs.) için belirlenen ödeme tiplerini gösterir. |
| 4 | `ODEME_CRKS` | char(1) | evet | `K` | Yazar kasalardan, ödeme tipleriyle yapılan tahsilatların hangi kasa koduna veya cari koda aktarılacağını gösterir. İlgili ödeme tipi için cari seçilmiş ise 'C', kasa seçilmiş ise 'K' değerini gösterir. |
| 5 | `ODEME_KOD` | TDBMUHKOD | evet |  | Ödeme tipinde cari seçilmiş ise cari kodu, kasa seçilmiş ise kasa kodunu gösterir. |
| 6 | `SYEDEK` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `CYEDEK` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPOSODEME_PKEY` | `SUBE_KODU+POS_TIPI+ODEME_TIP` |
| FOREIGN KEY | `TBLPOSODEME_FKEY` | `SUBE_KODU+POS_TIPI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPOSODEME_PKEY` | `SUBE_KODU+POS_TIPI+ODEME_TIP` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 POS_TIPI, SUBE_KODU, ODEME_TIP, ODEME_CRKS, ODEME_KOD, SYEDEK
FROM dbo.TBLPOSODEME WITH (NOLOCK);
```
