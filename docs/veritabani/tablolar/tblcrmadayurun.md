---
title: TBLCRMADAYURUN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmadayurun/
---

# TBLCRMADAYURUN

> ADAY SAYFASINDA GIRILEN ADAY-URUN BILGILERI TUTULUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `ADAYKOD, STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ADAYKOD` | TDBADAYKOD | hayır |  | Aday kayıt ekranında girilen kod no. |
| 2 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Aday ürün bolumunde girilen stok kodu |
| 3 | `MIKTAR` | TDBFLOAT | evet | `0` | Aday urun bolumunde girilen stok miktarı |
| 4 | `FIYAT` | TDBFLOAT | evet | `0` | Aday urun bolumunde girilen stok birim fiyatı. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `V_YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `V_YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `DOVFIAT` | decimal(28,15) | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMADAYURUN_FKEY1` | `ADAYKOD` |
| FOREIGN KEY | `TBLCRMADAYURUN_FKEY2` | `STOK_KODU` |
| PRIMARY KEY | `TBLCRMADAYURUN_PKEY` | `ADAYKOD, STOK_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMADAYURUN_PKEY` | `ADAYKOD, STOK_KODU` | Unique, Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ADAYKOD, STOK_KODU, MIKTAR, FIYAT, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLCRMADAYURUN WITH (NOLOCK);
```
