---
title: TBLHIZMETTUTARKAPSAMMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhizmettutarkapsammas/
---

# TBLHIZMETTUTARKAPSAMMAS

> Açıklama yok.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `MASINCKEYNO` | TDBINTEGER | hayır |  | Tblsmsmas tablosundaki inckeyno fieldıyla aynı rakamı gösterir. |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KISITTIPI` | TDBBYTE | hayır |  | Girilen stok rapor kod bilgisinin stok kodu, grup kodu, kod1.. Kod5 gibi kısıtlardan hangisine ait olduğu belirler |
| 4 | `STOKRAPORKODU` | varchar(800) | evet |  | Stok rapor kodunun tutulduğu sahadır |
| 5 | `DEGERTIPI` | char(1) | hayır |  | Alt sınır ust sınır bilgilerinn ciro mu miktar mı oldğunu belirtir |
| 6 | `ISKONTOTIP` | char(1) | evet |  | İskonto bilgilerinin tutarmı oranmı oldğunu belirtir |
| 7 | `ISKONTOADETBAZINDA` | char(1) | evet |  | İskonto adet bazında bilgilerini tutan sahadır |
| 8 | `ILERIKISIT` | text | evet |  | Primin geçerli olguğu ileri kısıt ürünlere ait ileri kısıt bilgisini tutar |
| 9 | `OLCUBR` | TDBBYTE | evet |  | Ölçü birimini gösterir. |
| 10 | `KOTAVAR` | char(1) | evet |  | Primin kotalı olup olmadığını gösterir |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLHIZMETTUTARKAPSAMMAS_FKEY1` | `MASINCKEYNO` |
| PRIMARY KEY | `TBLHIZMETTUTARKAPSAMMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLHIZMETTUTARKAPSAMMAS_IND_1` | `MASINCKEYNO, KISITTIPI, STOKRAPORKODU` | nonclustered, unique |
| `TBLHIZMETTUTARKAPSAMMAS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 MASINCKEYNO, INCKEYNO, KISITTIPI, STOKRAPORKODU, DEGERTIPI, ISKONTOTIP
FROM dbo.TBLHIZMETTUTARKAPSAMMAS WITH (NOLOCK);
```
