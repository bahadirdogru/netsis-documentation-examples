---
title: TBLDAGFUNCLIST
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagfunclist/
---

# TBLDAGFUNCLIST

> FONKSIYON TANIMLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `PROVIDER, FUNCID`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PROVIDER` | TDBINTEGER | hayır |  | Dagıtım PDA saglayıcısı kodunu tutar. |
| 2 | `FUNCID` | TDBINTEGER | hayır |  | Fonksiyon kodunu tutar. |
| 3 | `FUNCNAME` | varchar(15) | hayır |  | Fonksiyon adını tutar. |
| 4 | `FUNCDESC` | varchar(100) | evet |  | Acıklama alanını tutar. |
| 5 | `FUNCINDEX` | TDBINTEGER | evet |  | Fonksiyon sırasını tutar. |
| 6 | `PROCESSTYPE` | TDBINTEGER | evet | `0` | İslem tipini tutar;Gonder=0;Al=1;Gonder/Al=2 |
| 7 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FUNCXML` | TDBMEMO | hayır |  | Fonksiyon icin XML alanını tutar. |
| 20 | `FUNCSQL` | TDBMEMO | hayır |  | Fonksiyon icin SQL alanını tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDAGFUNCLIST_PK1` | `PROVIDER, FUNCID` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGFUNCLIST_IND1` | `PROVIDER, FUNCNAME` | nonclustered, unique |
| `TBLDAGFUNCLIST_PK1` | `PROVIDER, FUNCID` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PROVIDER, FUNCID, FUNCNAME, FUNCDESC, FUNCINDEX, PROCESSTYPE
FROM dbo.TBLDAGFUNCLIST WITH (NOLOCK);
```
