---
title: Temel tablolar
url: https://netsis.bahadirdogru.com/veritabani/temel-tablolar/
---

# Temel tablolar ve ilişkiler

Netsis'te en çok kullanılan tablolar ve bunları birleştirmek için gereken kolonlar. Şema dokümanı yabancı anahtarların hedefini vermediği için bu eşlemeler Netsis'in kendi indekslerinden ve gerçek sorgulardan çıkarılmıştır.

## Haritası

```text
TBLCASABIT (cari kart) ──1:1── TBLCASABITEK (cari ek bilgi)
   │ CARI_KOD
   ├──< TBLCAHAR (cari hareket)                       CARI_KOD
   ├──< TBLFATUIRS (fatura/irsaliye başlığı)          CARI_KODU
   └──< TBLSIPAMAS (sipariş başlığı)                  CARI_KODU

TBLFATUIRS ──< TBLSTHAR (fatura/irsaliye kalemleri)
   FTIRSIP = STHAR_FTIRSIP, FATIRS_NO = FISNO, CARI_KODU = STHAR_ACIKLAMA
TBLFATUIRS ──1:1── TBLFATUEK (fatura ek bilgi)
   FTIRSIP = FKOD, FATIRS_NO = FATIRSNO, CARI_KODU = CKOD, SUBE_KODU = SUBE_KODU

TBLSIPAMAS ──< TBLSIPATRA (sipariş kalemleri)
   FTIRSIP = STHAR_FTIRSIP, FATIRS_NO = FISNO, CARI_KODU = STHAR_ACIKLAMA

TBLSTSABIT (stok kart) ──1:1── TBLSTSABITEK (stok ek bilgi)
   │ STOK_KODU
   ├──< TBLSTHAR      STOK_KODU
   ├──< TBLSIPATRA    STOK_KODU
   └──< TBLSTOKPH     STOK_KODU (depo bazında bakiye özeti; `DEPO_KODU = 0` satırı bütün depoların toplamı)

TBLSTOKDP (depo tanımları)    DEPO_KODU ──< TBLSTHAR.DEPO_KODU
TBLMUPLAN (hesap planı)       HESAP_KODU ──< TBLMUHFIS.HES_KOD, TBLCASABIT.M_KOD
TBLKASA (kasa hareketleri)    KOD → cari kodu ya da muhasebe kodu (CARI_MUH'a göre)
```

## Cari

| Tablo | İçerik | Anahtar |
|-------|--------|---------|
| `TBLCASABIT` | Cari kart: kod, isim, tip, adres, vergi no, muhasebe kodu (`M_KOD`), plasiyer, risk | `CARI_KOD` |
| `TBLCASABITEK` | Cari ek bilgiler: kullanıcı tanımlı sahalar `KULL1S..8S`, `KULL1N..8N`, TC kimlik vb. | `CARI_KOD` |
| `TBLCAHAR` | Cari hareketleri: borç/alacak, belge no, vade | `INC_KEY_NUMBER` |

- Cari bakiye `TBLCAHAR` üzerinden hesaplanır: `SUM(BORC) - SUM(ALACAK)`. Kart üzerindeki toplam alanlar (`CM_BORCT`, `CM_ALACT`) Netsis tarafından tutulur ama raporlama için hareketten hesaplamak daha güvenlidir. Netsis'in kendi cari listeleri (`CARIANA`, `CARISABITOTR`), risk hesabı (`BORCRISKO` 0, negatif ya da boşken) ve yaşlandırma (dövizsiz modda) bakiyeyi bu kart sütunlarından okur; bu yüzden Netsis ekranıyla aynı rakamı görmek için `CM_BORCT − CM_ALACT` kullanılır, hareketten bağımsız bir doğruluk kontrolü için `TBLCAHAR` toplamıyla karşılaştırılır.
- REST'te cari hareketin kimliği `INC_KEY_NUMBER` değeridir (`api/v2/ARPTransactions/{id}`).
- Risk limiti `TBLCASABIT.RISK_SINIRI` değil `TBLCARISK.RISKLIMITI` içindedir; kartın risk anahtarı `TBLCASABITEK.CARIRISK` (`E` / `H`). Hesap: [Cari risk](/veritabani/cari-risk/).
- Carinin fiyat koşulu `TBLCASABIT.KOSULKODU`'dur: [Fiyat koşulları](/veritabani/fiyat-kosullari/).
- `TBLCASABIT.ULKE_KODU` (`varchar(4)`) ISO alfa-2 kodu tutar; şirket veritabanında ülke tablosu yoktur.

## Stok

