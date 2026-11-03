---
title: TBLBNKHESTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbnkhestra/
---

# TBLBNKHESTRA

> BANKA HESAPLARI HAREKET KAYITLARINI TUTAN TABLODUR.

- **Modül:** [BANKA](/veritabani/moduller/banka/)
- **Kolon sayısı:** 41
- **Birincil anahtar:** `OTOSIRANO`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NETHESKODU` | varchar(15) | hayır |  | Banka hesap kodunu tutar. |
| 2 | `HARTIPI` | TDBBYTE | evet | `0` | Hareket tipi;Normal için 0;Faiz degisikligi icin 1 degerini tutar. |
| 3 | `TARIH` | TDBDATETIME | evet |  | Hesap hareket tarihini tutar. |
| 4 | `HARTURU` | TDBBYTE | evet | `0` | 0 Devir ,1 Hesap Açma,2 Cari Havale,3 Banka Havale,4 Virman,5 Faiz,6 Masraf,7 Tem. mektubu Komisyon,8 Diğer Komisyon |
| 5 | `VADETARIH` | TDBDATETIME | evet |  | Vade tarihini tutar. |
| 6 | `EFFEKTIFTARIH` | TDBDATETIME | evet |  | Effektif tarihi tutar. |
| 7 | `FAIZORAN` | TDBFLOAT | evet | `0` | Faiz oranını tutar. |
| 8 | `BA` | char(1) | evet |  | Borc=B; Alacak=A degerini alır. |
| 9 | `PLASIYERKODU` | TDBPLASIYER | evet |  | Plasiyer kodunu gosterir. |
| 10 | `PROJEKODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `ENTEGREFKEY` | TDBENTKEY | evet |  | Banka modulunun diger moduller ile baglantısını gosteren baglantı numarasıdır. |
| 12 | `INCKEYNO` | TDBINTEGER | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `TUTAR` | TDBFLOAT | evet | `0` | Tutarı gosterir. |
| 14 | `DOVIZTIPI` | TDBBYTE | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `DOVIZTUTAR` | TDBFLOAT | evet | `0` | Dovizli tutarı gosterir. |
| 16 | `ACIKLAMA` | varchar(50) | evet |  | Acıklamayı tutar. |
| 17 | `BELGENO` | TDBBELGENO | evet |  | Fis no'yu tutar. |
| 18 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `OTOINCKEYNO` | char(1) | evet | `E` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `YEDEK1` | char(1) | evet |  | Tahsilat bilgisini tutar. Eğer kredi kartı tahsilat kayıtları ekranından tahsilat işlemi yapıldı ise o banka hareketi için 'E' değerini atar. |
| 23 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK5` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `YEDEK6` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `YEDEK7` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `YEDEK8` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `YEDEK9` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK10` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YEDEK11` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `YEDEK12` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `YEDEK13` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK14` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `YEDEK15` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `YEDEK16` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 38 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 39 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 40 | `OTOSIRANO` | TDBINTEGER | hayır |  | Banka modulunden yapılan islem kayıt sırasını tutar. |
| 41 | `BNKKSTINCKEYNO` | TDBINTEGER | evet |  | Banka kısıt inckey numarasının tutulduğu sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBNKHESTRA_FKEYPROJE` | `PROJEKODU` |
| FOREIGN KEY | `TBLBNKHESTRAFK1` | `NETHESKODU` |
| FOREIGN KEY | `TBLBNKHESTRAFK2` | `SUBE_KODU` |
| PRIMARY KEY | `TBLBNKHESTRAPK` | `OTOSIRANO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBNKHESTRA_IND_1` | `NETHESKODU` | Nonclustered |
| `TBLBNKHESTRA_IND_2` | `NETHESKODU, TARIH, INCKEYNO` | Nonclustered, Unique |
| `TBLBNKHESTRA_IND_3` | `NETHESKODU, EFFEKTIFTARIH, INCKEYNO` | Nonclustered, Unique |
| `TBLBNKHESTRA_IND_4` | `ENTEGREFKEY` | Nonclustered |
| `TBLBNKHESTRA_IND_5` | `NETHESKODU, VADETARIH` | Nonclustered |
| `TBLBNKHESTRA_IND_6` | `SUBE_KODU` | Nonclustered |
| `TBLBNKHESTRA_IND_8` | `INCKEYNO` | Nonclustered, Unique |
| `TBLBNKHESTRA_IND_9` | `SUBE_KODU, HARTIPI` | Nonclustered |
| `TBLBNKHESTRA_IND_ONUM` | `ONAYNUM` | Nonclustered |
| `TBLBNKHESTRA_IND_OTIP` | `ONAYTIPI` | Nonclustered |
| `TBLBNKHESTRAPK` | `OTOSIRANO` | Clustered, Unique |

## Örnek sorgu

```sql
SELECT TOP 100 NETHESKODU, HARTIPI, TARIH, HARTURU, VADETARIH, EFFEKTIFTARIH
FROM dbo.TBLBNKHESTRA WITH (NOLOCK);
```
