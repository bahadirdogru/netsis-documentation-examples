---
title: Transaction ve hatalar
description: OpenTransaction/Commit/RollBack, yanıt zarfı, hata durumları ve çift kayıt riski.
---

# Transaction ve hatalar

## Transaction

Birden fazla yazma işlemini tek iş olarak yapmak için:

1. `GET api/v2/OpenTransaction` → yanıtta `transId` döner.
2. Yazma çağrılarını yap. Gövdelerdeki `TransactSupport: true` bayrağı transaction desteğini açar.
3. Başarılıysa `GET api/v2/CommitTransaction?transId=<id>`, hata varsa `GET api/v2/RollBackTransaction?transId=<id>`.

> Yazma çağrısının hangi transaction'a bağlandığı (başlık mı, parametre mi, token oturumu mu) Logo dokümanında yazmaz. Gözlem: `OpenTransaction` yalnızca `transId` döner ve gövdelerde yalnızca `TransactSupport` bayrağı vardır; bağın **token oturumu** üzerinden kurulduğu varsayılır (doğrulanmadı). Kritik akışlarda önce test şirketinde sınayın.

## Yanıt zarfı

İş sonucu döndüren uçlar şu biçimdedir (C# `TResult<T>`):

```json
{
  "IsSuccessful": false,
  "ErrorCode": 101,
  "ErrorDesc": "Invalid object name 'DBMONITOR..TBLSUBELER'",
  "Data": null
}
```

| Alan | Anlam |
|------|-------|
| `IsSuccessful` | İş başarılı mı. **HTTP 200 dönse bile `false` olabilir** |
| `ErrorCode` | Netsis/NetOpenX hata kodu |
| `ErrorDesc` | Hata açıklaması (Netsis'in kendi mesajı) |
| `Data` | Sonuç (tek nesne, liste ya da PDF için base64) |

Bazı sistem uçları farklı alan adları kullanır (ör. `HealthCheck` → `IsSuccessful` + `Description`).

## Hata durumları

| Durum | Belirti | Yapılacak |
|-------|---------|-----------|
| Token yok / süresi dolmuş | HTTP `401` | Yeniden token al, isteği bir kez tekrarla |
| Hatalı giriş | `400` + `{"error":"invalid_grant", ...}` | Kullanıcı, şifre, şirket, şube bilgilerini kontrol et |
| İş kuralı hatası | `IsSuccessful: false`, `ErrorDesc` dolu | Mesajı kullanıcıya/loga aktar; tekrar deneme |
| Servis kapalı | bağlantı reddi | `public/Ping`, Windows servisi, port |
| Uzun süren işlem | zaman aşımı | İstemci zaman aşımını yükselt; işlemin sunucuda tamamlanıp tamamlanmadığını kontrol et |

HTTP durum kodlarının tam eşlemesi Logo tarafından belgelenmemiştir; istemci kodunuz hem HTTP kodunu hem `IsSuccessful`'u kontrol etmelidir.

## Çift kayıt riski

Yazma çağrıları **idempotent değildir**. Ağ kopması ya da zaman aşımında istek sunucuda tamamlanmış olabilir; körü körüne tekrar etmek aynı faturayı iki kez yazar.

- Yazmadan önce iş anahtarıyla (belge no, cari kod, harici referans) kaydın varlığını kontrol edin.
- Faturada kendi referansınızı bir alana yazın (ör. `EKACK16` ya da `TBLFATUIRS.EXTERNALREFID` kolonuna karşılık gelen alan) ve tekrar denemeden önce bu referansla sorgulayın.
- Zaman aşımı sonrası önce okuyun, sonra gerekiyorsa yazın.

## Kaynak tüketimi

- Her token sunucuda bir NetOpenX oturumu açar. Tokenı paylaşın ve önbelleğe alın; her istekte login olmayın.
- Büyük listelerde `limit`/`offset` ile sayfalayın; `fields` ile yalnızca gereken kolonları isteyin.
