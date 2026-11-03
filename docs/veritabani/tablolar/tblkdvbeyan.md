---
title: TBLKDVBEYAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkdvbeyan/
---

# TBLKDVBEYAN

> Açıklama yok.

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 118
- **Birincil anahtar:** `AYKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AYKODU` | TDBBYTE | hayır |  | Ay kodunu tutar |
| 2 | `VERGI_DAIRESI` | varchar(50) | evet |  | Vergi dairesinin bilgisini tutar |
| 3 | `IL_ILCE` | varchar(30) | evet |  | İl, ilçe bilgisini tutar |
| 4 | `CARI_YIL` | TDBSMALLINT | evet |  |  |
| 5 | `VERGI_NUMARASI` | varchar(20) | evet |  | Vergi numarasını gösterir |
| 6 | `SOYADI` | varchar(30) | evet |  |  |
| 7 | `ADI` | varchar(30) | evet |  |  |
| 8 | `TELEFON` | TDBTELFAX | evet |  | Telefon bigisini tutar |
| 9 | `TESLIM_HIZMET` | TDBFLOAT | evet |  |  |
| 10 | `KDV1_MKOD` | TDBMUHKOD | evet |  |  |
| 11 | `KDV1_ORAN` | TDBFLOAT | evet |  |  |
| 12 | `KDV1_MATRAH` | TDBFLOAT | evet |  |  |
| 13 | `KDV1` | TDBFLOAT | evet |  |  |
| 14 | `KDV2_MKOD` | TDBMUHKOD | evet |  |  |
| 15 | `KDV2_ORAN` | TDBFLOAT | evet |  |  |
| 16 | `KDV2_MATRAH` | TDBFLOAT | evet |  |  |
| 17 | `KDV2` | TDBFLOAT | evet |  |  |
| 18 | `KDV3_MKOD` | TDBMUHKOD | evet |  |  |
| 19 | `KDV3_ORAN` | TDBFLOAT | evet |  |  |
| 20 | `KDV3_MATRAH` | TDBFLOAT | evet |  |  |
| 21 | `KDV3` | TDBFLOAT | evet |  |  |
| 22 | `KDV4_MKOD` | TDBMUHKOD | evet |  |  |
| 23 | `KDV4_ORAN` | TDBFLOAT | evet |  |  |
| 24 | `KDV4_MATRAH` | TDBFLOAT | evet |  |  |
| 25 | `KDV4` | TDBFLOAT | evet |  |  |
| 26 | `KDV5_MKOD` | TDBMUHKOD | evet |  |  |
| 27 | `KDV5_ORAN` | TDBFLOAT | evet |  |  |
| 28 | `KDV5_MATRAH` | TDBFLOAT | evet |  |  |
| 29 | `KDV5` | TDBFLOAT | evet |  |  |
| 30 | `ILAVE_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 31 | `ILAVE_KDV` | TDBFLOAT | evet |  |  |
| 32 | `ONCEKI_DONEM_INDIRILECEK` | TDBFLOAT | evet |  |  |
| 33 | `BU_DONEM_INDIRILECEK_MKOD` | TDBMUHKOD | evet |  |  |
| 34 | `BU_DONEM_INDIRILECEK` | TDBFLOAT | evet |  |  |
| 35 | `SATISTAN_IADE_INDIRILECEK_MKOD` | TDBMUHKOD | evet |  |  |
| 36 | `SATISTAN_IADE_INDIRILECEK` | TDBFLOAT | evet |  |  |
| 37 | `T_IKAMET_ETM_YOLCU_IADE_MKOD` | TDBMUHKOD | evet |  |  |
| 38 | `T_IKAMET_ETM_YOLCU_IADE` | TDBFLOAT | evet |  |  |
| 39 | `OZEL_MATRAH_DAHIL_OLMAYAN_MKOD` | TDBMUHKOD | evet |  |  |
| 40 | `OZEL_MATRAH_DAHIL_OLMAYAN` | TDBFLOAT | evet |  |  |
| 41 | `KISMI_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 42 | `KISMI_ISTISNA` | TDBFLOAT | evet |  |  |
| 43 | `IHRACAT_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 44 | `IHRACAT_ISTISNA` | TDBFLOAT | evet |  |  |
| 45 | `IHRACAT_ISTISNA_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 46 | `IHRACAT_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 47 | `D_HAV_DEMYOL_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 48 | `D_HAV_DEMYOL_ISTISNA` | TDBFLOAT | evet |  |  |
| 49 | `D_HAV_DEMYOL_ISTISNA_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 50 | `D_HAV_DEMYOL_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 51 | `LIMAN_HAV_HIZM_IST_MKOD` | TDBMUHKOD | evet |  |  |
| 52 | `LIMAN_HAV_HIZM_IST` | TDBFLOAT | evet |  |  |
| 53 | `LIMAN_HAV_HIZM_IST_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 54 | `LIMAN_HAV_HIZM_IST_KDV` | TDBFLOAT | evet |  |  |
| 55 | `PETROL_ARAMA_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 56 | `PETROL_ARAMA_ISTISNA` | TDBFLOAT | evet |  |  |
| 57 | `PETROL_ARAMA_ISTISNA_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 58 | `PETROL_ARAMA_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 59 | `TES_MALLAR_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 60 | `TES_MALLAR_ISTISNA` | TDBFLOAT | evet |  |  |
| 61 | `TES_MALLAR_ISTISNA_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 62 | `TES_MALLAR_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 63 | `TRAN_TASIMA_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 64 | `TRAN_TASIMA_ISTISNA` | TDBFLOAT | evet |  |  |
| 65 | `TRAN_TASIMA_ISTISNA_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 66 | `TRAN_TASIMA_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 67 | `T_IKA_ETMYOLCU_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 68 | `T_IKA_ETMYOLCU_ISTISNA` | TDBFLOAT | evet |  |  |
| 69 | `T_IKA_ETMYOLCU_ISTISNA_KDVMKOD` | TDBMUHKOD | evet |  |  |
| 70 | `T_IKA_ETMYOLCU_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 71 | `DIPL_KURULUS_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 72 | `DIPL_KURULUS_ISTISNA` | TDBFLOAT | evet |  |  |
| 73 | `DIPL_KURULUS_ISTISNA_KDV_MKOD` | TDBMUHKOD | evet |  |  |
| 74 | `DIPL_KURULUS_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 75 | `SHURDA_TESLIM_ISTISNA_MKOD` | TDBMUHKOD | evet |  |  |
| 76 | `SHURDA_TESLIM_ISTISNA` | TDBFLOAT | evet |  |  |
| 77 | `SHURDA_TESLIM_ISTISNA_KDVMKOD` | TDBMUHKOD | evet |  |  |
| 78 | `SHURDA_TESLIM_ISTISNA_KDV` | TDBFLOAT | evet |  |  |
| 79 | `IHRAC1_MAT_MKOD` | TDBMUHKOD | evet |  |  |
| 80 | `IHRAC1_MAT` | TDBFLOAT | evet |  |  |
| 81 | `IHRAC1_ORAN` | TDBFLOAT | evet |  |  |
| 82 | `IHRAC1_MKOD` | TDBMUHKOD | evet |  |  |
| 83 | `IHRAC1` | TDBFLOAT | evet |  |  |
| 84 | `IHRAC2_MAT_MKOD` | TDBMUHKOD | evet |  |  |
| 85 | `IHRAC2_MAT` | TDBFLOAT | evet |  |  |
| 86 | `IHRAC2_ORAN` | TDBFLOAT | evet |  |  |
| 87 | `IHRAC2_MKOD` | TDBMUHKOD | evet |  |  |
| 88 | `IHRAC2` | TDBFLOAT | evet |  |  |
| 89 | `IHRAC3_MAT_MKOD` | TDBMUHKOD | evet |  |  |
| 90 | `IHRAC3_MAT` | TDBFLOAT | evet |  |  |
| 91 | `IHRAC3_ORAN` | TDBFLOAT | evet |  |  |
| 92 | `IHRAC3_MKOD` | TDBMUHKOD | evet |  |  |
| 93 | `IHRAC3` | TDBFLOAT | evet |  |  |
| 94 | `IHRAC4_MAT_MKOD` | TDBMUHKOD | evet |  |  |
| 95 | `IHRAC4_MAT` | TDBFLOAT | evet |  |  |
| 96 | `IHRAC4_ORAN` | TDBFLOAT | evet |  |  |
| 97 | `IHRAC4_MKOD` | TDBMUHKOD | evet |  |  |
| 98 | `IHRAC4` | TDBFLOAT | evet |  |  |
| 99 | `BEYANNAME_KIM` | char(1) | evet |  |  |
| 100 | `TEMSILCI_VERGI_NO` | varchar(20) | evet |  | Temsilci vergi numarasının tutulduğu saha |
| 101 | `ADI_VE_SOYADI` | varchar(40) | evet |  | Temsilci adı ve soyadını gösterir |
| 102 | `TARIH_65` | TDBDATETIME | evet |  |  |
| 103 | `SMM_VERGI_NO` | varchar(20) | evet |  |  |
| 104 | `SMM_ADI_VE_SOYADI` | varchar(40) | evet |  |  |
| 105 | `TARIH_66` | TDBDATETIME | evet |  |  |
| 106 | `EK_ADET1` | TDBBYTE | evet |  |  |
| 107 | `EK_ADET2` | TDBBYTE | evet |  |  |
| 108 | `EK_ADET3` | TDBBYTE | evet |  |  |
| 109 | `EK_ADET4` | TDBBYTE | evet |  |  |
| 110 | `EK_ADET5` | TDBBYTE | evet |  |  |
| 111 | `EK_ADET6` | TDBBYTE | evet |  |  |
| 112 | `EK_ADET7` | TDBBYTE | evet |  |  |
| 113 | `KREDIKARTMKOD` | TDBMUHKOD | evet |  |  |
| 114 | `KREDIKARTMAT` | TDBFLOAT | evet |  |  |
| 115 | `YUVARLAMA` | TDBINTEGER | evet |  |  |
| 116 | `TCKIMLIKNO` | varchar(11) | evet |  |  |
| 117 | `EMAIL` | varchar(39) | evet |  |  |
| 118 | `BEYAN_TCKIMLIKNO` | varchar(11) | evet |  |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKDVBEYAN_PKEY` | `AYKODU` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKDVBEYAN_PKEY` | `AYKODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 AYKODU, VERGI_DAIRESI, IL_ILCE, CARI_YIL, VERGI_NUMARASI, SOYADI
FROM dbo.TBLKDVBEYAN WITH (NOLOCK);
```
