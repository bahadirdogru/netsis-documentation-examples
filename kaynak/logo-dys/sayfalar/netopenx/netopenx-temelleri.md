---
title: "NetOpenX - Temelleri"
source: https://dys.logo.cloud/external?cid=a751ae75-ac9a-4463-97cf-552dedd1388d&link=5d215095-522e-404c-be80-102a578d154a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: index.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [NetOpenX - Temelleri](https://dys.logo.cloud/external?cid=a751ae75-ac9a-4463-97cf-552dedd1388d&link=5d215095-522e-404c-be80-102a578d154a&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# NetOpenX - Temelleri

**NetOpenX** Logo ERP ürünü olan **Netsis’in tüm serileri** için yaygın olarak kullanılan güçlü **entegrasyon aracıdır.** 

  
Çözüm Ortaklarının kart veya fişleri Netsis sistemine kolaylıkla ve **veri bütünlüğünü bozmadan** aktarabilmesi amacıyla oluşturulmuştur.

Excel'den Netsis içerisine muhasebe fişi aktarımı, fatura aktarımı, yazarkasada kesilen faturaların Netsis içerisine aktarımı, üretim sonu kaydı aktarımı ya da farklı bir programdan Logo Yazılımın bir ürüne geçerken eski kayıtların aktarılması gibi entegrasyon ihtiyaçlarının kodlamasında kullanılır. 

Logo Yazılım, yılın belirli zamanlarında ürünlerinin yeni setlerini yayımlar. **NetOpenX** bu setler ile uyumlu olarak **COM** teknolojisinde **dll**  formatında sunulmaktadır.  
NetOpenX, temel olarak netsis veri sisteminde tanımlı olan **kart** ve **fişleri** dışarıdan ve veri bütünlüğünü bozmadan

-   **eklemek**
-   **değiştirmek**
-   **silmek**

için kullanılır.

NetOpenX ile excel,desktop uygulamalar, web tabanlı uygulamalar, servis uygulamaları  yada herhangi bir programdan Netsis ERP ürününe malzeme,cari hesap gibi kartlarile sipariş,fatura gibi fişler entegre edilebilir. 

## Avantajları Nelerdir ?

Netopenx ,netsis arayüzünde yapılan işlemlerin hemen hemen hepsini veri bütünlüğü bozulmadan datanıza entegre etmeyi sağlar.

Kısaca Kullanım Avantajları;

-    Versiyon değişikliklerinden en az seviyede etkilenme
-    Hızlı ve kolay kodlama imkanı
-    Bakım maliyetlerinin azalması
-   Hazırlanan kodların tekrar kullanılabilirliği
-   Bir çok programlama dili ile kullanılabilme esnekliği (C#,VB.Net,Delphi,PHP…)
-   Geliştirme hakkı sadece gerekli eğitimleri ve sertifikaları tamamlamış çözüm ortaklarımızdadır.
-   Sürümlerden bağımsız olarak veri bütünlüğü konusunda sorumluluk bütünüyle Logo Yazılımda olacaktır.  
     

## Neden Kullanmalıyım ?

ERP sisteminiz dışında kullandığınız yazılımlar olabilir. Bu programlarda yapılan işlemleri ERP sistemize aktarıp bütün işlmelerinizin takibini ERP üzerinden yapmak istiyebilirsiniz. Bu noktada netsis veri tabanına dışarıdan yapılacak insert,update,delete işlemleri veri bütünlüğünü bozabilir. Logo ürünlerinde kullanılan kart veya fişlerin harici olarak veri tabanına aktarılması ihtiyacının doğduğu durumlarda özellikle bu işlemin kullanıcı müdahalesi dışında yapılması gerekiyorsa kullanılması gereken Uyarlama Aracı NetOpenX’dir.

## Lisans

NetOpenX dahil olmak üzere uyarlama araçlarının geliştirme lisansları, Logo Çözüm Ortağı firmalar tarafından ihtiyaca yönelik olarak Logo Yazılım’dan alınabilir.  

Kullanılacak istemci uygulamasının sayısı gözönünde tutularak lisans ihtiyacı belirlenmelidir.

Netopenx  kullanabilmek için belirlenen kullanıcı sayısına göre  **NetOpenX Runtime** **Lisansına** ihtiyaç duyulmaktadır. 

## Kurulum

NetOpenX, yüklenen her setle birlikte ve bu yüklenen sete uygun versiyonda  TEMELSET klasörü altında NetOpenX50.dll olarak gelmektedir. Ayrıca bir Kurulumu yoktur. Merkezi kimlik yönetiminden lisansınızı indirmiş olmanız, NetOpenX50.dll dosyasını register etmiş olmanız ve geliştirdiğiniz projenize NetOpenX50.dll dosyasını  eklemiş olmanız yeterlidir.