| Tablo | İçerik | Anahtar |
|-------|--------|---------|
| `TBLSTSABIT` | Stok kartı: kod, ad, ölçü birimleri, KDV, fiyatlar, barkod 1-3, grup ve rapor kodları | `STOK_KODU` |
| `TBLSTSABITEK` | Stok ek bilgi: İngilizce isim (`INGISIM`), kullanıcı tanımlı sahalar | `STOK_KODU` |
| `TBLSTOKBAR` | Stokun ek barkodları (`TBLSTSABIT` üzerinde `BARKOD1`–`3` dışında) |
| `TBLSTHAR` | Tüm stok hareketleri: fatura ve irsaliye kalemleri, depo transferleri, ambar fişleri, üretim | `INCKEYNO` |
| `TBLSTOKDP` | Depo tanımları | `DEPO_KODU` |
| `TBLSTOKPH` | Stok bakiye özeti (depo ve yapılandırma kodu bazında; `DEPO_KODU = 0` satırı bütün depoların toplamıdır) | `STOK_KODU` |

Önemli `TBLSTHAR` kolonları:

| Kolon | Anlam |
|-------|-------|
| `STHAR_GCKOD` | `G` giriş, `C` çıkış |
| `STHAR_GCMIK` | Miktar (ana birimde) |
| `STHAR_NF` / `STHAR_BF` | Net / brüt birim fiyat |
| `STHAR_FTIRSIP` | Belge tipi (bkz. [FTIRSIP](/genel-bakis/#belge-tipi-alani-ftirsip)) |
| `STHAR_HTUR` | Hareket türü: `A` devir (belgesiz A satırları yıl açılışı ya da sayım düzeltme kaydı olabilir; tarihine bakın; ambar fişinde «Devir» hareket türü de A yazar), `J` fatura, `H` faturalanmamış irsaliye kalemi, `B` depolar arası, `N` faturalanmış irsaliye kalemi (bir kurulumda miktarı 0 görüldü, miktarı fatura kalemi taşıyordu), `L` iade, `C` üretim, `D` muhtelif, `I` kapalı fatura, `K` muhtelif müşteri faturası, `M` zayi iade … |
| `STHAR_BGTIP` | Kaynak: `F` faturadan, `I` irsaliyeden, `U`/`V` üretim girişi/çıkışı |
| `STHAR_ACIKLAMA` | **Fatura ve irsaliye kalemlerinde cari kodunu tutar.** Adı yanıltıcıdır. |
| `FISNO` | Bağlı belge numarası (`TBLFATUIRS.FATIRS_NO`) |
| `STHAR_SIPNUM` | Bağlı sipariş numarası |
| `IRSALIYE_NO` | Faturalanmış irsaliyenin numarası |
| `DEPO_KODU` | Depo |

## Fatura, irsaliye, sipariş

| Tablo | İçerik |
|-------|--------|
| `TBLFATUIRS` | Fatura ve irsaliye başlıkları (`FTIRSIP` 1, 2, 3, 4, 8, 9, A, B…). Toplamlar (`BRUTTUTAR`, `KDV`, `GENELTOPLAM`), vade, plasiyer, proje, `GIB_FATIRS_NO`. |
| `TBLFATUEK` | Fatura ek bilgileri: `ACIK1..16` ek açıklamalar (NetOpenX'te `EKACK1..16`), teslim bilgileri. Anahtar: `FKOD`, `FATIRSNO`, `CKOD`, `SUBE_KODU`. Netsis'in bir kısım görünümleri (`FATURAOTR`, `SIPHAROTR` …) dört sütunla bağlar; diğerleri oturum şubesine süzülen `FATUEK` görünümü üzerinden üç sütunla bağlar. Oturum dışı okumada `SUBE_KODU` eşitliği eklenmelidir; tek şubeli kurulumda sonucu değiştirmez. Alanların ekrandaki adları şirkete göre verilir: satış belgelerinde `TBLSFATUPRM.ACIKLAR1..16`, alış belgelerinde `TBLAFATUPRM.ACIKLAR1..16`. |
| `TBLSIPAMAS` | Sipariş başlıkları (`FTIRSIP` 6 müşteri, 7 satıcı). `TIPI`: `2` yurt içi, `6` yurt dışı, `1` kapalı, `3` onaylanmamış. |
| `TBLSIPATRA` | Sipariş kalemleri. Yapısı `TBLSTHAR` ile aynıdır (`STHAR_` önekli kolonlar). |

`KOD1` ve `KOD2` değerleri `TBLOZELKOD1` ve `TBLOZELKOD2` tablolarındadır (`OZELKOD`, `ACIKLAMA`). Ekrandaki etiketleri («Satış Kodu» gibi) ne şirket veritabanında ne de ortak `NETSIS` veritabanında saklanır. Sipariş başlığı ve kalemindeki koşul alanları: [Fiyat koşulları](/veritabani/fiyat-kosullari/). Numara sayacı `TBLFATUNO`: [Sipariş hesaplama ve değiştirme](/rest/siparis-islemleri/#numara-sayaci-tblfatuno). Kayıt damgaları: [Kayıt kullanıcısı](/veritabani/kayit-kullanicisi/).

`TBLFATUIRS.TIPI` değerleri: `1` kapalı, `2` açık, `3` muhtelif, `4` iade, `5` zayi iade, `6` ithalat/ihracat. NetOpenX'teki `TFaturaTipi` enum'u (`ft_Kapali`, `ft_Acik`, `ft_Muhtelif`, `ft_Iade`, `ft_ZIade`, `ft_Ihracat`…) bu alana yazar.

## E-belge parametreleri

| Tablo | İçerik |
|-------|--------|
| `TBLEFATPRM` | E-fatura parametreleri; `BIRIMKOD` e-fatura numara serisi (ör. `ABC`). Sertifika ve entegratör ayarları da burada; entegrasyon yalnız `BIRIMKOD` seçmeli |
| `TBLEARSIVPRM` | E-arşiv parametreleri; `BIRIMKOD` e-arşiv serisi. Sertifika ve entegratör ayarları da burada; yalnız `BIRIMKOD` seçilmeli |
| `TBLEIRSSERI` | E-irsaliye serileri (`SERI`); `C_YEDEK1` NULL olanlar kullanılabilir |
| `TBLDIZAYNSABIT` | Belge dizaynları. `DIZAYNTIPI`: `99` e-fatura, `100` e-arşiv, `104` e-irsaliye (gözlenen değerler) |

Üç seri tablosunda da seriler `SUBE_KODU` ile ayrılır. Hangi serinin kullanılacağı ve sorgular: [E-belge > Seri bilgileri](/netopenx/e-belge/#seri-bilgileri).

## Kasa, muhasebe, diğer

| Tablo | İçerik |
|-------|--------|
| `TBLKASAMAS`, `TBLKASA` | Kasa tanımı (`KSMAS_KOD`) ve kasa hareketleri (anahtar `SIRA`). `IO`: `G` gelir, `C` gider. `TIP`: `B` banka, `C` cari, `E` çek, `F` fatura, `M` muhasebe, `S` senet, `T` transfer, `K` kredi kartı. `CARI_MUH` yalnız `TIP` = `F` ve `M` satırlarında karşı tarafı seçer: `C` ise cari, değilse muhasebe hesabı. Diğer türlerde karşı taraf `TIP`'ten gelir. Ayrıntı: [Finans tabloları](/veritabani/finans-tablolari/) |
| `TBLBNKSABIT`, `TBLBNKHESSABIT`, `TBLBNKHESTRA` | Banka, banka hesabı (`NETHESKODU`) ve hesap hareketleri (`NETHESKODU` + `INCKEYNO`) |
| `TBLDEKOMAS`, `TBLDEKOTRA` | Dekont başlığı ve satırları; bağ `SERI_NO` + `DEKONT_NO` (`INCKEYNO` değil) |
| `TBLMUPLAN` | Muhasebe hesap planı (`HESAP_KODU`) |
| `TBLMUHFIS` | Yevmiye fiş satırları (`AY_KODU`, `FISNO`, `HES_KOD`, `BA`) |
| `TBLMUHAGEC` | Muhasebe entegrasyonuna bekleyen kayıtlar |
| `TBLMCEK`, `TBLMSEN` | Müşteri çekleri / senetleri; cari `SC_VERENK` |
| `TBLCARISK`, `TBLBNKTEMSABIT` | Cari risk limiti ve yüzdeleri; banka teminatları. [Cari risk](/veritabani/cari-risk/) |
| `TBLBCEK`, `TBLBSEN` | Borç çekleri / senetleri; cari `SC_VERILENK` |
| `TBLPROJE` | Proje kodları (`PROJE_KODU`, `PROJE_ACIKLAMA`, `TUR`). `PROJE_KODU` sipariş ve fatura başlıklarında ve satırlarında, çek / senet tablolarında, cari hareketlerde, muhasebe satırlarında, stok hareketlerinde ve üretim tablolarında bulunur; banka teminat tablosunda adı `PROJEKODU`'dur |
| `TBLMASRAF` | Masraf merkezleri (`MKOD`) |
| `TBLISLETMELER`, `TBLSUBELER` | İşletme ve şube tanımları |

## Şirket listesi (ana veritabanı)

Şirket veritabanlarının listesi `NETSIS` adlı ana veritabanındadır:

```sql
SELECT DISTINCT SIRKET, SIRKETYILI
FROM NETSIS.dbo.SIRKETLER30;
```
