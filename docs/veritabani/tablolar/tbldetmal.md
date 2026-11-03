---
title: TBLDETMAL
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldetmal/
---

# TBLDETMAL

> DETAYLI MALİYET ANALİZİ TABLOSUDUR

- **Modül:** [RAPOR](/veritabani/moduller/rapor/)
- **Kolon sayısı:** 107
- **Birincil anahtar:** `KOD, TARIH`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `KOD` | TDBSTOKKOD | hayır |  | Mamul ve yarımamullerin stok kodları bilgisi |
| 3 | `TARIH` | TDBDATETIME | hayır |  | Tarih bilgisi tutulur |
| 4 | `ISCORT` | TDBFLOAT | evet | `0` | İşcilik giderleri ortalaması |
| 5 | `HAMORT` | TDBFLOAT | evet | `0` | Hammadde giderleri ortalaması |
| 6 | `ENERJIORT` | TDBFLOAT | evet | `0` | Enerji giderleri ortalaması |
| 7 | `AMORTORT` | TDBFLOAT | evet | `0` | Amortisman giderleri ortalaması |
| 8 | `YARDSERORT` | TDBFLOAT | evet | `0` | Yardımcı servis giderleri ortalaması |
| 9 | `YEDEKPORT` | TDBFLOAT | evet | `0` | Yedek parça giderleri ortalaması |
| 10 | `YARORT` | TDBFLOAT | evet | `0` | Yarımamul giderleri ortalaması |
| 11 | `AMBORT` | TDBFLOAT | evet | `0` | Ambalaj giderleri ortalaması |
| 12 | `DIGER1ORT` | TDBFLOAT | evet | `0` | Diğer gider-1 ortalaması |
| 13 | `DIGER2ORT` | TDBFLOAT | evet | `0` | Diğer gider-2 ortalaması |
| 14 | `DIGER3ORT` | TDBFLOAT | evet | `0` | Diğer gider-3 ortalaması |
| 15 | `DIGER4ORT` | TDBFLOAT | evet | `0` | Diğer gider-4 ortalaması |
| 16 | `DIGER5ORT` | TDBFLOAT | evet | `0` | Diğer gider-5 ortalaması |
| 17 | `CURISCORT` | TDBFLOAT | evet | `0` | Dövizli işçilik giderleri ortalaması |
| 18 | `CURHAMORT` | TDBFLOAT | evet | `0` | Dövizli hammadde giderleri ortalaması |
| 19 | `CURENERJIORT` | TDBFLOAT | evet | `0` | Dövizli enerji giderleri ortalaması |
| 20 | `CURAMORTORT` | TDBFLOAT | evet | `0` | Dövizli amortisman giderleri ortalaması |
| 21 | `CURYARDSERORT` | TDBFLOAT | evet | `0` | Dövizli yardımcı servis giderleri ortalaması |
| 22 | `CURYEDEKPORT` | TDBFLOAT | evet | `0` | Dövizli yedek parça giderleri ortalaması |
| 23 | `CURYARORT` | TDBFLOAT | evet | `0` | Dövizli yarımamul giderleri ortalaması |
| 24 | `CURAMBORT` | TDBFLOAT | evet | `0` | Dövizli ambalaj giderleri ortalaması |
| 25 | `CURDIGER1ORT` | TDBFLOAT | evet | `0` | Dövizli diğer gider-1 ortalaması |
| 26 | `CURDIGER2ORT` | TDBFLOAT | evet | `0` | Dövizli diğer gider-2 ortalaması |
| 27 | `CURDIGER3ORT` | TDBFLOAT | evet | `0` | Dövizli diğer gider-3 ortalaması |
| 28 | `CURDIGER4ORT` | TDBFLOAT | evet | `0` | Dövizli diğer gider-4 ortalaması |
| 29 | `CURDIGER5ORT` | TDBFLOAT | evet | `0` | Dövizli diğer gider-5 ortalaması |
| 30 | `NAKISCTUT` | TDBFLOAT | evet | `0` | Nakil işçilik giderleri tutarı |
| 31 | `NAKHAMTUT` | TDBFLOAT | evet | `0` | Nakil hammadde giderleri tutarı |
| 32 | `NAKENERTUT` | TDBFLOAT | evet | `0` | Nakil enerji giderleri tutarı |
| 33 | `NAKAMORTUT` | TDBFLOAT | evet | `0` | Nakil amortisman giderleri tutarı |
| 34 | `NAKYARDSTUT` | TDBFLOAT | evet | `0` | Nakil yardımcı servis giderleri tutarı |
| 35 | `NAKYEDEKPTUT` | TDBFLOAT | evet | `0` | Nakil yedek parça giderleri tutarı |
| 36 | `NAKAMBTUT` | TDBFLOAT | evet | `0` | Nakil ambalaj giderleri tutarı |
| 37 | `NAKDIG1TUT` | TDBFLOAT | evet | `0` | Nakil diğer gider-1 tutarı |
| 38 | `NAKDIG2TUT` | TDBFLOAT | evet | `0` | Nakil diğer gider-2 tutarı |
| 39 | `NAKDIG3TUT` | TDBFLOAT | evet | `0` | Nakil diğer gider-3 tutarı |
| 40 | `NAKDIG4TUT` | TDBFLOAT | evet | `0` | Nakil diğer gider-4 tutarı |
| 41 | `NAKDIG5TUT` | TDBFLOAT | evet | `0` | Nakil diğer gider-5 tutarı |
| 42 | `CURNAKISCTUT` | TDBFLOAT | evet | `0` | Dövizli nakil işçilik giderleri tutarı |
| 43 | `CURNAKHAMTUT` | TDBFLOAT | evet | `0` | Dövizli nakil hammadde giderleri tutarı |
| 44 | `CURNAKENERTUT` | TDBFLOAT | evet | `0` | Dövizli nakil enerji giderleri tutarı |
| 45 | `CURNAKAMORTUT` | TDBFLOAT | evet | `0` | Dövizli nakil amortisman giderleri tutarı |
| 46 | `CURNAKYARDSTUT` | TDBFLOAT | evet | `0` | Dövizli nakil yardımcı servis giderleri tutarı |
| 47 | `CURNAKYEDEKPTUT` | TDBFLOAT | evet | `0` | Dövizli nakil yedek parça giderleri tutarı |
| 48 | `CURNAKAMBTUT` | TDBFLOAT | evet | `0` | Dövizli nakil ambalaj giderleri tutarı |
| 49 | `CURNAKDIG1TUT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer gider-1 tutarı |
| 50 | `CURNAKDIG2TUT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer gider-2 tutarı |
| 51 | `CURNAKDIG3TUT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer gider-3 tutarı |
| 52 | `CURNAKDIG4TUT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer gider-4 tutarı |
| 53 | `CURNAKDIG5TUT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer gider-5 tutarı |
| 54 | `DEVIRDUZ` | TDBFLOAT | evet | `0` | Yarımamul sarf tutarı ile nakil tutarları arasındaki farktır. Değerinin 0 sıfır olması gereklidir. Çünkü, nakil tutarlarının toplamı, yarımamul sarf tutarını oluşturmaktadır. |
| 55 | `CURDEVIRDUZ` | TDBFLOAT | evet | `0` | Yarımamul sarf ve nakil tutarları arasındaki farkın döviz cinsinden değeridir. |
| 56 | `NAKISCORT` | TDBFLOAT | evet | `0` | Nakil işçilik giderleri ortalaması |
| 57 | `NAKHAMORT` | TDBFLOAT | evet | `0` | Nakil hammadde giderleri ortalaması |
| 58 | `NAKENERJIORT` | TDBFLOAT | evet | `0` | Nakil enerji giderleri ortalaması |
| 59 | `NAKAMORTORT` | TDBFLOAT | evet | `0` | Nakil amortisman giderleri ortalaması |
| 60 | `NAKYARDSERORT` | TDBFLOAT | evet | `0` | Nakil yardımcı servis giderleri ortalaması |
| 61 | `NAKYEDEKPORT` | TDBFLOAT | evet | `0` | Nakil yedek parça giderleri ortalaması |
| 62 | `NAKAMBALAJORT` | TDBFLOAT | evet | `0` | Nakil ambalaj giderleri ortalaması |
| 63 | `NAKDIG1ORT` | TDBFLOAT | evet | `0` | Nakil diğer-1 giderleri ortalaması |
| 64 | `NAKDIG2ORT` | TDBFLOAT | evet | `0` | Nakil diğer-2 giderleri ortalaması |
| 65 | `NAKDIG3ORT` | TDBFLOAT | evet | `0` | Nakil diğer-3 giderleri ortalaması |
| 66 | `NAKDIG4ORT` | TDBFLOAT | evet | `0` | Nakil diğer-4 giderleri ortalaması |
| 67 | `NAKDIG5ORT` | TDBFLOAT | evet | `0` | Nakil diğer-5 giderleri ortalaması |
| 68 | `CURNAKISCORT` | TDBFLOAT | evet | `0` | Dövizli nakil işçilik giderleri ortalaması |
| 69 | `CURNAKHAMORT` | TDBFLOAT | evet | `0` | Dövizli nakil hammadde giderleri ortalaması |
| 70 | `CURNAKENERJIORT` | TDBFLOAT | evet | `0` | Dövizli nakil enerji giderleri ortalaması |
| 71 | `CURNAKAMORTORT` | TDBFLOAT | evet | `0` | Dövizli nakil amortisman giderleri ortalaması |
| 72 | `CURNAKYARDSERORT` | TDBFLOAT | evet | `0` | Dövizli nakil yardımcı servis giderleri ortalaması |
| 73 | `CURNAKYEDEKPORT` | TDBFLOAT | evet | `0` | Dövizli nakil yedek parça giderleri ortalaması |
| 74 | `CURNAKAMBALAJORT` | TDBFLOAT | evet | `0` | Dövizli nakil ambalaj giderleri ortalaması |
| 75 | `CURNAKDIG1ORT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer-1 giderleri ortalaması |
| 76 | `CURNAKDIG2ORT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer-2 giderleri ortalaması |
| 77 | `CURNAKDIG3ORT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer-3 giderleri ortalaması |
| 78 | `CURNAKDIG4ORT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer-4 giderleri ortalaması |
| 79 | `CURNAKDIG5ORT` | TDBFLOAT | evet | `0` | Dövizli nakil diğer-5 giderleri ortalaması |
| 80 | `DEVDUZORT` | TDBFLOAT | evet | `0` | Maliyet tablosundaki ortalama maliyet ile bu tablodaki DETMAL kendi seviyesindeki ortalama maliyetlerin farkıdır. Beklenen değeri 0 sıfır’dır. Ancak, iade işlemi olmuşsa fark beklenir ve bu yarı mamulün sarf ettiği diğer mamul / yarımamullerde DEVIRDUZ değerinde farklılık beklenir. İade dışındaki farklılıklarda, inceleme yapılması gerekmektedir. Prosedür dışında yapılmış bir kayıt olup olmadığı araştırılır. Örneğin; Mamule hammadde sarfı yapılmış ama mamul üretim kaydı yapılmamış olabilir. |
| 81 | `CURDEVDUZORT` | TDBFLOAT | evet | `0` | Maliyet tablosundaki dövizli ortalama maliyet ile bu tablodaki DETMAL kendi seviyesindeki dövizli ortalama maliyetlerin farkıdır. |
| 82 | `DEVIRBAK` | TDBFLOAT | evet | `0` | Bilgi amaçlı stok bakiyesidir |
| 83 | `URETMIK` | TDBFLOAT | evet | `0` | Bilgi amaçlı üretim miktarıdır. |
| 84 | `OAYNAKISCORT` | TDBFLOAT | evet | `0` | O ayki nakil işçilik giderleri ortalaması |
| 85 | `OAYNAKHAMORT` | TDBFLOAT | evet | `0` | O ayki nakil hammadde giderleri ortalaması |
| 86 | `OAYNAKENERJIORT` | TDBFLOAT | evet | `0` | O ayki nakil enerji giderleri ortalaması |
| 87 | `OAYNAKAMORTORT` | TDBFLOAT | evet | `0` | O ayki nakil amortisman giderleri ortalamasi |
| 88 | `OAYNAKYARDSERORT` | TDBFLOAT | evet | `0` | O ayki nakil yardımcı servis giderleri ortalaması |
| 89 | `OAYNAKYEDEKPORT` | TDBFLOAT | evet | `0` | O ayki nakil yedek parça giderleri ortalaması |
| 90 | `OAYNAKAMBALAJORT` | TDBFLOAT | evet | `0` | O ayki nakil ambalaj giderleri ortalaması |
| 91 | `OAYNAKDIG1ORT` | TDBFLOAT | evet | `0` | O ayki nakil diğer-1 giderleri ortalaması |
| 92 | `OAYNAKDIG2ORT` | TDBFLOAT | evet | `0` | O ayki nakil diğer-2 giderleri ortalaması |
| 93 | `OAYNAKDIG3ORT` | TDBFLOAT | evet | `0` | O ayki nakil diğer-3 giderleri ortalaması |
| 94 | `OAYNAKDIG4ORT` | TDBFLOAT | evet | `0` | O ayki nakil diğer-4 giderleri ortalaması |
| 95 | `OAYNAKDIG5ORT` | TDBFLOAT | evet | `0` | O ayki nakil diğer-5 giderleri ortalaması |
| 96 | `CUROAYNAKISCORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil işçilik giderleri ort. |
| 97 | `CUROAYNAKHAMORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil hammadde giderleri ort |
| 98 | `CUROAYNAKENERJIORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil enerji giderleri ort. |
| 99 | `CUROAYNAKAMORTORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil amortisman giderleri ortalamasi |
| 100 | `CUROAYNAKYARDSERORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil yardımcı servis ort. |
| 101 | `CUROAYNAKYEDEKPORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil yedek parça giderleri ortalamasi |
| 102 | `CUROAYNAKAMBALAJORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil ambalaj giderleri ort. |
| 103 | `CUROAYNAKDIG1ORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil diğer-1 giderleri ort. |
| 104 | `CUROAYNAKDIG2ORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil diğer-2 giderleri ort. |
| 105 | `CUROAYNAKDIG3ORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil diğer-3 giderleri ort. |
| 106 | `CUROAYNAKDIG4ORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil diğer-4 giderleri ort. |
| 107 | `CUROAYNAKDIG5ORT` | TDBFLOAT | evet | `0` | Dövizli o ayki nakil diğer-5 giderleri ort. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDETMAL_PKEY` | `KOD, TARIH` |
| FOREIGN KEY | `TBLDETMAL_FKEY` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLDETMAL_FKEY1` | `KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDETMAL_IND_1` | `KOD` | Duplicate |
| `TBLDETMAL_IND_2` | `TARIH` | Duplicate |
| `TBLDETMAL_IND_3` | `ISLETME_KODU` | Duplicate |
| `TBLDETMAL_PKEY` | `KOD, TARIH` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, KOD, TARIH, ISCORT, HAMORT, ENERJIORT
FROM dbo.TBLDETMAL WITH (NOLOCK);
```
