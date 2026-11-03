---
title: TBLEFATZARF
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatzarf/
---

# TBLEFATZARF

> Fatura ve yanıt zarflarının bilgilerinin tutulduğu tablodur.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 28

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Tekrarlanmayan sıra numarasıdır. |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | İlgili kaydın şube kodunu gösterir. |
| 3 | `ZARFID` | varchar(50) | hayır |  | E-Faturanın Gelirler idaresine iletilen zarf id'sini gösterir. |
| 4 | `CARI_KODU` | TDBCARIKOD | evet |  | Satış faturasının cari kodunu gösterir. |
| 5 | `TARIH` | TDBDATETIME | hayır |  | Zarfın gönderilme tarihini gösterir. |
| 6 | `GUNCELLEMETARIHI` | TDBDATETIME | evet |  | NULL |
| 7 | `ZARFTIP` | TDBBYTE | hayır |  | Zarfın tipini gösterir. 1 faturanın zarfı, 2 uygulama yanıtının zarfı(kabul/red), 3 sistem yanıtının zarfı olduğunu gösterir. |
| 8 | `TIP` | TDBBYTE | hayır |  | Zarfın gelen ya da giden zarf olduğunu gösterir. Giden zarf için 1, gelen zarf için 2 değerini alır. Satış tarafı için bu sahanın değeri 2'dir. |
| 9 | `XMLVERI` | TDBMEMO | hayır |  | Zarfın XML verisi bu alanda tutulur. |
| 10 | `DURUM` | TDBSMALLINT | hayır |  | Gelirler idaresi durum kodunu gösterir. |
| 11 | `ACIKLAMA` | varchar(500) | evet |  | Durum kodunun açıklamasını gösterir. |
| 12 | `KAYITYAPANKUL` | varchar(12) | evet |  | Kaydı yapan kullanıcıyı gösterir. |
| 13 | `KAYITTARIHI` | datetime | evet |  | İlgili kaydın kayıt tarihini gösterir. |
| 14 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | NULL |
| 15 | `DUZELTMETARIHI` | datetime | evet |  | NULL |
| 16 | `YEDEK1` | char(1) | evet |  | Yedek sahadır. |
| 17 | `YEDEK2` | char(1) | evet |  | Yedek sahadır. |
| 18 | `YEDEK3` | int | evet |  | Yedek sahadır. |
| 19 | `YEDEK4` | int | evet |  | Yedek sahadır. |
| 20 | `YEDEK5` | float | evet |  | Yedek sahadır. |
| 21 | `YEDEK6` | float | evet |  | Yedek sahadır. |
| 22 | `YEDEK7` | datetime | evet |  | Yedek sahadır. |
| 23 | `YEDEK8` | datetime | evet |  | Yedek sahadır. |
| 24 | `YEDEK9` | varchar(50) | evet |  | Yedek sahadır. |
| 25 | `YEDEK10` | varchar(50) | evet |  | Yedek sahadır. |
| 26 | `PROFILEID` | TDBBYTE | evet |  | E-Faturanın senaryosunu gösterir. Temel e-fatura için 0, ticari e-fatura için 1 değerini alır, ihracat e-fatura için 2 değerini alır. |
| 27 | `XSLTVERI` | varbinary(-1) | evet |  | NULL |
| 28 | `XMLBYTES` | varbinary(-1) | evet |  | Zarfın içeriğine ait veriler yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, SUBE_KODU, ZARFID, CARI_KODU, TARIH, GUNCELLEMETARIHI
FROM dbo.TBLEFATZARF WITH (NOLOCK);
```
