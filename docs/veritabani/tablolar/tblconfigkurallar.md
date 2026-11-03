---
title: TBLCONFIGKURALLAR
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigkurallar/
---

# TBLCONFIGKURALLAR

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `MAMUL_TIPI` | TDBSMALLINT | hayır |  | Mamul kısıtıtın kod grubunda yada tüm mamuller bazında girelecğini belirler |
| 5 | `MAMUL_DEGER` | varchar(100) | evet |  | Şeçili mamul tiipine göre mamul kısıtını içeren blgi sahasıdır |
| 6 | `BILESEN_TIPI` | TDBSMALLINT | hayır |  | Bileşen kısıtının kod, grup kod, kod1...kod5 ten hangisi olduğunu belirler |
| 7 | `BILESEN_DEGER` | varchar(100) | evet |  | İlgili bileşenin değer bilgisini tutar |
| 8 | `KURAL_KODU` | TDBSMALLINT | hayır |  | Uygulanması gerek kuralın belirlendıiği sahadır |
| 9 | `KURAL_DEGER` | char(1) | evet | `H` | İlgili kuralın alacağı değeri gösterir |
| 10 | `UST_KURAL_ID` | TDBINTEGER | evet |  | Hangi üst kuralla ilişkili oldgunu tutar |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGKURALLAR_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGKURALLAR_FKEY2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLCONFIGKURALLAR_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGKURALLAR_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, MAMUL_TIPI, MAMUL_DEGER, BILESEN_TIPI
FROM dbo.TBLCONFIGKURALLAR WITH (NOLOCK);
```
