---
title: TBLDEKOTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldekotra/
---

# TBLDEKOTRA

> DEKONT PARAMETLERİ TABLOSUDUR

- **Modül:** [DEKONT](/veritabani/moduller/dekont/)
- **Kolon sayısı:** 49
- **Birincil anahtar:** `SUBE_KODU, SERI_NO, DEKONT_NO, SIRA_NO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `SERI_NO` | varchar(2) | hayır |  | Dekont seri numarasının kaydedildiği sahadır. Seri numaraları İşlemler/Seri Kodu Tanımlama bölümünden kaydedilmiş olmalıdır. |
| 4 | `DEKONT_NO` | TDBINTEGER | hayır |  | Dekont No, program tarafından otomatik atılır her seri için 1’den başlayarak birer arttırılır. |
| 5 | `SIRA_NO` | TDBINTEGER | hayır |  | Aynı dekont içindeki kayıtların sıra |
| 6 | `FISNO` | TDBBELGENO | evet |  | Dekont kaydı için kullanıcı tarafından girilecen fiş numarasıdır. |
| 7 | `TARIH` | TDBDATETIME | evet |  | İşlem Tarihi sahası, dekontun kayıt tarihini gösterir. |
| 8 | `VALORTRH` | TDBDATETIME | evet |  | Valör Baş. Tarihi sahasına işlem tarihi otomatik olarak gelir; kullanıcı tarafından değiştirilebilir. “Valör Bilgisi Girişi Yapılacak Mı” parametresi işaretlenerek kullanılabilir. |
| 9 | `VALORGUN` | TDBSMALLINT | evet | `0` | Valör gününün girileceği sahadır. Bu sahaya girilen gün değeri valör başlangıç tarihine eklenerek, bulunan yeni tarih valör tarihine aktarılacaktır. |
| 10 | `C_M` | char(1) | evet |  | Hesap Kodu sahasına Cari, Muhasebe, Banka ya da Stok kodu girilir. Kod bilgisi bu sahada saklanır. (Cari=C, Muhasebe=M, Banka=B, Stok=S) |
| 11 | `KOD` | varchar(35) | evet |  | Hesap Kodu sahasına girilen kod bilgisi bu sahada saklanır. Cari Kodu, Muhasebe Hesap Kodu, Banka Hesap Kodu ya da Stok kodu bu tabloya kaydedilmektedir |
| 12 | `REFERANS` | varchar(15) | evet |  | Proje Kodu veya Referans Kodu uygulaması kullanılıyor ise, girilen referans kodu bilgisi bu sahada yer alır |
| 13 | `CRAPKOD` | char(1) | evet |  | Cari rapor kodunu tutar |
| 14 | `PLASIYER` | TDBPLASIYER | evet |  | Plasiyer uygulaması kullanılıyor ise, girilen Plasiyer kodu bilgisi bu sahada yer alır |
| 15 | `ACIKLAMA1` | varchar(50) | evet |  | Dekont Saha1' deki açıklama sahası |
| 16 | `ACIKLAMA2` | varchar(50) | evet |  | Dekont Saha 2' de yer alan Ek Açıklama-1'in bulunduğu sahadır |
| 17 | `ACIKLAMA3` | varchar(50) | evet |  | Dekont Saha 2' de yer alan Ek Açıklama-2'nin bulunduğu sahadır |
| 18 | `ACIKLAMA4` | varchar(50) | evet |  | Dekont Saha 2' de yer alan Ek Açıklama-3'ün bulunduğu sahadır |
| 19 | `B_A` | char(1) | evet |  | Borç/Alacak bilgisinin yer aldığı sahadır |
| 20 | `TUTAR` | TDBFLOAT | evet | `0` | Tutar bilgisini gösterir |
| 21 | `KDV_ORAN` | TDBKDVORAN | evet | `0` | KDV Oranını gösterir |
| 22 | `KDV_DAHIL` | char(1) | evet |  | KDV dahilse E/değilse H olarak görünür |
| 23 | `GENEL_KDV` | char(1) | evet |  | Serbest meslek makbuzu ve genel gider cari hesap fatura kaydı gibi işlmlerde hareket türlerini tutar.G:gider,C:cari,K:Kdv,S:stopaj,F:ssdf yi ifade eder. |
| 24 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar bilgisini gösterir. |
| 25 | `DOVTL` | char(1) | evet |  | Tutar girişinin Döviz mi TL mi yapılacağını gösterir. |
| 26 | `DOVTIP` | TDBBYTE | evet |  | Döviz Tipini gösterir |
| 27 | `DOVTUT` | TDBFLOAT | evet | `0` | Döviz Tutarını gösterir |
| 28 | `ENTEGREFKEY` | TDBENTKEY | evet |  | Hareketlerde yapılan düzeltme/iptal işlemleri için entegre anahtar numarasını gösterir. |
| 29 | `YEDEK1` | varchar(8) | evet |  | H - B formuna dahil değil E - B formuna dahil K - B formuna dahil (e-belge) |
| 30 | `YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `YEDEK3` | TDBFLOAT | evet | `0` | KDV Tutar bilgisini gösterir |
| 32 | `YEDEK4` | TDBFLOAT | evet | `0` | stopaj tutarını göstermektedir. |
| 33 | `YEDEK5` | TDBFLOAT | evet | `0` | Ssdf tutarını gösterir. |
| 34 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `YEDEK7` | TDBBYTE | evet | `0` | Yuvarlama farkının Döviz Tutarından(0), Kurdan(1) ya daTutardan(2) düşüleceğini gösterir. |
| 36 | `YEDEK8` | TDBSMALLINT | evet | `0` | Kullanıcı no'su kayıt olarak atılır. |
| 37 | `YEDEK9` | TDBINTEGER | evet | `0` | Gridde yer alan şube kodu bilgisi |
| 38 | `YEDEK10` | TDBDATETIME | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 39 | `PROJE_KODU` | TDBPROJEKOD | evet |  | Proje Kodunu gösterir |
| 40 | `EXPORTREFNO` | varchar(20) | evet |  | İthalat/ihracat işlemleri için oluşturulan masraflar ve mal bedelleri ile ilgili kayıtlar için ithalat/İhracat dosya numarasını gösterir |
| 41 | `EXEXPENSETYPE` | TDBBYTE | evet | `0` | İthalat Kapatma için yapılacak olan dekont kaydında kaydı yapılan masrafın tipinin seçildiği alandır. (Mal Bedeli, Gümrük Vergisi, Komisyon vb) |
| 42 | `CMISLENECEK` | char(1) | evet | `H` | Dekont dışardan aktarımlarda dekont muhasebe işleminde ilgili diğer modüllere işlenemesi için E olarak atılmalıdır. |
| 43 | `SUBEGIRILECEK` | char(1) | evet | `H` | Dekont Saha 2' de Şube Girilecek alanı işaretliyse E değilse H bilgisi yer alır |
| 44 | `KDVDOVIZ` | TDBFLOAT | evet | `0` | Döviz tutarı girilmiş ve KDV hesaplanıyorsa bu sahada yer alır. |
| 45 | `RAPOR_KODU2` | varchar(15) | evet |  | Cari Parametre Girişi bölümünde “Hareketlerde Rapor Kodu Girilecek” parametresinin işaretlenmesi Rapor kodu yer alır |
| 46 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 48 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEKOTRA_PK` | `SUBE_KODU, SERI_NO, DEKONT_NO, SIRA_NO` |
| FOREIGN KEY | `TBLDEKOTRA_FK` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDEKOTRA_FK1` | `SUBE_KODU, SERI_NO` |
| FOREIGN KEY | `TBLDEKOTRA_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEKOTRA_IND_1` | `INCKEYNO` | Unique |
| `TBLDEKOTRA_PK` | `SUBE_KODU, SERI_NO, DEKONT_NO, SIRA_NO` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, INCKEYNO, SERI_NO, DEKONT_NO, SIRA_NO, FISNO
FROM dbo.TBLDEKOTRA WITH (NOLOCK);
```
