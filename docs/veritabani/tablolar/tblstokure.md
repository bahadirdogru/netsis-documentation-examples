---
title: TBLSTOKURE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokure/
---

# TBLSTOKURE

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 11
- **Birincil anahtar:** `STOK_KODU, URETICI_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOK_KODU` | TDBSTOKKOD | hayır |  | 35 karakter uzunluğunda stok kodunun tanımlandığı alandır. |
| 2 | `URETICI_KODU` | varchar(35) | hayır |  | Stok koduna ait stok kartı2 sekmesinde üretici koduna girilen değeri gösterir. |
| 3 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 4 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 5 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLSTOKURE_FKEY` | `STOK_KODU` |
| PRIMARY KEY | `TBLSTOKUREPKEY` | `STOK_KODU, URETICI_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKURE_IND_1` | `STOK_KODU, URETICI_KODU` | nonclustered, unique |
| `TBLSTOKURE_IND_2` | `URETICI_KODU` | nonclustered, unique |
| `TBLSTOKUREPKEY` | `STOK_KODU, URETICI_KODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 STOK_KODU, URETICI_KODU, S_YEDEK1, S_YEDEK2, F_YEDEK1, F_YEDEK2
FROM dbo.TBLSTOKURE WITH (NOLOCK);
```
