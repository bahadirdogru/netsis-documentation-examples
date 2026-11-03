---
title: TBLBILDEG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblbildeg/
---

# TBLBILDEG

> PLANLANAN BILESEN DEGISIKLIKLERI KAYITLARINI TUTAN TABLODUR.

- **Modül:** [ÜRETİM](/veritabani/moduller/uretim/)
- **Kolon sayısı:** 31

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `REVNO` | varchar(8) | hayır |  | Revizyon numarasini tutan sahadır. |
| 3 | `MAMUL_KODU` | TDBSTOKKOD | evet |  | Mamul kodunu tutan sahadır. |
| 4 | `ESKIBIL` | TDBSTOKKOD | evet |  | Eski bilesenin kodunu tutan sahadır. |
| 5 | `OPNO` | varchar(8) | evet |  | Bilesenin sıra numarasını tutan sahadır. |
| 6 | `YENIBIL` | TDBSTOKKOD | evet |  | Yeni bilesenin kodunu tutan sahadır. |
| 7 | `OPR_BIL` | char(1) | evet | `B` | Operasyon mu, bilesen mi sahasıdır. |
| 8 | `YENIDURUM` | char(1) | evet | `E` | Kendisi ise E; Katalog ise A; iptal ise I; Yeni kayıt ise K; Aynı kayıt ise A degerini tutar. |
| 9 | `YENIMIKTAR` | TDBFLOAT | evet | `0` | Yeni bilesenin miktar sahasıdır. |
| 10 | `YENISTOK_MALIYET` | char(1) | evet | `S` | Stok ise S; maliyet ise M degerini tutan sahadır. |
| 11 | `YENIMIKTARSABITLE` | char(1) | evet | `H` | Yeni bilesenin icin miktar sabitle sahasıdır. |
| 12 | `YENIACIKLAMA` | TDBMEMO | evet |  | Acıklama sahasıdır. |
| 13 | `YENIISTKODU` | varchar(5) | evet |  | Yeni istasyon kodunu tutan sahadır. |
| 14 | `YENISETUPSURE` | TDBFLOAT | evet | `0` | Yeni operasyon icin hazırlık suresını tutan sahadır. |
| 15 | `YENIURETSURE` | TDBFLOAT | evet | `0` | Yeni operasyon icin uretim suresını tutan sahadır. |
| 16 | `YENIGECISSURE` | TDBFLOAT | evet | `0` | Yeni operasyon icin gecis suresını tutan sahadır. |
| 17 | `YENIOVERLAPMIK` | TDBFLOAT | evet | `0` | Yeni operasyon icin gecis miktarını tutan sahadır. |
| 18 | `YENIISCILIKMAL` | TDBFLOAT | evet | `0` | Yeni operasyon icin iscilik maliyetidir. |
| 19 | `YENIDIGERMAL` | TDBFLOAT | evet | `0` | Yeni operasyon icin diger maliyetlerdir. |
| 20 | `YENIGENELMAL` | TDBFLOAT | evet | `0` | Yeni operasyon için genel maliyet değeri. |
| 21 | `YENIOPMIK` | TDBFLOAT | evet | `-1` | Sim.Tez. Miktarını tutan sahadır. |
| 22 | `ISLENDI` | char(1) | evet | `H` | İslendi parametresi isaretli ise E degerini tutar. |
| 23 | `YENIONCELIK` | TDBINTEGER | evet | `0` | Yeni oncelik degerini tutan sahadır. |
| 24 | `YENIPLANLAMA_ORANI` | TDBFLOAT | evet | `0` | Yeni planlama oranını tutan sahadır. |
| 25 | `YENIALTERNATIF_POLITIKASI_DAT` | char(1) | evet | `H` | DAT alternatif politikasını tutan sahadır. |
| 26 | `YENIALTERNATIF_POLITIKASI_ACF` | char(1) | evet | `H` | Ambar cıkıs fisi alternatif politikasını tutan sahadır. |
| 27 | `YENIALTERNATIF_POLITIKASI_USK` | char(1) | evet | `H` | Uretim sonu kaydı alternatif politikasını tutan sahadır. |
| 28 | `YENIALTERNATIF_POLITIKASI_MRP` | char(1) | evet | `H` | MRP alternatif politikasını tutan sahadır. |
| 29 | `MAMYAPKOD` | varchar(15) | evet | `null` | Mamul yapılandırma kodunu tutan sahadır. |
| 30 | `ESKIBILYAPKOD` | varchar(15) | evet | `null` | Eski bilesen yapılandırma kodunu tutan sahadır. |
| 31 | `YENIBILYAPKOD` | varchar(15) | evet | `null` | Yeni bilesen yapılandırma kodunu tutan sahadır. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| FOREIGN KEY | `TBLBILDEG_FKEY` | `REVNO` |
| FOREIGN KEY | `TBLBILDEG_FKEY1` | `YENIISTKODU` |
| FOREIGN KEY | `TBLBILDEG_FKEY2` | `ISLETME_KODU` |
| FOREIGN KEY | `TBLBILDEGFKEY` | `MAMYAPKOD` |
| FOREIGN KEY | `TBLBILDEGFKEY2` | `ESKIBILYAPKOD` |
| FOREIGN KEY | `TBLBILDEGFKEY3` | `YENIBILYAPKOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLBILDEG_IDX_YAPKOD1` | `MAMYAPKOD, MAMUL_KODU` | Non-unique, Non-clustered |
| `TBLBILDEG_IND_4` | `ISLETME_KODU` | Non-unique, Non-clustered |
| `TBLBILDEG_IND1` | `REVNO, MAMUL_KODU, MAMYAPKOD, ESKIBIL, ESKIBILYAPKOD, OPNO` | Unique, Non-clustered |
| `TBLBILDEG_IND2` | `MAMUL_KODU` | Non-unique, Non-clustered |
| `TBLBILDEG_IND3` | `ESKIBIL` | Non-unique, Non-clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, REVNO, MAMUL_KODU, ESKIBIL, OPNO, YENIBIL
FROM dbo.TBLBILDEG WITH (NOLOCK);
```
