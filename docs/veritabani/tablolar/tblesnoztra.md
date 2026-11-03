---
title: TBLESNOZTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnoztra/
---

# TBLESNOZTRA

> KAYIT>ESNEK YAPILANDIRMA>ESNEK YAPILANDIRMA ÖZELLİK TANIMLARI DETAY KAYITLARISEKMESİNDE GİRİLEN KAYITLARI GÖSTERİR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `OZKOD+DEGERKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `OZKOD` | varchar(8) | hayır |  | Özelliğe ait kodu gösterir. |
| 2 | `DEGERKOD` | varchar(8) | hayır |  | Seçilen özelliğin alabileceği değer kodunu gösterir. |
| 3 | `DEGERACIK` | varchar(50) | evet |  | Tanımlanan değer koduna ait açıklamayı gösterir. |
| 4 | `ONDEGERMI` | char(1) | evet |  | Öndeğer parametresini gösterir. Seçili ise 'E', seçili değil ise 'H' değerini gösterir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLESNOZTRAPKEY` | `OZKOD+DEGERKOD` |
| FOREIGN KEY | `TBLESNOZTRAFKEY1` | `OZKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNOZTRAPKEY` | `OZKOD+DEGERKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 OZKOD, DEGERKOD, DEGERACIK, ONDEGERMI, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLESNOZTRA WITH (NOLOCK);
```
