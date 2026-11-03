---
title: TBLCONFIGTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigtra/
---

# TBLCONFIGTRA

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 67
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `CONFIGMAS_ID` | TDBINTEGER | hayır |  | Configmas tabolosundaki inckey numarasını gösterir |
| 5 | `MAMUL_KODU` | TDBSTOKKOD | hayır |  | Mamül kodunu gösterir. |
| 6 | `HAM_KODU` | TDBSTOKKOD | hayır |  | Mamül içindeki hammadde kodunu gösterir. |
| 7 | `OPNO` | varchar(8) | hayır |  | Bileşenin sıra numarasının tutulduğu sahadır. |
| 8 | `MIKTAR` | TDBFLOAT | hayır |  | Miktar alanını tutar. |
| 9 | `TIP` | varchar(10) | hayır |  | Bileşen mı opersyon mu olduğunu belirtir |
| 10 | `CONFIGURABLE` | char(1) | hayır |  | Configre edilip edilemeyeceğini tutan sahadır |
| 11 | `ALTERNATIFGRUP_ID` | TDBINTEGER | evet |  | Alternatif grup numarasının tutulduğu saha |
| 12 | `ALTERNATIFGRUP_KODU` | varchar(100) | evet |  | Alternatif grup kodunun tutulduğu sahadır |
| 13 | `YENI_HAM_KODU` | TDBSTOKKOD | evet |  | Yeni ham madde kodunu tutar |
| 14 | `YENI_HAM_ADI` | varchar(100) | evet |  | Yeni ham madde adını tutar |
| 15 | `YENI_MIKTAR` | TDBFLOAT | hayır |  | Yeni miktar bilgisini tutar |
| 16 | `YENI_INSERT_NODE` | char(1) | evet |  | Yeni bileşen olup olmadığını tutar |
| 17 | `RECETE_ID` | TDBINTEGER | hayır |  | Reçete numarasını tutar |
| 18 | `UST_RECETE_ID` | TDBINTEGER | hayır |  | Üst recete numarasını tutar |
| 19 | `ACIKLAMA` | varchar(100) | evet |  | Açıklama bilgisini gösterir |
| 20 | `DEGISEBILIR` | char(1) | evet | `E` | Değiştrilebilir olup olmadığı bilgisini tutar |
| 21 | `HAVE_INS_DEL_NODES` | char(1) | evet | `H` |  |
| 22 | `IS_NEW_NODE` | char(1) | evet | `H` |  |
| 23 | `ST_ACIKLAMA` | varchar(-1) | evet |  | Stoğun açıklama bilgisinı tutar |
| 24 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 41 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 42 | `UST_FORMUL_TOPLAMI` | TDBFLOAT | evet |  | Mamule ait formul toplamının bilgisini tutar |
| 43 | `UST_OLCU_BR` | TDBINTEGER | evet |  | Üst ölçü birimin bilgisini tutar |
| 44 | `UST_OTOREC` | char(1) | evet |  | Otomatık recete olup olmadığını gösterir |
| 45 | `URM_MIKTARSABITLE` | char(1) | evet |  | Miktarın sabit olup olmadığınu tutar |
| 46 | `URM_STOK_MALIYET` | char(1) | evet |  | Stok mu yada maliyet mi olduğunun bilgisi |
| 47 | `URM_OPKODU` | TDBSTOKKOD | evet |  | Bileşenin operasyon kodunu tutar |
| 48 | `URM_F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 49 | `URM_F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 50 | `URM_C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 51 | `URM_ONCELIK` | TDBINTEGER | evet |  | Öncelik bilgsini tutar |
| 52 | `URM_PLANLAMA_ORANI` | TDBFLOAT | evet |  | Planlama oranını tutar |
| 53 | `URM_C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `URM_ALTERNATIF_POLITIKASI_DAT` | char(1) | evet |  | Depolar arası tranfer için gerekli alternatif politika bilgisini tutar. |
| 55 | `URM_ALTERNATIF_POLITIKASI_ACF` | char(1) | evet |  | Ambar giriş çıkış için gerekli alternatif politika bilgisini tutar |
| 56 | `URM_ALTERNATIF_POLITIKASI_USK` | char(1) | evet |  | Üretim sonu kaydı için gerekli alternatif politika bilgisinı tutar |
| 57 | `URM_ALTERNATIF_POLITIKASI_MRP` | char(1) | evet |  | Mrp için gerekli alternatif politika bilgisini tutar |
| 58 | `URM_GECERLILIK_TARIHI` | TDBDATETIME | evet |  | Urm geçerlilik tarihi |
| 59 | `URM_SETNO` | varchar(25) | evet |  | Revizyon numarasınu tutar |
| 60 | `URM_GEC_SON_SETNO` | varchar(25) | evet |  | Son revizyon numarasını tutar |
| 61 | `URM_GEC_SON_BILESEN` | TDBSTOKKOD | evet |  | Son bileşen kodunu tutar |
| 62 | `URM_GEC_SON_DURUM` | char(1) | evet |  | Son durum bilgisini tutar |
| 63 | `IS_INSERT_MODE` | char(1) | evet |  | Taslağın insert modda olup olmadığını gösterir |
| 64 | `STOKURM_INCKEYNO` | TDBINTEGER | evet |  | Bileşenın stok urm inckey no bilgisini tutar |
| 65 | `FOUND_RECETE` | char(1) | evet |  | Bileşenin bulunmuş bir receteden gelip gelmediği bilgisini tutar |
| 66 | `URUN_GRUBU_ID` | TDBINTEGER | evet |  | Ürün grup numarasanın saklandığı sahadır |
| 67 | `URUN_GRUBU` | varchar(100) | evet |  | Ürün grup bilgisinin saklandığı sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGTRA_FKEY1` | `CONFIGMAS_ID` |
| FOREIGN KEY | `TBLCONFIGTRA_FKEY2` | `MAMUL_KODU` |
| FOREIGN KEY | `TBLCONFIGTRA_FKEY3` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGTRA_FKEY4` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCONFIGTRA_FKEY5` | `ALTERNATIFGRUP_ID` |
| FOREIGN KEY | `TBLCONFIGTRA_FKEY7` | `URUN_GRUBU_ID` |
| PRIMARY KEY | `TBLCONFIGTRA_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGTRA_IND_1` | `CONFIGMAS_ID` | nonclustered |
| `TBLCONFIGTRA_IND_2` | `ISLETME_KODU, SUBE_KODU, CONFIGMAS_ID` | nonclustered |
| `TBLCONFIGTRA_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, CONFIGMAS_ID, MAMUL_KODU, HAM_KODU
FROM dbo.TBLCONFIGTRA WITH (NOLOCK);
```
