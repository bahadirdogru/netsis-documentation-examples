---
title: TBLKAMYONSOFOR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkamyonsofor/
---

# TBLKAMYONSOFOR

> Açıklama yok.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `PLAKA, SOFORISIM`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PLAKA` | varchar(15) | hayır |  | Plakayı gösterir. |
| 2 | `SOFORISIM` | varchar(20) | hayır |  | Söför isimlerini gösterir |
| 3 | `EHL_NO` | varchar(10) | evet |  | Ehliyet numarasını gösterir |
| 4 | `EHL_TAR` | TDBDATETIME | evet |  | Ehliyet tarihini gösterir. |
| 5 | `EHL_IL` | varchar(15) | evet |  | Ehliyet ilini gösterir. |
| 6 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 7 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 8 | `L_YEDEK1` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 9 | `L_YEDEK2` | TDBINTEGER | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 12 | `S_YEDEK1` | varchar(15) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `S_YEDEK2` | varchar(15) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKAMYONSOFOR_FKEY` | `PLAKA` |
| PRIMARY KEY | `TBLKAMYONSOFOR_PKEY` | `PLAKA, SOFORISIM` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKAMYONSOFOR_PKEY` | `PLAKA, SOFORISIM` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PLAKA, SOFORISIM, EHL_NO, EHL_TAR, EHL_IL, C_YEDEK1
FROM dbo.TBLKAMYONSOFOR WITH (NOLOCK);
```
