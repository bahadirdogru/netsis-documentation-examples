---
title: TBLSTMUHDETAY
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstmuhdetay/
---

# TBLSTMUHDETAY

> MUHASEBE DETAY KOD GİRİŞİNDE TANIMLANAN STOKLARIN ENTEGRASYONLA BAĞLANTILARININ SAĞLANDIĞI BİLGİLERİ TUTAR. ŞUBELER BAZINDA AYRI TANIMLANIR.

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 31
- **Birincil anahtar:** `SUBE_KODU+MUH_DETAYKOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `MUH_DETAYKOD` | TDBSMALLINT | hayır | `0` | Stok kartı kayıtlarında muh detay sahasına girilen muhasebe detay kodunu gösterir. |
| 4 | `ALIS_HESABI` | TDBMUHKOD | evet |  | İlgili stoğun alış hesabı için girilen muhasebe kodunu gösterir. |
| 5 | `SATISTAN_IADE` | TDBMUHKOD | evet |  | İlgili stoğun satıştan iade hesabı için girilen muhasebe kodunu gösterir. |
| 6 | `SATIS_HESABI` | TDBMUHKOD | evet |  | İlgili stoğun satış hesabı için girilen muhasebe kodunu gösterir. |
| 7 | `ALISTAN_IADE` | TDBMUHKOD | evet |  | İlgili stoğun alıştan iade hesabı için girilen muhasebe kodunu gösterir. |
| 8 | `SATIS_DIGER_1` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer1 hesabı için girilen muhasebe kodunu gösterir. |
| 9 | `SATIS_DIGER_2` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer2 hesabı için girilen muhasebe kodunu gösterir. |
| 10 | `SATIS_DIGER_3` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer3 hesabı için girilen muhasebe kodunu gösterir. |
| 11 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 12 | `S_YEDEK2` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 13 | `S_YEDEK3` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 14 | `S_YEDEK4` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 15 | `S_YEDEK5` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 16 | `S_YEDEK6` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 17 | `S_YEDEK7` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 18 | `S_YEDEK8` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `S_YEDEK9` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `S_YEDEK10` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `S_YEDEK11` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `S_YEDEK12` | TDBMUHKOD | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 23 | `I_YEDEK1` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 24 | `I_YEDEK2` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `SATIS_DIGER_4` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer4 hesabı için girilen muhasebe kodunu gösterir. |
| 28 | `SATIS_DIGER_5` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer5 hesabı için girilen muhasebe kodunu gösterir. |
| 29 | `SATIS_DIGER_6` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer6 hesabı için girilen muhasebe kodunu gösterir. |
| 30 | `SATIS_DIGER_7` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer7 hesabı için girilen muhasebe kodunu gösterir. |
| 31 | `SATIS_DIGER_8` | TDBMUHKOD | evet |  | İlgili stoğun satış diğer8 hesabı için girilen muhasebe kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTMUHDETAYPKEY` | `SUBE_KODU+MUH_DETAYKOD` |
| FOREIGN KEY | `TBLSTMUHDETAY_FKEY` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTMUHDETAY_IND_1` | `SUBE_KODU+MUH_DETAYKOD` | Unique, Non-clustered |
| `TBLSTMUHDETAYPKEY` | `SUBE_KODU+MUH_DETAYKOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ISLETME_KODU, MUH_DETAYKOD, ALIS_HESABI, SATISTAN_IADE, SATIS_HESABI
FROM dbo.TBLSTMUHDETAY WITH (NOLOCK);
```
