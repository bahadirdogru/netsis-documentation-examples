---
title: NetOpenX REST
description: NetOpenX REST servisine genel bakış, lisans ve ürün ailesi.
---

# NetOpenX REST

**NetOpenX REST**, [NetOpenX](/netopenx/) COM kütüphanesinin üzerine kurulu bir HTTP/JSON servisidir. Kart ve belge CRUD işlemlerini, belge dönüşümlerini, basımı ve e-belge işlemlerini `api/v2/...` uçlarıyla sunar. Windows servisi olarak Netsis sunucusunda çalışır; istemci herhangi bir dilde yazılabilir.

```text
İstemci (her dil) ──HTTP/JSON──▶ Netsis NetOpenX Rest Service ──COM──▶ NetOpenX50 ──▶ SQL Server
                                  (Windows, varsayılan :7070)
```

## Ne zaman REST, ne zaman COM?

| | COM | REST |
|-|-----|------|
| Çalıştığı yer | Netsis kurulu Windows makinesi | Ağdaki herhangi bir istemci |
| Dil | COM çağırabilen diller | Her dil |
| Kapsam | Tüm NetOpenX nesneleri | Yardım sayfasına göre ~380 uç; çoğu NetOpenX işlemini kapsar |
| Oturum | `Kernel`/`Sirket` | OAuth2 benzeri token (varsayılan 20 dk) |
| Kurulum | DLL register | `NetsisNoxRestSetup.exe` ile servis kurulumu |

## Ürün ailesi

Logo, REST'i üç ayrı üründe sunar. Bu site **NetOpenX REST**'i belgeler.

| | Logo Apps REST | Logo Objects REST | NetOpenX REST |
|-|----------------|-------------------|---------------|
| Destek | Netsis3, Tiger3, Go3 | Logo Objects tabanlı ürünler | Netsis (Temelset 8.06+) |
| Nesne seti | Data nesnesi | Tüm data nesneleri | Kartlar + fişler |
| Metotlar | Kartlar, fişler | Tüm (Logo Objects) | Tüm (NetOpenX) |

## Lisans

- REST servisinin **ayrı bir lisansı yoktur**; NetOpenX altyapısını kullanır. Sistemde **NetOpenX Runtime lisansı** bulunmalıdır.
- Lisans, kullanılacak istemci uygulama sayısına göre belirlenir.
- Geliştirme lisansı Logo Yazılım'dan, Logo çözüm ortağı aracılığıyla alınır. Geliştirme, gerekli eğitimi ve sertifikayı tamamlamış çözüm ortaklarınca yapılır.
- İstemci lisans kontrolü **Netsis Merkezi Kimlik Yönetimi (SSO)** üzerinden yapılır; kurulumdan önce lisansın SSO'dan indirilmiş olması gerekir.

## İşleyiş

1. **Token al:** Netsis kullanıcı adı/şifresi, şirket (veritabanı) ve şube ile `POST api/v2/token`. [Kimlik doğrulama](/rest/kimlik-dogrulama/)
2. **İşlem yap:** `Authorization: Bearer <token>` başlığıyla uçları çağır. Veri işlemi (ör. sipariş aktarımı), belge dönüşümü, borç kapama, sorgulama…
3. **Kapat:** `GET api/v2/revoke` ile oturumu kapat ya da token süresinin dolmasını bekle.

## HTTP yöntemleri

| Yöntem | Anlamı |
|--------|--------|
| `GET` | Okuma (liste ya da tek kayıt) |
| `POST` | Yeni kayıt ve işlem uçları (`/Calculate`, `/IrsToFat`…) |
| `PUT` | Güncelleme (her kaynakta yok; ör. `ItemSlips` için `PUT` yoktur) |
| `DELETE` | Silme |

> Logo'nun "Temel" sayfası POST ve PUT'u ters açıklıyor ("PUT: yeni kaynak oluşturmak"). Uç kataloğu ve gerçek davranış standarttır: **POST oluşturur, PUT günceller**.

## Bölümler

- [Kurulum](/rest/kurulum/): setup, servis, yardım sayfası, token süresi.
- [Kimlik doğrulama](/rest/kimlik-dogrulama/): `api/v2/token`, C# `oAuth2`, `TokenSafeOperation`.
- [Sorgulama](/rest/sorgulama/): `limit`, `offset`, `sort`, `fields`, `q`.
- [Uçlar](/rest/uclar/): modül bazında tüm uç kataloğu.
- [İstemci kütüphanesi](/rest/istemci-kutuphanesi/): `NetOpenX.Rest.Client.dll` yöneticileri ve parametreleri.
- [JSON örnekleri](/rest/json-ornekleri/): istek gövdeleri.
- [Kimlikler ve enum'lar](/rest/kimlikler-ve-enumlar/): `{id}` biçimleri, enum değerleri.
- [Transaction ve hatalar](/rest/transaction-ve-hatalar/).
- [Güvenlik](/rest/guvenlik/).
- [Bilinen sorunlar ve açık sorular](/rest/bilinen-sorunlar/).
