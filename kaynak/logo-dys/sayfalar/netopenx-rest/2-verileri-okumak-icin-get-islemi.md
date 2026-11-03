---
title: "2 - Verileri Okumak İçin GET İşlemi"
source: https://dys.logo.cloud/external?cid=03a8ec2b-769e-41ff-a95a-ea38d79880a6&link=1da3834c-52e2-4046-9f3a-324bfe5aa871&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-rest-baslangic.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [2 - Verileri Okumak İçin GET İşlemi](https://dys.logo.cloud/external?cid=03a8ec2b-769e-41ff-a95a-ea38d79880a6&link=1da3834c-52e2-4046-9f3a-324bfe5aa871&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# 2 - Verileri Okumak İçin GET İşlemi

NetOpenX Rest, daha önce NetOpenX ile yapılan(muhasebe hesap kartı, stokkartı,  vb. kart ve fişlerin) okuma işlemlerini daha esnek yapabilmektedir. Tek bir kaydı, örneğin tek bir cari hesap kartnın okunabildiği gibi bir çok kaydı liste halinde Rest servisten talep edilinebilinir. Daha önceki konuda bahsedildiği gibi, herhangi bir talep öncesinde elimizde geçerli "accessToken" bilgisi bulunmalıdır. Dolayısıyla bu sayfada anlatılanların çalışabilmesi için öncelikle bir önceki adımda anlatılan  token alma işlemlerinin başarılı olması gerekmektedir.

Aşağıdaki örnek cari kayıtlarının listesini vermektedir.

```csharp
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
var resultAllCM = _ARPsManager.GetInternal();
 
/// C0001 carisi kodunun bilgilerini dondurmektedir.
var resultCMById = _ARPsManager.GetInternalById("C0001");
 
 
 // kisit , kolon ismi ve siralama ile ilgili ornek.
            var resultFilterCM = _ARPsManager.GetInternal(new SelectFilter()
            {
               
                Filter = "CARI_KOD like '%CARI%'",
                Fields = new List<string>() { "CARI_KOD", "CARI_ISIM", "Plasiyer_Kodu" }
                ,
                Sort = new List<SortParam>()
                 {
                      new SortParam(){ Column = "CARI_KOD",  SortType= SortParamType.ASC}
                 }
            });
```

Yukarıdaki örnekte görüldüğü gibi cari kartları listesini "**ARPs**" sınıfından çağrılıyor. Rest serviste kullandığımız nesnelerin isimleri NetOpenX entegrasyonlarında kullanılan nesne isimlerinden farklıdır. Bu farklara ve REST ile kullanabileceğimiz nesnelere [http://localhost:7070/api/v2/help](http://localhost:7070/api/v2/help)  linkinden ulaşabilirsiniz.

Eğer liste örnekteki gibi çalıştırılırsa,  sadece 10 cari kartını listeleyecektir. Bunun sebebi, web ve mobil projelerde veri akışının efektif kullanılabilmesi için REST servisin paging(sayfalama) yapmasıdır, sayfalama için REST'te tanımlı olan default limit 10'dur. 

Bu limit aşağıdaki örnekteki gibi artırılabilir. Sıralamada gelen ilk 10 kayıttan sonraki 10 kayıt listelenmek isteniyorsa aşağıdaki şekilde **offset** özelliğini kullanarak rest çağrısı yapılabilinir.

```
//_oAuth2 sinifi ile geçerli token alinmasi gerekir.
var _ARPsManager = new ARPsManager(_oAuth2);
var resultAllCM = _ARPsManager.GetInternal();
 
/// C0001 carisi kodunun bilgilerini dondurmektedir.
var resultCMById = _ARPsManager.GetInternalById("C0001");
 
 
 // kisit , kolon ismi ve siralama ile ilgili ornek.
            var resultFilterCM = _ARPsManager.GetInternal(new SelectFilter()
            {
                Limit = 20, // sayfalamada getirilecek kayıtların sayısı
                Offset = 10, // gelen ilk 10 kayıttan sonra listemeye başlar
                Filter = "CARI_KOD like '%CARI%'",
                Fields = new List<string>() { "CARI_KOD", "CARI_ISIM", "Plasiyer_Kodu" }
                ,
                Sort = new List<SortParam>()
                 {
                      new SortParam(){ Column = "CARI_KOD",  SortType= SortParamType.ASC}
                 }
            });
```
