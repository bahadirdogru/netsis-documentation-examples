---
title: TBLREVYANSNO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblrevyansno/
---

# TBLREVYANSNO

> ÜRETİM>KAYIT>PLANLANAN BİLEŞEN DEĞİŞİKLİKLERİ EKRANINDA PLAN YANSIT BUTONUNA BASILDIĞINDAKİ KAYITLARI TUTAR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `YANSITMANO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `YANSITMANO` | varchar(25) | hayır |  | Yansıtma numarasını gösterir. |
| 2 | `REVNO` | varchar(8) | hayır |  | Revizyon numarasını gösterir. |
| 3 | `KULAMAC` | char(1) | evet | `R` | Plan yansıt denildiğinde 'P', reçete yansıt denildiğinde 'R' değerini gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `KAYITTARIHI` | TDBDATETIME | evet | `getdate()` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLREVYANSNO_PKEY` | `YANSITMANO` |
| FOREIGN KEY | `TBLREVYANSNO_FKEY1` | `REVNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLREVYANSNO_IND_1` | `REVNO` | Unique, Non-clustered |
| `TBLREVYANSNO_IND_2` | `REVNO+KULAMAC` | Unique, Non-clustered |
| `TBLREVYANSNO_PKEY` | `YANSITMANO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 YANSITMANO, REVNO, KULAMAC, KAYITYAPANKUL, KAYITTARIHI, YEDEK1
FROM dbo.TBLREVYANSNO WITH (NOLOCK);
```
