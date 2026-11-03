---
title: TBLDAGPARAM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldagparam/
---

# TBLDAGPARAM

> DAGITIM MODULU PARAMETRE KAYITLARINI TUTAN TABLODUR.

- **Modül:** [DAĞITIM](/veritabani/moduller/dagitim/)
- **Kolon sayısı:** 84
- **Birincil anahtar:** `SUBE_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `DEPOKOD` | TDBINTEGER | evet |  | Lokal depo kodunu tutar. |
| 3 | `KASAKODSORULACAKMI` | char(1) | evet |  | Plasiyer bazında kaza uygulaması parametresi isaretli ise 1;degil ise 0 degerini tutar. |
| 4 | `KASAKOD` | varchar(8) | evet |  | Kasa kodunu tutar. |
| 5 | `DOSYADIZIN` | varchar(200) | evet |  | Dosya dizinini tutar. |
| 6 | `KDVDAHILMI` | char(1) | evet |  | KDV dahil isaretli ise 1;degil ise 0 degerini tutar. |
| 7 | `BELGEACIKOLSUNMU` | char(1) | evet |  | Irs.fat tipi acık olsun isaretli ise 1;degil ise 0 degerini tutar. |
| 8 | `TARTILIMALUYGULANSINMI` | char(1) | evet |  | Tartılı mal uygulaması kullanımda isaretli ise 1;degil ise 0 degerini tutar. |
| 9 | `AGIRLIKBASLANGICYER` | TDBINTEGER | evet |  | Agırlık baslangıc yeri degerini tutar. |
| 10 | `AGIRLIKBASLANGICUZUNLUK` | TDBINTEGER | evet |  | Agırlık baslangıc uzunlugu degerini tutar. |
| 11 | `RAFTKBMIKSORULSUNMU` | char(1) | evet |  |  |
| 12 | `STOKGORSIRA` | varchar(20) | evet |  |  |
| 13 | `CARIGORSIRA` | varchar(20) | evet |  |  |
| 14 | `DISTKOD` | varchar(5) | evet |  | Distributor kodunu tutar. |
| 15 | `DISTBOLGE` | varchar(15) | evet |  | Distributor bolge kodunu tutar. |
| 16 | `DISTUNVAN` | varchar(20) | evet |  | Distributor unvanını tutar. |
| 17 | `DISTADRES` | varchar(150) | evet |  | Distributor adresini tutar. |
| 18 | `DISTVERGIDAIRE` | varchar(15) | evet |  | Distributor vergi dairesini tutar. |
| 19 | `DISTVERGINO` | varchar(15) | evet |  | Distributor vergi numarasini tutar. |
| 20 | `DISTTEL` | varchar(15) | evet |  | Distributor tel numarasını tutar. |
| 21 | `DISTFAX` | varchar(15) | evet |  | Distributor fax numarasını tutar. |
| 22 | `DISTPOSTAKOD` | varchar(6) | evet |  | Distributor posta kodunu tutar. |
| 23 | `DISTEPOSTA` | varchar(255) | evet |  | Distributor eposta adresini tutar. |
| 24 | `DISTHTTPADRES` | varchar(255) | evet |  | Distributor web adresini tutar. |
| 25 | `STOKBAGLANTI` | TDBINTEGER | evet |  | Plasiyer stok baglantı kodunu tutar. |
| 26 | `SIPILEIRSSORULSUNMU` | char(1) | evet |  | Siparis ile birlikte irsaliye de olussun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 27 | `KOSULKODU` | varchar(8) | evet |  | Kosul kodunu tutar. |
| 28 | `MALFAZSOR` | char(1) | evet |  | Mal fazlası sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 29 | `MALFAZMUDAHALE` | char(1) | evet |  | Mal fazlasına mudahale edilsinmi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 30 | `ISK1SOR` | char(1) | evet |  | İskonto 1 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 31 | `ISK1MUDAHALE` | char(1) | evet |  | İskonto 1 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 32 | `ISK2SOR` | char(1) | evet |  | İskonto 2 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 33 | `ISK2MUDAHALE` | char(1) | evet |  | İskonto 2 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 34 | `ISK3SOR` | char(1) | evet |  | İskonto 3 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 35 | `ISK3MUDAHALE` | char(1) | evet |  | İskonto 3 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 36 | `GENELISK1SOR` | char(1) | evet |  | Genel iskonto 1 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 37 | `GENELISK1MUDAHALE` | char(1) | evet |  | Genel iskonto 1 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 38 | `GENELISK2SOR` | char(1) | evet |  | Genel iskonto 2 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 39 | `GENELISK3SOR` | char(1) | evet |  | Genel iskonto 3 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 40 | `VADESOR` | char(1) | evet |  | Vade sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 41 | `VADEMUDAHALE` | char(1) | evet |  | Vade mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 42 | `UZAKERISIM` | char(1) | evet |  | Uzaktan erisim desteklensin parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 43 | `SERVERIP` | varchar(200) | evet |  | Server IP/Host name bilgisini tutar. |
| 44 | `XMLPATH` | varchar(200) | evet |  | XML Dosya yeri bilgisini tutar. |
| 45 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 46 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 47 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 48 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 49 | `C_YEDEK1` | char(1) | evet |  | Dispatching de alis irsaliyesi yuklensin parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 50 | `C_YEDEK2` | char(1) | evet |  | Alıs irs./fat. fisno serisini tutar. |
| 51 | `C_YEDEK3` | char(1) | evet |  | Kapak iskontosu uygulansın parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 52 | `C_YEDEK4` | char(1) | evet |  | Son siparis faturalar el terminaline aktarılmasın parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 53 | `L_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 54 | `L_YEDEK2` | TDBINTEGER | evet |  | Kapak satır iskontosu icin,sat.isk1=1;sat.isk2=2;sat.isk3=3 degerini tutar. |
| 55 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 56 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 57 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 58 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 59 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 60 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 61 | `FISNOSERI` | char(1) | evet |  | Satıs irs/fat fisno serisini tutar. |
| 62 | `BASFATDUZELTME` | char(1) | evet |  | Basılan faturalar uzerinde duzeltme yapılamasın parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 63 | `MIKKONT` | char(1) | evet |  | Miktar sıfır gecilmesin parametresi isaretli ise 1 degerini tutar. |
| 64 | `PPCYAZILIM` | int | hayır | `0` | El terminalinde kullanılan yazilim Netsis Dagıtım uygulamaları V1.0 ise 0;MobiNet ise 1 degerini tutar. |
| 65 | `WEBSRVADRES` | varchar(100) | evet |  | Web servisi adresini tutar. |
| 66 | `FIRMAKODU` | int | evet |  | Firma kodunu tutar. |
| 67 | `COKLUOLCUBIRIM` | char(1) | evet | `H` | Hacim agırlık olcu biriminden alinsin parametresi isaretli ise E;degil ise H degerini alır. |
| 68 | `ROUTEGUNSAYISI` | int | evet |  | Route gun sayısı. |
| 69 | `KOSULFIYATGUNCELLE` | char(1) | evet | `H` | Kosul fiyat bilgileri guncellensin parametresi isaretli ise E;degil ise H degerini alır. |
| 70 | `ISK4SOR` | char(1) | evet |  | İskonto 4 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 71 | `ISK4MUDAHALE` | char(1) | evet |  | İskonto 4 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 72 | `ISK5SOR` | char(1) | evet |  | İskonto 5 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 73 | `ISK5MUDAHALE` | char(1) | evet |  | İskonto 5 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 74 | `ISK6SOR` | char(1) | evet |  | İskonto 6 sorulsun mu parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 75 | `ISK6MUDAHALE` | char(1) | evet |  | İskonto 6 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 76 | `GENELISK2MUDAHALE` | char(1) | evet |  | Genel iskonto 2 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 77 | `GENELISK3MUDAHALE` | char(1) | evet |  | Genel iskonto 3 mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 78 | `DISPFATURAYUKLE` | char(1) | evet |  | Dispatchingde faturalar yuklensin parametresi isaretli ise E;degil ise H degerini alır. |
| 79 | `KOSULMUDAHALE` | char(1) | evet |  | Kosul mudahale parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 80 | `OLCUBRMUDAHALE` | char(1) | evet |  | Olcu birimine mudahale edilsin mi parametresi isaretli ise 1;degil ise 0 degerini alır. |
| 81 | `KREDIKASAKOD` | varchar(8) | evet |  | Kredi tahsilat kasa kodunu tutar. |
| 82 | `OZHESAPBILAKTAR` | char(1) | evet | `E` | Ozel Hesap bilgileri aktarılsın parametresi isaretli ise E;degil ise H degerini alır. |
| 83 | `SIFIRGUNSIPAKTAR` | char(1) | evet | `H` | Sıfır vade gunlu siparisler kapalı olarak aktarılsın parametresi isaretli ise E;degil ise H degerini alır. |
| 84 | `DISPYUKSERITAKIP` | char(1) | evet | `H` | Dispatching de yukleme no seri takibi var isaretli ise E;degil ise H degerini tutar. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `PK_TBLDAGPARAM` | `SUBE_KODU` |
| FOREIGN KEY | `TBLDAGPARAM_SUBEKODU_FKEY1` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `PK_TBLDAGPARAM` | `SUBE_KODU` | clustered, unique |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, DEPOKOD, KASAKODSORULACAKMI, KASAKOD, DOSYADIZIN, KDVDAHILMI
FROM dbo.TBLDAGPARAM WITH (NOLOCK);
```
