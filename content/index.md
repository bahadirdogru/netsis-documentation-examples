---
title: Ana sayfa
description: Netsis ERP için veritabanı şeması, NetOpenX COM ve NetOpenX REST başvuru dokümantasyonu.
---

# Netsis Dokümantasyonu

Logo **Netsis** ERP ile entegrasyon yazan geliştiriciler ve onlara yardım eden yapay zekâ asistanları için tek bir başvuru noktası. Resmî dokümantasyonda dağınık duran bilgiyi, gerçek projelerde denenmiş kodla bir araya getirir.

<div class="cards">
<a class="card" href="/veritabani/"><strong>Veritabanı şeması</strong><span>700+ tablo, 18.000+ kolon. Anahtarlar, indeksler, varsayılanlar ve modül bazında gezinme.</span></a>
<a class="card" href="/netopenx/"><strong>NetOpenX (COM)</strong><span>NetOpenX50.dll ile fatura, irsaliye, sipariş, cari, stok, e-belge kaydı. C# örnekleri.</span></a>
<a class="card" href="/rest/"><strong>NetOpenX REST</strong><span>api/v2 uçları, token, sorgu parametreleri, JSON gövdeleri, istemci kütüphanesi.</span></a>
<a class="card" href="/llm/"><strong>LLM'ler için</strong><span>llms.txt, tam metin, sıkıştırılmış şema ve her sayfanın Markdown hâli.</span></a>
</div>

## Hangi yolu seçmeliyim?

| İhtiyaç | Önerilen yol | Neden |
|---------|--------------|-------|
| Rapor, liste, BI, okuma | [SQL (salt okunur)](/veritabani/) | En hızlı yol. Şema bilgisi bu sitede. |
| Aynı Windows makinesinde belge/kart yazma | [NetOpenX COM](/netopenx/) | Netsis iş kurallarını (numara, stok, cari bakiye, entegrasyon) uygular. |
| Uzak sistemden, dil bağımsız yazma | [NetOpenX REST](/rest/) | HTTP/JSON. Arkada yine NetOpenX çalışır. |
| Toplu fatura, e-belge, dönüşüm | COM veya REST | İkisi de aynı iş nesnelerini kullanır. |

> **Altın kural:** Netsis tablolarına `INSERT`/`UPDATE`/`DELETE` ile doğrudan yazmayın. Bir faturanın kaydı onlarca tabloyu (stok hareketi, cari hareket, bakiye, entegrasyon, e-belge) birlikte günceller. Yazma işini NetOpenX'e bırakın; SQL'i okuma için kullanın. Ayrıntı: [Genel bakış](/genel-bakis/#yazma-kurali).

## Hızlı bağlantılar

- Cari kartı: `TBLCASABIT` · Cari hareket: `TBLCAHAR`
- Stok kartı: `TBLSTSABIT` · Stok hareketi: `TBLSTHAR`
- Fatura/irsaliye başlığı: `TBLFATUIRS` · Sipariş başlığı: `TBLSIPAMAS` · Sipariş kalemi: `TBLSIPATRA`
- Fatura kaydı (COM): [Fatura ve irsaliye](/netopenx/fatura-ve-irsaliye/)
- Fatura kaydı (REST): [`POST api/v2/ItemSlips`](/rest/uclar/#fatura-irsaliye-ve-siparis-itemslips)
- Token alma (REST): [`POST api/v2/token`](/rest/kimlik-dogrulama/)

## Katkı

Site [GitHub](https://github.com/bahadirdogru/netsis-documentation-examples) üzerinde açık kaynaktır. Her sayfanın altındaki "GitHub'da düzenle" bağlantısıyla düzeltme önerebilirsiniz.
