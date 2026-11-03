---
title: TBLMPSKAPASITE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmpskapasite/
---

# TBLMPSKAPASITE

> AUP ICIN FABRIKA KAPASITE HESAPLAMA KAYITLARINI TUTAN TABLODUR.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISTKODU` | varchar(5) | evet |  | İs istasyonu kodudur. |
| 3 | `MPS_PERIYOT_NO` | int | evet |  | AUP periyod numarasıdır. |
| 4 | `KULLANILAN_KAPASITE` | TDBFLOAT | evet |  | Kullanılan kapasiteyi tutan sahadır. |
| 5 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `YILKODU` | TDBINTEGER | evet |  | Yıl kodu sahasıdır. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMPSKAPASITE_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLMPSKAPASITE_FKEY2` | `ISTKODU` |
| PRIMARY KEY | `TBLMPSKAPASITE_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMPSKAPASITE_IND_1` | `ISLETME_KODU, ISTKODU, YILKODU, MPS_PERIYOT_NO` | Nonclustered, unique |
| `TBLMPSKAPASITE_IND_2` | `ISTKODU, MPS_PERIYOT_NO` | Nonclustered |
| `TBLMPSKAPASITE_IND_3` | `YILKODU` | Nonclustered |
| `TBLMPSKAPASITE_IND_4` | `YILKODU, ISTKODU, MPS_PERIYOT_NO` | Nonclustered |
| `TBLMPSKAPASITE_PKEY` | `INCKEYNO` | Clustered, unique, primary key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ISTKODU, MPS_PERIYOT_NO, KULLANILAN_KAPASITE, INCKEYNO, YILKODU
FROM dbo.TBLMPSKAPASITE WITH (NOLOCK);
```
