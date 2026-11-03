---
title: TBLKOSVADEMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkosvademas/
---

# TBLKOSVADEMAS

> VADE İSKONTO KAYITLARI/VADE KODLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `VADEKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `VADEKODU` | varchar(8) | hayır |  | Vade Kodunu gösterir. |
| 4 | `VADEACIKLAMA` | varchar(50) | evet |  | Vade Açıklamasını gösterir. |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `S_YEDEK1` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `S_YEDEK2` | varchar(15) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKOSVADEMAS_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLKOSVADEMAS_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLKOSVADEMAS_PKEY` | `VADEKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKOSVADEMAS_IND1` | `ISLETME_KODU, SUBE_KODU, VADEKODU` | Nonclustered, unique |
| `TBLKOSVADEMAS_PKEY` | `VADEKODU` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, VADEKODU, VADEACIKLAMA, KAYITTARIHI, KAYITYAPANKUL
FROM dbo.TBLKOSVADEMAS WITH (NOLOCK);
```
