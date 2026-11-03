---
title: TBLDAGFUNCSCRIPT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagfuncscript/
---

# TBLDAGFUNCSCRIPT

> FONKSIYON ALAN ONDEGER TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `PROVIDER, FUNCID`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PROVIDER` | TDBINTEGER | hayır |  | Dagıtım PDA saglayıcı kodunu tutar. |
| 2 | `FUNCID` | TDBINTEGER | hayır |  | Fonksiyon kodunu tutar. |
| 3 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KAYITTARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMETARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `SCRIPTCODE` | TDBMEMO | hayır |  | Tanımlanan ondegeri tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDAGFUNCSCRIPT_FK1` | `PROVIDER, FUNCID` |
| PRIMARY KEY | `TBLDAGFUNCSCRIPT_PK1` | `PROVIDER, FUNCID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGFUNCSCRIPT_PK1` | `PROVIDER, FUNCID` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PROVIDER, FUNCID, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLDAGFUNCSCRIPT WITH (NOLOCK);
```
