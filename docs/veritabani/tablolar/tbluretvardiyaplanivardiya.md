---
title: TBLURETVARDIYAPLANIVARDIYA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluretvardiyaplanivardiya/
---

# TBLURETVARDIYAPLANIVARDIYA

> MRP-KAYIT-KAYNAK YÖNETİMİ-KAYNAK TANIMLAMA BİLGİLERİNDEKİ VARDİYA PLANI YER ALIR.AYRICA İLERİ ÜRETİM ÇİZELGELEME MAKİNE TANIMLAMA EKRANINDAKİ VARDİYA TANIMLAMASINDAN DA YAPILABİLİR

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 21

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 2 | `VARDIYAPLANI_ID` | TDBINTEGER | hayır |  | TBLURETVARDIYAPLANI (INCKEYNO) |
| 3 | `VARDIYA_KOD` | TDBVARDIYAKOD | hayır |  | TBLURETVARDIYA (VARDIYA_KOD) |
| 4 | `SIRA` | char(1) | evet |  | Sıra bilgisi yer alır. |
| 5 | `TOPLAM_MIKTAR` | TDBFLOAT | evet |  | 0 |
| 6 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | Kayıt yapan kullanıcı bilgisi yer alır. |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | Düzeltme yapan kullanıcı bilgisi yer alır. |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | Düzeltme tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, VARDIYAPLANI_ID, VARDIYA_KOD, SIRA, TOPLAM_MIKTAR, C_YEDEK1
FROM dbo.TBLURETVARDIYAPLANIVARDIYA WITH (NOLOCK);
```
