---
title: TBLEDEFTER
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbledefter/
---

# TBLEDEFTER

> EDEFTERE AİT BİLGİLER YER ALIR. NETSIS VERİTABANI ALTINDA TUTULMAKTADIR.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 34

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | int | hayır |  | Inckeyno bilgisi yer alır. |
| 2 | `SIRKET` | varchar(30) | hayır |  | Database adı yer alır. |
| 3 | `ISLETME_KODU` | smallint | hayır |  | İşletme kodu bilgisi yer alır. |
| 4 | `SUBE_KODU` | smallint | hayır |  | Şube kodu bilgisi yer alır. |
| 5 | `AY_KODU` | smallint | hayır |  | Ay kodu bilgisi yer alır. |
| 6 | `YIL_KODU` | smallint | hayır |  | Yıl bilgisi yer alır. |
| 7 | `TIP` | tinyint | hayır |  | 0-yevmiye,1-kebir |
| 8 | `DEFTERXML` | image | hayır |  | defter xml bilgisi yer alır. |
| 9 | `DEFTER_DOSYAADI` | varchar(250) | evet |  | Oluşan defterin dosya adı bilgisi yer alır. |
| 10 | `BERATXML` | image | hayır |  | Berata ait xml bilgisi yer alır. |
| 11 | `BERAT_DOSYAADI` | varchar(250) | evet |  | Berat dosya adı bligisi yer alır. |
| 12 | `DURUM` | tinyint | hayır |  | 0 defterin ilk oluşturulma durumu,1 zip dosyası oluşmuş,2 onaylanmış demektir. |
| 13 | `PRGVERSION` | varchar(30) | evet |  | Versiyon bilgisi yer alır. Netsis-1.9.9.1 |
| 14 | `KAYIT_LOGINNAME` | varchar(100) | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 15 | `KAYIT_PCNAME` | varchar(100) | evet |  | Oluşturulan bilgisayar adı bilgisi yer alır. |
| 16 | `KAYIT_TARIHI` | datetime | hayır |  | Kayıt tarihi bilgisi yer alır. |
| 17 | `ONAY_TARIHI` | datetime | evet |  | Onay tarihi bilgisi yer alır. |
| 18 | `ONAY_LOGINNAME` | varchar(100) | evet |  | Onay yüklenen windows kullanıcına ait bilgi yer alır. |
| 19 | `ONAY_PCNAME` | varchar(100) | evet |  | Onay bilgisayar ismi yer alır. |
| 20 | `S_YEDEK1` | varchar(50) | evet |  | Son kalınan yevmiye numarasını gösterir. |
| 21 | `S_YEDEK2` | varchar(1000) | evet |  | Servis durum bilgisi yer alır. |
| 22 | `S_YEDEK3` | varchar(50) | evet |  | Son madde numarası bilgisi yer alır. |
| 23 | `F_YEDEK1` | float | evet |  | Son sıra numarası bilgisi yer alır. |
| 24 | `F_YEDEK2` | float | evet |  | Toplam borç tuturı yer alır. |
| 25 | `F_YEDEK3` | float | evet |  | Toplam alacak tutarı yer alır. |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK1` | smallint | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `I_YEDEK2` | smallint | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `I_YEDEK3` | smallint | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK1` | datetime | evet |  | Edefter başlangıç tarihi bilgisi yer alır. |
| 33 | `D_YEDEK2` | datetime | evet |  | Edefter bitiş tarihi bilgisi yer alır. |
| 34 | `D_YEDEK3` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SIRKET, ISLETME_KODU, SUBE_KODU, AY_KODU, YIL_KODU
FROM dbo.TBLEDEFTER WITH (NOLOCK);
```
