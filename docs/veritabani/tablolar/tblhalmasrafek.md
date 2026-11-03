---
title: TBLHALMASRAFEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblhalmasrafek/
---

# TBLHALMASRAFEK

> Hal faturasında girilen masraf bilgileri yer alır.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 44

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 2 | `FKOD` | char(1) | hayır |  | TBLFATUIRS tablosundaki FTIRSIP kolonuna karşılık gelir. |
| 3 | `FATIRSNO` | TDBBELGENO | hayır |  | Fatura numarası bilgisi yer alır. |
| 4 | `CKOD` | TDBCARIKOD | hayır |  | Cari kodu bilgisi yer alır. |
| 5 | `HKSKOMISYONORAN` | TDBFLOAT | evet |  | Komisyon masraf oranı bilgisi yer alır. |
| 6 | `HKSKOMISYONKDVORAN` | TDBFLOAT | evet |  | Komisyon masraf KDV oranı bilgisi yer alır. |
| 7 | `HKSKOMISYONTUTAR` | TDBFLOAT | evet |  | Komisyon masraf tutarı bilgisi yer alır. |
| 8 | `HKSKOMISYONKDVTUTAR` | TDBFLOAT | evet |  | Komisyon masraf Kdv tutarı bilgisi yer alır. |
| 9 | `HKSNAVLUNORAN` | TDBFLOAT | evet |  | Navlun masraf oranı bilgisi yer alır. |
| 10 | `HKSNAVLUNKDVORAN` | TDBFLOAT | evet |  | Navlun masraf KDV oranı bilgisi yer alır. |
| 11 | `HKSNAVLUNTUTAR` | TDBFLOAT | evet |  | Navlun masraf tutarı bilgisi yer alır. |
| 12 | `HKSNAVLUNKDVTUTAR` | TDBFLOAT | evet |  | Navlun masraf Kdv tutarı bilgisi yer alır. |
| 13 | `HKSHAMMALIYEORAN` | TDBFLOAT | evet |  | Hammaliye masraf oranı bilgisi yer alır. |
| 14 | `HKSHAMMALIYEKDVORAN` | TDBFLOAT | evet |  | Hammaliye masraf KDV oranı bilgisi yer alır. |
| 15 | `HKSHAMMALIYETUTAR` | TDBFLOAT | evet |  | Hammaliye masraf tutarı bilgisi yer alır. |
| 16 | `HKSHAMMALIYEKDVTUTAR` | TDBFLOAT | evet |  | Hammaliye masraf Kdv tutarı bilgisi yer alır. |
| 17 | `HKSGELIRVERGORAN` | TDBFLOAT | evet |  | Gelir vergisi Tevkifatı masraf oranı bilgisi yer alır. |
| 18 | `HKSGELIRVERKDVORAN` | TDBFLOAT | evet |  | Gelir vergisi Tevkifatı masraf KDV oranı bilgisi yer alır. |
| 19 | `HKSGELIRVERTUTAR` | TDBFLOAT | evet |  | Gelir vergisi Tevkifatı masraf tutarı bilgisi yer alır. |
| 20 | `HKSGELIRVERKDVTUTAR` | TDBFLOAT | evet |  | Gelir vergisi Tevkifatı masraf Kdv tutarı bilgisi yer alır. |
| 21 | `HKSBAGTEVGORAN` | TDBFLOAT | evet |  | Bağkur Tevkifatı masraf oranı bilgisi yer alır. |
| 22 | `HKSBAGTEVKDVORAN` | TDBFLOAT | evet |  | Bağkur Tevkifatı masraf KDV oranı bilgisi yer alır. |
| 23 | `HKSBAGTEVTUTAR` | TDBFLOAT | evet |  | Bağkur Tevkifatı masraf tutarı bilgisi yer alır. |
| 24 | `HKSBAGTEVKDVTUTAR` | TDBFLOAT | evet |  | Bağkur Tevkifatı masraf Kdv tutarı bilgisi yer alır. |
| 25 | `HKSRUSUMORAN` | TDBFLOAT | evet |  | Hal Rüsumu masraf oranı bilgisi yer alır. |
| 26 | `HKSRUSUMKDVORAN` | TDBFLOAT | evet |  | Hal Rüsumu masraf KDV oranı bilgisi yer alır. |
| 27 | `HKSRUSUMTUTAR` | TDBFLOAT | evet |  | Hal Rüsumu masraf tutarı bilgisi yer alır. |
| 28 | `HKSRUSUMKDVTUTAR` | TDBFLOAT | evet |  | Hal Rüsumu masraf Kdv tutarı bilgisi yer alır. |
| 29 | `HKSTICBORSASI` | TDBFLOAT | evet |  | Ticaret Borsası masraf oranı bilgisi yer alır. |
| 30 | `HKSTICBORSASIKDVORAN` | TDBFLOAT | evet |  | Ticaret Borsası masraf KDV oranı bilgisi yer alır. |
| 31 | `HKSTICBORSASITUTAR` | TDBFLOAT | evet |  | Ticaret Borsası masraf tutarı bilgisi yer alır. |
| 32 | `HKSTICBORSASIKDVTUTAR` | TDBFLOAT | evet |  | Ticaret Borsası masraf Kdv tutarı bilgisi yer alır. |
| 33 | `HKSMILLISAVUNMAFON` | TDBFLOAT | evet |  | Milli savunma fonu masraf oranı bilgisi yer alır. |
| 34 | `HKSMILLISAVUNMAFONKDVORAN` | TDBFLOAT | evet |  | Milli savunma fonu masraf KDV oranı bilgisi yer alır. |
| 35 | `HKSMILLISAVUNMAFONTUTAR` | TDBFLOAT | evet |  | Milli savunma fonu masraf tutarı bilgisi yer alır. |
| 36 | `HKSMILLISAVUNMAFONKDVTUTAR` | TDBFLOAT | evet |  | Milli savunma fonu masraf Kdv tutarı bilgisi yer alır. |
| 37 | `HKSNAKLIYE` | TDBFLOAT | evet |  |  |
| 38 | `HKSNAKLIYEKDVORAN` | TDBFLOAT | evet |  |  |
| 39 | `HKSNAKLIYETUTAR` | TDBFLOAT | evet |  |  |
| 40 | `HKSNAKLIYEKDVTUTAR` | TDBFLOAT | evet |  |  |
| 41 | `HKSDIGERFON` | TDBFLOAT | evet |  | Diğer Masraflar masraf oranı bilgisi yer alır. |
| 42 | `HKSDIGERKDVORAN` | TDBFLOAT | evet |  | Diğer Masraflar masraf KDV oranı bilgisi yer alır. |
| 43 | `HKSDIGERTUTAR` | TDBFLOAT | evet |  | Diğer Masraflar masraf tutarı bilgisi yer alır. |
| 44 | `HKSDIGERKDVTUTAR` | TDBFLOAT | evet |  | Diğer Masraflar masraf Kdv tutarı bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, FKOD, FATIRSNO, CKOD, HKSKOMISYONORAN, HKSKOMISYONKDVORAN
FROM dbo.TBLHALMASRAFEK WITH (NOLOCK);
```
