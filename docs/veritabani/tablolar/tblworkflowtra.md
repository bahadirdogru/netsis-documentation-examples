---
title: TBLWORKFLOWTRA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblworkflowtra/
---

# TBLWORKFLOWTRA

> AÇIK İŞLERİN KAPATILMASI İLE İLGİLİ KAYITLARI TUTAR

- **Modül:** [İŞ AKIŞ YÖNETİMİ](/veritabani/moduller/is-akis-yonetimi/)
- **Kolon sayısı:** 37
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `PATHKODU` | varchar(8) | hayır |  | İş akış kayıtlarında iş kodu sahasına girilen numarayı gösterir. |
| 3 | `ONAYNUMARASI` | TDBINTEGER | evet |  | İş akış kaydı girildikten sonra, program tarafından ilk inckeynumarasına atanan değeri gösterir. |
| 4 | `MODULNO` | TDBINTEGER | evet |  | Girilen iş kodunun hangi modüle ait olduğunu gösterir. |
| 5 | `PROGRAMNO` | TDBSMALLINT | evet |  | Girilen iş kodu için belirtilen modül içerisindeki hangi programa ait olduğunu gösterir. |
| 6 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 7 | `DURUMU` | char(1) | evet | `B` | İş akışınde ilgili evrağın kullanıcı tarafından onaylanıp onaylanmadığını gösterir. O: Onaylanmış B: Beklemede R: Reddedilmiş S: Silinmiş G: Gecikmiş I: İmzalı Onay N: None M: PathTreeChanged |
| 8 | `GIRISZAMANI` | TDBDATETIME | evet |  | Onaylanması gereken evrağın kullanıcılara ulaştığı zamanı gösterir. |
| 9 | `CIKISZAMANI` | TDBDATETIME | evet |  | Onaylanması gereken evrağın kullanıcılar tarafından onaylandığı zamanı gösterir. |
| 10 | `ACIKLAMA` | varchar(100) | evet |  | İş akışında ilgili evrağın kullanıcı tarafından onaylanma kararı sırasında açıklama sahasına girilenleri gösterir. |
| 11 | `KULLANICINO` | TDBSMALLINT | hayır |  | İş akış yolunda işi onaylaması gereken sıradaki kullanıcının numarasını gösterir. |
| 12 | `KAPKULLANICINO` | TDBSMALLINT | evet |  | Onaylanması gereken iş, iş akış yolunda sıradaki kullanıcı tarafından onaylandıktan sonra o kullanıcının nuamarasını tutar. |
| 13 | `DBOPTYPE` | char(1) | evet | `I` |  |
| 14 | `ILKACIKLAMA` | varchar(50) | evet |  | İş akışında tanımlanan iş ile ilgili kayıt girildiğinde, girilen kayıt ile ilgili açıklamayı gösterir. (Fatura, irsaliye, çek, senetlerin numaraları, açılan cari, stok kartlarının cari, stok kodlarını vb.. gösterir.) |
| 15 | `ONCEKIINCKEYNO` | TDBINTEGER | evet |  | İş akış yolunda, sıradaki kullanıcı işi reddettiğinde, sıra bir sonraki kullanıcı yerine bir önceki kullanıcıya geçeceği için ilgili kayıt için atılan inckeynumarasının bir eksiğini atar. Reddetme durumu olmadığında 0 değerini gösterir. |
| 16 | `WFONTABLES` | varchar(255) | evet |  | İş akış ve iş akış yolu kayıtlarında onaylanması için tanımlanan iş kaydedildikten sonra hangi tablolara kayıt attığını gösterir. |
| 17 | `KAYITYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 18 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 19 | `DUZELTMEYAPANKUL` | varchar(12) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 20 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 21 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `L_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `L_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `L_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 28 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 29 | `F_YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 30 | `F_YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 31 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 32 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 33 | `D_YEDEK3` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 34 | `D_YEDEK4` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 35 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 36 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 37 | `ONLINE_ONAY_ID` | int | evet |  | Online iş akış için eklenmiş sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLWORKFLOWTRAPKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLWORKFLOWTRAFKEY1` | `SUBE_KODU+PATHKODU+KULLANICINO` |
| FOREIGN KEY | `TBLWORKFLOWTRAFKEY2` | `TBLKULLANP+SUBE_KODU+KULLANICI_NO` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLWORKFLOWTRA_IND_1` | `SUBE_KODU+KULLANICINO+DURUMU+ONAYNUMARASI` | Non-unique, Non-clustered |
| `TBLWORKFLOWTRAPKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, PATHKODU, ONAYNUMARASI, MODULNO, PROGRAMNO, INCKEYNO
FROM dbo.TBLWORKFLOWTRA WITH (NOLOCK);
```
