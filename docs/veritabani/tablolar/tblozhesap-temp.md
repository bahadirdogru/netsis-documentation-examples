---
title: TBLOZHESAP_TEMP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblozhesap-temp/
---

# TBLOZHESAP_TEMP

> İLGİLİ CARİ İÇİN OZEL HESAP KAPATMA EKRANINA GİRİLDİĞİNDE GEÇİCİ OLOARAK CARİ BİLGİSİNİ TUTAR

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 6
- **Birincil anahtar:** `KARSILIK_HAREKET`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | Özel hesap kapatma ekranına girilen cari kodunu gösterir.İlgili cari için özel hesap kapatma işlemi yapıldıktan sonra eski kayıt silinir. |
| 2 | `BA` | char(1) | evet |  | Default NULL değerini gösterir. |
| 3 | `KARSILIK_HAREKET` | TDBINTEGER | hayır | `0` | Default -1 değerini gösterir. |
| 4 | `TUTAR` | TDBFLOAT | evet | `0` | Default 0 değerini gösterir. |
| 5 | `SSOUSERID` | int | evet |  | Kullanıcıya ait SSO user ID bilgisi yer alır. |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | Kayıt tarihi bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLOZHESAP_TEMPPKEY` | `KARSILIK_HAREKET` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLOZHESAP_TEMP_IND2` | `CARI_KOD` | Non-unique, Non-clustered |
| `TBLOZHESAP_TEMPPKEY` | `KARSILIK_HAREKET` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, BA, KARSILIK_HAREKET, TUTAR, SSOUSERID, KAYITTARIHI
FROM dbo.TBLOZHESAP_TEMP WITH (NOLOCK);
```
