---
title: TBLEFATKALEMTAX
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblefatkalemtax/
---

# TBLEFATKALEMTAX

> E-Fatura kalem bilgilerine ait vergi bilgileri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 13

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `EFATMASINC` | TDBINTEGER | hayır |  | Efatmas-inckeyno kolonuna karşılık gelir. |
| 2 | `INVOICELINEID` | TDBINTEGER | hayır |  | Kalem ıd-sıra bilgisne karşılık gelir. |
| 3 | `TAXABLEAMOUNT` | decimal(28,8) | evet |  | Mal bedeli + ÖTV tutarıdır. |
| 4 | `TAXAMOUNT` | decimal(28,8) | evet |  | İlgili KDV oranının tutarıdır. |
| 5 | `CALCULATIONSEQUENCENUMERIC` | decimal(28,8) | evet |  | Vergi hesaplamasında belli bir sıra izlenmesi veya birden fazla vergi hesaplaması yapılması halinde ilgili sıra numarası girilecektir |
| 6 | `TRANSACTIONCURRENCYTAXAMOUNT` | decimal(28,8) | evet |  | Belge para birimi cinsinden toplam vergi tutarıdır. |
| 7 | `TAXPERCENT` | decimal(28,8) | evet |  | Vergi oranıdır. |
| 8 | `BASEUNITMEASURE` | decimal(28,8) | evet |  | Vergileme ölçüsü olarak miktar(kilogram, metre vb.) kullanılması halinde ilgili tarife bilgileri bu elemana girilecektir. |
| 9 | `PERUNITAMOUNT` | decimal(28,8) | evet |  | Vergileme ölçüsü olarak tutar(perakende satış fiyatı gibi.) kullanılması halinde ilgili tarife bilgileri bu elemana girilecektir. |
| 10 | `TAXEXEMPTIONREASON` | varchar(500) | evet |  | İstisna muafiyet açıklaması yer alır. |
| 11 | `NAME` | varchar(200) | evet |  | Bu eleman “Party” elemanı içerisinde kullanıldığında vergi dairesi adını içermektedir. Diğer elemanlar içerisinde kullanımında Vergi Kod listesinde henüz yer almayan bir verginin söz konusu olması durumunda verginin adı girilecektir. Kontrolü Schematron kuralları ile yapılacaktır. |
| 12 | `TAXTYPECODE` | varchar(50) | evet |  | Vergi Tipi Kodu bilgisi yer alır. |
| 13 | `TAXEXEMPTIONREASONCODE` | int | evet |  | İstisna muafiyet kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 EFATMASINC, INVOICELINEID, TAXABLEAMOUNT, TAXAMOUNT, CALCULATIONSEQUENCENUMERIC, TRANSACTIONCURRENCYTAXAMOUNT
FROM dbo.TBLEFATKALEMTAX WITH (NOLOCK);
```
