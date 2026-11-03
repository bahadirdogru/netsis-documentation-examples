---
title: TBLCRMFIRSATURUN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmfirsaturun/
---

# TBLCRMFIRSATURUN

> FIRSAT URUN BILGILERINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `FIRSATKOD, STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `FIRSATKOD` | TDBADAYKOD | hayır |  | Fırsat kodunu tutar. |
| 2 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Fırsat urunu olan stok kodunu tutar. |
| 3 | `MIKTAR` | TDBFLOAT | evet | `0` | Fırsat urun miktarını tutar. |
| 4 | `FIYAT` | TDBFLOAT | evet | `0` | Fırsat urun birim fiyatını tutar. |
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
| 25 | `DOVFIAT` | decimal(28,15) | evet | `0` | Fırsat urunu dovizli ise birim doviz fiyatını tutar. |
| 26 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMFIRSATURUN_FKEY1` | `FIRSATKOD` |
| FOREIGN KEY | `TBLCRMFIRSATURUN_FKEY2` | `STOK_KODU` |
| PRIMARY KEY | `TBLCRMFIRSATURUN_PKEY` | `FIRSATKOD, STOK_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMFIRSATURUN_PKEY` | `FIRSATKOD, STOK_KODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 FIRSATKOD, STOK_KODU, MIKTAR, FIYAT, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLCRMFIRSATURUN WITH (NOLOCK);
```
