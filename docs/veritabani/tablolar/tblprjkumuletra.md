---
title: TBLPRJKUMULETRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprjkumuletra/
---

# TBLPRJKUMULETRA

> PROJE KODU GİRİŞİ>KÜMÜLE RAPOR ŞABLON TANIMLAMA MENÜSÜNDE DETAY TANIMLARI SEKMESİNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `RAPORKOD+SIRANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `RAPORKOD` | varchar(15) | hayır |  | Kullanıcı tarafından hazırlanacak şablonun kodunu gösterir. |
| 4 | `SIRANO` | TDBSMALLINT | hayır |  | Raporda listelenmesi istenilen kolon için program tarafından otomatik olarak atanan sıra numarasını gösterir. |
| 5 | `IOACIKLAMA` | varchar(255) | evet |  | “View Adı” alanında seçilen view’in rapordaki başlığını gösterir. |
| 6 | `INOUT` | TDBSMALLINT | evet |  | Default olarak 0 değeri atılır. |
| 7 | `TIP` | TDBSMALLINT | evet |  | Raporu alınacak alanların nereden getirildiğini gösterir. (Temelset seçili ise '0',Personel seçili ise '1', Demirbaş seçili ise '3' değerini gösterir.) |
| 8 | `MIKTARTAHMIN` | TDBFLOAT | evet |  | Raporlanacak miktar değeri için gerçekleşmesi düşünülen tahmini değeri gösterir. |
| 9 | `TUTARTAHMIN` | TDBFLOAT | evet |  | Raporlanacak tutar için gerçekleşmesi düşünülen tahmini değeri gösterir. |
| 10 | `DOVTUTTAHMIN` | TDBFLOAT | evet |  | Raporlanacak döviz tutarı için gerçekleşmesi düşünülen tahmini değeri gösterir. |
| 11 | `SQLKISIT` | TDBMEMO | evet |  | Sql kısıtını gösterir. |
| 12 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `IYEDEK1` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `IYEDEK2` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `IYEDEK3` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `IYEDEK4` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `FYEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `FYEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `FYEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `FYEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `TYEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `TYEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `TYEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `TYEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKUMULETRAPKEY` | `RAPORKOD+SIRANO` |
| FOREIGN KEY | `TBLPRJKUMULETRA_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLPRJKUMULETRA_FKEY2` | `SUBE_KODU` |
| FOREIGN KEY | `TBLPRJKUMULETRAFKEY1` | `RAPORKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PRJKUMULETRA_IND1` | `ISLETME_KODU+SUBE_KODU+RAPORKOD+SIRANO` | Unique-Non-clustered |
| `PRJKUMULETRA_IND2` | `RAPORKOD+IOACIKLAMA` | Non-unique, Non-clustered |
| `TBLKUMULETRAPKEY` | `RAPORKOD+SIRANO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, RAPORKOD, SIRANO, IOACIKLAMA, INOUT
FROM dbo.TBLPRJKUMULETRA WITH (NOLOCK);
```
