---
title: TBLEVRAK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblevrak/
---

# TBLEVRAK

> CARİ,STOK KARTINA GİRİLEN RESİM, DOSYA VB. EVRAK BİLGİLERİNİ TUTAR.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 11
- **Birincil anahtar:** `KAYITNO`
- **Identity:** `KAYITNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYITNO` | TDBINTEGER | hayır |  | İlk kayıttan itibaren sırayla artan unique değer, program tarafından otomatik olarak atılmaktadır |
| 2 | `TABLOTIPI` | TDBBYTE | hayır |  | Evrağın hangi sabit karta eklendiği bilgisini gösterir. (Stok Kart-1, Cari Kart-2 vb.) |
| 3 | `KOD` | varchar(50) | hayır |  | Evrağın ekli olduğu stok/cari kodu gösterir. |
| 4 | `EVRAKTIPI` | TDBBYTE | evet |  | Evrak tipini gösterir. BMP/JPG ise '1', diğer ise '2' değerini gösterir. |
| 5 | `ACIKLAMA` | varchar(200) | evet |  | Kayıt sırasında girilen açıklamayı gösterir. |
| 6 | `KAYITTAR` | TDBDATETIME | evet | `getdate()` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTTAR` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KULID` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DOSYAADI` | varchar(255) | evet |  | Eklenen evrağın adını bulunduğu dizini gösterir. |
| 10 | `BILGIBOYUT` | TDBINTEGER | hayır |  | Eklenen evrağın boyutu |
| 11 | `BILGI` | image | evet |  | Data bilgisini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLEVRAK_PKEY` | `KAYITNO` |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLEVRAK_IND_1` | `TABLOTIPI+KOD+EVRAKTIPI` | Non-unique, Non-clustered |
| `TBLEVRAK_IND_2` | `TABLOTIPI+ACIKLAMA` | Non-unique, Non-clustered |
| `TBLEVRAK_IND_3` | `TABLOTIPI+DOSYAADI` | Non-unique, Non-clustered |
| `TBLEVRAK_PKEY` | `KAYITNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KAYITNO, TABLOTIPI, KOD, EVRAKTIPI, ACIKLAMA, KAYITTAR
FROM dbo.TBLEVRAK WITH (NOLOCK);
```
