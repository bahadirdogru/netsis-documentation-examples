---
title: TBLNAKLIYE
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnakliye/
---

# TBLNAKLIYE

> KAYIT>NAKLİYE İŞLEMLERİ>NAKLİYE BİLGİ GİRİŞİ EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 35
- **Birincil anahtar:** `NAKLIYENO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NAKLIYENO` | TDBBELGENO | hayır |  | 15 karakterden oluşan nakliye numarasını gösterir. |
| 2 | `GIRISCIKIS` | char(1) | evet |  | Giriş veya çıkış hareketlerinden hangileri için nakliye bilgisi oluşturulacağını gösterir. |
| 3 | `NAKLIYETARIHI` | TDBDATETIME | evet |  | Nakliye tarihini gösterir. |
| 4 | `ARACKODU` | TDBGRUPKOD | evet |  | Araç bilgileri alanındaki araç kodu alanına girilecek kodu gösterir. |
| 5 | `PLAKANO` | varchar(15) | evet |  | Aracın plaka numarasını gösterir. |
| 6 | `SOFOR` | varchar(20) | evet |  | Aracı kullanan şoförün ismini gösterir. |
| 7 | `NAKCARKOD` | TDBCARIKOD | evet |  | Nakliyecinin cari kodunu gösterir. |
| 8 | `ACIKLAMA` | varchar(30) | evet |  | Nakliye bilgileri sekmesinde açıklama alanına girileni gösterir. |
| 9 | `NAKLIYETIPI` | char(1) | evet |  | Nakliye bilgileri sekmesinde nakliye tipini gösterir. Nakliye tipi gidiş-geliş ise 'G'+tek yön ise 'T'+rota ise 'R' değerini gösterir. |
| 10 | `TOPLAMMESAFE` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde toplam mesafeyi gösterir. |
| 11 | `TOPLAMAGIRLIK` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde toplam ağırlığı gösterir. |
| 12 | `BIRIMMALIYET` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde birim maliyeti gösterir. |
| 13 | `TASIMABRUTMALIYET` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde taşıma brüt maliyeti gösterir. |
| 14 | `TASIMANETMALIYET` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde taşıma net maliyeti gösterir. |
| 15 | `EKMALIYET1` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde ek maliyet1' i gösterir. |
| 16 | `EKMALIYETACK1` | varchar(30) | evet |  | Toplamlar sekmesinde ek maliyet1' in açıklamasını gösterir. |
| 17 | `EKMALIYET2` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde ek maliyet2' i gösterir. |
| 18 | `EKMALIYETACK2` | varchar(30) | evet |  | Toplamlar sekmesinde ek maliyet2' nin açıklamasını gösterir. |
| 19 | `EKMALIYET3` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde ek maliyet3' ü gösterir. |
| 20 | `EKMALIYETACK3` | varchar(30) | evet |  | Toplamlar sekmesinde ek maliyet3' ün açıklamasını gösterir. |
| 21 | `EKMALIYET4` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde ek maliyet4' ü gösterir. |
| 22 | `EKMALIYETACK4` | varchar(30) | evet |  | Toplamlar sekmesinde ek maliyet4' ün açıklamasını gösterir. |
| 23 | `NAKFATNO` | TDBBELGENO | evet |  | Nakliyeci Cari Kodu sahasına girilen carinin+firmaya kestiği nakliye fatura numarasını gösterir. |
| 24 | `TOPLAMMALIYET` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde toplam maliyet alanındaki maliyeti gösterir. |
| 25 | `SUBE_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 26 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNAKLIYE_PKEY` | `NAKLIYENO` |
| FOREIGN KEY | `TBLNAKLIYE_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLNAKLIYE_FKEY3` | `CARI_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNAKLIYE_IND_1` | `SUBE_KODU+NAKLIYENO` | Unique,Non-clustered |
| `TBLNAKLIYE_PKEY` | `NAKLIYENO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 NAKLIYENO, GIRISCIKIS, NAKLIYETARIHI, ARACKODU, PLAKANO, SOFOR
FROM dbo.TBLNAKLIYE WITH (NOLOCK);
```
