---
title: TBLKKCARISTOK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkkcaristok/
---

# TBLKKCARISTOK

> KAYIT>STOK/CARİ GRUP EŞLEŞTİRME KAYITLARI>CARİ/STOK-GRUP EŞLEŞTİRME EKRANINDA GİRİLEN KAYITLARI TUTAR.

- **Modül:** [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `CARI_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARIKODU` | TDBCARIKOD | evet |  | Cari kodunu gösterir. |
| 2 | `STOKKODU` | TDBSTOKKOD | evet |  | Stok kodunu gösterir. |
| 3 | `DEPKODU` | varchar(8) | hayır |  | Depo kodunu gösterir. |
| 4 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `GRUPKODU` | varchar(8) | evet |  | Grup kodunu gösterir. |
| 6 | `ACIKLAMA` | varchar(50) | evet |  | Açıklamayı gösterir. |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `ISLETME_KODU` | TDBSMALLINT | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `C_YEDEK1` | char(1) | evet |  | Kalite Kontrol Yapılmayacak parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 12 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `F_YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `D_YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `V_YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `REVNO` | TDBSMALLINT | hayır |  | Revizyon numarası bligisi yer alır. |
| 22 | `AKTIF` | char(1) | hayır |  | Aktif ise E değerini alır. |
| 23 | `OPKODU` | varchar(35) | evet |  | Operasyon kodu bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKKCARISTOKFKEY1` | `CARI_KOD` |
| FOREIGN KEY | `TBLKKCARISTOKFKEY2` | `STOK_KODU` |
| FOREIGN KEY | `TBLKKCARISTOKFKEY3` | `KOD` |
| FOREIGN KEY | `TBLKKCARISTOKFKEY4` | `KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKKCARISTOK_IND1` | `CARIKODU+STOKKODU+DEPKODU` | Unique, Non-clustered |
| `TBLKKCARISTOK_IND2` | `ISLETME_KODU+CARIKODU+STOKKODU+DEPKODU` | Non-unique, Non-clustered |
| `TBLKKCARISTOK_IND3` | `STOKKODU` | Non-unique, Non-clustered |
| `TBLKKCARISTOK_IND4` | `DEPKODU` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 CARIKODU, STOKKODU, DEPKODU, KAYITYAPANKUL, GRUPKODU, ACIKLAMA
FROM dbo.TBLKKCARISTOK WITH (NOLOCK);
```
