---
title: TBLBAGLANTI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbaglanti/
---

# TBLBAGLANTI

> BAGLANTI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 39
- **Birincil anahtar:** `BAGLANTINO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `BAGLANTINO` | TDBINTEGER | hayır |  | Baglantı numarasını tutar. |
| 3 | `TIPI` | char(1) | evet |  | Tipi alıcı ise A; satıcı ise S degerini tutar. |
| 4 | `STATUS` | char(1) | evet |  | Durumu acık ise A; kapalı ise K ve kilitli ise I degerini tutar. |
| 5 | `ACIKLAMA` | varchar(50) | evet |  | Acıklama alanını tutar. |
| 6 | `KAYITTAR` | TDBDATETIME | evet |  | Baglantının kayıt tarihini tutar. |
| 7 | `CARI_KOD` | TDBCARIKOD | evet |  | Cari kod bilgisini tutar. |
| 8 | `KOSUL_KOD` | varchar(8) | evet |  | Kosul kodunu tutar. |
| 9 | `KOSULTARIHI` | TDBDATETIME | evet |  | Kosul tarihini tutar. |
| 10 | `FIYATTARIHI` | TDBDATETIME | evet |  | Fiyat tarihini tutar. |
| 11 | `VADETARIHI` | TDBDATETIME | evet | `getdate()` | Vade tarihini tutar. |
| 12 | `TUTAR` | TDBFLOAT | evet | `0` | Tutar bilgisini tutar. |
| 13 | `CHBAKKONTROL1` | char(1) | evet | `E` | Baglantı fatura hs.kontrol edilsin parametresi isaretli ise E degerini tutar. |
| 14 | `CHBAKKONTROL2` | char(1) | evet | `E` | Baglantı cari hs.kontrol mi parametresi isaretli ise E degerini tutar. |
| 15 | `DEVIRKAP` | TDBFLOAT | evet | `0` | "Kullanılmıyor" |
| 16 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje kodunu tutar. |
| 17 | `DOVIZTIP` | TDBBYTE | evet | `0` | Doviz tipini tutar. |
| 18 | `DOVIZTUT` | TDBFLOAT | evet | `0` | Doviz tutarını tutar. |
| 19 | `KDVDAHILMI` | char(1) | evet | `E` | KDV dahil olup olmadığını tutar |
| 20 | `S_YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `F_YEDEK4` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK7` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `B_YEDEK8` | TDBBYTE | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `I_YEDEK9` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `L_YEDEK10` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `D_YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `LISTEFIATI` | TDBBYTE | evet | `0` | Liste fiyatını tutar. |
| 33 | `ISKORANI` | TDBFLOAT | evet | `0` | İskonto oranını tutar. |
| 34 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 36 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 37 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 38 | `PLASIYER_KODU` | TDBPLASIYER | evet |  | Plasiyer kodunu tutar. |
| 39 | `RAPOR_KODU2` | varchar(15) | evet |  | Rapor kodunu tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBAGLANTI_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBAGLANTI_FKEY1` | `CARI_KOD` |
| FOREIGN KEY | `TBLBAGLANTI_FKEY2` | `KOSUL_KOD` |
| FOREIGN KEY | `TBLBAGLANTI_FKEYPROJE` | `PROJE_KODU` |
| PRIMARY KEY | `TBLBAGLANTI_PKEY` | `BAGLANTINO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBAGLANTI_IND_1` | `CARI_KOD` | Nonclustered |
| `TBLBAGLANTI_IND_2` | `TIPI, STATUS, BAGLANTINO` | Nonclustered, unique |
| `TBLBAGLANTI_IND_3` | `ISLETME_KODU` | Nonclustered |
| `TBLBAGLANTI_PKEY` | `BAGLANTINO` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, BAGLANTINO, TIPI, STATUS, ACIKLAMA, KAYITTAR
FROM dbo.TBLBAGLANTI WITH (NOLOCK);
```
