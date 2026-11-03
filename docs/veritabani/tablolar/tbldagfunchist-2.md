---
title: TBLDAGFUNCHIST
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagfunchist-2/
---

# TBLDAGFUNCHIST

> Açıklama yok.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 23
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)
- **Not:** Bu tablo şema dokümanında ikinci kez, [DAĞITIM modülünde](/veritabani/tablolar/tbldagfunchist/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PROVIDER` | TDBINTEGER | hayır |  | Dagıtım PDA saglayıcı kodunu tutar. |
| 3 | `FUNCID` | TDBINTEGER | hayır |  | Fonksiyon kodunu tutar. |
| 4 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `PACKETNO` | TDBINTEGER | hayır |  | Paket numarasının saklandığı sahadır |
| 6 | `PROCESS` | char(1) | hayır |  | Uygulama kodunu tutar. |
| 7 | `PROCBGNTIME` | TDBDATETIME | evet |  | Uygulama baslangıc tarihini tutar. |
| 8 | `PROCENDTIME` | TDBDATETIME | evet |  | Uygulama bitis tarihini tutar. |
| 9 | `CONNBEGIN` | TDBDATETIME | evet |  | Baglantı baslangıc tarihini tutar. |
| 10 | `CONNEND` | TDBDATETIME | evet |  | Baglantı bitis tarihini tutar. |
| 11 | `STATUS` | TDBBYTE | hayır | `0` | Aktarım statu bilgisini tutar. |
| 12 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `KAYITTARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DUZELTMETARIHI` | smalldatetime | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 16 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLDAGFUNCHIST_FK1` | `PROVIDER, FUNCID` |
| FOREIGN KEY | `TBLDAGFUNCHIST_FK2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLDAGFUNCHIST_PK1` | `INCKEYNO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDAGFUNCHIST_IND_1` | `SUBE_KODU, FUNCID, PACKETNO` | nonclustered |
| `TBLDAGFUNCHIST_PK1` | `INCKEYNO` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, PROVIDER, FUNCID, SUBE_KODU, PACKETNO, PROCESS
FROM dbo.TBLDAGFUNCHIST WITH (NOLOCK);
```
