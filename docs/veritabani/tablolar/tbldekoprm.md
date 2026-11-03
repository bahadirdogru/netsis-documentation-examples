---
title: TBLDEKOPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekoprm/
---

# TBLDEKOPRM

> DEKONT PARAMETLERİ TABLOSUDUR

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `MIKTAR` | char(1) | evet |  | Miktar bilgisi girişi yapılacak mı |
| 3 | `EKACIK` | char(1) | evet |  | Ek açıklama bilgi girişi yapılacak mı |
| 4 | `VALOR` | char(1) | evet |  | Valör bilgisi girişi yapılacak mı |
| 5 | `YEDEK1` | char(1) | evet |  | Bakiye veren dekonttan çıkılmasın |
| 6 | `YEDEK2` | char(1) | evet |  | Entegrasyon açıklamaya dekont no yerine fiş no atılsın |
| 7 | `YEDEK3` | char(1) | evet |  | Özel basım parametresi |
| 8 | `YEDEK4` | char(1) | evet |  | KDV dahil ise D hariç ise H değerini alır |
| 9 | `YEDEK5` | char(1) | evet |  | Entegrasyon açıklamaya dekont/seri no otomatik atılsın parametresine göre E veya H değeri alır |
| 10 | `YEDEK6` | char(1) | evet |  | Entegrasyona işlem tarihi yerine entegre tarihi atılsın |
| 11 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK8` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK9` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK10` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DOVIZ_TAKIP_HANGISI` | TDBSMALLINT | evet |  | İhracat kapatma döviz takibi alanında seçili olan değere karşılık gelir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEKOPRM_PKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDEKOPRM_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKPRM_PKEY` | `ISLETME_KODU` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, MIKTAR, EKACIK, VALOR, YEDEK1, YEDEK2
FROM dbo.TBLDEKOPRM WITH (NOLOCK);
```
