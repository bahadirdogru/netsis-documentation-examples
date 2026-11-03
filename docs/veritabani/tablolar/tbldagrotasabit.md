---
title: TBLDAGROTASABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagrotasabit/
---

# TBLDAGROTASABIT

> Açıklama yok.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 22
- **Birincil anahtar:** `ROTAKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ROTAKODU` | varchar(15) | hayır |  | Rota kodunun tutulduğu sahadır |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ROTAACIKLAMA` | varchar(100) | evet |  | Rota açıklamasının tutulduğu sahadır |
| 5 | `ROTAGRUPKODU` | TDBGRUPKOD | evet |  | Rota grup kodunu tutar |
| 6 | `ROTABOLGEKODU` | varchar(15) | evet |  | Rota bölge kodunun tutulduğu alandır |
| 7 | `PLASIYERKODU` | TDBPLASIYER | hayır |  | Plasiyer kodunu tutan sahadır. |
| 8 | `DAGITIMGRUPKODU` | varchar(50) | evet |  | Dağıtım grup kodunun tutulduğu sahadır |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDAGROTASABIT_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDAGROTASABIT_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDAGROTASABIT_FKEY3` | `ROTAGRUPKODU` |
| FOREIGN KEY | `TBLDAGROTASABIT_FKEY4` | `ROTABOLGEKODU` |
| FOREIGN KEY | `TBLDAGROTASABIT_FKEY5` | `PLASIYERKODU` |
| FOREIGN KEY | `TBLDAGROTASABIT_FKEY6` | `DAGITIMGRUPKODU` |
| PRIMARY KEY | `TBLDAGROTASABIT_PKEY` | `ROTAKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGROTASABIT_IND_DAGGRUP` | `ISLETME_KODU, SUBE_KODU, ROTAGRUPKODU` | nonclustered |
| `TBLDAGROTASABIT_IND_PLASIYER` | `ISLETME_KODU, SUBE_KODU, PLASIYERKODU` | nonclustered |
| `TBLDAGROTASABIT_IND_ROTAACIK` | `ISLETME_KODU, SUBE_KODU, ROTAACIKLAMA` | nonclustered |
| `TBLDAGROTASABIT_IND_ROTABOLGE` | `ISLETME_KODU, SUBE_KODU, ROTABOLGEKODU` | nonclustered |
| `TBLDAGROTASABIT_IND_ROTAGRUP` | `ISLETME_KODU, SUBE_KODU, ROTAGRUPKODU` | nonclustered |
| `TBLDAGROTASABIT_PKEY` | `ROTAKODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ROTAKODU, SUBE_KODU, ISLETME_KODU, ROTAACIKLAMA, ROTAGRUPKODU, ROTABOLGEKODU
FROM dbo.TBLDAGROTASABIT WITH (NOLOCK);
```
