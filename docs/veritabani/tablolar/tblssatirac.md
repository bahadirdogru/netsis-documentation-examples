---
title: TBLSSATIRAC
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblssatirac/
---

# TBLSSATIRAC

> ALIŞ/SATIŞ FATURA PARAMETRELERİNDE SATIR AÇIKLAMASI PARAMETRESİ İŞARETLENDİĞİNDE+FATURA/SİPARİŞ/İRSALİYE SATIR AÇIKLAMALARINI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 29
- **Birincil anahtar:** `SUBE_KODU+BGTIP+FATNO+CKOD+SIRANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BGTIP` | char(1) | hayır |  | Belge tipini gösterir. Örneğin belge tipi satış faturası ise '1'+alış faturası ise '2'+satış irsaliyesi ise '3'+aluş irsaliyesi ise '4' vb.. değerlerini gösterir. |
| 3 | `FATNO` | TDBBELGENO | hayır |  | İlgili belgenin numarasını gösterir. |
| 4 | `CKOD` | TDBCARIKOD | hayır |  | Cari kodu gösterir. |
| 5 | `SIRANO` | TDBSMALLINT | hayır | `0` | Belgede birden fazla stok kalemi olduğunda stok kaleminin sırasını göstermektedir. |
| 6 | `INCKEYNO` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `ACIKLAMA1` | varchar(35) | evet |  | Satır bazı açıklama1 sahasını gösterir. |
| 8 | `ACIKLAMA2` | varchar(35) | evet |  | Satır bazı açıklama2 sahasını gösterir. |
| 9 | `ACIKLAMA3` | varchar(35) | evet |  | Satır bazı açıklama3 sahasını gösterir. |
| 10 | `ACIKLAMA4` | varchar(35) | evet |  | Satır bazı açıklama4 sahasını gösterir. |
| 11 | `ACIKLAMA5` | varchar(35) | evet |  | Satır bazı açıklama5 sahasını gösterir. |
| 12 | `ACIKLAMA6` | varchar(35) | evet |  | Satır bazı açıklama6 sahasını gösterir. |
| 13 | `ACIKLAMA7` | varchar(35) | evet |  | Satır bazı açıklama7 sahasını gösterir. |
| 14 | `ACIKLAMA8` | varchar(35) | evet |  | Satır bazı açıklama8 sahasını gösterir. |
| 15 | `ACIKLAMA9` | varchar(35) | evet |  | Satır bazı açıklama9 sahasını gösterir. |
| 16 | `ACIKLAMA10` | varchar(35) | evet |  | Satır bazı açıklama10 sahasını gösterir. |
| 17 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `I_YEDEK9` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK10` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `G_YEDEK11` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `ONAYTIPI` | char(1) | hayır | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `ONAYNUM` | TDBINTEGER | hayır | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSSATIRACPKEY` | `SUBE_KODU+BGTIP+FATNO+CKOD+SIRANO` |
| FOREIGN KEY | `BLSSATIRAC_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSSATIRAC_IND_1` | `SUBE_KODU+BGTIP+FATNO+CKOD+SIRANO` | Unique+Non-clustered |
| `TBLSSATIRAC_IND_2` | `SUBE_KODU+INCKEYNO` | Non-unique+Non-clustered |
| `TBLSSATIRAC_IND_ONUM` | `ONAYNUM` | Non-unique+Non-clustered |
| `TBLSSATIRAC_IND_OTIP` | `ONAYTIPI` | Non-unique+Non-clustered |
| `TBLSSATIRACPKEY` | `SUBE_KODU+BGTIP+FATNO+CKOD+SIRANO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, BGTIP, FATNO, CKOD, SIRANO, INCKEYNO
FROM dbo.TBLSSATIRAC WITH (NOLOCK);
```
