---
title: TBLCAHAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcahar/
---

# TBLCAHAR

> CARI HAREKET KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 40
- **Birincil anahtar:** `INC_KEY_NUMBER`
- **Identity:** `INC_KEY_NUMBER` (seed 1, artış 1)

## İlgili sayfalar

- [Cari hareket (REST ARPTransactions)](/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions)
- [Temel tablolar](/veritabani/temel-tablolar/)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodunu tutar. |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Kayıt tarihini tutar. |
| 4 | `VADE_TARIHI` | TDBDATETIME | evet |  | Vade tarihini tutar. |
| 5 | `BELGE_NO` | TDBBELGENO | evet |  | Fis no alanını tutar. |
| 6 | `ACIKLAMA` | varchar(50) | evet |  | Acıklama alanını tutar. |
| 7 | `HKA` | char(1) | hayır |  | Yaslandırma listelerine yonelik kaydın oncelikli kapatılmıs sayılması ıcın (K) girilen sahadır. |
| 8 | `BORC` | TDBFLOAT | evet | `0` | Hareket borc tipli ise borc tutarını atar. |
| 9 | `ALACAK` | TDBFLOAT | evet | `0` | Hareket alacak tipli ise alacak tutarını atar. |
| 10 | `BAKIYE` | TDBFLOAT | evet |  | Bakiye tutarını atar. |
| 11 | `DOVIZ_TURU` | TDBBYTE | evet | `0` | Doviz tipini tutar. |
| 12 | `DOVIZ_TUTAR` | TDBFLOAT | evet | `0` | Doviz tutarını tutar. |
| 13 | `RAPOR_KODU` | char(1) | evet |  | Cari rapor kodunu tutar. |
| 14 | `F9SC` | char(1) | evet |  | Senet yada cekin detay bilgisinin cekilmesi icin tutulan sahadır. |
| 15 | `HAREKET_TURU` | char(1) | evet |  | On muhasebede yapılan islem turune gore atilan islem tipidir. |
| 16 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar alanını tutar. |
| 17 | `ILAVE_RAPOR_KODU` | varchar(2) | evet |  | İlave rapor kodunu tutar |
| 18 | `UPDATE_KODU` | char(1) | evet |  | Update kodunu tutar |
| 19 | `KAPATILMIS_TUTAR` | TDBFLOAT | evet | `0` | Ozel hesap kapatma ile calısan carilerde ilgili hareketin kapatılmıs olan tutarıdır. |
| 20 | `ODEME_GUNU` | TDBSMALLINT | evet | `0` | Vade gununun tutan sahadır. |
| 21 | `FIRMA_DOVIZ_TIPI` | TDBBYTE | evet | `0` | Firma doviz tipinin tutuldugu sahadır. |
| 22 | `FIRMA_DOVIZ_TUTARI` | TDBFLOAT | evet | `0` | Firma doviz tutarının tutuldugu sahadır. |
| 23 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | Plasiyer kodunun tutuldugu sahadır. |
| 24 | `ENT_REF_KEY` | TDBENTKEY | evet |  | Cariyi bağlayan entrefkey anahtarını tutar |
| 25 | `INC_KEY_NUMBER` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `RAPOR_KODU2` | varchar(15) | evet |  | Cari rapor kodu_2 alanını tutan sahadır. |
| 27 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK1` | TDBFLOAT | evet |  | Kazanılan puanların tutulduğu kolondur. |
| 31 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha .Devir ile gelen kayılarda değeri 1 olmaktadır. |
| 35 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `PROJE_KODU` | TDBPROJEKOD | evet |  | proje kodunu tutan sahadır. |
| 39 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCAHAR_FKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCAHAR_FKEY1` | `CARI_KOD` |
| FOREIGN KEY | `TBLCAHAR_FKEYPROJE` | `PROJE_KODU` |
| PRIMARY KEY | `TBLCAHARPKEY` | `INC_KEY_NUMBER` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCAHAR_1` | `CARI_KOD` | Nonclustered |
| `TBLCAHAR_2` | `SUBE_KODU, CARI_KOD, TARIH, INC_KEY_NUMBER` | Nonclustered |
| `TBLCAHAR_3` | `CARI_KOD, VADE_TARIHI` | Nonclustered |
| `TBLCAHAR_4` | `ENT_REF_KEY` | Nonclustered |
| `TBLCAHAR_IND_ONUM` | `ONAYNUM` | Nonclustered |
| `TBLCAHAR_IND_OTIP` | `ONAYTIPI` | Nonclustered |
| `TBLCAHARPKEY` | `INC_KEY_NUMBER` | Unique, Nonclustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, CARI_KOD, TARIH, VADE_TARIHI, BELGE_NO, ACIKLAMA
FROM dbo.TBLCAHAR WITH (NOLOCK);
```
