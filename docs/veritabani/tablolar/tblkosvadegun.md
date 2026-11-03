---
title: TBLKOSVADEGUN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkosvadegun/
---

# TBLKOSVADEGUN

> VADE İSKONTO KAYITLARI/VADE İSKONTO DEĞERLERİNİ TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `KODTURU, KOD, BASLANGICTAR, KOSUL_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `VADEKODU` | varchar(8) | hayır |  | Vade Kodunu gösterir. |
| 2 | `VADEGUNU` | TDBSMALLINT | hayır | `0` | Vade Gününü gösterir. |
| 3 | `ISKONTO` | TDBFLOAT | hayır | `0` | İskontoyu gösterir. |
| 4 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKOSULEK_FKEY` | `KOSUL_KOD` |
| PRIMARY KEY | `TBLKOSULEK_PKEY` | `KODTURU, KOD, BASLANGICTAR, KOSUL_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSVADEGUN_PKEY` | `VADEKODU, VADEGUNU` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 VADEKODU, VADEGUNU, ISKONTO, KAYITTARIHI, KAYITYAPANKUL, DUZELTMETARIHI
FROM dbo.TBLKOSVADEGUN WITH (NOLOCK);
```
