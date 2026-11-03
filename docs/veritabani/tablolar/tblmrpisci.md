---
title: TBLMRPISCI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpisci/
---

# TBLMRPISCI

> PERSONEL TANIMLAMALARINI -KAYNAK TANIMLAMALARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 40

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SICILNO` | varchar(15) | hayır |  | Personelin sicil numarasıdır. |
| 2 | `ISYERI` | varchar(8) | hayır |  | Personel paketinden secilen, personelin isyeridir. |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ISIM` | varchar(50) | evet |  | Personelin ismidir. |
| 5 | `ISTKODU` | varchar(5) | evet |  | İstasyon kodunu tutan sahadır. |
| 6 | `GOREVKODU` | varchar(5) | evet |  | Personelin gorev kodunu tutan sahadır. |
| 7 | `BIRIMMALIYET` | TDBFLOAT | evet |  | Personelin birim maliyetidir. |
| 8 | `DURUM` | char(1) | evet |  | Durum aktif ise A; pasif ise P degerini tutan sahadır. |
| 9 | `KAYITYAPANKUL` | varchar(20) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | varchar(20) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `GRUP` | varchar(15) | evet |  | Personelin grup kodudur. |
| 24 | `ISLETME_KODU` | TDBSMALLINT | evet |  | İşletme kodu bilgisi yer alır. |
| 25 | `KAYNAK_TIPI` | char(1) | evet |  | Kaynak tipi bilgisi yer alır. D-emirbaş,P-ersonel,S-tok |
| 26 | `KAYNAK_GRUBU` | varchar(15) | evet |  | Kaynak grup kodu bilgisi yer alır. |
| 27 | `KAYNAK_SAYISI` | TDBFLOAT | evet |  | Toplam miktar bilgisi yer alır. |
| 28 | `ACIKLAMA` | TDBMEMO | evet |  | Açıklama bilgisi yer alır. |
| 29 | `ONEMDERECESI` | TDBSMALLINT | evet |  | Öncelik sırası bilgisi yer alır. |
| 30 | `KAYNAK_TAKIBI` | char(1) | evet |  | Ömür takibi yapılsın işaretli ise E değerini alır. |
| 31 | `SON_KULLANMA_TARIHI` | TDBDATETIME | evet |  | Ömür takibi sekmesindeki son kullanma tarihi bilgisi yer alır. |
| 32 | `TOPLAM_OMUR` | TDBFLOAT | evet |  | Toplam ömür bilgisi yer alır. |
| 33 | `TOPLAM_OMUR_BR` | varchar(15) | evet |  | Toplam ömür birimi bilgisi yer alır. |
| 34 | `GOZ_SAYISI` | TDBINTEGER | evet |  | kalıp göz sayısı bilgisi yer alır. |
| 35 | `TAMIR_EDILEBILIR` | char(1) | evet |  | tamir edilebilir işaretli ise E değerini alır. |
| 36 | `ORT_BAKIM_SURESI` | TDBFLOAT | evet |  | Ortalama bakım süresi bilgisi yer alır. |
| 37 | `ORT_BAKIM_SURESI_BR` | char(1) | evet |  | Ort. Bakım süresi birimi yer alır. |
| 38 | `MAX_BAKIM_SAYISI` | TDBSMALLINT | evet |  | Max. Bakım sayısı bilgisi yer alır. |
| 39 | `BAKIMDA_YIPRANMA_PAYI` | TDBFLOAT | evet |  | Bakımda yıpranma payı % bilgisi yer alır. |
| 40 | `ISEMRI_BOYUNCA_REZERVE` | char(1) | hayır |  | Kaynak tanımlama ekranındaki İş Emrinin Operasyonları Boyunca Rezerve Edilsin bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 SICILNO, ISYERI, INCKEYNO, ISIM, ISTKODU, GOREVKODU
FROM dbo.TBLMRPISCI WITH (NOLOCK);
```
