---
title: TBLBCEKPARCA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbcekparca/
---

# TBLBCEKPARCA

> Açıklama yok.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 37
- **Birincil anahtar:** `OTOSIRANO`
- **Identity:** `OTOSIRANO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `OTOSIRANO` | TDBINTEGER | hayır |  | Banka modulunden yapılan islem kayıt sırasını tutar. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `A_V` | char(1) | hayır |  | Çek/ Senet alınmış yada verilmiş olduğunu gösteren sahadır ( Borç çekleri için hep V dir) |
| 4 | `BORDRO_NO` | TDBBELGENO | hayır |  | Bordro numarasının tutulduğu sahadır |
| 5 | `CARI_KODU` | TDBCARIKOD | hayır |  | Cari kodu gösterir. |
| 6 | `ACIKLAMA` | varchar(50) | evet |  | Kayıt sırasında girilen açıklamayı gösterir. |
| 7 | `TLDOVIZ` | char(1) | evet |  | Döviz tutarını tl üzerindn gösterir |
| 8 | `TUTAR` | TDBFLOAT | evet |  | Tutar bilgisini tutar. |
| 9 | `DOVIZTIP` | TDBBYTE | evet | `0` | Doviz tipini tutar. |
| 10 | `DOVTUTAR` | TDBFLOAT | evet | `0` | Doviz tutarını tutar. |
| 11 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `VONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `VONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 34 | `CARI_ACIKLAMA` | varchar(50) | evet |  | Cari açıklama sahasıdır |
| 35 | `SC_NO` | TDBBELGENO | evet |  | Borc cekinin numarasını tutan sahadır. |
| 36 | `VADETRH` | TDBDATETIME | evet |  | Cekin vade tarihini tutar. |
| 37 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBCEKPARCA_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLBCEKPARCA_FKEY2` | `PROJE_KODU` |
| PRIMARY KEY | `TBLBCEKPARCA_PKEY` | `OTOSIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBCEKPARCA_IND1` | `SUBE_KODU, A_V, BORDRO_NO, CARI_KODU, PROJE_KODU` | nonclustered |
| `TBLBCEKPARCA_PKEY` | `OTOSIRANO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 OTOSIRANO, SUBE_KODU, A_V, BORDRO_NO, CARI_KODU, ACIKLAMA
FROM dbo.TBLBCEKPARCA WITH (NOLOCK);
```
