---
title: TBLCRMSKYTEMSILCI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcrmskytemsilci/
---

# TBLCRMSKYTEMSILCI

> CARI/ MUSTERI TEMSILCISI BAGLANTI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CRM](/veritabani/moduller/crm/)
- **Kolon sayısı:** 19
- **Birincil anahtar:** `SUBE_KODU, KODTURU, KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KODTURU` | TDBBYTE | hayır |  | Kod turunu tutar;Cari kod=1;Grup Kod=2;Kod1=3;Kod2=4;Kod3=5;Kod4=6;Kod5=7;Serbest=8;Genel=9 |
| 2 | `KOD` | TDBCARIKOD | hayır |  | Kodu tutar. |
| 3 | `MUSTERITEMSILCISI` | TDBSMALLINT | hayır |  | Musteri temsilcisinin kodunu tutar. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `CARIILISKI` | text | evet |  | Gecerli cariler alanından verilen kısıtı tutar. |
| 6 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 8 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCRMSKYTEMSILCI_FKEY` | `SUBE_KODU, MUSTERITEMSILCISI` |
| PRIMARY KEY | `TBLCRMSKYTEMSILCI_PKEY` | `SUBE_KODU, KODTURU, KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCRMSKYTEMSILCI_PKEY` | `SUBE_KODU, KODTURU, KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 KODTURU, KOD, MUSTERITEMSILCISI, SUBE_KODU, CARIILISKI, KAYITYAPANKUL
FROM dbo.TBLCRMSKYTEMSILCI WITH (NOLOCK);
```
