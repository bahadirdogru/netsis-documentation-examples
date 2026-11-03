---
title: TBLMGPMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmgpmas/
---

# TBLMGPMAS

> MGP RAPORU TANIMLAMALARINI TUTAN TABLODUR/ GEREKSINIM PLANLAMA CALISTIR PARAMETRESI ISARETLI ISE TABLOYU GUNCELLIYOR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 48

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BASTARIH` | TDBDATETIME | evet |  | MGP baslangıc tarihidir. |
| 3 | `BITTARIH` | TDBDATETIME | evet |  | MGP bitis tarihidir. |
| 4 | `CALISMAZAMANI` | TDBDATETIME | evet |  | Raporun calıstırıldıgı tarih bilgisidir. |
| 5 | `BACKUPFLAG` | TDBBYTE | evet |  | Default olarak 0 degerini atıyor. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `SONSTHARINCKEYNO` | TDBINTEGER | evet |  |  |
| 19 | `FABRIKA_KODU` | varchar(35) | evet |  |  |
| 20 | `MINSTOKBAK` | char(1) | evet |  |  |
| 21 | `MAXSTOKTAMAMLA` | char(1) | evet |  |  |
| 22 | `BAKKONT` | char(1) | evet |  |  |
| 23 | `GENELYAPKODDESTEK` | char(1) | evet |  |  |
| 24 | `YAPKODNOTKONTROL` | char(1) | evet |  |  |
| 25 | `MEVCUTBELGEMIKTARARTTIR` | char(1) | evet |  |  |
| 26 | `IHTIYACTARIHIBUYUK` | char(1) | evet |  |  |
| 27 | `ISEMRIRECKONTROL` | char(1) | evet |  |  |
| 28 | `BASTARIHONCESI` | char(1) | evet |  |  |
| 29 | `PLANLIMUSSIP` | char(1) | evet |  |  |
| 30 | `KAPASITEKONTROL` | char(1) | evet |  |  |
| 31 | `ISEMNO1` | nvarchar(30) | evet |  |  |
| 32 | `ISEMNO2` | nvarchar(30) | evet |  |  |
| 33 | `ISEMHARICNO1` | nvarchar(30) | evet |  |  |
| 34 | `ISEMHARICNO2` | nvarchar(30) | evet |  |  |
| 35 | `KAPASITEDENGE` | TDBSMALLINT | evet |  |  |
| 36 | `KAPASITEIHTIYACBOL` | char(1) | evet |  |  |
| 37 | `PERIOD` | TDBSMALLINT | evet |  |  |
| 38 | `FAZLAMESAIKULLAN` | char(1) | evet |  |  |
| 39 | `VARDIYAPLANITASLAK_ID` | TDBINTEGER | evet |  |  |
| 40 | `IHTIYACTIPI` | TDBSMALLINT | hayır |  |  |
| 41 | `ACIKLAMA` | varchar(150) | evet |  |  |
| 42 | `MRPCALISTI` | char(1) | evet |  |  |
| 43 | `ISEMRIOLUSTURULDU` | char(1) | evet |  |  |
| 44 | `SATSIPOLUSTURULDU` | char(1) | evet |  |  |
| 45 | `TALEPOLUSTURULDU` | char(1) | evet |  |  |
| 46 | `CALISMABITISZAMANI` | TDBDATETIME | evet |  |  |
| 47 | `BCKNO` | varchar(50) | evet |  |  |
| 48 | `BELGEESLESMEDEKUMULASYON` | char(1) | evet |  |  |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BASTARIH, BITTARIH, CALISMAZAMANI, BACKUPFLAG, KAYITYAPANKUL
FROM dbo.TBLMGPMAS WITH (NOLOCK);
```
