---
title: TBLNDIBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblndibaglanti/
---

# TBLNDIBAGLANTI

> YARDIMCI PROGRAMLAR>KAYIT>NDI>NID BAĞLANTI TANIMLAMALARI EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `SUBE_KODU+ISLETME_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `NDISIRKETADI` | varchar(30) | hayır |  | Bağlantı kurulacak NDI şirketinin adını gösterir. |
| 4 | `ORTAKBAG` | TDBBYTE | evet |  | NDI bağlantı tanımlamaları ekranında ortak bağlantı parametresini gösterir. (Tanımlamada belirlenen NDI şirketine bağlanarak NDI ile tasarım yapabilme ve tasarlanmış uygulamaların kullanımının+genel bir kullanıcı ile gerçekleşmesi isteniyorsa işaretlenmesi gereken seçenektir.) |
| 5 | `NDIKULADI` | varchar(50) | evet |  | Ortak Bağlantı seçeneğinin işaretlenmesi halinde seçilen NDI şirketine bağlantı için geçerli genel kullanıcı adını gösterir. |
| 6 | `NDIKULSIFRE` | varchar(50) | evet |  | Ortak Bağlantı seçeneğinin işaretlenmesi halinde seçilen NDI şirketine bağlantı için geçerli genel kullanıcı şifresini gösterir. |
| 7 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLNDIBAGLANTI` | `SUBE_KODU+ISLETME_KODU` |
| FOREIGN KEY | `FK_ISLETME_KODU` | `ISLETME_KODU` |
| FOREIGN KEY | `FK_SUBE_KODU` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLNDIBAGLANTI` | `SUBE_KODU+ISLETME_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, NDISIRKETADI, ORTAKBAG, NDIKULADI, NDIKULSIFRE
FROM dbo.TBLNDIBAGLANTI WITH (NOLOCK);
```
