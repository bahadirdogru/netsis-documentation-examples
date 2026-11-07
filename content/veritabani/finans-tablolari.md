---
title: Finans tabloları
description: Kasa, banka, çek/senet ve dekont tabloları; anahtarları, değer listeleri ve kasa ile çek kaydının cari hareket tablosuna yan etkisi.
---

# Finans tabloları

Kasa, banka, çek/senet ve dekont modüllerinin tabloları ve bunları okurken bilinmesi gerekenler. Değer listeleri ve anahtar tespitleri 2026-11'de bir test şirketinin verisinden ve REST ile yazılan kayıtlardan çıkarıldı; şema dokümanının vermediği bilgiler "gözlem" diye işaretlidir.

## Haritası

```text
TBLKASAMAS (kasa tanımı)       KSMAS_KOD ──< TBLKASA (kasa hareketi)   anahtar: SIRA
TBLKASA.KOD ─────────────────▶ TBLCASABIT.CARI_KOD (CARI_MUH = 'C') ya da TBLMUPLAN.HESAP_KODU (CARI_MUH = 'M')

TBLBNKSABIT (banka)            NETBANKAKODU ──< TBLBNKHESSABIT (banka hesabı)   NETHESKODU
TBLBNKHESSABIT                 NETHESKODU ──< TBLBNKHESTRA (banka hareketi)      anahtar: NETHESKODU + INCKEYNO

TBLMCEK / TBLMSEN (müşteri çeki / senedi)   SC_VERENK  ──▶ TBLCASABIT.CARI_KOD
TBLBCEK / TBLBSEN (borç çeki / senedi)      SC_VERILENK ─▶ TBLCASABIT.CARI_KOD
TBLBORDROMAS (bordro başlığı)  BORDROTIP + BORDRONO ──< SC_ALB_NO / SC_VERB_NO
TBLCEKSENDEK (çek/senet dekontu)

TBLDEKOMAS (dekont başlığı)    SERI_NO + DEKONT_NO ──< TBLDEKOTRA (dekont satırı)
```

## Kasa

| Tablo | İçerik | Anahtar |
|-------|--------|---------|
| `TBLKASAMAS` | Kasa tanımı: `KSMAS_NAME`, `DOVIZLI` (`E`/`H`), `MUH_KOD`, `DOVIZTIPI`, devir alanları | `KSMAS_KOD` |
| `TBLKASA` | Kasa hareketi | `SIRA` (gözlem: tekil; REST `SafeDeposits/{id}` de bunu ister). `FISNO` kimlik değildir |

`TBLKASA` kolonları:

| Kolon | Değerler (gözlem) |
|-------|-------------------|
| `IO` | `G` gelir (tahsilat), `C` gider (ödeme) |
| `TIP` | `C` cari, `F` fatura, `T` transfer, `M` muhasebe/muhtelif, `B` banka, `S` senet; şema `E` çek de sayar |
| `CARI_MUH` | `KOD` alanının anlamı: `C` cari kodu, `M` muhasebe hesabı, `B` banka; `TIP = 'F'` satırlarında boş |
| `KOD` | `CARI_MUH`'a göre cari kodu ya da hesap kodu |
| `PLASIYER_KODU`, `PROJE_KODU` | REST ile yazarken ikisi de zorunlu çıktı |

Kasa bakiyesi `TBLKASAMAS` üzerindeki devir alanlarından değil, `TBLKASA` toplamından hesaplanmalıdır; REST `SafeDeposits/LastBalance` bir denemede yanlış kasanın toplamını döndürdü.

## Banka

| Tablo | İçerik | Anahtar |
|-------|--------|---------|
| `TBLBNKSABIT` | Banka tanımı: `BANKAADI`, `TCMBBANKAKODU` | `NETBANKAKODU` |
| `TBLBNKHESSABIT` | Banka hesabı: `ACIKLAMA`, `BANKAHESNO`, `IBANNO`, `DOVIZTIPI`, `NETMUHKODU`, toplam alanları `HESBORCTOP`/`HESALACTOP` | `NETHESKODU` |
| `TBLBNKHESTRA` | Banka hesap hareketi: `TARIH`, `VADETARIH`, `BA` (`B` borç / `A` alacak), `TUTAR`, `BELGENO`, `ACIKLAMA`, `PROJEKODU`, `PLASIYERKODU` | `NETHESKODU` + `INCKEYNO` |

`TBLBNKHESTRA`'da `HAREKET_TURU` kolonu yoktur; hareket türü `HARTIPI` ve `HARTURU` tam sayı kolonlarındadır (değer listesi doğrulanmadı). Hesap toplamlarını `TBLBNKHESSABIT.HESBORCTOP` yerine hareketten hesaplamak daha güvenlidir (cari için aynı gözlem: [Cari](/rest/canli-denemeler/#cari)).

## Çek ve senet

Dört tablo aynı kolon yapısına sahiptir; hangi tabloda olduğu evrakın türünü söyler:

