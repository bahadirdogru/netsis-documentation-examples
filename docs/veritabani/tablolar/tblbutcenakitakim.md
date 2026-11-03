---
title: TBLBUTCENAKITAKIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbutcenakitakim/
---

# TBLBUTCENAKITAKIM

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 26
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | int | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BUTCE_ID` | TDBINTEGER | evet |  | Bütçe numarasının tutulduğu sahadır |
| 3 | `HESAP_KODU` | TDBMUHKOD | evet |  | İlgili hesaba göre tanımlanan muhasebe hesap kodunu gösterir. |
| 4 | `BILESEN_ID` | TDBINTEGER | hayır |  |  |
| 5 | `DONEM_ID` | TDBINTEGER | evet |  |  |
| 6 | `TUTAR` | TDBFLOAT | evet |  | Tutar miktarını gösterir |
| 7 | `DOV_TUTAR` | TDBFLOAT | evet |  | Döviz tutar bilgisinin tutulduğu alan |
| 8 | `FIRMA_DOV_TUTAR` | TDBFLOAT | evet |  | Firma döviz tutarını gösteren sahadır |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBUTCENAKITAKIM_FKEY_1` | `BUTCE_ID` |
| FOREIGN KEY | `TBLBUTCENAKITAKIM_FKEY_2` | `DONEM_ID` |
| FOREIGN KEY | `TBLBUTCENAKITAKIM_FKEY_3` | `BILESEN_ID` |
| PRIMARY KEY | `TBLBUTCENAKITAKIM_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBUTCENAKITAKIM_IND_1` | `BUTCE_ID, BILESEN_ID, HESAP_KODU, DONEM_ID` | nonclustered, unique |
| `TBLBUTCENAKITAKIM_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, BUTCE_ID, HESAP_KODU, BILESEN_ID, DONEM_ID, TUTAR
FROM dbo.TBLBUTCENAKITAKIM WITH (NOLOCK);
```
