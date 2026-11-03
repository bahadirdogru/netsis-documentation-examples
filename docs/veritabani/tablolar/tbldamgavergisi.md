---
title: TBLDAMGAVERGISI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldamgavergisi/
---

# TBLDAMGAVERGISI

> DAMGA VERGISI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 33
- **Birincil anahtar:** `YIL, SIRANO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `YIL` | TDBSMALLINT | hayır |  | Yıl bilgisini tutan sahadır. |
| 4 | `SIRANO` | varchar(8) | hayır |  | Sıra no bilgisini tutan sahadır. |
| 5 | `TARIH` | TDBDATETIME | evet |  | Tarih bilgisini tutan sahadır. |
| 6 | `SOZCARIKOD` | TDBCARIKOD | evet |  | Damga vergisi kaydı girilen cari kodu tutan sahadır. |
| 7 | `SOZUNVAN` | varchar(100) | evet |  | Cari kodun ismini tutan sahadır. |
| 8 | `SOZKODU` | varchar(5) | evet |  | Sozlesme kodunu tutan sahadır. |
| 9 | `MASRAF` | TDBFLOAT | evet | `0` | Damga vergisi tutarının sahasıdır. |
| 10 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar alanını tutar. |
| 11 | `ACIKLAMA` | varchar(100) | evet |  | Acıklama alanını tutar. |
| 12 | `DVORAN` | TDBFLOAT | evet | `0` | Damga vegisi oranını tutan sahadır. |
| 13 | `DVTUTAR` | TDBFLOAT | evet | `0` | Vergi tutarının sahasıdır. |
| 14 | `MATRAH` | TDBFLOAT | evet | `0` | Damga vergisi defterindeki matrahı tutan sahadır. |
| 15 | `MUHKOD` | TDBMUHKOD | evet |  | Muhasebe kodunu tutan sahadır. |
| 16 | `REFKOD` | TDBREFKOD | evet |  | Referans kodu alanını tutar. |
| 17 | `PROJEKODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DOVTIP` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DOVMATRAH` | TDBFLOAT | evet | `0` | Doviz matrahını tutan sahadır. |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `DAMGAVERGISI_FK` | `SUBE_KODU` |
| FOREIGN KEY | `DAMGAVERGISI_FK1` | `SOZCARIKOD` |
| FOREIGN KEY | `DAMGAVERGISI_FK2` | `SOZKODU` |
| FOREIGN KEY | `TBLDAMGAVERGISI_FKEYPROJE` | `PROJEKODU` |
| PRIMARY KEY | `DAMGAVERGISI_PK` | `YIL, SIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `DAMGAVERGISI_PK` | `YIL, SIRANO` | Clustered, unique |
| `TBLDAMGAVERGISI_IND_1` | `SUBE_KODU, YIL, SIRANO` | Nonclustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, INCKEYNO, YIL, SIRANO, TARIH, SOZCARIKOD
FROM dbo.TBLDAMGAVERGISI WITH (NOLOCK);
```
