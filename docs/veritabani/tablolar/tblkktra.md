---
title: TBLKKTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkktra/
---

# TBLKKTRA

> KAYIT>KALİTE KONTROL KAYTLARINA BAĞLI DETAY KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 37

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KKNO` | varchar(8) | hayır |  | Kalite kontrol numarasını gösterir. |
| 2 | `ITEMSIRANO` | TDBINTEGER | hayır |  | Kalite kontrol hareket numarasını gösterir. |
| 3 | `KKISCI` | TDBINTEGER | evet | `0` | Personeli gösterir. |
| 4 | `KKTARIHI` | TDBDATETIME | evet |  | Kalite kontrol tarihini gösterir. |
| 5 | `KONTROLMIKTAR` | TDBFLOAT | evet |  | Kontrol edilen miktarı gösterir. |
| 6 | `KABULREDMIKTAR` | TDBFLOAT | evet |  | Kabul/Red miktarını gösterir. |
| 7 | `KABULRED` | char(1) | evet |  | Kabul/Red Durumunu gösterir.Hiçbiri ise 'H', Kabul ise 'K', Red ise 'R' değerini ifade eder. |
| 8 | `ITEMSERILOTNO` | varchar(50) | evet |  | Senedin asıl borçlusunu gösterir. |
| 9 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama sahasını gösterir. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `ISLETME_KODU` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `ACIK1` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `ACIK2` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `ACIK3` | varchar(45) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `ACIK4` | varchar(45) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `HURDAMIK` | TDBFLOAT | evet |  | Hurda Miktarını gösterir. |
| 34 | `ITEMSERILOTNO_2` | varchar(50) | evet |  | 2.seri bilgisi yer alır. |
| 35 | `ITEMSERI_ACIK1` | varchar(50) | evet |  | seri açıklama 1 değeri yer alır. |
| 36 | `ITEMSERI_ACIK2` | varchar(100) | evet |  | Seri açıklama 2 değeri yer alır. |
| 37 | `OLCU_BIRIMI` | TDBSMALLINT | hayır |  | Kontrol edilen miktar kısmında ölçü birimi bazında seçim yapabilmek için eklenmiştir. Ölçü birimi değeri tutulur. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKTRA_IND1` | `ISLETME_KODU+KKNO+ITEMSIRANO` | Unique, Non-clustered |
| `TBLKKTRA_IND2` | `ISLETME_KODU+KKNO+KABULRED` | Non-unique, Non-clustered |
| `TBLKKTRAPKEY` | `KKNO+ITEMSIRANO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KKNO, ITEMSIRANO, KKISCI, KKTARIHI, KONTROLMIKTAR, KABULREDMIKTAR
FROM dbo.TBLKKTRA WITH (NOLOCK);
```
