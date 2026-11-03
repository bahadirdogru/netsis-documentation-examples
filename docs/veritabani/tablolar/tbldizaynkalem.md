---
title: TBLDIZAYNKALEM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldizaynkalem/
---

# TBLDIZAYNKALEM

> DİZAYN KALEM BİLGİLERİ SEKMESİNDEKİ KAYITLARI TUTAR.

- **Modül:** [DİZAYN](/veritabani/moduller/dizayn/)
- **Kolon sayısı:** 88
- **Birincil anahtar:** `GENELID+SAHAYERI+SATIR+SUTUN+KOSULHASH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `GENELID` | TDBINTEGER | hayır |  | Dizayn no'su bilgisidir. |
| 2 | `KOSULHASH` | TDBFLOAT | hayır |  | Dizayn bazında her kalem girişinde bir artarak kalem nosunu tutan sahadır. |
| 3 | `SAHAYERI` | char(1) | hayır |  | 1 üstbilgi,2 kalem,3 alt ,4 Kümüle sabit olmak üzere saha yeri bilgisi tutulur. |
| 4 | `SAHATIPI` | char(1) | evet |  | P-B-H-A-I-C-S-R-K-T değerlerini alır;P program,B başlık,H hesap,A açıklama,I ileri hesaplama,C script kod çalıştır,S sql,R resim,K kümüle ,T toplam'a tekabül eder |
| 5 | `BASLIKYAZ` | char(1) | evet |  | Başlık yaz tercihine göre E veya H değerini alır |
| 6 | `ACIKLAMA` | varchar(200) | evet |  | Açıklama sahasıdır başlık bilgisini tutabildiği gibi resim secildiğinde resimin path'ini de tutabilir. |
| 7 | `SATIR` | TDBBYTE | hayır | `0` | Satır bilgisi |
| 8 | `SUTUN` | TDBBYTE | hayır | `0` | Sütun bilgisi |
| 9 | `TOPLAMAL` | char(1) | evet |  | Toplam seceniğinin işaretlenip işaretlenmemesine göre E veya H değerini alır |
| 10 | `BASLANGIC` | TDBBYTE | evet |  | Başlangıç sütun bilgisidir |
| 11 | `UZUNLUK` | TDBBYTE | evet |  | Saha uzunluk bilgisi tutulur |
| 12 | `BASMAMODU` | char(1) | evet |  | Font'un C:Condense, N:Normal, B:Bold, I:İtalik, U:Underline, D:Condense&bold olmak üzere basım mod bilgisini tutar |
| 13 | `ONDALIK` | TDBBYTE | evet |  | Ondalık hane sayısıdır |
| 14 | `ALANNO` | TDBINTEGER | evet |  | Program alan no'su |
| 15 | `ILKTIP1` | char(1) | evet |  | Hesap kullanıldığında A satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 16 | `ILKCELL1` | char(1) | evet |  | Hesap kullanıldığında A satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 17 | `ILKALAN1` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa A satırı ilk hücre alan no bilgisi tutulur |
| 18 | `ILKSAYI1` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa A satırı ilk hücre sabit bilgisi tutulur |
| 19 | `ISLEM1` | char(1) | evet |  | Hesap A satırında secilen işlem bilgisi bu sahada tutulur.(*,-,/,+ semboleri) |
| 20 | `SONCELL1` | char(1) | evet |  | Hesap kullanıldığında A satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 21 | `SONTIP1` | char(1) | evet |  | Hesap kullanıldığında A satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 22 | `SONALAN1` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa A satırı ikinci hücre alan no bilgisi tutulur |
| 23 | `SONSAYI1` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa A satırı ikinci hücre sabit bilgisi tutulur |
| 24 | `ILKTIP2` | char(1) | evet |  | Hesap kullanıldığında B satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 25 | `ILKCELL2` | char(1) | evet |  | Hesap kullanıldığında B satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 26 | `ILKALAN2` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa B satırı ilk hücre alan no bilgisi tutulur |
| 27 | `ILKSAYI2` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa B satırı ilk hücre sabit bilgisi tutulur |
| 28 | `ISLEM2` | char(1) | evet |  | Hesap B satırında secilen işlem bilgisi bu sahada tutulur.(*,-,/,+ semboleri) |
| 29 | `SONCELL2` | char(1) | evet |  | Hesap kullanıldığında B satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 30 | `SONTIP2` | char(1) | evet |  | Hesap kullanıldığında B satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 31 | `SONALAN2` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa B satırı ikinci hücre alan no bilgisi tutulur |
| 32 | `SONSAYI2` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa B satırı ikinci hücre sabit bilgisi tutulur |
| 33 | `ILKTIP3` | char(1) | evet |  | Hesap kullanıldığında C satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 34 | `ILKCELL3` | char(1) | evet |  | Hesap kullanıldığında C satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 35 | `ILKALAN3` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa C satırı ilk hücre alan no bilgisi tutulur |
| 36 | `ILKSAYI3` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa C satırı ilk hücre sabit bilgisi tutulur |
| 37 | `ISLEM3` | char(1) | evet |  | Hesap C satırında secilen işlem bilgisi bu sahada tutulur.(*,-,/,+ semboleri) |
| 38 | `SONCELL3` | char(1) | evet |  | Hesap kullanıldığında C satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 39 | `SONTIP3` | char(1) | evet |  | Hesap kullanıldığında C satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 40 | `SONALAN3` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa C satırı ikinci hücre alan no bilgisi tutulur |
| 41 | `SONSAYI3` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa C satırı ikinci hücre sabit bilgisi tutulur |
| 42 | `ILKTIP4` | char(1) | evet |  | Hesap kullanıldığında D satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 43 | `ILKCELL4` | char(1) | evet |  | Hesap kullanıldığında D satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 44 | `ILKALAN4` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa D satırı ilk hücre alan no bilgisi tutulur |
| 45 | `ILKSAYI4` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa D satırı ilk hücre sabit bilgisi tutulur |
| 46 | `ISLEM4` | char(1) | evet |  | Hesap D satırında secilen işlem bilgisi bu sahada tutulur.(*,-,/,+ semboleri) |
| 47 | `SONCELL4` | char(1) | evet |  | Hesap kullanıldığında D satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 48 | `SONTIP4` | char(1) | evet |  | Hesap kullanıldığında D satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 49 | `SONALAN4` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa D satırı ikinci hücre alan no bilgisi tutulur |
| 50 | `SONSAYI4` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa D satırı ikinci hücre sabit bilgisi tutulur |
| 51 | `ILKTIP5` | char(1) | evet |  | Hesap kullanıldığında E satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 52 | `ILKCELL5` | char(1) | evet |  | Hesap kullanıldığında E satırı ilk hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 53 | `ILKALAN5` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa E satırı ilk hücre alan no bilgisi tutulur |
| 54 | `ILKSAYI5` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa E satırı ilk hücre sabit bilgisi tutulur |
| 55 | `ISLEM5` | char(1) | evet |  | Hesap E satırında secilen işlem bilgisi bu sahada tutulur.(*,-,/,+ semboleri) |
| 56 | `SONCELL5` | char(1) | evet |  | Hesap kullanıldığında E satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 57 | `SONTIP5` | char(1) | evet |  | Hesap kullanıldığında E satırı ikinci hücresi için R:rehber ,S:sabit bilgisini veya hesapta secilen satır harfi(A,B,C,D,E) bilgisi tutulur |
| 58 | `SONALAN5` | TDBINTEGER | evet |  | Hesapta rehber kullanılıyorsa E satırı ikinci hücre alan no bilgisi tutulur |
| 59 | `SONSAYI5` | TDBFLOAT | evet |  | Hesapta sabit kullanılıyorsa E satırı ikinci hücre sabit bilgisi tutulur |
| 60 | `KOSULVARMI` | char(1) | evet |  | Koşul kullanımı var ise E yoksa H değerini alır |
| 61 | `KILKTIP` | char(1) | evet |  | Koşul penceresinde ki birinci saha tipidir.R:rehber ,S:sabit olmak üzere değer alır |
| 62 | `KILKALAN` | TDBINTEGER | evet |  | Koşul birinci saha alan bilgisi tutulur |
| 63 | `KILKSTR` | varchar(50) | evet |  | Koşul birinci saha sabit bilgisi tutulur |
| 64 | `KISLEM` | char(1) | evet |  | Koşul matematiksel sembol olarak koşul işlem tipi |
| 65 | `KSONTIP` | char(1) | evet |  | Koşul penceresinde ki ikinci saha tipidir.R:rehber ,S:sabit olmak üzere değer alır |
| 66 | `KSONALAN` | TDBINTEGER | evet |  | Koşul ikinci saha alan bilgisi tutulur |
| 67 | `KSONSTR` | varchar(50) | evet |  | Koşul ikinci saha sabit bilgisi tutulur |
| 68 | `SAYISAL` | TDBBYTE | hayır | `1` | 0,1,2 değerlerini alır |
| 69 | `SONSAYFATOP` | char(1) | evet |  | Son sayfada toplam al parametresine göre E,H değerlerini alır. |
| 70 | `KOORKORU` | char(1) | evet |  | Koordinat koru işaretlenirse E tersi durumda H değerini alır |
| 71 | `GERCEKSATIR` | char(1) | evet |  | Kümüle satır bilgisi haricinde default E olarak tutulur. |
| 72 | `ACIKALANNO` | TDBINTEGER | evet |  | Ek alan no |
| 73 | `EKALANUZ` | TDBBYTE | evet |  | Ek alan uzunluğu |
| 74 | `EKALANONDALIK` | TDBBYTE | evet |  | Ek alan ondalık bilgisi |
| 75 | `YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 76 | `YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 77 | `YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 78 | `YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 79 | `YEDEK5` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 80 | `YEDEK6` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 81 | `YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 82 | `YEDEK8` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 83 | `YEDEK9` | TDBINTEGER | evet |  | Resim yükselik değeri |
| 84 | `YEDEK10` | TDBINTEGER | evet |  | Resim genişlik değeri |
| 85 | `YEDEK11` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 86 | `YEDEK12` | varchar(10) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 87 | `SQLKISIT` | TDBMEMO | evet |  | SQL kulanımında yazılan sql cümlesi bu sahada tutlmaktadır. |
| 88 | `WORDKEY` | varchar(50) | evet |  | Koşul veya hesap kullaımında registry anahtar bilgisi tutulur. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDIZAYNKALEM_PKEY` | `GENELID+SAHAYERI+SATIR+SUTUN+KOSULHASH` |
| FOREIGN KEY | `TBLDIZAYNKALEM_FKEY` | `GENELID` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDIZAYNKALEM_IND_1` | `GENELID` | Non-unique, Non-clustered |
| `TBLDIZAYNKALEM_PKEY` | `GENELID+SAHAYERI+SATIR+SUTUN+KOSULHASH` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 GENELID, KOSULHASH, SAHAYERI, SAHATIPI, BASLIKYAZ, ACIKLAMA
FROM dbo.TBLDIZAYNKALEM WITH (NOLOCK);
```
