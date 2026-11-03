---
title: TBLESNYAPMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnyapmas/
---

# TBLESNYAPMAS

> KAYIT>ESNEK YAPILANDIRMA>ÜRÜN YAPILANDIRMA TANIMLARI SABİT BİLGİLER SEKMESİNDE GİRİLEN KAYITLARI GÖSTERİR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `YAPKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `YAPKOD` | varchar(15) | hayır |  | Yapılandırma kodunu gösterir. |
| 3 | `YAPACIK` | varchar(50) | hayır |  | Tanımlanan yapılandırma koduna ait açıklamayı gösterir. |
| 4 | `REVIZYAPKOD` | varchar(15) | evet |  | Bu field bu tabloda kullanılmamaktadır. |
| 5 | `YPLNDRSTOKKOD` | varchar(35) | evet |  | Tanımlanan yapılandırma kodunun hangi stok için kullanılacağını gösterir. |
| 6 | `GECBASTAR` | TDBDATETIME | evet |  | Tanımlanan yapılandırma kodunun geçerliliğinin hangi tarihte başladığını gösterir. |
| 7 | `GECBITTAR` | TDBDATETIME | evet |  | Tanımlanan yapılandırma kodunun geçerliliğinin hangi tarihte sona ereceğini gösterir. |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLESNYAPMASPKEY` | `YAPKOD` |
| FOREIGN KEY | `TBLESNYAPMASFKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLESNYAPMASFKEY2` | `REVIZYAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNYAPMAS_IND_1` | `ISLETME_KODU+YAPKOD` | Unique, Non-clustered |
| `TBLESNYAPMAS_IND_2` | `ISLETME_KODU+YAPACIK` | Non-unique, Non-clustered |
| `TBLESNYAPMAS_IND_3` | `ISLETME_KODU+GECBASTAR+GECBITTAR` | Non-unique, Non-clustered |
| `TBLESNYAPMASPKEY` | `YAPKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, YAPKOD, YAPACIK, REVIZYAPKOD, YPLNDRSTOKKOD, GECBASTAR
FROM dbo.TBLESNYAPMAS WITH (NOLOCK);
```
