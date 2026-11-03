---
title: TBLPRJDETAYSABLON
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblprjdetaysablon/
---

# TBLPRJDETAYSABLON

> PROJE KODU GİRİŞİ>DETAY RAPOR ŞABLON HAZIRLAMA MENÜSÜNDE TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 18
- **Birincil anahtar:** `RAPORKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `RAPORKODU` | varchar(15) | hayır |  | Kullanıcı tarafından hazırlanacak şablonun kodunu gösterir. |
| 4 | `ACIKLAMA` | varchar(255) | evet |  | Kullanıcı tarafından hazırlanacak şablonun koduna ait açıklamayı gösterir. |
| 5 | `COKLUYIL` | TDBSMALLINT | evet |  | Raporu alınacak proje eskiden beri devam eden bir proje ise yani ilgili projeye ait geçmiş yıl veritabanlarında kayıt var ise bu bilgilerin raporlanabilmesi için işaretlendiğinde 'E', işaretlenmediğinde 'H' değerini gösterir. |
| 6 | `KUMULE` | TDBSMALLINT | evet |  | Raporda listelenecek kolonların proje kodu bazında kümüle edilmesi için işaretlendiğinde 'E', işaretlenmedğinde 'H' değerini gösterir. |
| 7 | `PROJEKISIT` | TDBMEMO | evet |  | Proje koduna ait kısıt verildiyse girilen kısıtları gösterir. |
| 8 | `RAPORKISIT` | TDBMEMO | evet |  | Raporla ilgili kısıt verildiyse girilen kısıtları gösterir. |
| 9 | `CYEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 10 | `CYEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 11 | `IYEDEK1` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `IYEDEK2` | int | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `FYEDEK1` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `FYEDEK2` | float | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `DYEDEK1` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `DYEDEK2` | datetime | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `SYEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `SYEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLPRJDETAYSABLONPKEY` | `RAPORKODU` |
| FOREIGN KEY | `TBLPRJDETAYSABLONFKEY1` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLPRJDETAYSABLONFKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PRJDETAYSABLON_IND1` | `ISLETME_KODU+SUBE_KODU+RAPORKODU` | Unique-Non-clustered |
| `PRJDETAYSABLON_IND2` | `ISLETME_KODU+SUBE_KODU+ACIKLAMA` | Non-unique, Non-clustered |
| `TBLPRJDETAYSABLONPKEY` | `RAPORKODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, RAPORKODU, ACIKLAMA, COKLUYIL, KUMULE
FROM dbo.TBLPRJDETAYSABLON WITH (NOLOCK);
```
