---
title: TBLDEPPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldepparam/
---

# TBLDEPPARAM

> DİNAMİK DEPO PARAMETRE KAYITLARI

- **Modül:** [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/)
- **Kolon sayısı:** 24
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Kaydın hangi şubeye ait olduğunu gösterir. |
| 2 | `SERIFATURADAMI` | char(1) | evet | `H` | Seri Bilgisi Depoda Sorulsun mu Stok seri bilgilerinin, inamik depo modülünde, yerleştirme veya toplama sırasında, sorgulanması isteniyor ise bu parametre işaretlenmelidir. Aksi halde stok serileri, dinamik depo modülünde değil fatura modülünde sorgulanacaktır. |
| 3 | `IRSKAYIT_TUTSUN` | char(1) | evet | `H` | İrsaliyeler İle Kayıtlar Tutsun mu İrsaliye/ Faturalardaki miktarlar ile depoya yerleştirilen/ toplanan miktarların eşit olması kontrolünün yapılması için bu parametre işaretlenmelidir. |
| 4 | `URUNHACIMKONTROLU` | char(1) | evet | `H` | Ürün Hacim Grubu Kontrolü Yapılsın mı Bu parametre işaretlendiğinde, stok kartlarında girilen hacim kodları kontrol edilerek, stokların ait olmadığı bir raf grubuna yerleştirilmeleri engellenecektir. |
| 5 | `HUCREMALGRUBUKONT` | char(1) | evet | `H` | Bir Hücreye Aynı Mal Grubu Ürün Yerleştirilsin mi Bir hücreye yeni bir mal yerleştirilirken, aynı hücreye daha önceden yerleştirilen ürünün mal grubuyla aynı olması isteniyor ise bu parametre işaretlenmelidir. |
| 6 | `KAPASITEKONTROLU` | char(1) | evet | `H` | Kapasite Kontrolü Yapılsın mı Bu parametre işaretlendiğinde, tanımlı raf hacmi kontrol edilecek ve kapasitenin üstünde yerleştirme yapılmasına izin verilmeyecektir. |
| 7 | `BAKIYEZORLANSIN` | char(1) | evet | `H` | Bakiye Kontrolü Yapılsın mı Çıkış işlemlerinde, hücrede olmayan veya hücrede olan miktarlardan fazla çıkış yapılması istenmiyor ise bu parametre işaretlenmelidir. |
| 8 | `BRUTNET_TAKIBI` | char(1) | evet | `H` | Brüt/ Net Kg. Takibi Yapılacak mı Tartılı ürünlerde, ürünün birlikte tartıldığı darası düşülerek net miktarların hesaplanması ve bu net miktarların depo kayıtlarına işlenmesi istendiğinde işaretlenmesi gereken parametredir. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `C_YEDEK3` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `C_YEDEK4` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `I_YEDEK5` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `I_YEDEK6` | TDBINTEGER | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `F_YEDEK7` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `F_YEDEK8` | TDBFLOAT | evet | `0` | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `D_YEDEK9` | TDBDATETIME | evet |  | Default olarak 1899-12-30 00:00:00.000 tarihi bu sahaya yazılır |
| 22 | `D_YEDEK10` | TDBDATETIME | evet |  | Default olarak 1899-12-30 00:00:00.000 tarihi bu sahaya yazılır |
| 23 | `V_YEDEK11` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `V_YEDEK12` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDEPPARAM_PKEY` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDEPPARAM_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDEPPARAM_PKEY` | `SUBE_KODU` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, SERIFATURADAMI, IRSKAYIT_TUTSUN, URUNHACIMKONTROLU, HUCREMALGRUBUKONT, KAPASITEKONTROLU
FROM dbo.TBLDEPPARAM WITH (NOLOCK);
```
