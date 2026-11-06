---
title: Kimlikler ve enum'lar
description: REST uçlarında {id} biçimleri ve enum değerleri.
---

# Kimlikler ve enum'lar

## {id} biçimleri

Birçok kaynakta `{id}` tek bir kolon değil, `;` ile ayrılmış **bileşik anahtardır**. URL'de kullanırken encode edin (`;` → `%3B` gerekmez ama boşluk ve `/` içeren kodlar için gerekir).

| Kaynak | Biçim | Örnek |
|--------|-------|-------|
| `ItemSlips` | `<JTFaturaTip>;<FATIRS_NO>;<CARI_KOD>` | `ftSSip;000000000000123;120-01-001` |
| `ItemSlips` (yalnız tip ve no) | `<JTFaturaTip>;<FATIRS_NO>` | `ftASip;999999999999999` |
| Talep | `ftSatTalep;<FATIRS_NO>` | `ftSatTalep;000000000000025` |
| `CheckAndPNotesMain` | `<JTCekSenType>;<SC_ALB_NO>` | `csMCEK;A00000000000001` |
| `BankRemittanceTransfer` | `<JTBankaHavaleEftTip>;<?>;;<belge no>` | `tbVirman;1;;000000000000032` |
| `MixedReceiptsMain` | `<KasaKod>;<BelgeNo>;<CariKod>;<yyyy-MM-dd>` | `01;45454545;00001;2015-10-27` |
| `ARPTransactions` | `INC_KEY_NUMBER` (tam sayı) | `178` |
| `ARPs`, `Items`, `GLAccounts` | Kod | `120-01-001`, `STK001`, `120-01-013` |
| `ForExs`, `ExRates` | Tam sayı (`NETSISSIRA` / sıra) | `1` |
| `FinishedGoodsReceiptWChanges` | `UretSon_FisNo` | `000000000000428` |
| Proses kontrol | `ProsesKontrolNo` | `000000000000001` |
| Stok planlama | Stok kodu | `SER1X` |

`SC_ALB_NO` değeri `TBLMCEK`, `TBLMSEN`, `TBLBCEK`, `TBLBSEN` tablolarından gelir. Belgelenmemiş parçalar için ilgili kaynağın `definitions` ve `helpinfo` sayfalarına bakın.

## Enum değerleri

C# istemcisinde `JT` önekli enum'lar kullanılır (COM'daki `T` önekli enum'ların karşılığı).

| Enum | Değerler |
|------|----------|
| `JTFaturaTip` | `ftSFat` satış faturası, `ftAFat` alış faturası, `ftSSip` satış siparişi, `ftASip` alış siparişi, `ftSIrs` satış irsaliyesi, `ftAIrs` alış irsaliyesi, `ftSatTalep` satış talebi, `ftSatTeklif` satış teklifi, `ftDepo` depolar arası, `ftAmbarG` ambar giriş, `ftAmbarC` ambar çıkış |
| `JTFaturaTipi` | `ft_YurtIci`, `ft_YurtDisi`, `ft_Acik`, `ft_Ihracat`, `ft_Bos` (COM'daki `ft_Kapali`, `ft_Iade`… da beklenir) |
| `JNVTTipi` | `vtMSSQL` |
| `JTCekSenType` | `csMCEK` müşteri çeki, `csMSEN` müşteri senedi, `csBCEK` borç çeki, `csBSEN` borç senedi |
| `JTCekSenetEvrakKaydetmeTipi` | `ektCekSenAlma` |
| `JTKasaBasimTipi` | `kbMSen` |
| `JTBankaHavaleEftTip` | `tbBankaHvl` havale, `tbVirman` virman |
| `JTEBelgeTip` | `ebtEFatura`, `ebtEIrs` |
| `JTEBelgeYanitTipi` | `ytKabul` |
| `JTEBelgeBoxType` | `ebAll` |
| `JTDepoBelgeTipi` | `dbtAlisFaturasi`, `dbtDepolarArasiTransfer` |
| `JTDepoIslemTipi` | `ditYerlestirme` |
| `JTDepoHareketTipi` | `dhtNormal` |
| `JTAmbarHarTur` | `htUretim`, `htDepolar` |
| `JTCikisYeri` | `cyMasrafMer` |
| `JTHalFatTipi` | `hftHalKomisyon` |
| `JTBorcAlacak` | `cdHepsi` |
| `JTDovCevrimTipi` | `DovizSatis` |
| `JTHareketTipAraligi` | `Devir`, `Muhtelif` |
| `JTTarihAraligi` | `TKayit` |
| `JTMuhAktTuru` | `atAlacak` |
| `JTAcikReceteBilesenSirasi` | `arbsGirisSirasi` |
| `JTMrpUrunTipi` | `mutSiparisBakiye` |
| `JTMrpSiparis` | `msHepsi` |
| `JTSaticiKoduBosIhtiyaclar` | `biGetirilsin` |
| `JTGruplamaSecenekTipi` | `gsHicbiri` |
| `JTProsesKontrolTanimTipi` | `pkIstasyon` |
| `JTRaporSonucuCiktiTipi` | `rsctExcel` |

Liste örnek kodlarda geçen değerlerle sınırlıdır; tam liste için `GET api/v2/definitions/<Kaynak>` çıktısındaki enum tanımlarına bakın.

## Sayısal enum değerleri

JSON'da enum'lar ad (`"ftSFat"`) ya da sayı (`0`) olarak gönderilebilir. Gözlenen sayılar:

| Alan | Sayı | Anlamı | Kaynak |
|------|------|--------|--------|
| `EDocument.Tip`, `EDocumentType` | `0` / `1` / `2` | e-arşiv / e-fatura / e-irsaliye | Postman örneği |
| token `dbtype` | `0` | MSSQL | canlı deneme |
| `FaturaTip` | `0`–`9` | `ftSFat`, `ftAFat`, `ftSIrs`, `ftAIrs`, `ftDepo`, `ftLokalDepo`, `ftASip`, `ftSSip`, `ftAmbarG`, `ftAmbarC` | canlı deneme |
| `FatUst.TIPI` | `2` | Fatura ve irsaliyede `TIPI = 2` yazıldı. Siparişte tablo `3` (onaysız) kaldı, yanıt yine `2` gösterdi | canlı deneme |
| `BatchInvoicing.FaturaTip` | `2` | belirsiz | Postman örneği |

`FaturaTip` ile `FTIRSIP` eşlemesi (canlı deneme): `ftSFat` → `1`, `ftAFat` → `2`, `ftSIrs` → `3`, `ftAIrs` → `4`, `ftSSip` → `6`, `ftASip` → `7`, `ftAmbarC` → `8`, `ftAmbarG` → `9`. `ftLokalDepo` çıkışı `8`, girişi `9` yazar. Fatura kesilmiş satış irsaliyesi `A` olur.

> Enum sırası sürümler arasında değişebilir. Sayı yerine **adı** göndermek daha güvenlidir; bir sayının anlamından emin değilseniz `definitions` çıktısından doğrulayın.
