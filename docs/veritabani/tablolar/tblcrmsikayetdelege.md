---
title: TBLCRMSIKAYETDELEGE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmsikayetdelege/
---

# TBLCRMSIKAYETDELEGE

> SIKAYET YONLENDIRME KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `SIKAYETKODU, SIRANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SIKAYETKODU` | TDBSIKAYETKOD | hayır |  | Sikayet kodunu tutar. |
| 2 | `SIRANO` | TDBINTEGER | hayır |  | Delege edilme sayısını tutar. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `TARIH` | TDBDATETIME | evet | `getdate()` | Delege edilme tarihini tutar. |
| 5 | `MUSTERITEMSILCISI` | TDBSMALLINT | hayır |  | Delege edilen musteri temsilcisinin kodunu tutar. |
| 6 | `DURUMKODU` | TDBGRUPKOD | evet |  | Sikayet durum kodunu tutar. |
| 7 | `ACIKLAMA` | text | evet |  | Yonlendirmede girilen acıklamayı tutar;ilk kayıtta ILK ATAMA degerini alır. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSIKAYETDELEGE_FKEY1` | `SIKAYETKODU` |
| FOREIGN KEY | `TBLCRMSIKAYETDELEGE_FKEY2` | `DURUMKODU` |
| PRIMARY KEY | `TBLCRMSIKAYETDELEGE_PKEY` | `SIKAYETKODU, SIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSIKAYETDELEGE_IND_1` | `DURUMKODU` | Nonclustered |
| `TBLCRMSIKAYETDELEGE_IND_2` | `SUBE_KODU, MUSTERITEMSILCISI` | Nonclustered |
| `TBLCRMSIKAYETDELEGE_PKEY` | `SIKAYETKODU, SIRANO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SIKAYETKODU, SIRANO, SUBE_KODU, TARIH, MUSTERITEMSILCISI, DURUMKODU
FROM dbo.TBLCRMSIKAYETDELEGE WITH (NOLOCK);
```
