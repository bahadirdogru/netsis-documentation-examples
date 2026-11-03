---
title: TBLKKOLCUMTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkolcumtra/
---

# TBLKKOLCUMTRA

> KALİTE KONTROL KAYITLARI/KALİTE ÖLÇÜM BİLGİLERİ KAYITLARINI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 35
- **Birincil anahtar:** `KKNO+ITEMSIRANO+OLCUMTIPI+OLCUMSIRA`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KKNO` | varchar(8) | hayır |  | Kalite Kontrol Numarasını gösterir. |
| 2 | `ITEMSIRANO` | TDBINTEGER | hayır |  | Kalite kontrol hareket numarasını gösterir. |
| 3 | `OLCUMTIPI` | varchar(8) | hayır |  | Ölçüm Tipini gösterir. |
| 4 | `OLCUMSIRA` | TDBINTEGER | hayır | `1` | Ölçüm Sırasını gösterir. |
| 5 | `KKISCI` | TDBINTEGER | evet | `0` | Personeli gösterir. |
| 6 | `KABULRED` | char(1) | evet |  | Kabul/Red Durumunu gösterir.Hiçbiri ise 'H', Kabul ise 'K', Red ise 'R' değerini ifade eder. |
| 7 | `ACIKLAMA` | text | evet |  | Açıklama sahasını gösterir. |
| 8 | `OLCUMDEGERINUM` | TDBFLOAT | evet |  | Ölçüm Değeri (Sayısal)ı gösterir. |
| 9 | `OLCUMDEGERIALF` | varchar(50) | evet |  | Ölçüm Değeri (AlfaSayısal)ı gösterir. |
| 10 | `ARIZAKODU` | varchar(8) | evet |  | Arıza Kodunu gösterir. |
| 11 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `ACIK1` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `ACIK2` | varchar(30) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `ACIK3` | varchar(45) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `ACIK4` | varchar(45) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK10` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKOLCUMTRAPKEY` | `KKNO+ITEMSIRANO+OLCUMTIPI+OLCUMSIRA` |
| FOREIGN KEY | `TBLKKOLCUMTRAFKEY1` | `INCKEYNO` |
| FOREIGN KEY | `TBLKKOLCUMTRAFKEY2` | `ARIZAKODU` |
| FOREIGN KEY | `TBLKKOLCUMTRAFKEY3` | `KOD` |
| FOREIGN KEY | `TBLKKOLCUMTRAFKEY4` | `KKNO+ITEMSIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKOLCUMTRA_IND1` | `ISLETME_KODU+KKNO+ITEMSIRANO+OLCUMTIPI+OLCUMSIRA` | Unique, Non-clustered |
| `TBLKKOLCUMTRAPKEY` | `KKNO+ITEMSIRANO+OLCUMTIPI+OLCUMSIRA` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KKNO, ITEMSIRANO, OLCUMTIPI, OLCUMSIRA, KKISCI, KABULRED
FROM dbo.TBLKKOLCUMTRA WITH (NOLOCK);
```
