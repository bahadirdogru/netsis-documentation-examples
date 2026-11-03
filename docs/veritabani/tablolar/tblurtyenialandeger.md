---
title: TBLURTYENIALANDEGER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurtyenialandeger/
---

# TBLURTYENIALANDEGER

> ÜRETİM>KAYIT>SAHA TABLO EŞLEŞTİRMESİ EKRANINDA>GENEL TANIMLAMALAR>ÖNDEĞER TANIMLAMALARINDAN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `ALANADI+GOSTERSIRASI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ALANADI` | varchar(30) | hayır |  | Kullanıcı tarafından alan adı sahasına girilen veritabanında yeni oluşacak nesnenin adını gösterir. |
| 2 | `GOSTERSIRASI` | TDBINTEGER | hayır |  | Birden fazla nesne alanı kullanıcı tarafından yaratıldı ise bu nesnelerin kendi aralarındaki gösterim sırasını gösterir. |
| 3 | `DEGER` | varchar(100) | evet |  | Öndeğer tanımlama ekranında değer sahasına girilen öndeğeri gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLURTKULALANDEGER_PKEY` | `ALANADI+GOSTERSIRASI` |
| FOREIGN KEY | `TBLURTKULALANDEGER_FKEY1` | `ALANADI` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLURTKULALANDEGER_PKEY` | `ALANADI+GOSTERSIRASI` | Clustered |
| `TBLURTYENIALANDEGER_IND1` | `ALANADI+DEGER` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ALANADI, GOSTERSIRASI, DEGER, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLURTYENIALANDEGER WITH (NOLOCK);
```
