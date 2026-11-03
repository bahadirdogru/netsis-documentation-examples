---
title: TBLCRMSKYDURUM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskydurum/
---

# TBLCRMSKYDURUM

> SIKAYET DURUM KODLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `DURUMKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `DURUMKODU` | TDBGRUPKOD | hayır |  | Sikayet durum kodunu tutar. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ACIKLAMA` | varchar(100) | evet |  | Acıklama alanını tutar. |
| 5 | `EPOSTA` | text | evet |  | E-posta adresini tutar. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYDURUM_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCRMSKYDURUM_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCRMSKYDURUM_PKEY` | `DURUMKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYDURUM_IND_1` | `ISLETME_KODU, SUBE_KODU, ACIKLAMA` | Nonclustered |
| `TBLCRMSKYDURUM_PKEY` | `DURUMKODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 DURUMKODU, ISLETME_KODU, SUBE_KODU, ACIKLAMA, EPOSTA, KAYITYAPANKUL
FROM dbo.TBLCRMSKYDURUM WITH (NOLOCK);
```
