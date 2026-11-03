---
title: TBLTBLKANTPRM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbltblkantprm/
---

# TBLTBLKANTPRM

> KANTAR PARAMETRELERİNİ TUTAR.

- **Modül:** [KANTAR](/veritabani/moduller/kantar/)
- **Kolon sayısı:** 49
- **Birincil anahtar:** `KANTARKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KANTARKOD` | varchar(8) | hayır |  | Kantar kodunu gösterir. |
| 3 | `MIKTAR_SORGULA` | char(1) | evet | `H` | Kantardan Miktar Okunsun parametresi işaretli ise 'E', değil ise 'H' değerini gösterir. |
| 4 | `SIPARIS_ENTEGRE` | char(1) | evet | `H` | Sipariş Entegre Yapılsın parametresi işaretli ise 'E', değil ise 'H' değerini gösterir. |
| 5 | `SIP_BOS_GECSIN` | char(1) | evet | `H` | Sipariş No Boş Geçilsin parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 6 | `MIKTAR_DUZELT` | char(1) | evet | `H` | İrsaliyede Miktar Düzeltilsin parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 7 | `TESLIMAT_SORGULANSIN` | char(1) | evet | `H` | Farklı Cari/Mal. Tes Sorgulansın parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 8 | `SON_TARTIM` | char(1) | evet | `H` | Son Tartım Aktarılsın parametresi işaretli ise E, değil ise H değerini göstermektedir. |
| 9 | `FIS_BASILSIN` | char(1) | evet | `H` | Birinci Basımda Fiş Basılsın parametresi işaretli ise E, değil ise H değerini göstermektedir. |
| 10 | `FIS_PORTU` | TDBINTEGER | evet | `0` | Tartım Fiş Çıkışını gösterir. |
| 11 | `FATURA_BAS` | char(1) | evet | `H` | Fatura Basımı Yapılsın parametresi işaretli ise E, değil ise H değerini göstermektedir. |
| 12 | `FIS_BASILSIN2` | char(1) | evet | `E` | İkinci Tartımda Fiş Basılsın parametresi işaretli ise E, değil ise H değerini göstermektedir. |
| 13 | `DARA_AKTARILSIN` | char(1) | evet | `H` | Dara Aktarılsın parametresi işaretli ise E, değil ise H değerini göstermektedir. |
| 14 | `HANGI_SERI` | char(1) | evet |  | Seri No(A-Z) sunu gösterir. |
| 15 | `MULTISERI` | char(1) | evet |  | Çoklu Seri parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 16 | `SERIEDIT` | char(1) | evet |  | İrsaliye No Düzeltme parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 17 | `COMPORT` | TDBINTEGER | evet | `-1` | Kantar iletişim parametreleri sekmesinde comport alanında seçileni gösterir. |
| 18 | `BPS` | TDBINTEGER | evet | `-9600` | Kantar iletişim parametreleri sekmesinde bps alanında seçileni gösterir. |
| 19 | `DATABIT` | TDBINTEGER | evet | `-8` | Kantar iletişim parametreleri sekmesinde databit alanında seçileni gösterir. |
| 20 | `STOPBIT` | TDBINTEGER | evet | `-1` | Kantar iletişim parametreleri sekmesinde stopbit alanında seçileni gösterir. |
| 21 | `PARITY` | char(1) | evet | `N` | Kantar iletişim parametreleri sekmesinde parity alanında seçileni gösterir. |
| 22 | `BASLIK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `BASLIK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `BASLIK3` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `BASLIK4` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 27 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `C_YEDEK1` | char(1) | evet |  | Stok Bağlantısız Kantar Kullanımı parametresi işaretli ise E, değil ise H değerini göstermektedir. |
| 31 | `C_YEDEK2` | char(1) | evet |  | Ek Açıklama Sorulsun parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 32 | `C_YEDEK3` | char(1) | evet |  | Ambar Giriş/Çıkış Fişi Oluşturulsun parametresi işaretli ise 'E', değil ise 'H' değerini göstermektedir. |
| 33 | `C_YEDEK4` | char(1) | evet |  | Çıkış Yeri Masraf Merkezi M, Stok Kodu S, Ana Mal Grp A, Mal Grp G, Serbest F değerini göstermektedir.. |
| 34 | `S_YEDEK1` | varchar(8) | evet |  | Kantar iletişim parametreleri sekmesinde okuma bilgileri kısmında kantardan sayı dinleme parametresini gösterir. |
| 35 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `S_YEDEK3` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `S_YEDEK4` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `F_YEDEK1` | TDBFLOAT | evet |  | Kantar iletişim parametreleri sekmesinde polling day alanında girileni gösterir. |
| 39 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 40 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 41 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 42 | `B_YEDEK1` | TDBBYTE | evet |  | Kantar iletişim parametreleri sekmesinde sayı başlangıç pozisyonu alanında girileni gösterir. |
| 43 | `B_YEDEK2` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 44 | `B_YEDEK3` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 45 | `L_YEDEK1` | TDBINTEGER | evet |  | Kantar iletişim parametreleri sekmesinde sayı bitiş pozisyonu alanında girileni gösterir. |
| 46 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 47 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 48 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 49 | `FIRE_GIRILSIN` | char(1) | evet | `H` | Fire Oranı Girilsin parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLKANTPRM_PKEY` | `KANTARKOD` |
| FOREIGN KEY | `TBLKANTPRM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLKANTPRM_IND_1` | `SUBE_KODU` | Non-unique, Non-clustered |
| `TBLKANTPRM_PKEY` | `KANTARKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, KANTARKOD, MIKTAR_SORGULA, SIPARIS_ENTEGRE, SIP_BOS_GECSIN, MIKTAR_DUZELT
FROM dbo.TBLTBLKANTPRM WITH (NOLOCK);
```
