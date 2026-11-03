---
title: TBLCASABITEK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcasabitek/
---

# TBLCASABITEK

> CARI SABIT KAYITLARI KULLANICI TANIMLI SAHALAR,.. GIBI KAYITLARI TUTAN TABLODUR.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 42

## İlgili sayfalar

- [Cari uçları (REST ARPs)](/rest/uclar/#cari-arps-ve-cari-hareket-arptransactions)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KOD` | TDBCARIKOD | hayır |  | Cari kodu tutar. |
| 2 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 4 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 5 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 6 | `KULL1N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 1. |
| 7 | `KULL2N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 2. |
| 8 | `KULL3N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 3. |
| 9 | `KULL4N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 4. |
| 10 | `KULL5N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 5. |
| 11 | `KULL6N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 6. |
| 12 | `KULL7N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 7. |
| 13 | `KULL8N` | TDBFLOAT | evet | `0` | Kullanıcı tanımlı sayısal sahalar 8. |
| 14 | `KULL1S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 1. |
| 15 | `KULL2S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 2. |
| 16 | `KULL3S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 3. |
| 17 | `KULL4S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 4. |
| 18 | `KULL5S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 5. |
| 19 | `KULL6S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 6. |
| 20 | `KULL7S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 7. |
| 21 | `KULL8S` | varchar(35) | evet |  | Kullanıcı tanımlı alfasayısal sahalar 8. |
| 22 | `SALES_VOLUME` | TDBFLOAT | evet | `0` | Projeler icin bırakılmıs ozel sahalardır. |
| 23 | `PRIM` | TDBFLOAT | evet | `0` | Projeler icin bırakılmıs ozel sahalardır. |
| 24 | `CIRO_TARIHI` | varchar(17) | evet |  | Projeler icin bırakılmıs ozel sahalardır. |
| 25 | `ESKI_YENI` | char(1) | evet |  | Projeler icin bırakılmıs ozel sahalardır. |
| 26 | `S_YEDEK1` | varchar(15) | evet |  | Dagıtım ana cari kodunu tutar. |
| 27 | `S_YEDEK2` | varchar(15) | evet |  | Baglı cari kodunu tutar. Ayrıca dış ticaret modülünde komisyoncu tanımları alanındaki 1-nakliyeci,2-temsilci,3-Gözlemci,4-acenta,5-Sigortacı,6-gümrük.Bunların hangileri işaretli ise yanyana sayıları yazar.(125 gibi) |
| 28 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `B_YEDEK1` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `ODEKOD` | TDBGRUPKOD | evet |  | Odeme kodunu tutar. |
| 36 | `TCKIMLIKNO` | varchar(15) | evet |  | TC kimlik numarası bilgisi yer alır |
| 37 | `CARIALIAS` | varchar(200) | evet |  | Cari alias bilgisi yer alır |
| 38 | `CARIKOMTIP` | varchar(15) | evet |  | Ihr/ith komisyoncu seçili olması durumunda seçili olan komisyoncu tipidir. |
| 39 | `CARIEIRSALIAS` | varchar(200) | evet |  | Cari e-irsaliye alias bligisi yer alır. |
| 40 | `DOVIZ_CEVRIM` | TDBBYTE | evet |  | Cari kart 2 sekmesindeki döviz çevrim tipi bilgisi yer alır. 1- varsayılan, 2- Döviz Alış, 3- Döviz Satış, 4- Efektif Alış, 5-Efektif Satış |
| 41 | `EIRSSABLONKOD` | varchar(45) | evet |  | Ek bilgiler sekmesindeki e-irsaliye şablon kodu bilgisi yer alır. |
| 42 | `MUHASEBAT` | char(1) | evet |  | Ek bilgiler sekmesindeki kamu carisi parametresinin işaretli olup olmadığı bilgisi yer alır. |

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCASABITEK_IND_1` | `CARI_KOD, I_YEDEK1` | Nonclustered |
| `TBLCASABITEK_IND_K1N` | `KULL1N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K1S` | `KULL1S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K2N` | `KULL2N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K2S` | `KULL2S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K3N` | `KULL3N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K3S` | `KULL3S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K4N` | `KULL4N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K4S` | `KULL4S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K5N` | `KULL5N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K5S` | `KULL5S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K6N` | `KULL6N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K6S` | `KULL6S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K7N` | `KULL7N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K7S` | `KULL7S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K8N` | `KULL8N, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_IND_K8S` | `KULL8S, CARI_KOD` | Nonclustered, unique |
| `TBLCASABITEK_PKEY` | `CARI_KOD` | Clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KOD, KAYITTARIHI, KAYITYAPANKUL, DUZELTMETARIHI, DUZELTMEYAPANKUL, KULL1N
FROM dbo.TBLCASABITEK WITH (NOLOCK);
```
