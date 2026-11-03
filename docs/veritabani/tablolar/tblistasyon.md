---
title: TBLISTASYON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblistasyon/
---

# TBLISTASYON

> KAYIT>İŞ İSTASYONU TANIMLARI EKRANINDA EKRANINDA TANIMLANAN KAYITLARI GÖSTERİR.AYRICA İLERİ ÜRETİM ÇİZELGELEME-İŞ İSTASYONU TANIMLAMA KAYITLARI DA YER ALIR

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 37

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISTKODU` | varchar(5) | hayır |  | İstasyon kodunu gösterir. |
| 3 | `ISTISIM` | varchar(50) | evet |  | İstasyon kodunun ismini gösterir. |
| 4 | `DEPARTMAN` | varchar(15) | evet |  | Departman kodunu gösterir. |
| 5 | `ISCILIK_MAL` | TDBFLOAT | evet |  | İşçilik maliyetini gösterir. |
| 6 | `GENELURETIM_MAL` | TDBFLOAT | evet |  | Genel üretim maliyetini gösterir. |
| 7 | `SETUPSURE` | TDBFLOAT | evet |  | Hazırlık süresini gösterir. |
| 8 | `URETSURE` | TDBFLOAT | evet |  | Üretim süresini gösterir. |
| 9 | `HEDEF_KUYRUK_SURE` | TDBFLOAT | evet |  | Hedef kuyruk süresini gösterir. |
| 10 | `ORT_KUYRUK_SURE` | TDBFLOAT | evet |  | Ortalama kuyruk süresini gösterir. |
| 11 | `MAX_KUYRUK_SURE` | TDBFLOAT | evet |  | Maksimum kuyruk süresini gösterir. |
| 12 | `MAX_KUYRUK_IZNI` | TDBFLOAT | evet |  | Maksimum kuyruk iznini gösterir. |
| 13 | `STD_VARDIYA1_ESZAMAN_OP` | TDBFLOAT | evet |  | Std. Eş zamanlı operasyon sayısı/1. vardiya alanına girileni gösterir. |
| 14 | `MAX_VARDIYA1_ESZAMAN_OP` | TDBFLOAT | evet |  | Max. Eş zamanlı operasyon sayısı/1. vardiya alanına girileni gösterir. |
| 15 | `STD_VARDIYA2_ESZAMAN_OP` | TDBFLOAT | evet |  | Std. Eş zamanlı operasyon sayısı/2. vardiya alanına girileni gösterir. |
| 16 | `MAX_VARDIYA2_ESZAMAN_OP` | TDBFLOAT | evet |  | Max. Eş zamanlı operasyon sayısı/2. vardiya alanına girileni gösterir. |
| 17 | `STD_VARDIYA3_ESZAMAN_OP` | TDBFLOAT | evet |  | Std. Eş zamanlı operasyon sayısı/3. vardiya alanına girileni gösterir. |
| 18 | `MAX_VARDIYA3_ESZAMAN_OP` | TDBFLOAT | evet |  | Max. Eş zamanlı operasyon sayısı/3. vardiya alanına girileni gösterir. |
| 19 | `STD_VARDIYA4_ESZAMAN_OP` | TDBFLOAT | evet |  | Std. Eş zamanlı operasyon sayısı/4. vardiya alanına girileni gösterir. |
| 20 | `MAX_VARDIYA4_ESZAMAN_OP` | TDBFLOAT | evet |  | Max. Eş zamanlı operasyon sayısı/4. vardiya alanına girileni gösterir. |
| 21 | `VARDIYA1BAS` | TDBDATETIME | evet |  | 1. vardiya başlangıcı alanına girilen saati gösterir. |
| 22 | `VARDIYA2BAS` | TDBDATETIME | evet |  | 2. vardiya başlangıcı alanına girilen saati gösterir. |
| 23 | `VARDIYA3BAS` | TDBDATETIME | evet |  | 3. vardiya başlangıcı alanına girilen saati gösterir. |
| 24 | `VARDIYA4BAS` | TDBDATETIME | evet |  | 4. vardiya başlangıcı alanına girilen saati gösterir. |
| 25 | `VARDIYA1SURE` | TDBFLOAT | evet |  | 1. vardiya toplam süresini gösterir. |
| 26 | `VARDIYA2SURE` | TDBFLOAT | evet |  | 2. vardiya toplam süresini gösterir. |
| 27 | `VARDIYA3SURE` | TDBFLOAT | evet |  | 3. vardiya toplam süresini gösterir. |
| 28 | `VARDIYA4SURE` | TDBFLOAT | evet |  | 4. vardiya toplam süresini gösterir. |
| 29 | `FASONMU` | char(1) | evet |  | Fason parametresini gösterir. |
| 30 | `KAPASITE` | char(1) | hayır |  | Kapasite parametresinde seçileni gösterir. Kısıtsız seçili ise 'Z', kısıtlı seçili ise 'I' değerini gösterir. |
| 31 | `ZAMANSKALASI` | TDBFLOAT | hayır |  | Zaman skalasına girileni gösterir. |
| 32 | `MAKINEDETAYLI` | char(1) | hayır |  | Makina detaylı parametresini gösterir. |
| 33 | `CARI_KOD` | TDBCARIKOD | evet |  | cari kodu gösterir. |
| 34 | `MAKINE_SECIM_ONCELIGI` | char(1) | evet |  | Makine seçim önceliği bilgisi yer alır. |
| 35 | `ACIKLAMA` | TDBMEMO | evet |  | Açıklama bilgisi yer alır. |
| 36 | `AKISTIPLI` | char(1) | hayır |  | Akış tipli istasyon bilgisi yer alır. |
| 37 | `AKISTIPLIILKMAKINE_ID` | TDBINTEGER | hayır |  | İlk makine kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ISTKODU, ISTISIM, DEPARTMAN, ISCILIK_MAL, GENELURETIM_MAL
FROM dbo.TBLISTASYON WITH (NOLOCK);
```
