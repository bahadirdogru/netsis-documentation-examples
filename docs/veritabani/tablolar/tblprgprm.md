---
title: TBLPRGPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprgprm/
---

# TBLPRGPRM

> YARDIMCI PROGRAMLAR>KAYIT>NETSİS SMS SERVİSİ>SMS PARAMETRELERİ EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `SUBE_KODU+PRGID+ANAHTAR`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PRGID` | int | hayır |  | Default 0 değeri atılır. |
| 3 | `ANAHTAR` | varchar(50) | hayır |  | Sms parametreleri ekranında sms uygulaması var mı parametresini+netsis parametrelerini ve operatör parametrelerini ayrı ayrı satırlarda gösterir. |
| 4 | `DEGER` | TDBMEMO | evet |  | Sms parametreleri ekranında sms uygulaması var mı parametresini+netsis parametrelerini ve operatör parametreleri için girilen değerleri ayrı satırlarda gösterir. |
| 5 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPRGPRM_PK` | `SUBE_KODU+PRGID+ANAHTAR` |
| FOREIGN KEY | `TBLPRGPRM_FK` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLPRGPRM_PK` | `SUBE_KODU+PRGID+ANAHTAR` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, PRGID, ANAHTAR, DEGER, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLPRGPRM WITH (NOLOCK);
```
