---
title: TBLUAKMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluakmas/
---

# TBLUAKMAS

> ÜRETİM AKIŞ KONTROL>KAYIT>ÜRETİM AKIŞ KAYDI EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM AKIŞ KONTROL](/veritabani/moduller/uretim-akis-kontrol/)
- **Kolon sayısı:** 44
- **Birincil anahtar:** `ISEMRINO+CONFSIRANO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISEMRINO` | TDBBELGENO | hayır |  | İş emri bilgileri sekmesinde iş emri numarasını gösterir. |
| 2 | `CONFSIRANO` | varchar(8) | hayır |  | Üretim akış kaydı sekmesinde sıra numarasını gösterir. |
| 3 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `STOKKODU` | TDBSTOKKOD | evet |  | Üretim akış kaydı sekmesinde stok kodunu gösterir. |
| 5 | `OPKODU` | varchar(35) | evet |  | Üretim akış kaydı sekmesinde operasyon kodunu gösterir. |
| 6 | `OPSIRANO` | varchar(8) | evet |  | Operasyon sıra kodunu gösterir. |
| 7 | `ISTASYONKODU` | varchar(5) | evet |  | Üretim akış kaydı sekmesinde istasyon kodunu gösterir. |
| 8 | `SIMULTANEOPR` | TDBFLOAT | evet | `-1` | Üretim akış kaydı sekmesinde simültane miktarını gösterir. |
| 9 | `MRPMAKINENO` | TDBINTEGER | evet |  | Üretim akış kaydı sekmesinde makina numarasını gösterir. |
| 10 | `MRPISCINO` | TDBINTEGER | evet |  | Üretim akış kaydı sekmesinde operatör numarasını gösterir. |
| 11 | `BASLANGICTARIH` | TDBDATETIME | hayır |  | Üretim akış kaydı sekmesinde başlangıç tarihini gösterir. |
| 12 | `BASLANGICVARDIYA` | TDBBYTE | evet | `0` | başlangış vardiyayı gösterir. |
| 13 | `SURE` | TDBFLOAT | hayır | `0` | Üretim akış kaydı sekmesinde süreyi gösterir. |
| 14 | `SURETIPI` | TDBBYTE | evet | `0` | Üretim akış kaydı sekmesinde süre tipini gösterir. |
| 15 | `BITISTARIHSAAT` | TDBDATETIME | evet |  | Üretim akış kaydı sekmesinde bitiş tarih saati gösterir. |
| 16 | `AKTIVITEKODU` | varchar(8) | evet |  | Üretim akış kaydı sekmesinde aktivite kodunu gösterir. |
| 17 | `ARIZAKODU` | varchar(8) | evet |  | Üretim akış kaydı sekmesinde arıza kodunu gösterir. |
| 18 | `ISLENDI` | char(1) | evet | `H` | Kaydın işlenip işlenmediğini gösterir. |
| 19 | `URETILENMIKTAR` | TDBFLOAT | evet | `0` | Üretim akış kaydı sekmesinde üretilen miktarı gösterir. |
| 20 | `FIREMIKTAR` | TDBFLOAT | evet | `0` | Üretim akış kaydı sekmesinde fire miktarını gösterir. |
| 21 | `PROJEKODU` | TDBPROJEKOD | evet |  | Üretim akış kaydı sekmesinde proje kodunu gösterir. |
| 22 | `REVNO` | varchar(25) | evet |  | Üretim akış kaydı sekmesinde revizyon numarasını gösterir. |
| 23 | `SERILOTNO` | varchar(50) | evet |  | Üretim akış kaydı sekmesinde seri lot numarasını gösterir. |
| 24 | `USKDEPOKODU` | TDBSMALLINT | evet | `0` | Üretim akış kaydı sekmesinde depo kodunu gösterir. |
| 25 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `ACIK1` | varchar(30) | evet |  | Üretim akış kaydı sekmesinde ek açıklama alanına girilen açıklamaları gösterir. |
| 31 | `ACIK2` | varchar(30) | evet |  | Üretim akış kaydı sekmesinde ek açıklama alanına girilen açıklamaları gösterir. |
| 32 | `ACIK3` | varchar(45) | evet |  | Üretim akış kaydı sekmesinde ek açıklama alanına girilen açıklamaları gösterir. |
| 33 | `ACIK4` | varchar(45) | evet |  | Üretim akış kaydı sekmesinde ek açıklama alanına girilen açıklamaları gösterir. |
| 34 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 39 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 43 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `STOKURS_INCKEYNO` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLUAKMASPKEY` | `ISEMRINO+CONFSIRANO` |
| FOREIGN KEY | `TBLUAKMAS_FKEYPROJE` | `PROJE_KODU` |
| FOREIGN KEY | `TBLUAKMASFKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLUAKMASFKEY2` | `ISTKODU` |
| FOREIGN KEY | `TBLUAKMASFKEY3` | `INCKEYNO` |
| FOREIGN KEY | `TBLUAKMASFKEY4` | `INCKEYNO` |
| FOREIGN KEY | `TBLUAKMASFKEY5` | `ARIZAKODU` |
| FOREIGN KEY | `TBLUAKMASFKEY6` | `AKTIVITEKODU` |
| FOREIGN KEY | `TBLUAKMASFKEY7` | `SUBE_KODU` |
| FOREIGN KEY | `TBLUAKMASFKEY8` | `ISEMRINO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLUAKMAS_IND_1` | `SUBE_KODU+ISEMRINO+CONFSIRANO` | Non-unique,Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISEMRINO, CONFSIRANO, INCKEYNO, STOKKODU, OPKODU, OPSIRANO
FROM dbo.TBLUAKMAS WITH (NOLOCK);
```