| Tablo | Evrak | Cari kolonu |
|-------|-------|-------------|
| `TBLMCEK` | Müşteri çeki | `SC_VERENK` (veren cari; doğrulandı) |
| `TBLMSEN` | Müşteri senedi | `SC_VERENK` |
| `TBLBCEK` | Borç çeki (firmanın verdiği) | `SC_VERILENK` (verilen cari; canlı doğrulanmadı) |
| `TBLBSEN` | Borç senedi | `SC_VERILENK` |

Ortak kolonlar: `SC_NO` (evrak no), `SC_GIRTRH` (giriş), `VADETRH` (vade), `SC_ODETRH` (ödeme), `TUTAR`, `SC_BANKNO` (banka), `CEK_SUBE`, `C_NUMARA` (hesap no), `SC_ABORCLU` (asıl borçlu), `SC_ALB_NO` (alındı bordrosu), `SC_VERB_NO` (verildi bordrosu), `PLASIYER_KODU`, `PROJE_KODU`.

| Kolon | Değerler (gözlem) |
|-------|-------------------|
| `SC_SONDUR` (son durum) | `P` portföyde, `B` bankada/tahsilde, `O` ödendi, `I` iade. REST ile girilen müşteri çeki doğrudan `B` yazıldı |
| `AS_C` | `A` asıl borçlu, `C` ciranta |
| `SC_YERI` | `P` portföy (örneklerden); diğer değerler belgelenmemiş |

Dört tabloyu tek listede göstermek için `UNION ALL` ile birleştirip tür sütunu ekleyin: [Çek ve senet listesi](/veritabani/sql-ornekleri/#cek-ve-senet-listesi). Birleşik listenin anahtarı tür + `SC_NO`'dur.

Çek/senet bordrosu `TBLBORDROMAS`'ta (`BORDROTIP` + `BORDRONO`), çek/senet dekontları (tahsil, ödeme, iade) `TBLCEKSENDEK`'tedir.

## Dekont

| Tablo | İçerik | Anahtar |
|-------|--------|---------|
| `TBLDEKOMAS` | Dekont başlığı: `SERI_NO`, `DEKONT_NO`, `MUH` (muhasebeleşti mi), `DEGISTI` | `SERI_NO` + `DEKONT_NO` |
| `TBLDEKOTRA` | Dekont satırı: `SIRA_NO`, `TARIH`, `FISNO`, `C_M` (cari/muhasebe), `KOD`, `B_A` (`B`/`A`), `TUTAR`, `ACIKLAMA1..4`, `PLASIYER`, `PROJE_KODU` | `SERI_NO` + `DEKONT_NO` + `SIRA_NO` |

> **`INCKEYNO` bağ değildir.** İki tablonun da `INCKEYNO` kolonu vardır ama her tablo kendi sayacını kullanır; başlığı satırlara `INCKEYNO` ile bağlarsanız satır bulamazsınız. Bağ `SERI_NO + DEKONT_NO` çiftidir (gözlem: başlık sayısı kadar farklı çift). Sorgu: [Dekont başlığı ve satır toplamları](/veritabani/sql-ornekleri/#dekont-basligi-ve-satir-toplamlari).

## Kasa ve çek kaydının yan etkileri

Netsis finans belgelerini kaydederken cari hareketi de yazar. REST ile test şirketinde gözlenenler:

| Kaydedilen | Yazılan tablolar | `TBLCAHAR` satırı |
|------------|------------------|-------------------|
| Kasa tahsilatı (`SafeDeposits`, `IO = 'G'`) | `TBLKASA`, `TBLCAHAR`, muhasebe fişi | `HAREKET_TURU = 'D'`, `ALACAK` = tutar, `ACIKLAMA` "NAKİT TAHSİLAT(00)" |
| Kasa ödemesi (`IO = 'C'`) | aynı | `BORC` = tutar |
| Müşteri çeki (`CheckAndPNotesMain`, `csMCEK`) | `TBLMCEK`, `TBLCAHAR`, bordro | `HAREKET_TURU = 'G'`, `ALACAK` = tutar, `BELGE_NO` = çek no |

`DELETE SafeDeposits/{SIRA}` kasa satırıyla cari hareketi birlikte siler. Çek bordrosu REST ile silinemediği için cari hareketi de kalır.

`TBLCAHAR.HAREKET_TURU` için test şirketinde görülen değerler: `A`, `B`, `C`, `D`, `E`, `G`, `H`, `I`, `J`, `K`. Şema dokümanı listeyi vermez; gözlemle eşleşenler `D` kasa, `G` çek. Fatura ve dekont kaynaklı hareketlerin kodları doğrulanmadı.

## Şube ve işletme süzgeci

Finans tablolarında `SUBE_KODU` çoğunlukla `0`'dır ama cari kartlarında `-1` de görülür. Raporlarda şube süzgeci koymadan okuyun, gerekirse sonra ayırın.
