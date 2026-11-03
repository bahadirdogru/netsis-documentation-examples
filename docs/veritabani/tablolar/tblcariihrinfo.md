---
title: TBLCARIIHRINFO
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblcariihrinfo/
---

# TBLCARIIHRINFO

> Açıklama yok.

- **Modül:** [CARİ](/veritabani/moduller/cari/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `CARI_KODU`
- **Not:** Bu tablo şema dokümanında ikinci kez, [DIŞ TİCARET modülünde](/veritabani/tablolar/tblcariihrinfo-2/) de belgelenmiş. Kolon listeleri farklı olabilir.

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `CARI_KODU` | TDBCARIKOD | hayır |  | Her müşterinin deposunu lokal depo olarak tanımlayarak takip etmek isteyenler için cari kodunun girileceği sahadır. |
| 2 | `GOZLEMCI_KODU` | TDBCARIKOD | evet |  | Gözlemci kodunu tutan sahadır. |
| 3 | `GUMRUK_KODU` | varchar(15) | evet |  | Gümrük kodunu tutan sahadır. |
| 4 | `ACENTA_KODU` | TDBCARIKOD | evet |  | Acenta kodunu tutan sahadır. |
| 5 | `TASIYICI_KODU` | TDBCARIKOD | evet |  | Taşıyıcı kodunu tutan sahadır. |
| 6 | `TEMSILCI_KODU` | TDBCARIKOD | evet |  | Temsilci kodunu tutan sahadır. |
| 7 | `SIGORTACI_KODU` | TDBCARIKOD | evet |  | Sigortacı kodunututan sahadır. |
| 8 | `MENSEI` | varchar(50) | evet |  |  |
| 9 | `SEVK_YERI` | varchar(50) | evet |  | Sevk yerini gösteren sahadır |
| 10 | `YUKLEME_YERI` | varchar(50) | evet |  | Yükleme yerini gösteren sahadır |
| 11 | `TRANSFER_YERI` | varchar(50) | evet |  | Transfer yerini gösteren sahadır |
| 12 | `VARIS_YERI` | varchar(50) | evet |  | Varış yerini gösteren sahadır |
| 13 | `NAKLIYE_TIPI` | varchar(1) | evet |  | Nakliye tipini tutar |
| 14 | `ODEME_SEKLI` | TDBINTEGER | evet |  | Ödeme şeklini gösteren bilgi sahasıdır |
| 15 | `ODEMEACIK` | TDBINTEGER | evet |  |  |
| 16 | `GOZLEMNO` | varchar(20) | evet |  | Gözlem numarasını tutar |
| 17 | `BNKHESKOD` | varchar(20) | evet |  | Banka hesap kodunun tutulduğu sahadır |
| 18 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY1` | `CARI_KODU` |
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY2` | `GOZLEMCI_KODU` |
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY3` | `ACENTA_KODU` |
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY4` | `TASIYICI_KODU` |
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY5` | `TEMSILCI_KODU` |
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY6` | `SIGORTACI_KODU` |
| FOREIGN KEY | `TBLCARIIHRINFO_FKEY7` | `GUMRUK_KODU` |
| PRIMARY KEY | `TBLCARIIHRINFO_PKEY` | `CARI_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLCARIIHRINFO_PKEY` | `CARI_KODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 CARI_KODU, GOZLEMCI_KODU, GUMRUK_KODU, ACENTA_KODU, TASIYICI_KODU, TEMSILCI_KODU
FROM dbo.TBLCARIIHRINFO WITH (NOLOCK);
```
