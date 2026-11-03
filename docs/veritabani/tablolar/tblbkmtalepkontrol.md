---
title: TBLBKMTALEPKONTROL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbkmtalepkontrol/
---

# TBLBKMTALEPKONTROL

> Açıklama yok.

- **Modül:** [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `TALEP_ID` | TDBINTEGER | hayır |  | Talep numarasını gösterir |
| 5 | `KONTROL_TARIHI` | TDBDATETIME | evet |  | Kontrol edildiği tarihi tutar |
| 6 | `KONTROL_EDEN` | TDBSMALLINT | hayır |  | Kontrol eden bilgisi |
| 7 | `ONAY_DURUM` | TDBINTEGER | evet | `0` | Onay durum bilgisi |
| 8 | `KONTROL_ACIKLAMA` | text | evet |  | Kontrol açıklama bilgisi |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBKMTALEPKONTROL_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBKMTALEPKONTROL_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBKMTALEPKONTROL_FKEY4` | `TALEP_ID` |
| FOREIGN KEY | `TBLBKMTALEPKONTROL_FKEY5` | `SUBE_KODU, KONTROL_EDEN` |
| PRIMARY KEY | `TBLBKMTALEPKONTROL_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBKMTALEPKONTROL_IND_1` | `TALEP_ID, SUBE_KODU` | nonclustered, unique |
| `TBLBKMTALEPKONTROL_IND_2` | `ONAY_DURUM` | nonclustered |
| `TBLBKMTALEPKONTROL_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, TALEP_ID, KONTROL_TARIHI, KONTROL_EDEN
FROM dbo.TBLBKMTALEPKONTROL WITH (NOLOCK);
```
