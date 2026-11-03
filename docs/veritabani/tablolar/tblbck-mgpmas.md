---
title: TBLBCK_MGPMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbck-mgpmas/
---

# TBLBCK_MGPMAS

> Malzeme gereksinim planlama yedekleri tutulmaktadır.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 49

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `BASTARIH` | TDBDATETIME | hayır |  | Başlangıç tarihi |
| 3 | `BITTARIH` | TDBDATETIME | hayır |  | bitiş tarihi bilgisi yer alır. |
| 4 | `CALISMAZAMANI` | TDBDATETIME | hayır |  | Mrp çalıştırılma zamanı bilgisi yer alır. |
| 5 | `BACKUPFLAG` | TDBBYTE | hayır |  |  |
| 6 | `BCKNO` | varchar(50) | hayır |  | Mrp no bilgisi yera lrı. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | hayır |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 8 | `KAYITTARIHI` | TDBDATETIME | hayır |  | Kayıt tarihi bilgisi yer alır. |
| 9 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `SONSTHARINCKEYNO` | TDBINTEGER | evet |  |  |
| 20 | `FABRIKA_KODU` | varchar(35) | evet |  |  |
| 21 | `MINSTOKBAK` | char(1) | evet |  |  |
| 22 | `MAXSTOKTAMAMLA` | char(1) | evet |  |  |
| 23 | `BAKKONT` | char(1) | evet |  |  |
| 24 | `GENELYAPKODDESTEK` | char(1) | evet |  |  |
| 25 | `YAPKODNOTKONTROL` | char(1) | evet |  |  |
| 26 | `MEVCUTBELGEMIKTARARTTIR` | char(1) | evet |  |  |
| 27 | `IHTIYACTARIHIBUYUK` | char(1) | evet |  |  |
| 28 | `ISEMRIRECKONTROL` | char(1) | evet |  |  |
| 29 | `BASTARIHONCESI` | char(1) | evet |  |  |
| 30 | `PLANLIMUSSIP` | char(1) | evet |  |  |
| 31 | `KAPASITEKONTROL` | char(1) | evet |  |  |
| 32 | `ISEMNO1` | nvarchar(30) | evet |  |  |
| 33 | `ISEMNO2` | nvarchar(30) | evet |  |  |
| 34 | `ISEMHARICNO1` | nvarchar(30) | evet |  |  |
| 35 | `ISEMHARICNO2` | nvarchar(30) | evet |  |  |
| 36 | `KAPASITEDENGE` | TDBSMALLINT | evet |  |  |
| 37 | `KAPASITEIHTIYACBOL` | char(1) | evet |  |  |
| 38 | `PERIOD` | TDBSMALLINT | evet |  |  |
| 39 | `FAZLAMESAIKULLAN` | char(1) | evet |  |  |
| 40 | `VARDIYAPLANITASLAK_ID` | TDBINTEGER | evet |  |  |
| 41 | `IHTIYACTIPI` | TDBSMALLINT | hayır |  | 3- AÜP |
| 42 | `ACIKLAMA` | varchar(150) | evet |  | Açıklama bilgisi yer alır. |
| 43 | `MRPCALISTI` | char(1) | evet |  | H-ayır,E-vet |
| 44 | `ISEMRIOLUSTURULDU` | char(1) | evet |  | H-ayır,E-vet |
| 45 | `SATSIPOLUSTURULDU` | char(1) | evet |  | H-ayır,E-vet |
| 46 | `TALEPOLUSTURULDU` | char(1) | evet |  | H-ayır,E-vet |
| 47 | `CALISMABITISZAMANI` | TDBDATETIME | evet |  |  |
| 48 | `BELGEESLESMEDEKUMULASYON` | char(1) | evet |  |  |
| 49 | `IUP` | char(1) | evet |  |  |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BASTARIH, BITTARIH, CALISMAZAMANI, BACKUPFLAG, BCKNO
FROM dbo.TBLBCK_MGPMAS WITH (NOLOCK);
```
