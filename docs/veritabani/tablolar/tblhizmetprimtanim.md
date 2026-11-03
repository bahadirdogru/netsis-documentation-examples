---
title: TBLHIZMETPRIMTANIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmetprimtanim/
---

# TBLHIZMETPRIMTANIM

> hizmet prim tanımlama ekranındaki bilgiler yer alır.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 33
- **Birincil anahtar:** `PRIMKODU`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `PRIMKODU` | varchar(50) | hayır |  | Pirim kodunun tutulduğu alan |
| 2 | `ACIKLAMA` | varchar(50) | evet |  | Açıklama girilecek saha |
| 3 | `GRUPKODU` | TDBGRUPKOD | evet |  | Grup kodunu tutar. |
| 4 | `CARIKISITTIPI` | TDBBYTE | hayır |  | Girilen pirimin uygulanacağı cariyeleri grup kodu, kod1....kod5 den hangisi olduğunu belirtir |
| 5 | `CARIRAPORKODU` | varchar(250) | hayır |  | Cari rapor kodu sahasını tutar. |
| 6 | `TIPI` | char(1) | hayır |  | Alış belgesi mi satış belgesi mi oldgunu gösterir |
| 7 | `BASTARIH` | TDBDATETIME | hayır |  | Başlama tarihini gösterir |
| 8 | `BITTARIH` | TDBDATETIME | hayır |  | Bitiş tarihini gösterir |
| 9 | `HESAPDONEMI` | TDBBYTE | hayır |  | Primin hangi aralıklarla hesaplanacağının bilgisidir |
| 10 | `MATRAHTURU` | char(1) | hayır |  | Prim hesaplanırken kullanılacak matrahın nasıl hesaplanacağını belirler. |
| 11 | `ISKONTOKADEME` | TDBBYTE | evet |  | Kaç kademeye kadar iskonto kullanılacğını belirler |
| 12 | `FATURAKISIT` | char(1) | evet |  | Fatura kısıtnın olup olmağı bilgilerini tutar |
| 13 | `FATURASTOKKODU` | TDBSTOKKOD | hayır |  | Fatura stok kodunu gösterir |
| 14 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `ILERIKISIT` | text | evet |  | Fatura kısıt bilgisini tutar |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `KISITTOPLAM` | char(1) | evet |  | Kota Miktar/Ciro Hesaplanırken Kısıtlarda Girilen Farklı Kısıt tiplerinin toplamı uygulansın işaretli ise E değerini alır. |
| 31 | `GRUPSINIRDEGERALINSIN` | char(1) | evet |  | Prim değerlendirme İşleminde Grup Hesaplamada Tüm Grup Sınır Değerleri Dikkate alınsın işaretli ise E değerini alır. |
| 32 | `DOVIZLI` | char(1) | evet |  | Dövizli işlem yapılsın parametresi yer alır. |
| 33 | `DOVIZTIPI` | TDBBYTE | evet |  | Seçim yapılan döviz tipi bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLHIZMETPRIMTANIM_FKEY3` | `FATURASTOKKODU` |
| PRIMARY KEY | `TBLHIZMETPRIMTANIM_PKEY` | `PRIMKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHIZMETPRIMTANIM_IND_1` | `INCKEYNO` | nonclustered, unique |
| `TBLHIZMETPRIMTANIM_IND_2` | `GRUPKODU` | nonclustered |
| `TBLHIZMETPRIMTANIM_PKEY` | `PRIMKODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 PRIMKODU, ACIKLAMA, GRUPKODU, CARIKISITTIPI, CARIRAPORKODU, TIPI
FROM dbo.TBLHIZMETPRIMTANIM WITH (NOLOCK);
```
