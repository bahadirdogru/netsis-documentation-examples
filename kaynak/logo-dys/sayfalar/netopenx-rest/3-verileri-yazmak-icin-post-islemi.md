---
title: "3 - Verileri Yazmak İçin POST İşlemi"
source: https://dys.logo.cloud/external?cid=9df1c59d-8a0e-49be-afd0-4dc21fa9d4a9&link=af8a0519-ec5e-4b99-9d80-3287169b0d5a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: netopenx-rest-baslangic.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [3 - Verileri Yazmak İçin POST İşlemi](https://dys.logo.cloud/external?cid=9df1c59d-8a0e-49be-afd0-4dc21fa9d4a9&link=af8a0519-ec5e-4b99-9d80-3287169b0d5a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# 3 - Verileri Yazmak İçin POST İşlemi

NetOpenX Rest, daha önce NetOpenX ile yapılan(muhasebe hesap kartı, stok kartı, sipariş, irslaiye, fatura vb. kart ve fişlerin) veri bütünlüğünü bozmadan veri tabanına aktarabilmektedir. İlk konuda bahsedildiği gibi, herhangi bir işlem öncesinde elimizde geçerli "accessToken" bilgisi bulunmalıdır. Dolayısıyla bu sayfada anlatılanların çalışabilmesi için öncelikle [](1-projeye-baslarken.md) [ilk adım](1-projeye-baslarken.md)da anlatılan işlemlerin başarılı olması gerekmektedir.

Aşağıdaki örnek kod parçacığı, fatura kayıdı oluşturmaktadır. Daha önce bahsedildiği gibi, restte nesne isimleri netopenx den farklıdır. Buradaki fatura nesnesi ItemSlips olarak çağırılmaktadır.

Fatura kaydı üst bilgileri için ItemSlips.fatüst  sınıfı altından new  ItemSlipsHeader  oluşturularak gerekli fatura üst bilgileri set edilmelidir.

Fatura kaydı kalem bilgileri için ItemSlips.kalems  sınıfı altından new  ItemSlipsLines oluşturularak gerekli fatura kalem bilgileri set edilmelidir.

Gerekli tüm atamalar yapıldıkdan sonra, belgenin veritabanına yazılması için PostInternal metodu içerinde fatura nesnesi(ItemSlips) gönderilmelidir.

```csharp
ItemSlipsManager _manager = new ItemSlipsManager(_oAuth2);  //_oAuth2 token bilgisi
  
  
ItemSlips slips = new ItemSlips();
slips.FaturaTip = JTFaturaTip.ftSFat;
slips.SeriliHesapla = false;
slips.KayitliNumaraOtomatikGuncellensin = true;
slips.FatUst = new ItemSlipsHeader
{
    CariKod = Global.cariKodu,
    Tarih = DateTime.Now,
    TIPI = JTFaturaTipi.ft_Ihracat,
    KDV_DAHILMI = false,
    Tip = JTFaturaTip.ftSFat
};
  
slips.Kalems = new List<ItemSlipLines>();
  
slips.Kalems.Add(new ItemSlipLines
{
    StokKodu = Global.stokKodu,
    Gir_Depo_Kodu = 2,
    STra_NF = 5,
    STra_BF = 8,
    DEPO_KODU = 1,
    STra_GCMIK = 3,
});
  
var RESULT = _manager.PostInternal(slips);
```
