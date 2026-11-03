---
title: TBLSEVKTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsevktra/
---

# TBLSEVKTRA

> SEVK EMRİ İÇİN YENİ SEVK+YÜKLEME EMRİ YENİ YÜKLEME EMRİ BUTONLARINA BASILDIKTAN SONRA KALEM BİLGİLERİ SEKMESİNDE GİRİLEN KAYITLARI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 32
- **Birincil anahtar:** `SUBU_KODU+TIP+BELGENO+INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `TIP` | TDBBYTE | hayır |  | Sevk emri kayıtları için '1'+yükleme emri kayıtları için '3' değerini gösterir. |
| 3 | `BELGENO` | TDBBELGENO | hayır |  | Sevk ya da yükleme emirlerinin belge numaralarını gösterir. |
| 4 | `INCKEYNO` | TDBINTEGER | hayır |  | Girilen her kayıt için program tarafından atanan ve birer artırılarak devam eden numara bilgisini tutar. |
| 5 | `SIPNO` | TDBBELGENO | hayır |  | İlgili sevk emrine bağlı sipariş numarasını ve ilgili yükleme emrine ait sevk numarasını gösterir. |
| 6 | `SIPKONT` | TDBSMALLINT | hayır |  | Stokların sipariş içerisinde girilen sırasını gösterir. |
| 7 | `TESCARI` | TDBCARIKOD | evet |  | Siparişin ya da sevkin teslim edileceği cari kodu bilgisini gösterir. |
| 8 | `NAKLIYESEKLI` | TDBBYTE | evet | `0` | Sevk emrinde kalem bilgileri sekmesinde nakliye şekli stok miktarı seçili ise '0'+yeni belge seçili ise '1' değerini gösterir. |
| 9 | `TESLIMATYERI` | TDBBYTE | evet | `0` | Sevk emrinde kalem bilgileri sekmesinde teslimat firma miktarı seçili ise '0'+depo seçili ise '1' değerini gösterir. |
| 10 | `IRSFLAG` | TDBBYTE | evet | `0` | Girilen yükleme emri irsaliyeştiğinde ya da faturalaştığında '1' değerini+diğer durumlarda '0' değerini gösterir. |
| 11 | `YUKMIK` | TDBFLOAT | evet | `0` | Default olarak 0 değeri atılır. |
| 12 | `SIRA` | TDBSMALLINT | evet | `0` | İlgili sevk emrine ait siparişlerin ya da ilgili yükleme emrine ait sevk emirlerinin sıralarını gösterir. |
| 13 | `MIKTAR` | TDBFLOAT | evet | `0` | Sipariş ya da sevk emrinde girilen stoklara ait miktar bilgisini gösterir. |
| 14 | `MALFISK` | TDBFLOAT | evet | `0` | Girilen stok için mal fazlası var ise+mal fazlası miktarını gösterir. |
| 15 | `ACIK1` | varchar(35) | evet |  | Sevk ve yükleme emirlerinde kalem bilgiler sekmesinde ekalan alanına girilen bilgileri gösterir. |
| 16 | `ACIK2` | varchar(35) | evet |  | Sevk ve yükleme emirlerinde kalem bilgiler sekmesinde açıklama alanına girilen bilgileri gösterir. |
| 17 | `MIKTAR2` | TDBFLOAT | evet | `0` | Sipariş ya da sevk emrinde girilen stoklara ait miktar2 bilgisini gösterir. |
| 18 | `STOKKODU` | TDBSTOKKOD | evet |  | Sipariş ya da sevk emri içindeki stok kodlarını gösterir. |
| 19 | `DEPO` | TDBSMALLINT | evet | `0` | Sipariş ya da sevk emri içindeki stokların bulunduğu depo bilgisini gösterir. |
| 20 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `KAYITTARIHI` | TDBDATETIME | evet | `getdate()` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 22 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 23 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 24 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `I_YEDEK1` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `I_YEDEK2` | TDBSMALLINT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK1` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK2` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK3` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `T_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `YAPKOD` | varchar(15) | evet | `NULL` | İlgili stoğa ait esnek yapılandırma kodu varsa+yapılandırma kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSEVKTRA_PKEY` | `SUBU_KODU+TIP+BELGENO+INCKEYNO` |
| FOREIGN KEY | `TBLSEVKTRA_FKEY` | `SUBU_KODU+TIP+BELGENO` |
| FOREIGN KEY | `TBLSEVKTRA_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLSEVKTRAYAPKODFKEY` | `YAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSEVKTRA_IND1` | `SUBU_KODU+TIP+BELGENO+SIRA` | Unique+Non-clustered |
| `TBLSEVKTRA_IND2` | `SUBU_KODU+TIP+SIPNO+SIPKONT` | Non-unique+Non-clustered |
| `TBLSEVKTRA_PKEY` | `SUBU_KODU+TIP+BELGENO+INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, TIP, BELGENO, INCKEYNO, SIPNO, SIPKONT
FROM dbo.TBLSEVKTRA WITH (NOLOCK);
```
