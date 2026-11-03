---
title: TBLSEVKMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsevkmas/
---

# TBLSEVKMAS

> SEVK VE YÜKLEME EMRİ İÇİN SABİT BİLGİ GİRİŞİ EKRANINDAKİ KAYITLARI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 28
- **Birincil anahtar:** `SUBU_KODU+TIP+BELGENO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TIP` | TDBBYTE | hayır |  | Sevk emri kayıtları için '1'+yükleme emri kayıtları için '3' değerini gösterir. |
| 3 | `BELGENO` | TDBBELGENO | hayır |  | Sevk ya da yükleme emirlerinin belge numaralarını gösterir. |
| 4 | `TARIH` | TDBDATETIME | evet |  | Sevk ya da yükleme emri tarihlerini gösterir. |
| 5 | `SEVKTARIHI` | TDBDATETIME | evet |  | Default NULL değerini gösterir. Herhangi bir bilgi tutmamaktadır. |
| 6 | `KOD1` | char(1) | evet |  | Sevk ve yükleme emri için sabit bilgi girişi ekranında kod1 sahasına girilen kaydı gösterir. |
| 7 | `KOD2` | char(1) | evet |  | Sevk ve yükleme emri için sabit bilgi girişi ekranında kod2 sahasına girilen kaydı gösterir. |
| 8 | `ACIK1` | varchar(50) | evet |  | Sevk ve yükleme emri için sabit bilgi girişi ekranında açıklama1 sahasına girilen kaydı gösterir. |
| 9 | `ACIK2` | varchar(50) | evet |  | Sevk ve yükleme emri için sabit bilgi girişi ekranında açıklama2 sahasına girilen kaydı gösterir. |
| 10 | `ACIK3` | varchar(50) | evet |  | Sevk ve yükleme emri için sabit bilgi girişi ekranında açıklama3 sahasına girilen kaydı gösterir. |
| 11 | `KAMYONNO` | varchar(15) | evet |  | Yükleme emri için sabit bilgi girişi ekrarnında kamyon kodu alanına girilien kamyon plakasını gösterir. |
| 12 | `UPDATEKODU` | char(1) | evet | `Y` | Tamamlanmış sevk ve yükleme emirleri için 'E'+tamamlanmadan çıkılan emirler için 'Y' değerini gösterir. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet | `getdate()` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `I_YEDEK1` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `I_YEDEK2` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK3` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK1` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK2` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `T_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `T_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSEVKMAS_PKEY` | `SUBU_KODU+TIP+BELGENO` |
| FOREIGN KEY | `TBLSEVKMAS_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSEVKMAS_IND1` | `SUBE_KODU+TARIH` | Non-unique+Non-clustered |
| `TBLSEVKMAS_PKEY` | `SUBE_KODU+TIP+BELGENO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TIP, BELGENO, TARIH, SEVKTARIHI, KOD1
FROM dbo.TBLSEVKMAS WITH (NOLOCK);
```
