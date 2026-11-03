---
title: TBLPRJKUMULEMAS
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprjkumulemas/
---

# TBLPRJKUMULEMAS

> PROJE KODU GİRİŞİ>KÜMÜLE RAPOR ŞABLON TANIMLAMA MENÜSÜNDE GENEL TANIMLAR SEKMESİNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `RAPORKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `RAPORKOD` | varchar(15) | hayır |  | Kullanıcı tarafından hazırlanacak şablon kodunu gösterir. |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `ACIKLAMA` | varchar(255) | evet |  | Kullanıcı tarafından hazırlanacak şablon koduna ait açıklamayı gösterir. |
| 5 | `KIRILIM` | TDBSMALLINT | evet |  | Default NULL değeri atılır. |
| 6 | `SONCALZAMAN` | TDBDATETIME | evet |  | Hazırlık çalıştırılsın basıldığında son çalıştırılma tarihini gösterir. |
| 7 | `SONCALUSER` | TDBNETSISKUL | evet |  | Hzırlık çalıştırılsın ı çalıştıran kullanıcıyı gösterir. |
| 8 | `COKLUYIL` | TDBSMALLINT | evet |  | Raporu alınacak proje eskiden beri devam eden bir proje ise yani ilgili projeye ait geçmiş yıl veritabanlarında kayıt var ise bu bilgilerin raporlanabilmesi için işaretlendiğinde 'E', işaretlenmediğinde 'H' değerini gösterir. |
| 9 | `GRAFIKSECIM` | TDBSMALLINT | evet |  | Pasta grafiği seçili ise '0', çubuk grafiği seçili ise '1' değerini gösterir. |
| 10 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `PROJEKISIT` | TDBMEMO | evet |  | Proje için verilen kısıtı gösterir. |
| 15 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `IYEDEK1` | int | evet |  | Portlete eklensin parametresi işaretli ise '-1', değilse '0' değerini gösterir. |
| 18 | `IYEDEK2` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `FYEDEK1` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `FYEDEK2` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `DYEDEK1` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `DYEDEK2` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `SYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPRJKUMULEMAS_PKEY` | `RAPORKOD` |
| FOREIGN KEY | `TBLPRJKUMULEMAS_FKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLPRJKUMULEMAS_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PRJKUMULEMAS_IND1` | `ISLETME_KODU+SUBE_KODU+RAPORKOD` | Unique-Non-clustered |
| `PRJKUMULEMAS_IND2` | `ISLETME_KODU+SUBE_KODU+ACIKLAMA` | Non-unique, Non-clustered |
| `PRJKUMULEMAS_PKEY` | `RAPORKOD` | Unique-Non-clustered |
| `PRJPRJKUMULEMAS_IND3` | `ISLETME_KODU+SUBE_KODU+RAPORKOD+ACIKLAMA` | Unique-Non-clustered |
| `TBLPRJKUMULEMAS_PKEY` | `RAPORKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 RAPORKOD, ISLETME_KODU, SUBE_KODU, ACIKLAMA, KIRILIM, SONCALZAMAN
FROM dbo.TBLPRJKUMULEMAS WITH (NOLOCK);
```
