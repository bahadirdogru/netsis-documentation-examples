---
title: TBLCONFIGMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblconfigmas/
---

# TBLCONFIGMAS

> Açıklama yok.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `TASLAK_KODU` | TDBBELGENO | evet |  | Taslağın kodunu tutar |
| 5 | `DURUMU` | char(1) | hayır |  | Taslağı durumunu tutar |
| 6 | `BAZ_MAMUL_KODU` | TDBSTOKKOD | hayır |  | Taslağın açıldığı baz mamul kodunu tutar |
| 7 | `YENI_STOK_KODU` | TDBSTOKKOD | evet |  | Yeni stok kodunun tutulduğu sahadır |
| 8 | `YENI_STOK_ADI` | varchar(100) | evet |  | Yeni stok adının tutulduğu sahadır |
| 9 | `ACIKLAMA` | varchar(100) | evet |  | İlgili açıklama sahasıdır. |
| 10 | `HAVE_INS_DEL_NODES` | char(1) | evet | `H` | Taslakla ilgili silinen veya kayıt edilen veri olup olmadığı gösterir |
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
| 21 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `UST_FORMUL_TOPLAMI` | TDBFLOAT | evet |  | Mamule ait formul toplamının bilgisini tutar |
| 26 | `UST_OLCU_BR` | TDBINTEGER | evet |  | Üst ölçü birimin bilgisini tutar |
| 27 | `UST_OTOREC` | char(1) | evet |  | Otomatık recete olup olmadığını gösterir |
| 28 | `IS_INSERT_MODE` | char(1) | evet |  | Taslağın insert modda olup olmadığını gösterir |
| 29 | `FOUND_RECETE` | char(1) | evet |  | Taslağın bulunmus recete olup olmadığını gösteren sahadır. |
| 30 | `YENI_INSERT_NODE` | char(1) | evet |  |  |
| 31 | `URUN_GRUBU_ID` | TDBINTEGER | evet |  | Taslağın bağlı olduğu ürün grubu numarasının bilgsi |
| 32 | `URUN_GRUBU` | varchar(100) | evet |  | Ürün grup bilgisi |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCONFIGMAS_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLCONFIGMAS_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLCONFIGMAS_FKEY3` | `BAZ_MAMUL_KODU` |
| FOREIGN KEY | `TBLCONFIGMAS_FKEY4` | `URUN_GRUBU_ID` |
| PRIMARY KEY | `TBLCONFIGMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCONFIGMAS_IND_1` | `TASLAK_KODU` | nonclustered, unique |
| `TBLCONFIGMAS_IND_2` | `ISLETME_KODU, SUBE_KODU, TASLAK_KODU` | nonclustered |
| `TBLCONFIGMAS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, ISLETME_KODU, SUBE_KODU, TASLAK_KODU, DURUMU, BAZ_MAMUL_KODU
FROM dbo.TBLCONFIGMAS WITH (NOLOCK);
```
