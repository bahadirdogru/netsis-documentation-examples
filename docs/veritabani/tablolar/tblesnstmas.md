---
title: TBLESNSTMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblesnstmas/
---

# TBLESNSTMAS

> STOK KARTI KAYITLARI REÇETE BİLGİLERİ SEKMESİNDEKİ KAYITLARINI TUTAR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 25

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `STOKKODU` | TDBSTOKKOD | hayır |  | Stok kodunu gösterir. |
| 2 | `YAPKOD` | varchar(15) | evet |  | İlgili stoğun varsa esnek yapılandırma kodunu gösterir. |
| 3 | `MAMULMU` | char(1) | evet | `H` | İlgili stoğun mamul olup olmadığını gösterir. (E/H) |
| 4 | `BILESENMI` | char(1) | evet | `H` | İlgili stoğun bileşen olup olmadığını gösterir. (E/H) |
| 5 | `ESKIBILESENMI` | char(1) | evet | `H` | İlgili stoğun eskibileşen olup olmadığını gösterir. (E/H) |
| 6 | `OTOREC` | char(1) | evet | `H` | Reçete kaydındaki otomatik reçete parametresini gösterir. |
| 7 | `XFORMUL_TOPLAMI` | TDBFLOAT | evet | `1` | Reçetenin formül toplamını gösterir. |
| 8 | `XURET_OLCU_BR` | TDBBYTE | evet | `1` | Reçetede seçilen ölçü birimini gösterir. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `YAPKODGENELKILIT` | char(1) | evet |  | stok planlama kayıtlarında genel kilitte seçili olan bilgi yer alır. |
| 19 | `YAPKODSATICIKILIT` | char(1) | evet |  | stok planlama kayıtlarında satıcı siparişi kilitle alanındaki değer yer alır. |
| 20 | `YAPKODMUSTERIKILIT` | char(1) | evet |  | Stok planlama kayıtlarında müşteri siparişi kilitle alanındaki bilgi yer alır. |
| 21 | `YAPKODSATINALMAKILIT` | char(1) | evet |  | stok lanlama kayıtlarında satın alma kilit alanındaki bilgi yer alır. |
| 22 | `YAPKODSATISKILIT` | char(1) | evet |  | Stok planlama kayıtlarında satış kilit alanında yer alan bilgi yer alır. |
| 23 | `ONAYTIPI` | char(1) | evet |  | Onay tipi bilgisi yer alır. |
| 24 | `ONAYNUM` | TDBINTEGER | evet |  | Onay numarası bilgisi yer alır. |
| 25 | `FIREORANI` | TDBFLOAT | evet |  | Mamul için girilen fire bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLESNSTMAS_IND1` | `STOKKODU+YAPKOD` | Unique, Non-clustered |
| `TBLESNSTMAS_IND2` | `YAPKOD` | Non-unique, Non-clustered |
| `TBLESNSTMAS_IND3` | `STOKKODU+MAMULMU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 STOKKODU, YAPKOD, MAMULMU, BILESENMI, ESKIBILESENMI, OTOREC
FROM dbo.TBLESNSTMAS WITH (NOLOCK);
```
