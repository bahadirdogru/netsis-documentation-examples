---
title: TBLCRMANKCEVAPMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmankcevapmas/
---

# TBLCRMANKCEVAPMAS

> ICERIK KAYITLARINDA,ICERIK SECENEKLERINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 21
- **Birincil anahtar:** `INCKEYNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ANKETKODU` | TDBANKETKODU | hayır |  | Cevap girisi yapılan anketin kodunu tutar. |
| 2 | `KATILIMCITIPI` | char(1) | evet | `M` | Cari icin M;İç kullancıcı icin K degerini tutar. |
| 3 | `KATCARIKODU` | TDBCARIKOD | evet |  | Katılımcı cari ise cari kodunu tutar. |
| 4 | `KATSUBE_KODU` | TDBSMALLINT | evet |  | Katılımcı cari ise 32767 degeri default gelir,mudahale edilemez;ic kullanici ise sube kodu secilebilir. |
| 5 | `KATKULLANICI_NO` | TDBSMALLINT | evet |  | Katılımcı cari ise -1 degeri default gelir,mudahale edilemez;ic kullanici ise katılımcı kodu secilebilir. |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `TARIH` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMANKCEVAPMAS_FKEY1` | `ANKETKODU` |
| FOREIGN KEY | `TBLCRMANKCEVAPMAS_FKEY2` | `KATCARIKODU` |
| FOREIGN KEY | `TBLCRMANKCEVAPMAS_FKEY3` | `KATSUBE_KODU, KATKULLANICI_NO` |
| PRIMARY KEY | `TBLCRMANKCEVAPMAS_PKEY` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMANKCEVAPMAS_IND_1` | `ANKETKODU, KATCARIKODU, KATSUBE_KODU, KATKULLANICI_NO` | Clustered |
| `TBLCRMANKCEVAPMAS_IND_2` | `TARIH, ANKETKODU` | Nonclustered |
| `TBLCRMANKCEVAPMAS_IND_3` | `ANKETKODU, KATILIMCITIPI` | Nonclustered |
| `TBLCRMANKCEVAPMAS_PKEY` | `INCKEYNO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ANKETKODU, KATILIMCITIPI, KATCARIKODU, KATSUBE_KODU, KATKULLANICI_NO, INCKEYNO
FROM dbo.TBLCRMANKCEVAPMAS WITH (NOLOCK);
```
