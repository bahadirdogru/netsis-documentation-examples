---
title: TBLPROJESIRKET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprojesirket/
---

# TBLPROJESIRKET

> PROJE KODU GİRİŞİ>PROJE SABİT TANIMLARI>VERİTABANI BİLGİLERİ SEKMESİNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `PROJE_KODU+VERITABANITIP+VERITABANI`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PROJE_KODU` | TDBPROJEKOD | hayır |  | Yardımcı programlardan proje kodu uygulaması parametresi işaretlendiğinde proje sabit tanımları ekranında proje kodu sahasına girilen kodu gösterir. |
| 2 | `VERITABANITIP` | char(1) | hayır |  | Proje ile ilgili rapor alınacak geçmiş yıla ait veritabanı tip bilgisini gösterir. (Temelset/personel/demirbaş) |
| 3 | `VERITABANI` | varchar(20) | hayır |  | Proje ile ilgili rapor alınacak geçmiş yıla ait veritabanı isim bilgisini gösterir. |
| 4 | `YIL` | TDBSMALLINT | evet |  | “Veritabanı” alanında tanımlanan veritabanında, hangi yıla ait kayıtların raporunun alınacağının belirtildiği yıl bilgisini gösterir. |
| 5 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `IYEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `IYEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `IYEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `IYEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `DYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `DYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `DYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `DYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPROJESIRKET_PKEY1` | `PROJE_KODU+VERITABANITIP+VERITABANI` |
| FOREIGN KEY | `TBLPROJESIRKET_FKEY1` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPROJESIRKET_PKEY1` | `PROJE_KODU+VERITABANITIP+VERITABANI` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 PROJE_KODU, VERITABANITIP, VERITABANI, YIL, CYEDEK1, CYEDEK2
FROM dbo.TBLPROJESIRKET WITH (NOLOCK);
```
