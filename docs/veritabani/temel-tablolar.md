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
   FTIRSIP = FKOD, FATIRS_NO = FATIRSNO, CARI_KODU = CKOD

TBLSIPAMAS ──< TBLSIPATRA (sipariş kalemleri)
   FTIRSIP = STHAR_FTIRSIP, FATIRS_NO = FISNO, CARI_KODU = STHAR_ACIKLAMA

TBLSTSABIT (stok kart) ──1:1── TBLSTSABITEK (stok ek bilgi)
   │ STOK_KODU
   ├──< TBLSTHAR      STOK_KODU
   ├──< TBLSIPATRA    STOK_KODU
   └──< TBLSTOKPH     STOK_KODU (depo bazında bakiye özeti)

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

- Cari bakiye `TBLCAHAR` üzerinden hesaplanır: `SUM(BORC) - SUM(ALACAK)`. Kart üzerindeki toplam alanlar (`CM_BORCT`, `CM_ALACT`) Netsis tarafından tutulur ama raporlama için hareketten hesaplamak daha güvenlidir.
- REST'te cari hareketin kimliği `INC_KEY_NUMBER` değeridir (`api/v2/ARPTransactions/{id}`).

## Stok

| Tablo | İçerik | Anahtar |
|-------|--------|---------|
| `TBLSTSABIT` | Stok kartı: kod, ad, ölçü birimleri, KDV, fiyatlar, barkod 1-3, grup ve rapor kodları | `STOK_KODU` |
| `TBLSTSABITEK` | Stok ek bilgi: İngilizce isim (`INGISIM`), kullanıcı tanımlı sahalar | `STOK_KODU` |
| `TBLSTHAR` | Tüm stok hareketleri: fatura ve irsaliye kalemleri, depo transferleri, ambar fişleri, üretim | `INCKEYNO` |
| `TBLSTOKDP` | Depo tanımları | `DEPO_KODU` |
| `TBLSTOKPH` | Stok bakiye özeti (depo ve yapılandırma kodu bazında) | `STOK_KODU` |

Önemli `TBLSTHAR` kolonları:

| Kolon | Anlam |
|-------|-------|
| `STHAR_GCKOD` | `G` giriş, `C` çıkış |
| `STHAR_GCMIK` | Miktar (ana birimde) |
| `STHAR_NF` / `STHAR_BF` | Net / brüt birim fiyat |
| `STHAR_FTIRSIP` | Belge tipi (bkz. [FTIRSIP](/genel-bakis/#belge-tipi-alani-ftirsip)) |
| `STHAR_HTUR` | Hareket türü: `A` devir, `J` fatura, `H` irsaliye, `B` depolar arası, `N` faturalaşmış irsaliye, `L` iade, `C` üretim, `D` muhtelif, `I` kapalı fatura, `M` zayi iade … |
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
| `TBLFATUEK` | Fatura ek bilgileri: `ACIK1..16` ek açıklamalar (NetOpenX'te `EKACK1..16`), teslim bilgileri. Anahtar: `FKOD`, `FATIRSNO`, `CKOD`. |
| `TBLSIPAMAS` | Sipariş başlıkları (`FTIRSIP` 6 müşteri, 7 satıcı). `TIPI`: `2` yurt içi, `6` yurt dışı, `1` kapalı, `3` onaylanmamış. |
| `TBLSIPATRA` | Sipariş kalemleri. Yapısı `TBLSTHAR` ile aynıdır (`STHAR_` önekli kolonlar). |

`TBLFATUIRS.TIPI` değerleri: `1` kapalı, `2` açık, `3` muhtelif, `4` iade, `5` zayi iade, `6` ithalat/ihracat. NetOpenX'teki `TFaturaTipi` enum'u (`ft_Kapali`, `ft_Acik`, `ft_Muhtelif`, `ft_Iade`, `ft_ZIade`, `ft_Ihracat`…) bu alana yazar.

## E-belge parametreleri

| Tablo | İçerik |
|-------|--------|
| `TBLEFATPRM` | E-fatura parametreleri; `BIRIMKOD` e-fatura numara serisi (ör. `ABC`) |
| `TBLEARSIVPRM` | E-arşiv parametreleri; `BIRIMKOD` e-arşiv serisi |
| `TBLEIRSSERI` | E-irsaliye serileri (`SERI`) |
| `TBLDIZAYNSABIT` | Belge dizaynları. `DIZAYNTIPI`: `99` e-fatura, `100` e-arşiv, `104` e-irsaliye (gözlenen değerler) |

## Kasa, muhasebe, diğer

| Tablo | İçerik |
|-------|--------|
| `TBLKASA` | Kasa hareketleri. `IO`: `G` gelir, `C` gider. `TIP`: `B` banka, `C` cari, `E` çek, `F` fatura, `M` muhtelif, `S` senet, `T` transfer. `CARI_MUH`: `C`/`M`/`B` |
| `TBLMUPLAN` | Muhasebe hesap planı (`HESAP_KODU`) |
| `TBLMUHFIS` | Yevmiye fiş satırları (`AY_KODU`, `FISNO`, `HES_KOD`, `BA`) |
| `TBLMUHAGEC` | Muhasebe entegrasyonuna bekleyen kayıtlar |
| `TBLMCEK`, `TBLMSEN` | Müşteri çekleri / senetleri (portföy) |
| `TBLBCEK`, `TBLBSEN` | Borç çekleri / senetleri |
| `TBLPROJE` | Proje kodları |
| `TBLMASRAF` | Masraf merkezleri (`MKOD`) |
| `TBLISLETMELER`, `TBLSUBELER` | İşletme ve şube tanımları |

## Şirket listesi (ana veritabanı)

Şirket veritabanlarının listesi `NETSIS` adlı ana veritabanındadır:

```sql
SELECT DISTINCT SIRKET, SIRKETYILI
FROM NETSIS.dbo.SIRKETLER30;
```
