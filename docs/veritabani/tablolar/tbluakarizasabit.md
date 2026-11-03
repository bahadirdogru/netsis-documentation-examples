---
title: TBLUAKARIZASABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbluakarizasabit/
---

# TBLUAKARIZASABIT

> ÜRETİM AKIŞ KONTROL>KAYIT>ARIZA EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [ÜRETİM AKIŞ KONTROL](/veritabani/moduller/uretim-akis-kontrol/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `ARIZAKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ARIZAKODU` | varchar(8) | hayır |  | Aktivite tanımlama bölümünde, arıza/durma tipiyle tanımlanmış aktivitelerin detaylandırılması için girilen arıza kodlarını gösterir. |
| 3 | `AKTIF` | char(1) | evet | `E` | tanımlanan arızanın aktif olarak kullanılıp kullanılmadığını gösterir. Aktif parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 4 | `ACIKLAMA` | varchar(200) | evet |  | Tanımlanan arıza kodunun açıklamasını gösterir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `SUREDAHIL` | char(1) | evet | `E` | Raporlardaki brüt zaman hesaplamasına dahil edilip edilmediğinigösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLUAKARIZASABIT_PKEY` | `ARIZAKODU` |
| FOREIGN KEY | `TBLUAKARIZASABIT_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLUAKARIZASABIT_IND_1` | `ISLETME_KODU` | Non-unique,Non-clustered |
| `TBLUAKARIZASABIT_PKEY` | `ARIZAKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ARIZAKODU, AKTIF, ACIKLAMA, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLUAKARIZASABIT WITH (NOLOCK);
```
