---
title: TBLBNKHESSABIT
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkhessabit/
---

# TBLBNKHESSABIT

> BANKA HESAP KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 46
- **Birincil anahtar:** `NETHESKODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `NETHESKODU` | varchar(15) | hayır |  | Hesap kodunu tutar. |
| 4 | `ACIKLAMA` | varchar(100) | evet |  | Banka hesap ismini tutar. |
| 5 | `NETBANKAKODU` | varchar(10) | hayır |  | Banka ana kodunu tutar. |
| 6 | `NETSUBEKODU` | varchar(10) | hayır |  | Banka sube kodunu tutar. |
| 7 | `BANKAHESNO` | varchar(30) | evet |  | Banka hesap numarasını tutar. |
| 8 | `NETMUHKODU` | varchar(35) | evet |  | Banka muhasebe hesap kodunu tutar. |
| 9 | `KFGELMUHKODU` | varchar(35) | evet |  | Kur farkı gelir muhasebe hesap kodunu tutar. |
| 10 | `KFGIDMUHKODU` | varchar(35) | evet |  | Kur farkı gider muhasebe hesap kodunu tutar. |
| 11 | `DURUM` | TDBBYTE | evet | `0` | Acık ise 0; kapalı ise 1 degerini tutar. |
| 12 | `KILIT` | char(1) | evet | `H` | Tanımlanan hesap kodu kilitli ise E; degil ise H degerini tutar. |
| 13 | `HESAPTIPI` | TDBBYTE | evet | `0` | Vadesiz mevduat=0; Vadeli mevduat=1; Repo=2; Teminat cekleri=3; Teminat senetleri=4; Tahsil cekleri=5; Tahsil senetleri=6; Nakit kredi-Borclu cari kredi(Rotatif)=7; Nakit kredi-Spot=8; Nakit kredi-İskonto=9; Gayri nakdi kredi-Teminat mektubu=10; Gayri nakdi kredi- Harici garanti=11; Gayri nakdi kredi-İhracat akreditifi=12; Gayri nakdi kredi-Kabul ve aval=13; Kredi kartı hesabı=14 degerleri ile tutulur. Borç çeki=17 |
| 14 | `KREDITEMACIK` | varchar(255) | evet |  | Kredi Teminati ile ilgili girilen acıklamayı tutar. |
| 15 | `RAPORKODU` | varchar(8) | evet |  | Rapor kodunu tutar. |
| 16 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `GKSNO` | varchar(35) | evet |  | Genel Kredi Sozlesmesinin numarasını tutar. |
| 18 | `CEKSENKARKREDI` | char(1) | evet | `H` | Kredi Hesap tipindeki kayıtlar icin E, degil ise H isaretlenmelidir. |
| 19 | `TEMTIPI` | TDBBYTE | evet |  | Teminat tipini tutar. |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK5` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK6` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK7` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK8` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YEDEK9` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YEDEK10` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 35 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 36 | `HESBORCTOP` | TDBFLOAT | evet | `0` | Banka hesabının aylar bazında toplam borc bilgisini tutar. |
| 37 | `HESALACTOP` | TDBFLOAT | evet | `0` | Banka hesabının aylar bazında toplam alacak bilgisini tutar. |
| 38 | `HESBORCTOPDOV` | TDBFLOAT | evet | `0` | Banka hesabının aylar bazında toplam dovızlı borc bilgisini tutar. |
| 39 | `HESALACTOPDOV` | TDBFLOAT | evet | `0` | Banka hesabının aylar bazında toplam dovızlı alacak bilgisini tutar. |
| 40 | `FAIZDEGSAY` | TDBINTEGER | evet | `0` | Faiz degisikliginin hesapta kac kez yapıldıgını tutar. |
| 41 | `BAGLIHESAPKODU` | varchar(15) | evet |  | Hesap tipi, kredi kartı hesabı ise aktif olan baglı hesap kodunu tutar. |
| 42 | `FARKALACAKMUHKODU` | TDBMUHKOD | evet |  | Hesap tipi, kredi kartı hesabı ise aktif olan fark alacak muhasebe hesap kodunu tutar. |
| 43 | `FARKBORCMUHKODU` | TDBMUHKOD | evet |  | Hesap tipi, kredi kartı hesabı ise aktif olan fark borc muhasebe hesap kodunu tutar. |
| 44 | `IBANNO` | varchar(30) | evet |  | Iban bilgisi yer alır |
| 45 | `FAIZMUHKODU` | TDBMUHKOD | evet |  | Faiz M. K. Alanındaki muhasebe kodu bilgisi yer alır. |
| 46 | `FAIZTAHMUHKODU` | TDBMUHKOD | evet |  | Faiz tahakkuk M. K. Alanındaki muhasebe kodu bilgisi yer alır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKHESSABITFK1` | `NETBANKAKODU, NETSUBEKODU` |
| FOREIGN KEY | `TBLBNKHESSABITFK2` | `GKSNO` |
| FOREIGN KEY | `TBLBNKHESSABITFK3` | `TEMTIPI` |
| FOREIGN KEY | `TBLBNKHESSABITFK4` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBNKHESSABITFK5` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBNKHESSABITPK` | `NETHESKODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKHESSABIT_IND_1` | `DURUM` | Nonclustered |
| `TBLBNKHESSABIT_IND_2` | `NETBANKAKODU, NETSUBEKODU, HESAPTIPI, DOVIZTIPI` | Nonclustered |
| `TBLBNKHESSABIT_IND_3` | `SUBE_KODU` | Nonclustered |
| `TBLBNKHESSABIT_IND_4` | `ISLETME_KODU` | Nonclustered |
| `TBLBNKHESSABIT_IND_5` | `ISLETME_KODU, SUBE_KODU, HESAPTIPI` | Nonclustered |
| `TBLBNKHESSABIT_IND_6` | `ISLETME_KODU, SUBE_KODU, TEMTIPI` | Nonclustered |
| `TBLBNKHESSABIT_IND_ONUM` | `ONAYNUM` | Nonclustered |
| `TBLBNKHESSABIT_IND_OTIP` | `ONAYTIPI` | Nonclustered |
| `TBLBNKHESSABITPK` | `NETHESKODU` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SUBE_KODU, NETHESKODU, ACIKLAMA, NETBANKAKODU, NETSUBEKODU
FROM dbo.TBLBNKHESSABIT WITH (NOLOCK);
```
