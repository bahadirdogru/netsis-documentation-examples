---
title: TBLIMALAT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblimalat/
---

# TBLIMALAT

> HAMMMADDE İMALAT DEFTERİ RAPORU TABLOSUDUR.HAMMMADDELERİN SARFLARI YANISIRA HANGİ FATURALAR İLE ALINDIĞI BİLGİSİ TUTULMAKTADIR.

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 23

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `FLAG` | char(1) | evet |  | 1 Alış, 2 Satış, 3 Sarf,4 Üretim'i ifade eder |
| 3 | `STOK_KODU` | TDBSTOKKOD | evet |  | Mamul,yarımamul,hammadde stok kodu bilgisi tutulur |
| 4 | `FATURA_NO` | TDBBELGENO | evet |  | Fatura no'su |
| 5 | `FATURA_TARIHI` | TDBDATETIME | evet |  | Fatura tarihi bilgisi |
| 6 | `CARI_KODU` | TDBCARIKOD | evet |  | Satış veya alış tipli haraketlerde ilgili faturanın cari kodunu sarf'larda ise hammaddenin sarf edildiği mamul kodunu tutar. |
| 7 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar bilgisi tututulur |
| 8 | `CIKIS_MAMUL_KODU` | TDBSTOKKOD | evet |  | Sarf'larda çıkış mamul kodu bilgisini tutar |
| 9 | `URETIM_TARIHI` | TDBDATETIME | evet |  | Üretim tipli yani flag sahası 4 olan hareketlerde üretim tarihi bilgisi verilir.Diğer haraketlerde 1900-01-01 00:00:00.000 tarihi default olarak atılır |
| 10 | `CIKIS_MAMUL_ISMI` | varchar(50) | evet |  | Sarf'larda çıkış mamul ismi bilgisini tutar |
| 11 | `ACIKLAMA` | varchar(40) | evet |  | Haraket ile ilgili açıklama kaydıdır. |
| 12 | `YEDEK1` | varchar(25) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `YEDEK2` | varchar(25) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `YEDEK3` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 15 | `YEDEK4` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 16 | `YEDEK5` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 17 | `YEDEK6` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 18 | `YEDEK7` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 19 | `YEDEK8` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 20 | `YEDEK9` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 21 | `YEDEK10` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 22 | `YEDEK11` | TDBSMALLINT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 23 | `YEDEK12` | TDBSMALLINT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLIMALAT_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLIMALAT_IND_1` | `FLAG` | Duplicate |
| `TBLIMALAT_IND_2` | `SUBE_KODU` | Duplicate |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FLAG, STOK_KODU, FATURA_NO, FATURA_TARIHI, CARI_KODU
FROM dbo.TBLIMALAT WITH (NOLOCK);
```
