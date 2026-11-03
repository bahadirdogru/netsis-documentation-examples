---
title: TBLMRPSIPEKRMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmrpsipekrmas/
---

# TBLMRPSIPEKRMAS

> Açıklama yok.

- **Modül:** [MRP](/veritabani/moduller/mrp/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MGPMAS_ID` | varchar(50) | hayır |  |  |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı numarasını gösterir. |
| 5 | `SESSION_NAME` | varchar(100) | evet |  |  |
| 6 | `SIP_ISEMRI` | char(1) | evet |  | İsemri olusturulacak ise I;siparis olusturulacak ise S degerini tutan sahadır. |
| 7 | `KISIT_DATA` | image | evet |  |  |
| 8 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `C_YEDEK2` | char(2) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLMRPSIPEKRMAS_FKEY_1` | `SUBE_KODU, KULLANICI_NO` |
| PRIMARY KEY | `TBLMRPSIPEKRMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMRPSIPEKRMAS_IND_1` | `SUBE_KODU, KULLANICI_NO, SESSION_NAME, SIP_ISEMRI` | nonclustered, unique |
| `TBLMRPSIPEKRMAS_PKEY` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MGPMAS_ID, SUBE_KODU, KULLANICI_NO, SESSION_NAME, SIP_ISEMRI
FROM dbo.TBLMRPSIPEKRMAS WITH (NOLOCK);
```
