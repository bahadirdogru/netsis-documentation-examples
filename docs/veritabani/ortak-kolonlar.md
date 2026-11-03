---
title: Ortak kolonlar
url: https://netsis.bahadirdogru.com/veritabani/ortak-kolonlar/
---

# Ortak kolonlar

Netsis tablolarının çoğunda aynı anlamla tekrar eden kolonlar. Tablo sayfalarında "Ortak kolon" olarak işaretlenen alanlar bunlardır.

| Kolon | Açıklama | Bulunduğu tablo sayısı |
|-------|----------|-----------------------:|
| `SUBE_KODU` | İlgili kaydın hangi şube kodunda yapıldığını gösterir. | 366 |
| `ISLETME_KODU` | İlgili kaydın hangi işletme kodunda yapıldığını gösterir. | 279 |
| `INCKEYNO - INC_KEY_NUMBER_STRA_INC` | Netsis tablolarında tekil sıra numarası olarak kullanılmaktadır | 253 |
| `MODUL_NO` | Paketlerde kullanılan modül numarasıdır. Kullanıcı tanımlamaları modulu rehberinden değerleri öğrenilebilir | 7 |
| `KAYITTARIHI` | İlgili kaydın kayıt tarihini gösterir. | 476 |
| `KAYITYAPANKUL` | Kaydı yapan kullanıcıyı gösterir. | 474 |
| `DUZELTMETARIHI` | Kaydın düzeltme tarihini gösterir. | 468 |
| `DUZELTMEYAPANKUL` | Kaydı düzelten kullanıcıyı gösterir. | 466 |
| `ONAYTIPI` | Workplace uygulaması için kullanılan ortak alandır. | 41 |
| `ONAYNUM` | Workplace uygulaması için kullanılan ortak alandır. | 41 |
| `DEPO_KODU` | Kayıtla ilgili stoğun depo kodunu gösterir. | 16 |
| `PROJE_KODU` | Kaydın hangi proje koduna ait olduğunu gösterir. | 54 |
| `UPDATE_KODU` | — | 23 |

## Yedek sahalar

`C_YEDEK1..`, `I_YEDEK1..`, `F_YEDEK1..`, `S_YEDEK1..`, `B_YEDEK1..`, `L_YEDEK1..` gibi kolonlar "daha sonra kullanılmak için bırakılan yedek saha"dır. Önek tipi gösterir: `C` char, `I` integer, `F` float, `S` string (varchar), `B` byte, `L` long/integer. Bazı ekranlar bu sahaları kullanıcı tanımlı bilgi için kullanır; dolu olup olmadığını kendi verinizde kontrol edin.

## Kullanıcı tanımlı sahalar

Ek bilgi tablolarında (`TBLCASABITEK`, `TBLSTSABITEK`) `KULL1S..KULL8S` metin, `KULL1N..KULL8N` sayısal kullanıcı tanımlı sahalardır. NetOpenX'te `EkBilgi()` nesnesinin `Kull1S`, `Kull1N` özellikleriyle yazılır.
