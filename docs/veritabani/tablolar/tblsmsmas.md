---
title: TBLSMSMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsmsmas/
---

# TBLSMSMAS

> YARDIMCI PROGRAMLAR>KAYIT>NETSIS SMS SERVİSİ>SERBEST SMS GÖNDER EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | int | hayır |  | Program tarafından verilen ve unique olması gereken inckeynoyu gösterir. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `NETSESSIONID` | varchar(35) | evet |  | Program tarafından verilen ve unique olması gereken id numarasını gösterir. |
| 4 | `GONDEREN` | varchar(20) | evet |  | SMS yi gönderen kişiyi gösterir. |
| 5 | `GONDERILECEKTARIH` | datetime | evet |  | SMS nini gönderilecek tarihini gösterir. |
| 6 | `SONTARIH` | datetime | evet |  | SMS nin gönderileceği son tarihi gösterir.(SMS gönderilmediği taktirde hangi tarihe kadar SMS gönderilmeye devam edileceği bilgisini gösterir.) |
| 7 | `DURUM` | tinyint | hayır | `1` | SMS' nin gönderirlip gönderilmediğini gösterir. |
| 8 | `GONDERILDIGITARIH` | datetime | hayır | `getdate()` | SMS' nin gönderildiği tarih ve saat bilgisini gösterir. |
| 9 | `REFERANS` | varchar(200) | evet |  | Modül ve program numaralarını gösterir. |
| 10 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | datetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `YEDEK5` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK6` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK7` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK8` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSMSMAS_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSMSMAS_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSMSMAS_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, NETSESSIONID, GONDEREN, GONDERILECEKTARIH, SONTARIH
FROM dbo.TBLSMSMAS WITH (NOLOCK);
```
