---
title: TBLDEPDURUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldepdurum/
---

# TBLDEPDURUM

> DİNAMİK DEPO DURUM BİLGİLERİ

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `STOKKODU, HUCREKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir |
| 2 | `HUCREKODU` | varchar(15) | hayır |  | Stoğun yerleştirildiği hücre bilgisi |
| 3 | `NETBAKIYE` | TDBFLOAT | evet | `0` | Hücrede yer alan stok net bakiye |
| 4 | `BRUTBAKIYE` | TDBFLOAT | evet | `0` | Brüt bakiye bilgisi tutulur |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK3` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK4` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEPDURUM_PKEY` | `STOKKODU, HUCREKODU` |
| FOREIGN KEY | `TBLDEPDURUM_FKEY` | `STOKKODU` |
| FOREIGN KEY | `TBLDEPDURUM_FKEY1` | `HUCREKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPDURUM_PKEY` | `STOKKODU, HUCREKODU` | Unique ,Primary Key |
| `TBLDEPDURUMIND_IND_1` | `STOKKODU` | Duplicate |
| `TBLDEPDURUMIND_IND_2` | `HUCREKODU` | Duplicate |

## Örnek sorgu

```sql
SELECT TOP 100 STOKKODU, HUCREKODU, NETBAKIYE, BRUTBAKIYE, C_YEDEK1, C_YEDEK2
FROM dbo.TBLDEPDURUM WITH (NOLOCK);
```
