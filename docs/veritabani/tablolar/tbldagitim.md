---
title: TBLDAGITIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagitim/
---

# TBLDAGITIM

> Açıklama yok.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 20
- **Birincil anahtar:** `ISLEMSIRANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLEMSIRANO` | TDBINTEGER | hayır |  | İslem sıra numarasını tutar. |
| 3 | `KAYNAKKODU` | varchar(35) | evet |  | Kaynak kodunu tutar. |
| 4 | `KAYNAKREFKOD` | varchar(15) | evet |  | Kaynak referans kodunu tutar. |
| 5 | `KAYNAKPROJE` | varchar(15) | evet |  | Kaynak proje kodunu tutar. |
| 6 | `ORAN` | TDBFLOAT | evet | `0` | Oran bilgisini tutar. |
| 7 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar bilgisini tutar. |
| 8 | `DAGITIMKODU` | varchar(35) | evet |  | Dagıtım kodunu tutar. |
| 9 | `DAGITIMREFKOD` | varchar(15) | evet |  | Dagıtım referans kodunu tutar. |
| 10 | `DAGITIMPROJE` | varchar(15) | evet |  | Dagıtım proje kodunu tutar. |
| 11 | `ALACAKKODU` | varchar(35) | evet |  | Alacak kodunu tutar. |
| 12 | `ALACAKREFKOD` | varchar(15) | evet |  | Alacak referans kodunu tutar. |
| 13 | `ALACAKPROJE` | varchar(15) | evet |  | Alacak proje kodunu tutar. |
| 14 | `FISNO` | varchar(15) | evet |  | Fısno'yu tutar. |
| 15 | `ACIKLAMA` | varchar(35) | evet |  | Acıklama alanını tutar. |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `MIKTARGETIRSQL` | TDBMEMO | evet |  |  |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDAGITIM_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDAGITIM_FKEY1` | `KAYNAKKODU` |
| FOREIGN KEY | `TBLDAGITIM_FKEY2` | `DAGITIMKODU` |
| FOREIGN KEY | `TBLDAGITIM_FKEY3` | `ALACAKKODU` |
| PRIMARY KEY | `TBLDAGITIMPKEY` | `ISLEMSIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGITIM_IND_2` | `FISNO` | nonclustered |
| `TBLDAGITIM_IND_3` | `KAYNAKKODU, KAYNAKREFKOD, KAYNAKPROJE` | nonclustered |
| `TBLDAGITIM_IND_4` | `ISLETME_KODU` | nonclustered |
| `TBLDAGITIMPKEY` | `ISLEMSIRANO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, ISLEMSIRANO, KAYNAKKODU, KAYNAKREFKOD, KAYNAKPROJE, ORAN
FROM dbo.TBLDAGITIM WITH (NOLOCK);
```
