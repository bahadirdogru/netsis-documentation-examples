---
title: TBLCAODETRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcaodetra/
---

# TBLCAODETRA

> ODEME PLANI KAYITLARI ODEME PLANI-2 KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ODEKOD` | TDBGRUPKOD | evet |  | Odeme kodunu tutar. |
| 2 | `SIRANO` | tinyint | evet |  | Sıra no bilgisini tutar. |
| 3 | `ORAN` | TDBFLOAT | evet |  | Oran bilgisini tutar. |
| 4 | `VADETIPI` | tinyint | evet |  | Vade tipini tutar. |
| 5 | `GUN` | TDBSMALLINT | evet |  | Vade tipinde vade gunu, sabit gun yada sabit gun+vade gunu isaretlendiginde aktif olan gun bilgisini tutar. |
| 6 | `KOSUL` | varchar(255) | evet |  | Kayıtların koşullarının tutulduğu sahadır |
| 7 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK7` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK8` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `RAPORKODU` | varchar(15) | evet |  | Rapor kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCAODETRAFKEY` | `ODEKOD` |
| PRIMARY KEY | `TBLCAODETRAPKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCAODETRA_IND_1` | `ODEKOD, SIRANO, INCKEYNO` | Clustered, unique |
| `TBLCAODETRAPKEY` | `INCKEYNO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ODEKOD, SIRANO, ORAN, VADETIPI, GUN, KOSUL
FROM dbo.TBLCAODETRA WITH (NOLOCK);
```
