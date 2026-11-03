---
title: "4 - Verileri Güncellemek için PUT işlemi"
source: https://dys.logo.cloud/external?cid=f2330032-8695-4619-bb3f-2f1051536a91&link=2477c972-8660-4596-a118-18eb1fcc2737&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-rest-baslangic.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [4 - Verileri Güncellemek için PUT işlemi](https://dys.logo.cloud/external?cid=f2330032-8695-4619-bb3f-2f1051536a91&link=2477c972-8660-4596-a118-18eb1fcc2737&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# 4 - Verileri Güncellemek için PUT işlemi

NetOpenX Rest, standart REST servislerdeki gibi 4 http işlemi desteklemektedir.

**GET**                        (verileri okumak için)  
**POST**                     (veri göndermek, set etmek için)  
**DELETE**                 (veri silmek için )

ve

**PUT**                       (veri güncellemek için)

Aşağıdaki örnek cari ilçe kaydını set edilen bilgiye göre güncellemektedir. İlk konuda bahsedildiği gibi, herhangi bir işlem öncesinde elimizde geçerli "accessToken" bilgisi bulunmalıdır. Dolayısıyla bu sayfada anlatılanların çalışabilmesi için öncelikle [ilk adım](1-projeye-baslarken.md)da anlatılan işlemlerin başarılı olması gerekmektedir.

Burada cari sınıfı (ARPsManager) altından PutInternal metodu çağırılarak gönderilen id yani cari\_kodu bilgisine göre CariTemelBilgi sınıfı altında yer alan cari\_ilce bilgisi kod içinde set edilen cari\_ilce bilgisi ile güncellenir.  REST ile kullanabileceğimiz nesne ve methodlara  [http://localhost:7070/api/v2/help](http://localhost:7070/api/v2/help)  linkinden ulaşabilirsiniz.

```
var _ARPsManager = new ARPsManager(_oAuth2); //_oAuth2 sinifi ile geçerli token alinmasi gerekir.
            
           var result = _ARPsManager.PutInternal("id", new ARPs
           {
               CariTemelBilgi = new ARPsPrimInfo
               {
                   CARI_ILCE = "KONAK",
                   CARI_KOD = "id",
               }
           });
          
          
           var cariIlce = result.Data.CariTemelBilgi.CARI_ILCE;
       }
```
