---
title: TBLURMSUBEDEPO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblurmsubedepo/
---

# TBLURMSUBEDEPO

> ÜRETİM>KAYIT>ŞUBE/LOKAL DEPO TANIMLARI MENÜSÜNDEN GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 17
- **Birincil anahtar:** `ISLETME_KODU+SUBEDEPO+SDKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBEDEPO` | TDBBYTE | hayır | `0` | Şube/lokal depo tanımları menüsünde şube seçili ise '0', depo seçili ise '1' değerini gösterir. |
| 3 | `SDKOD` | TDBSMALLINT | hayır | `0` | Ürerim modülü için tanımlanan depo kodlarını gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLURMSUBEDEPO_PK` | `ISLETME_KODU+SUBEDEPO+SDKOD` |
| FOREIGN KEY | `TBLURMSUBEDEPO_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLURMSUBEDEPO_PK` | `ISLETME_KODU+SUBEDEPO+SDKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBEDEPO, SDKOD, KAYITYAPANKUL, KAYITTARIHI, DUZELTMEYAPANKUL
FROM dbo.TBLURMSUBEDEPO WITH (NOLOCK);
```
