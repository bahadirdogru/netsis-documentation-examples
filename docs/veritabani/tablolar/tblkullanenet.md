---
title: TBLKULLANENET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkullanenet/
---

# TBLKULLANENET

> ENETSIS KULLANICI GIZLI SORU VE CEVABINI TUTAN TABLODUR.

- **Modül:** [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `SUBE_KODU, KULLANICI_NO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KULLANICI_NO` | TDBSMALLINT | hayır |  | Kullanıcı kodunu tutan sahadır. |
| 3 | `SIFRE_SORU` | varchar(200) | evet |  | Gizli soruyu sifreli olarak tutan sahadır. |
| 4 | `SIFRE_CEVAP` | varchar(200) | evet |  | Gizli sorunun cevabını sifreli olarak tutan sahadir. |
| 5 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLKULLANENET_FKEY1` | `SUBE_KODU, KULLANICI_NO` |
| PRIMARY KEY | `TBLKULLANENET_PKEY` | `SUBE_KODU, KULLANICI_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKULLANENET_PKEY` | `SUBE_KODU, KULLANICI_NO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KULLANICI_NO, SIFRE_SORU, SIFRE_CEVAP, KAYITYAPANKUL, KAYITTARIHI
FROM dbo.TBLKULLANENET WITH (NOLOCK);
```
