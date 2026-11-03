---
title: TBLMUHMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuhmas/
---

# TBLMUHMAS

> YEVMİYE FİŞ GİRİŞİNDE FİŞ GENEL BİLGİSİ SEKMESİNDE GİRİLEN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `AY_KODU+MAS_FISNO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `AY_KODU` | TDBBYTE | hayır |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde ay kodu sahasına girilen ay bilgisini gösterir. |
| 2 | `MAS_FISNO` | TDBBELGENO | hayır |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde ilgili aya ait yevmiye fiş numaralarını gösterir. |
| 3 | `MASACIK1` | varchar(50) | evet |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde açıklama1 alanına yazılan kayıtları gösterir. |
| 4 | `MASACIK2` | varchar(50) | evet |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde açıklama2 alanına yazılan kayıtları gösterir. |
| 5 | `RES_YEVM_NO` | TDBINTEGER | evet |  | Yevmiye fiş basımında resmi basım yapıldığında ilgili fişe ait madde numarasını gösterir. |
| 6 | `IAS_RES_YEVM_NO` | TDBINTEGER | evet |  |  |
| 7 | `FISTIP` | char(1) | evet |  | Yevmiye fiş girişinde fiş genel bilgisi sekmesinde f.tip sahasında seçilen yevmiye fiş tipini gösterir. Fiş tipi tediye ise 'E', tahsil ise 'T', mahsup ise 'M', açılış fişi ise 'A', kapanış fişi ise 'K' değerini gösterir. |
| 8 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 9 | `VERSIYON` | varchar(20) | evet |  | Default olarak '4.0@6' değeri atılır. |
| 10 | `YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `YEDEK4` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `YEDEK5` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `YEDEK8` | TDBINTEGER | evet |  | Entegrasyondan muhasebeye aktarılan kayıtlara program tarafından atılan numaraları gösterir. |
| 18 | `YEDEK9` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUHMAS_PKEY` | `AY_KODU+MAS_FISNO` |
| FOREIGN KEY | `TBLMUHMAS_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUHMAS_IND_1` | `SUBE_KODU+AY_KODU+MAS_FISNO` | Unique, Non-clustered |
| `TBLMUHMAS_IND_2` | `YEDEK8` | Non-unique, Non-clustered |
| `TBLMUHMAS_PKEY` | `AY_KODU+MAS_FISNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 AY_KODU, MAS_FISNO, MASACIK1, MASACIK2, RES_YEVM_NO, IAS_RES_YEVM_NO
FROM dbo.TBLMUHMAS WITH (NOLOCK);
```
