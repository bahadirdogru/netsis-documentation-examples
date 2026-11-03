---
title: TBLKKMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkmas/
---

# TBLKKMAS

> KAYIT>KALİTE KONTROL KAYITLARI/ÖN SORGULAMA SEKMESİNDE GİRİLEN KAYITLARI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 51
- **Birincil anahtar:** `KKNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KKNO` | varchar(8) | hayır |  | Kalite Kontrol Numarasını gösterir. |
| 2 | `KKDEPKOD` | varchar(8) | evet |  | Departman kodunu gösterir. |
| 3 | `KKISCI` | TDBINTEGER | evet | `0` | Personel kodunu gösterir. |
| 4 | `DATYAPILDI` | char(1) | evet | `H` | Kabul KK Depolar Arası Transfer Kayıtları yapıldığında 'E', yapılmadığında 'H' değerini gösterir. |
| 5 | `USKYAPILDI` | char(1) | evet | `H` | Üretim Sonu Kayıtları yapıldığında 'E', yapılmadığında 'H' değerini gösterir. |
| 6 | `REDDATYAPILDI` | char(1) | evet | `H` | Red KK Depolar Arası Transfer Kayıtları yapıldığında 'E', yapılmadığında 'H' değerini gösterir. |
| 7 | `STHAR_GCMIK` | TDBFLOAT | evet |  | Stok kodunun giriş çıkış miktarını gösterir. |
| 8 | `INCKEYNO` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `ISEMRINO` | TDBBELGENO | evet |  | Üretim KK Kayıtlarındaki İşemri Numarasını gösterir. |
| 10 | `IRSALIYENO` | TDBBELGENO | evet |  | Satın Alma KK Kayıtlarındaki İrsaliye Numarasını gösterir. |
| 11 | `STOKKODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 12 | `STHAR_ACIKLAMA` | varchar(15) | evet |  | Stok hareketinin ilgili olduğu cari kodu gösterir. |
| 13 | `STHAR_TARIH` | TDBDATETIME | evet |  | Stok hareketlerinin kayıt tarihini gösterir. |
| 14 | `STHAR_DEPO` | TDBSMALLINT | evet |  | Depo kodunu gösterir. |
| 15 | `STHAR_HTUR` | char(1) | evet |  | Stok hareketlerinin türünü gösterir. |
| 16 | `STHAR_GCKOD` | char(1) | evet |  | Stok hareketlerinin giriş/çıkış hareketi olup olmadığını gösterir.Giriş hareketi ise 'G', çıkış hareketi ise 'C' değerini gösterir. |
| 17 | `STHAR_GCMIK2` | TDBFLOAT | evet |  | Stok hareketlerinin ikinic giriş/çıkış miktarını gösterir. |
| 18 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `REVNO` | varchar(25) | evet |  | Revizyon numarasını gösterir. |
| 20 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `USKDEPOKODU` | TDBSMALLINT | evet |  | Üretim Sonu Kaydı Depo Kodunu gösterir. |
| 22 | `KABULMIKTAR` | TDBFLOAT | evet |  | Kabul miktarını gösterir. |
| 23 | `REDMIKTAR` | TDBFLOAT | evet |  | Red miktarını gösterir. |
| 24 | `TUM_PARTI_KABUL_RED` | char(1) | evet | `H` | Kayıt durumunu gösterir. Kayıt kapama yapılmamış ise 'H', Hepsi Kabul ise 'K', Hepsi Red ise 'R' değerini gösterir. |
| 25 | `KABULREDKODU` | varchar(2) | evet |  | Kabul/Red Kodunu gösterir. |
| 26 | `KKBITISTARIHI` | TDBDATETIME | evet |  | Bitiş tarihini gösterir. |
| 27 | `ACIKLAMA` | text | evet |  | Açıklama kaydını gösterir. |
| 28 | `SERIIRSTASINDI` | char(1) | evet | `H` | Satın Alma veya Iade ekranlarında Kktra kayıtları olşturulmak istendiğinde;Seri takibi varken, seri girişi alış irsaliyesindense ve stok için seri takibi varsa; Ek olarak seriler tek tek veya bütün olarak girildi ise 'e', diğer durumlarda 'H' ya da NULL değerini gösterir. |
| 29 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `ACIK1` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `ACIK2` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `ACIK3` | varchar(45) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `ACIK4` | varchar(45) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `C_YEDEK1` | char(1) | evet |  | Hurda Depolar Arası Transferi için kullanılıyor |
| 38 | `C_YEDEK2` | char(1) | evet |  | IadeIrsaliyesi Oluşturulup/Oluşturulmadığını tutuluyor |
| 39 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `F_YEDEK5` | TDBFLOAT | evet |  | kabul depolar arsı transfer inckeynosu tutuluyor. |
| 42 | `F_YEDEK6` | TDBFLOAT | evet |  | red depolar arası transfer inckeynosu tutuluyor. |
| 43 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 46 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `STOKURS_INCKEYNO` | TDBFLOAT | evet |  | TBLSTOKURS tabloundaki inckeyno fieldındaki program tarafından atılan rakamı gösterir. |
| 48 | `HURDAMIK` | TDBFLOAT | evet |  | Hurda Miktarını gösterir. |
| 49 | `F_YEDEK7` | TDBFLOAT | evet |  | hurda depolar arsı transfer inckeynosu tutuluyor |
| 50 | `F_YEDEK8` | TDBFLOAT | evet |  | iade irsaliyesi inckeynosu tutuluyor. |
| 51 | `MYNKOD` | varchar(8) | evet |  | Muayene kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKMASPKEY` | `KKNO` |
| FOREIGN KEY | `TBLKKMAS_FKEY7` | `MYNKODU` |
| FOREIGN KEY | `TBLKKMAS_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLKKMASFKEY1` | `KOD` |
| FOREIGN KEY | `TBLKKMASFKEY2` | `INCKEYNO` |
| FOREIGN KEY | `TBLKKMASFKEY3` | `INCKEYNO` |
| FOREIGN KEY | `TBLKKMASFKEY4` | `ISEMRINO` |
| FOREIGN KEY | `TBLKKMASFKEY5` | `STOK_KODU` |
| FOREIGN KEY | `TBLKKMASFKEY6` | `KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKMAS_IND_1` | `KKNO+ISEMRINO` | Unique, Non-clustered |
| `TBLKKMAS_IND_2` | `KKNO+INCKEYNO` | Unique, Non-clustered |
| `TBLKKMAS_IND_3` | `F_YEDEK5` | Non-unique, Non-clustered |
| `TBLKKMAS_IND_4` | `F_YEDEK6` | Non-unique, Non-clustered |
| `TBLKKMAS_IND_5` | `F_YEDEK7` | Non-unique, Non-clustered |
| `TBLKKMAS_IND_6` | `SUBE_KODU+KKNO` | Unique, Non-clustered |
| `TBLKKMASPKEY` | `KKNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KKNO, KKDEPKOD, KKISCI, DATYAPILDI, USKYAPILDI, REDDATYAPILDI
FROM dbo.TBLKKMAS WITH (NOLOCK);
```
