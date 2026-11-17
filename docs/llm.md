---
title: LLM'ler için
url: https://netsis.bahadirdogru.com/llm/
---

# LLM'ler için

Bu site, yapay zekâ asistanlarının Netsis hakkında doğru kod ve SQL üretebilmesi için makine okunur biçimler de sunar.

## Dosyalar

| Dosya | İçerik | Ne zaman |
|-------|--------|----------|
| [`/llms.txt`](/llms.txt) | Sitenin özeti ve tüm sayfaların Markdown bağlantıları ([llmstxt.org](https://llmstxt.org) biçimi) | Ajan önce bunu okusun |
| [`/llms-full.txt`](/llms-full.txt) | Tüm el yazımı sayfalar tek dosyada (tablo ayrıntıları hariç) | Tek seferde geniş bağlam |
| [`/veritabani/sema.txt`](/veritabani/sema.txt) | 700+ tablonun tüm kolonları, tipleri ve açıklamaları, satır başına bir kolon | SQL üretimi |
| [`/data/schema.json`](/data/schema.json) | Şemanın tamamı: kolonlar, anahtarlar, indeksler, varsayılanlar | Programatik kullanım |
| `/<yol>.md` | Her sayfanın Markdown hâli | Tek konu |

Her HTML sayfasının Markdown hâli, adresin sonundaki `/` yerine `.md` konarak alınır:

- `https://netsis.bahadirdogru.com/rest/uclar/` → `https://netsis.bahadirdogru.com/rest/uclar.md`
- `https://netsis.bahadirdogru.com/veritabani/tablolar/tblcasabit/` → `https://netsis.bahadirdogru.com/veritabani/tablolar/tblcasabit.md`

## Asistana verilecek kurallar

Bir sistem istemine (system prompt) ya da proje talimatına (ör. `CLAUDE.md`, `AGENTS.md`) eklenebilir:

```markdown
## Netsis
- Netsis başvurusu: https://netsis.bahadirdogru.com/llms.txt
- Tablo ve kolon adlarını uydurma; https://netsis.bahadirdogru.com/veritabani/sema.txt
  ya da https://netsis.bahadirdogru.com/veritabani/tablolar/<tablo>.md üzerinden doğrula.
- Netsis tablolarına SQL ile INSERT/UPDATE/DELETE yazma. Yazma işleri NetOpenX COM
  (NetOpenX50.dll) ya da NetOpenX REST (api/v2) ile yapılır.
- Fatura/irsaliye kalemleri TBLSTHAR'dadır; başlıkla birleştirme:
  FISNO = FATIRS_NO AND STHAR_FTIRSIP = FTIRSIP AND STHAR_ACIKLAMA = CARI_KODU.
- Belge tipi FTIRSIP: 1 satış fat., 2 alış fat., 3 satış irs., 4 alış irs., 6 müşteri sip., 7 satıcı sip.
- COM nesnelerini finally içinde bırak: Marshal.ReleaseComObject, sirket.LogOff(), kernel.FreeNetsisLibrary().
- REST'te token: POST api/v2/token (form: grant_type=password, branchcode, username, password,
  dbname, dbuser, dbpassword, dbtype); sonra Authorization: Bearer.
- Fiyat koşulunu SQL ile yeniden çözme; ItemSlips/Calculate (KosulluHesapla: true) kullan.
- Sipariş revizyonu (`ItemSlips/OrderRevision`) siparişi düzenlemez: kalemleri kopyalanmış yeni bir sipariş açar ve kaynağı kapatır (`STHAR_HTUR` H → K). Düzenleme için silip tam gövdeyle yeniden yazın.
- E-fatura ve e-arşiv serisi: `TBLEFATPRM.BIRIMKOD` / `TBLEARSIVPRM.BIRIMKOD`, şube `SUBE_KODU` ile süzülür; hangisinin kullanılacağı `FatUst.EfaturaCarisiMi` ile seçilir.
  Cari risk hesabı için https://netsis.bahadirdogru.com/veritabani/cari-risk.md içindeki SQL'i kullan.
- "doğrulanmadı" işaretli bilgileri kesin bilgi gibi sunma.
```

## MCP ve araçlar

Site statik olduğu için herhangi bir "URL getir" (fetch) aracıyla okunabilir. Şema araması için `schema.json`'u indirip yerelde sorgulamak en hızlısıdır:

```bash
curl -s https://netsis.bahadirdogru.com/data/schema.json \
  | jq -r '.tables[] | select(.columns[].name == "GIB_FATIRS_NO") | .name' | sort -u
```

## Güvenilirlik

- Şema, belirli bir 9.0.x sürümünün dokümanından üretilmiştir; sizin sürümünüzde fark olabilir.
- REST ve COM bilgisi Logo dokümantasyonu, Logo örnek projeleri ve üretimde çalışan kodlardan derlenmiştir. Kaynak dokümanda olmayan ya da canlıda sınanmamış bilgiler "doğrulanmadı" diye işaretlidir.
- Canlı deneme bulguları tek bir test şirketinde ve Netsis çekirdeği 9.0.72.5 üzerinde alınmıştır; kendi kurulumunuzda doğrulayın.
- Sitede gerçek şirket verisi, sunucu adresi ya da kimlik bilgisi yoktur; örneklerdeki kodlar ve numaralar temsilidir.
