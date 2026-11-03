---
title: TBLESNOZMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnozmas/
---

# TBLESNOZMAS

> KAYIT>ESNEK YAPILANDIRMA>ESNEK YAPILANDIRMA ÖZELLİK TANIMLARI SABİT BİLGİLER SEKMESİNDE GİRİLEN KAYITLARI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `OZKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `OZKOD` | varchar(8) | hayır |  | Özelliğe ait kodu gösterir. |
| 3 | `OZACIK` | varchar(50) | evet |  | Tanımlanan özelliğe ait açıklama bilgisini gösterir. |
| 4 | `DEGERTIP` | TDBBYTE | evet | `0` | Tanımlanan özelliğin alabileceği değeri gösterir. Tek karakter seçili ise '0', Çok karakter seçili ise '1' , Tamsayı seçili ise '2', Ondalık Sayı seçili ise '3', Mantıksal seçili ise '4' değerini gösterir. |
| 5 | `OLCUBR` | varchar(8) | evet |  | Özelliğe ait ölçü birimini gösterir. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `C_YEDEK1` | char(1) | evet |  | Değerler dinamik paraetresini gösterir. |
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
| PRIMARY KEY | `TBLESNOZMASPKEY` | `OZKOD` |
| FOREIGN KEY | `TBLESNOZMASFKEY1` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNOZMAS_IND_1` | `ISLETME_KODU+OZKOD` | Unique, Non-clustered |
| `TBLESNOZMAS_IND_2` | `ISLETME_KODU+OZACIK` | Non-unique, Non-clustered |
| `TBLESNOZMASPKEY` | `OZKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, OZKOD, OZACIK, DEGERTIP, OLCUBR, KAYITYAPANKUL
FROM dbo.TBLESNOZMAS WITH (NOLOCK);
```
