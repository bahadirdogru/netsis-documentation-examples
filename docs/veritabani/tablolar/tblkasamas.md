---
title: TBLKASAMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblkasamas/
---

# TBLKASAMAS

> KAYIT>KASA TANIMLAMA EKRANINDAKİ KAYITLARI TUTAR.

- **Modül:** [KASA](/veritabani/moduller/kasa/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `KSMAS_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KSMAS_KOD` | varchar(8) | hayır |  | Kasa kodunu gösterir. |
| 2 | `KSMAS_NAME` | varchar(50) | evet |  | Kasa ismini gösterir. |
| 3 | `DOVIZLI` | char(1) | evet |  | Dövizli kasa takibi yapılıp yapılmayacağını gösterir. Döviz takip parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 4 | `MUH_KOD` | TDBMUHKOD | evet |  | İlgili kasanın muhasebe kodunu gösterir. |
| 5 | `KSSONDEV_D` | TDBDATETIME | evet |  | Kasanın son devir tarihini gösterir. |
| 6 | `KSSONDEV_T` | TDBFLOAT | evet | `0` | Kasanın son devir tutarını gösterir. |
| 7 | `KSMAKBUZ_BAS` | char(1) | evet |  | Basım türünü gösterir. Baım yapma işaretli ise 'H', standart basım işaretli ise 'E', özel basım işaretli ise 'O' değerini gösterir. |
| 8 | `KS_DEFBAS_TIP` | char(1) | evet |  | Basım alanında seçileni gösterir. Tek sayfa seçili ise 'T', çift sayfa seçili ise 'C' değerini gösterir. |
| 9 | `DOVIZTIPI` | TDBBYTE | evet | `0` | Dövizli kasa ise döviz tipini gösterir. |
| 10 | `CEVRIMTIPI` | TDBBYTE | evet | `0` | Default 1 değeri atılır. |
| 11 | `KURFARKIGELIRKODU` | TDBMUHKOD | evet |  | Kasanın kur farkı gelir kodunu gösterir. |
| 12 | `KURFARKIGIDERKODU` | TDBMUHKOD | evet |  | Kasanın kur farkı gider kodunu gösterir. |
| 13 | `KSSONDEV_DOVIZ` | TDBFLOAT | evet | `0` | Kasanın son döviz tutarını gösterir. |
| 14 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `YEDEK` | varchar(35) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKASAMAS_PKEY` | `KSMAS_KOD` |
| FOREIGN KEY | `TBLKASAMAS_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKASAMAS_IND_1` | `KSMAS_KOD+KSSONDEV_D` | Unique, Non-clustered |
| `TBLKASAMAS_IND_2` | `SUBE_KODU+KSMAS_KOD+KSSONDEV_D` | Unique, Non-clustered |
| `TBLKASAMAS_PKEY` | `KSMAS_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KSMAS_KOD, KSMAS_NAME, DOVIZLI, MUH_KOD, KSSONDEV_D, KSSONDEV_T
FROM dbo.TBLKASAMAS WITH (NOLOCK);
```
