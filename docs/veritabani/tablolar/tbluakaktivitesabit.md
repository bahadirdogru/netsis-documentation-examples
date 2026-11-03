---
title: TBLUAKAKTIVITESABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluakaktivitesabit/
---

# TBLUAKAKTIVITESABIT

> ÜRETİM AKIŞ KONTROL>KAYIT>AKTİVİTE EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM AKIŞ KONTROL](/veritabani/moduller/uretim-akis-kontrol/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `AKTIVITEKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `AKTIVITEKODU` | varchar(8) | hayır |  | Tanımlanan aktivite kodunu gösterir. |
| 3 | `AKTIVITETIPI` | TDBSMALLINT | evet | `0` | Tanımlanan aktivitelerin tipini gösterir. İşlem tipi hazırlık ise '0', işlem ise '1', durum-arıza ise '2', transfer ise '3' değerini gösterir. |
| 4 | `AKTIF` | char(1) | evet | `E` | Tanımlanan aktivitenin hala kullanılıp kullanılmadığını gösterir. Aktif parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 5 | `ACIKLAMA` | varchar(100) | evet |  | Tanımlanan aktivite için açıklamayı gösterir. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLUAKAKTIVITESABITPKEY` | `AKTIVITEKODU` |
| FOREIGN KEY | `TBLUAKAKTIVITESABIT_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLUAKAKTIVITESABIT_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLUAKAKTIVITESABITPKEY` | `AKTIVITEKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, AKTIVITEKODU, AKTIVITETIPI, AKTIF, ACIKLAMA, KAYITYAPANKUL
FROM dbo.TBLUAKAKTIVITESABIT WITH (NOLOCK);
```
