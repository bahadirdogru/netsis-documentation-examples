---
title: TBLCARISK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcarisk/
---

# TBLCARISK

> CARI RISK GIRISI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 38
- **Birincil anahtar:** `CARIKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARIKOD` | TDBCARIKOD | hayır |  | Cari kod bilgisini tutar. |
| 2 | `RISKGRUP` | varchar(15) | evet |  | Cari risk grubunu tutar. |
| 3 | `RISKLIMITI` | TDBFLOAT | evet | `0` | Risk limitini tutar. |
| 4 | `TEMINATI` | TDBFLOAT | evet | `0` | Teminatı tutar. |
| 5 | `CARISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 6 | `CCRISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 7 | `SARISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 8 | `SCRISK` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 9 | `IRSRISK` | TDBFLOAT | evet | `0` | İrsaliye riski icin belirlenmiş bilgiyi tutar |
| 10 | `SIPRISK` | TDBFLOAT | evet | `0` | Sipariş riski için belirlenmiş bilgiyi tutar |
| 11 | `RISKLIMITIO` | TDBFLOAT | evet | `0` | Risk limiti oranını tutar. |
| 12 | `TEMINATIO` | TDBFLOAT | evet | `0` | Teminati sahasi icin verilen risk oranını tutar. |
| 13 | `CARISKO` | TDBFLOAT | evet | `0` | Cek asıl riski icin belirlenen oranı tutar. |
| 14 | `CCRISKO` | TDBFLOAT | evet | `0` | Cek ciro riski icin belirlenen oranı tutar. |
| 15 | `SARISKO` | TDBFLOAT | evet | `0` | Senet asıl riski icin belirlenmis oranı tutar. |
| 16 | `SCRISKO` | TDBFLOAT | evet | `0` | Senet ciro riski icin belirlenmis oranı tutar. |
| 17 | `IRSRISKO` | TDBFLOAT | evet | `0` | İrsaliye riski icin belirlenmis oranı tutar. |
| 18 | `SIPRISKO` | TDBFLOAT | evet | `0` | Siparis riski icin belirlenmis oranı tutar. |
| 19 | `BORCRISKO` | TDBFLOAT | evet | `0` | Cari hareket bakiyesi icin belirlenmis risk oranını tutar. |
| 20 | `SIPRISKDAVRAN` | TDBBYTE | evet | `0` | Siparis risk kontrolu; yapılmasin ise 1, durdurulsun ise 0 degerini tutar. |
| 21 | `IRSRISKDAVRAN` | TDBBYTE | evet | `0` | İrsaliye risk kontrolu;yapılmasin ise 1, durdurulsun ise 0 degerini tutar. |
| 22 | `FATRISKDAVRAN` | TDBBYTE | evet | `0` | Fatura risk kontrolu; yapılmasin ise 1, durdurulsun ise 0 degerini tutar. |
| 23 | `DOVIZLI` | char(1) | evet | `H` | "Kullanılmıyor" |
| 24 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 25 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `YED1RISK` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YED2RISK` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YED1POZIT` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YED2POZIT` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YED1RISKO` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YED2RISKO` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YED1POZITO` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YED2POZITO` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `INT_YEDEK1` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARISK_FKEY` | `CARIKOD` |
| PRIMARY KEY | `TBLCARISK_PKEY` | `CARIKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARISK_IND1` | `RISKGRUP` | Nonclustered |
| `TBLCARISK_IND2` | `CARIKOD, RISKGRUP` | Nonclustered |
| `TBLCARISK_PKEY` | `CARIKOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARIKOD, RISKGRUP, RISKLIMITI, TEMINATI, CARISK, CCRISK
FROM dbo.TBLCARISK WITH (NOLOCK);
```
