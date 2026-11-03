---
title: TBLSABLONTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsablontra-2/
---

# TBLSABLONTRA

> YARDIMCI PROGRAMLAR>KAYIT>NETSIS TRANSFER>ŞABLON HAZIRLAMA>SATIR BİLGİLERİ SEKMESİNDE GİRİLEN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 12
- **Birincil anahtar:** `INCKEYNO, TABLE_NAME, FIELDNAME, FIELDTYPE`
- **Not:** Bu tablo şema dokümanında ikinci kez, [YARDIMCI PROGRAMLAR modülünde](/veritabani/tablolar/tblsablontra/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TABLE_NAME` | varchar(30) | hayır |  | Tablo adını gösterir |
| 3 | `FIELDNAME` | varchar(50) | hayır |  | Seçilen saha adını gösterir. |
| 4 | `FIELDTYPE` | char(1) | hayır | `0` | Default 0 değeri atılır. |
| 5 | `LROW` | TDBSMALLINT | evet | `1` | Satır numarasını gösterir. |
| 6 | `COL` | TDBSMALLINT | evet | `0` | Sütun numarasını gösterir. |
| 7 | `LEN` | TDBSMALLINT | evet | `0` | Kayıt uzunluğunu gösterir. |
| 8 | `TRIM` | char(1) | evet | `H` | Baştan ve sondan boşluklar silinsin parametresini gösterir. |
| 9 | `DECIMALSEP` | char(1) | evet | `.` | Ondalık ayracını gösterir. |
| 10 | `THOUSANDSEP` | char(1) | evet | `.` | Rakam grp. Ayr. Gösterir. |
| 11 | `DEFVALUE` | varchar(30) | evet |  | Öndeğer alanına girilen değeri gösterir. |
| 12 | `DECCOUNT` | TDBSMALLINT | evet | `0` | Ondalık hanesini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLSABLONTRA_FKEY` | `INCKEYNO` |
| PRIMARY KEY | `TBLSABLONTRA_PKEY` | `INCKEYNO, TABLE_NAME, FIELDNAME, FIELDTYPE` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSABLONTRA_IND1` | `INCKEYNO` | nonclustered |
| `TBLSABLONTRA_IND2` | `INCKEYNO, LROW, COL, TABLE_NAME, FIELDNAME` | nonclustered, unique |
| `TBLSABLONTRA_PKEY` | `INCKEYNO, TABLE_NAME, FIELDNAME, FIELDTYPE` | clustered, unique, |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, TABLE_NAME, FIELDNAME, FIELDTYPE, LROW, COL
FROM dbo.TBLSABLONTRA WITH (NOLOCK);
```
