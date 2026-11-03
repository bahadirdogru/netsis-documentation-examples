---
title: TBLFATUVADE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfatuvade/
---

# TBLFATUVADE

> C/H VADELERE BÖLÜNEREK GEÇSİN PARAMETRESİ İŞARETLİYSE GİRİLEN VADE BİLGİLERİNİ TUTAR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `SUBE_KODU+FKOD+FATIRSNO+CKOD+SIRANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FKOD` | char(1) | hayır |  | Vade bilgisi tutulan evrak tipini gösterir. |
| 3 | `FATIRSNO` | TDBBELGENO | hayır |  | Vade bilgisi tutulan Fatura/İrsaliye numarasını gösterir. |
| 4 | `CKOD` | TDBCARIKOD | hayır |  | Taksit yapılan Cari Kod bilgisini gösterir. |
| 5 | `SIRANO` | TDBINTEGER | hayır |  | Fatura/İrsaliye içindeki kalem sırasını gösterir. |
| 6 | `ODEMEGUNU` | TDBSMALLINT | evet | `0` | Vade tarihi dolana dek kaç günlük bir süre olduğu bilgisini gösterir. |
| 7 | `ORAN` | TDBFLOAT | evet | `0` | Vade günleri alanında girilen oranı gösterir. |
| 8 | `TUTAR` | TDBFLOAT | evet | `0` | İlgili kalemin tutar bilgisini gösterir. |
| 9 | `F_YEDEK1` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `F_YEDEK2` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK5` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `RAPOR_KODU` | varchar(8) | evet |  | Rapor kodu bilgisini gösterir. |
| 15 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFATUVADEPKEY` | `SUBE_KODU+FKOD+FATIRSNO+CKOD+SIRANO` |
| FOREIGN KEY | `TBLFATUVADEFKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFATUVADEPKEY` | `SUBE_KODU+FKOD+FATIRSNO+CKOD+SIRANO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FKOD, FATIRSNO, CKOD, SIRANO, ODEMEGUNU
FROM dbo.TBLFATUVADE WITH (NOLOCK);
```
