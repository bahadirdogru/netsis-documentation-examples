---
title: TBLDEPHAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldephar/
---

# TBLDEPHAR

> DİNAMİK DEPO HAREKET BİLGİLERİNİ TUTAR.

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `INCKEY`
- **Identity:** `INCKEY` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEY` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `STOKKODU` | TDBSTOKKOD | hayır |  | Hareket kaydı yapılacak stok kodu |
| 3 | `HUCREKODU` | varchar(15) | hayır |  | Yerleştirme ekranından girilen, stoğun yerleştirileceği hücre bilgisi |
| 4 | `GC` | char(1) | hayır |  | Hareketin giriş mi çıkış mı olduğu |
| 5 | `TARIH` | TDBDATETIME | hayır |  | Kayıt tarihini gösterir. |
| 6 | `HTUR` | char(1) | evet |  | Hareket tipi (Alış Faturası, Alış İrsaliyesi,Ambar Giriş Fişi, Depolar Arası Transfer,Satış Faturası, Satış İrsaliyesi,Ambar çıkış fişi) |
| 7 | `NETMIKTAR` | TDBFLOAT | evet | `0` | Yerleştirilecek net miktar |
| 8 | `BRUTMIKTAR` | TDBFLOAT | evet | `0` | Yerleştirilecek brut miktar |
| 9 | `STHARINC` | TDBINTEGER | evet | `0` | Aynı hareketten gelen stoklar bazında kayıt numarası, program tarafından otomatik olarak atılmaktadır |
| 10 | `DEPOHARFISNO` | varchar(15) | evet |  | yerleştirme yapılacak belge numarası girilebilir |
| 11 | `HARKONT` | TDBINTEGER | evet | `0` | Hareket kontrolü kaç kez çalıştırılmış bilgisi |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK3` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK4` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK5` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK6` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK9` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK10` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `D_YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `V_YEDEK15` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `V_YEDEK16` | varchar(20) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEPHARPKEY` | `INCKEY` |
| FOREIGN KEY | `TBLDEPHARFKEY` | `HUCREKODU` |
| FOREIGN KEY | `TBLDEPHARFKEY1` | `STHARINC` |
| FOREIGN KEY | `TBLDEPHARFKEY2` | `STOKKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPHARIND1` | `HUCREKODU` | Duplicate |
| `TBLDEPHARIND2` | `TARIH, STOKKODU` | Duplicate |
| `TBLDEPHARIND3` | `STOKKODU, GC` | Duplicate |
| `TBLDEPHARPKEY` | `INCKEY` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEY, STOKKODU, HUCREKODU, GC, TARIH, HTUR
FROM dbo.TBLDEPHAR WITH (NOLOCK);
```
