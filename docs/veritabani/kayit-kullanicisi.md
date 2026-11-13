---
title: Kayıt kullanıcısı
url: https://netsis.bahadirdogru.com/veritabani/kayit-kullanicisi/
---

# Kayıt kullanıcısı

Netsis kayıtların büyük bölümünde kimin ne zaman oluşturduğunu ve değiştirdiğini tutar. Bu sayfa damgaların hangi tablolarda bulunduğunu ve REST ile yazıldığında nasıl dolduğunu anlatır. Bulgular tek bir test şirketinde, Netsis çekirdeği 9.0.72.5 ile yapılan canlı denemelerden gelir.

## Kolonlar

`KAYITYAPANKUL`, `KAYITTARIHI`, `DUZELTMEYAPANKUL`, `DUZELTMETARIHI`. Kullanıcı kolonları `varchar(12)`'dir.

Test şirketinde şu tablolarda vardı: `TBLSIPAMAS`, `TBLCASABIT`, `TBLCASABITEK`, `TBLKOSULMAS`, `TBLKOSDETAY`, `TBLCARISK`. `TBLSIPATRA` (sipariş satırı) bunlardan biri **değildir**; satırda damga yoktur, başlıktaki damga geçerlidir.

## REST ile yazınca

- **Sipariş.** `ItemSlips` gövdesinde `KAYITYAPANKUL` ya da `DUZELTMEYAPANKUL` için özellik yoktur (`FatUst`, satırlar ve üst düzeyde aranıp bulunamadı). REST ile yazılan her siparişte `TBLSIPAMAS.KAYITYAPANKUL` servisin kullanıcısıdır: `NETOPENX`. Bu, ekrana girişte kullanılan kullanıcı değildir (COM'da giriş kullanıcısı yazılır: [Bağlantı](/netopenx/baglanti/)).
- **Cari.** `CariTemelBilgi.KayitYapanKul` yok sayılır; Netsis `NetOpenX` yazar. `CariTemelBilgi.DuzeltmeYapanKul` verildiği gibi saklanır.

## Gerçek kullanıcıyı yazmak

Uygulamanız kendi kullanıcısını kayda geçirmek istiyorsa REST yolu yoktur. Son çare olarak, kayıt REST ile yazıldıktan sonra tek satırlık bir `UPDATE` işe yaradı ve tablodaki tetikleyiciler buna itiraz etmedi (`TBLSIPAMAS.KAYITYAPANKUL`, `varchar(12)`):

```sql
UPDATE TBLSIPAMAS SET KAYITYAPANKUL = @Kullanici
WHERE FTIRSIP = '6' AND FATIRS_NO = @SiparisNo AND CARI_KODU = @CariKod;
-- etkilenen satır sayısı 1 değilse işlemi geri al
```

Bu SQL yazımıdır: [Genel bakış](/genel-bakis/#yazma-kurali) kuralının istisnası olarak, yalnız test şirketinde denendikten sonra, adlandırılmış tek ifade ve tam satır sayısı denetimiyle kullanın. Kullanıcı kodu 12 karakteri geçemez. Şirkete özel tetikleyici bulunan bir kurulumda sonuç farklı olabilir.
