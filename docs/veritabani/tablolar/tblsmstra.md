---
title: TBLSMSTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsmstra/
---

# TBLSMSTRA

> YARDIMCI PROGRAMLAR>KAYIT>NETSIS SMS SERVİSİ>SMS SORGULA EKRANINDAKİ KAYITLARI TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 25
- **Birincil anahtar:** `MASINCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | int | hayır |  | Program tarafından verilen ve unique olması gereken inckeynoyu gösterir. |
| 2 | `MASINCKEYNO` | int | hayır |  | Tblsmsmas tablosundaki inckeyno fieldıyla aynı rakamı gösterir. |
| 3 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `SIRANO` | int | hayır |  | Sıra numarasını tutar |
| 5 | `KOD` | varchar(50) | evet |  | SMS nin gönderileceği telefon numarasına sahip olan cari kodunu gösterir. |
| 6 | `TELNO` | varchar(50) | evet |  | SMS' nin gönderileceği telefon numarasını gösterir. |
| 7 | `ISIM` | varchar(100) | evet |  | SMS' nin gönderileceği telefona ait olan cari ismi gösterir. |
| 8 | `MESAJ` | varchar(200) | evet |  | SMS ile gönderilecek metin içeriğini gösterir. |
| 9 | `DURUM` | int | evet |  | Mesajın durumunu gösterir. |
| 10 | `ILETILMETARIHI` | datetime | evet |  | SMS' nin iletilme tarihini gösterir. |
| 11 | `HATAKODU` | varchar(100) | evet |  | SMS gönderilemedi ise hata kodunu gösterir. |
| 12 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSMSTRA_PKEY` | `MASINCKEYNO` |
| FOREIGN KEY | `TBLSMSTRA_FKEY1` | `INCKEYNO` |
| FOREIGN KEY | `TBLSMSTRA_FKEY2` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSMSTRA_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, MASINCKEYNO, SUBE_KODU, SIRANO, KOD, TELNO
FROM dbo.TBLSMSTRA WITH (NOLOCK);
```
