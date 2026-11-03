---
title: TBLBORDROMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbordromas/
---

# TBLBORDROMAS

> BORDRO SABIT BILGILERINI TUTAN TABLODUR.

- **Modül:** [SENET-ÇEK](/veritabani/moduller/senet-cek/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `SUBE_KODU, BORDROTIP, BORDRONO, MODULNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BORDROTIP` | char(1) | hayır |  | Bordro tipini tutan sahadır. |
| 3 | `BORDRONO` | TDBBELGENO | hayır |  | Bordro numarasını tutan sahadır. |
| 4 | `ACIKLAMA1` | varchar(100) | evet |  | Acıklama 1 alanını tutan sahadır. |
| 5 | `ACIKLAMA2` | varchar(100) | evet |  | Acıklama 2 alanını tutan sahadır. |
| 6 | `ACIKLAMA3` | varchar(100) | evet |  | Acıklama 3 alanını tutan sahadır. |
| 7 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `BORDROTAMAMLANDI` | char(1) | evet |  | Bordro tamamlandı ise E degerini tutan sahadır. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK5` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK6` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK7` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK8` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `MODULNO` | TDBSMALLINT | hayır | `-1` | Musteri senetleri=7; Borc senetleri=8; musteri cekleri=9; Borc cekleri=10 degerini tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBORDROMAS_FKEYPROJE` | `PROJE_KODU` |
| PRIMARY KEY | `TBLBORDROMAS_PK` | `SUBE_KODU, BORDROTIP, BORDRONO, MODULNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBORDROMAS_PK` | `SUBE_KODU, BORDROTIP, BORDRONO, MODULNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BORDROTIP, BORDRONO, ACIKLAMA1, ACIKLAMA2, ACIKLAMA3
FROM dbo.TBLBORDROMAS WITH (NOLOCK);
```
