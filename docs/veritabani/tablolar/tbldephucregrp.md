---
title: TBLDEPHUCREGRP
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldephucregrp/
---

# TBLDEPHUCREGRP

> DİNAMİK DEPO GRUP KODU KAYITLARINI TUTAR

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `HUCREGRKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | Kaydın hangi , işletmeye ait olduğunu gösterir. |
| 2 | `HUCREGRKOD` | varchar(8) | hayır |  | Hücre grup kodu bilgisini gösterir |
| 3 | `ACIKLAMA` | varchar(100) | evet |  | İlgili grup kodunun açıklamasının/ adının girileceği sahadır. |
| 4 | `EN` | TDBSMALLINT | evet | `0` | İlgili grubun bir hücresi için en bilgisinin rapor amaçlı girilebileceği sahadır. |
| 5 | `BOY` | TDBSMALLINT | evet | `0` | İlgili grubun bir hücresi için boy bilgisinin rapor amaçlı girilebileceği sahadır. |
| 6 | `YUKSEKLIK` | TDBSMALLINT | evet | `0` | İlgili grubun bir hücresi için yükseklik bilgisinin rapor amaçlı girilebileceği sahadır. |
| 7 | `HUCREADEDI` | TDBFLOAT | evet | `0` | Aynı gruptan kaç hücre olduğu bu sahaya girilmektedir |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEPHUCREGRP_PKEY` | `HUCREGRKOD` |
| FOREIGN KEY | `TBLDEPHUCREGRP_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPHUCREGRP_PKEY` | `HUCREGRKOD` | Unique ,Primary Key |
| `TBLDEPHUCREGRPIND1` | `ACIKLAMA` | Duplicate |
| `TBLDEPHUCREGRPIND2` | `ISLETME_KODU` | Duplicate |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, HUCREGRKOD, ACIKLAMA, EN, BOY, YUKSEKLIK
FROM dbo.TBLDEPHUCREGRP WITH (NOLOCK);
```
