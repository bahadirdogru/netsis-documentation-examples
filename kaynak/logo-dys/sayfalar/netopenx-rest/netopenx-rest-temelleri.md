---
title: "NetOpenX Rest - Temelleri"
source: https://dys.logo.cloud/external?cid=733a2034-62db-4c83-add0-e164ce6af7ed&link=42eecc09-cbf0-48dd-a955-00656cb546b1&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR
parent: index.md
retrieved: 2026-11-03
---

> Bu sayfa Logo DYS "Netsis Uyarlama Araçları" dokümantasyonunun bir kopyasıdır. İçerik Logo Yazılım'a aittir. Kaynak: [NetOpenX Rest - Temelleri](https://dys.logo.cloud/external?cid=733a2034-62db-4c83-add0-e164ce6af7ed&link=42eecc09-cbf0-48dd-a955-00656cb546b1&tenantId=cdd87e13-3009-4dd1-a5b8-2a005c0e58da&hideName=True&locale=tr_TR)

# NetOpenX Rest - Temelleri

## **Kavramlar**

REST ile ilişkili kavramlar burada anlatılacaktır.

## REST Nedir?

REST **RE**presentational **S**tate **T**ransfer ifadesini simgeler. REST web standardları temelli mimariye sahiptir ve veri aktarımı/iletişimi için HTTP Protokolünü kullanır.

REST her bileşeni bir kaynak (resource) olan yerde HTTP standart metodları ile erişimi sağlar. REST ilk olarak **Roy Fielding** tarafından 2000'li yıllarda geliştirilmiştir.

REST mimarisinde;

-   REST Sunucusu kaynaklara erişimi sağlar
-   REST İstemcisi ise kaynaklara erişir
-   Her bir **kaynak** _**URIs/ global IDs**_ ile tanımlanır.
-   REST kaynakları sunmak için çeşitli sunumlar(representation) kullanır. Bunlar;
    -   text
    -   **JSON**
    -   XML
-   **JSON** web servislerde kullanılan en popüler formattır.

## HTTP Methotları

Aşağıda listelenmiş iyi bilinen HTTP metotları REST tabanlı mimarilerde de kullanılır.

-   **GET** - Kaynaklara **sadece okuma izinli** erişim sağlar.
    
-   **PUT** - **Yeni bir** kaynak oluşturmak için kullanılır.
    
-   **DELETE** - Bir kaynaği **silmek** için kullanılır.
    
-   **POST** - mevcut bir kaynağı **güncellemede** ya da yeni bir kaynak **oluşturmada** kullanılır.
    
-   **OPTIONS** - kaynak üzerinden geçerli işlemleri öğrenmek için kullanılır.
    

## RESTFul Web Servisleri

**Web Servis** aslında uygulamalar ya da sistemler arasındaki **veri değişimi** için **açık protokol ve standartlar** kolleksiyonudur.

Yazılım uygulamaları çok farklı dillerde yazılmış ve farklı platformlar üzerinden çalışıyor olabilir. Bütün bu uygulamalar tek makina üzerinde ya da internette farklı makineler üzerinde olabilir. Bunlar arasındaki veri değişimi için WS ler kullanılır.

Bu birlikte çalışabilirlik (Örneğin Java ve Python, ya da  Windows ve Linux uygulamaları) **açık standartların kullanımı** ile olur.

REST mimarisine dayanan Web Servisler. **RESTful Web Servisler** olarak bilinir.

Bu Web Servisler REST mimari kavramını uygulamak için HTTP metotlarını kullanırlar. Bir RESTful web servis genelde bir URI(Uniform Resource Identifier) tanımlar, JSON ve HTTP metotları ile source sunumunu sağlar.

## RESTFul Web Servis Örnekleri

<table class="wrapped polarisTable"><colgroup><col> <col> <col> <col> <col></colgroup><tbody><tr><td class="polarisTd">1</td><td class="polarisTd"><strong>GET</strong></td><td class="polarisTd">/UserService/users</td><td class="polarisTd">Get list of users</td><td class="polarisTd">Read Only</td></tr><tr><td class="polarisTd">2</td><td class="polarisTd"><strong>GET</strong></td><td class="polarisTd">/UserService/users/1</td><td class="polarisTd">Get User with Id 1</td><td class="polarisTd">Read Only</td></tr><tr><td class="polarisTd">3</td><td class="polarisTd"><strong>PUT</strong></td><td class="polarisTd">/UserService/users/2</td><td class="polarisTd">Insert User with Id 2</td><td class="polarisTd">Idempotent</td></tr><tr><td class="polarisTd">4</td><td class="polarisTd"><strong>POST</strong></td><td class="polarisTd">/UserService/users/2</td><td class="polarisTd">Update User with Id 2</td><td class="polarisTd">N/A</td></tr><tr><td class="polarisTd">5</td><td class="polarisTd"><strong>DELETE</strong></td><td class="polarisTd">/UserService/users/1</td><td class="polarisTd">Delete User with Id 1</td><td class="polarisTd">Idempotent</td></tr><tr><td class="polarisTd">6</td><td class="polarisTd"><strong>OPTIONS</strong></td><td class="polarisTd">/UserService/users</td><td class="polarisTd">List the supported operations in web service</td><td class="polarisTd">Read Only</td></tr></tbody></table>

## **Lisans**

**NetOpenX REST** Servisin kendisine ait lisansı bulunmuyor. **NetOpenX** altyapısını kullanır. Dolayısıyla **NetOpenX REST** Servisin çalışabilmesi için **NetOpenX** lisansının sistemde bulunması gerekmektedir. NetOpenX temelleri ve lisans konusu için lütfen [tıklayınız](../netopenx/netopenx-temelleri.md). 

NetOpenX REST Servisin Netsis Temelset 8.06 ve üzeri sürümlerinde çalışabildiği unutulmamalıdır. 

## **Kurulum**

NetsisNoxRest kurulumu için lütfen [tıklayınız](netsisnoxrestsetup-exe-ile-kurulum.md).  
 

## **Mimari**

NetOpenX REST,

-   yazılımcıların standart **CRUD** (Create, Read, Update, Delete) işlemlerini HTTP komutlarını kullarak gerçekleştirmesine izin vermekte
-   http ve https(Secure http) haberleşmesini _**IIS servera ihtiyaç bırakmadan**_

sağlayabilmektedir.

## Logo REST çalışma mimarisi aşağıdaki şekilde özetlenmiştir.

NetOpenX istemcisi için ise SSO(Merkezi Kimlik Yönetimi)  üzerinden lisans kontrolleri yapılır.

İlk bakışta temel özellikleri şu şekilde özetlenebilir;

-   .Net Framework ile geliştirilmiştir.
-   **http** ve **https** protokollerini ve bu protokoller ile haberleşen masaüstü, mobil ve web uygulamaları içerisinde kullanılabilir.
-   İletişim için **JSON** formatını kullanır.
-   Arka planda veri alış verişi NetOpenX ile gerçekleştirilmektedir. Dolayısıyla NetOpenX tüm veri aktarımı yeteneklerine sahiptir.
-   **Multi Thread** çalışacak şekilde dizayn edilmiştir.

## **Ürünlere Göre REST Fonksiyon Karşılaştırması**

Ürünlerimizde REST **iki farklı şekilde** sunulur.

1.  Logo App için sunulan **REST**
2.  **LogoObjects/NetOpenX** entegrasyon araçları üzerinden sunulan REST

Aşağıdaki tabloda Logo Apps ile Enterasyon araçları(Logo Objects, NetOpenX) üzerinden sunulan servislerin karşılaştırmasını görebilirsiniz.

<table class="wrapped polarisTable"><colgroup><col> <col> <col> <col> <col> <col></colgroup><tbody><tr><td class="polarisTd"><p><strong>&nbsp;</strong></p></td><td class="polarisTd" colspan="3"><p align="center"><strong>Logo Apps REST</strong></p></td><td class="polarisTd" rowspan="2"><p><strong>Logo Objects REST</strong></p></td><td class="polarisTd" rowspan="2"><p><strong>NetOpenX REST</strong></p></td></tr><tr><td class="polarisTd"><p>&nbsp;</p></td><td class="polarisTd"><p><strong>Netsis3</strong></p></td><td class="polarisTd"><p><strong>Tiger3</strong></p></td><td class="polarisTd"><p><strong>Go3</strong></p></td></tr><tr><td class="polarisTd"><p><strong>Data Nesnesi</strong></p></td><td class="polarisTd"><p>Tüm Data Nesnesi</p></td><td class="polarisTd"><p>Kartlar+Fişler</p></td><td class="polarisTd"><p>Kartlar</p></td><td class="polarisTd"><p>Kartlar+Fişler</p></td><td class="polarisTd"><p>Tüm Data Nesneleri</p></td></tr><tr><td class="polarisTd"><p><strong>Metodlar</strong></p></td><td class="polarisTd"><p>Tüm&nbsp;<em>(NetOpenX)</em></p></td><td class="polarisTd"><p>Tüm&nbsp;<em>(</em><a href="https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253D1e4d58d4-7afe-41d4-9838-ccbc4d6e8f92%2526link%253D0f6e5d74-e07a-4a4b-8c87-a40bc0eddce5%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue" target="_blank"><span rel="nofollow"><em>Logo Objetcs</em></span></a><em>)</em></p></td><td class="polarisTd"><p>Tüm&nbsp;<em>(</em><a href="https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253D1e4d58d4-7afe-41d4-9838-ccbc4d6e8f92%2526link%253D0f6e5d74-e07a-4a4b-8c87-a40bc0eddce5%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue" target="_blank"><span rel="nofollow"><em>Logo Objetcs</em></span></a><em>)</em></p></td><td class="polarisTd"><p>Tüm (<a href="https://polaris.logo.cloud/docs/tiger-uyarlama-araci/detail/external%253Fcid%253D1e4d58d4-7afe-41d4-9838-ccbc4d6e8f92%2526link%253D0f6e5d74-e07a-4a4b-8c87-a40bc0eddce5%2526tenantId%253Dcdd87e13-3009-4dd1-a5b8-2a005c0e58da%2526hideName%253DTrue" target="_blank"><span rel="nofollow"><em>Logo Objetcs</em><em>&nbsp;</em><strong><em>Production Application</em></strong><strong><em>&nbsp;</em></strong><em>hari</em><em>ç</em></span></a><em>)</em></p></td><td class="polarisTd"><p>Tüm<em>&nbsp;</em><em>(NetOpenX)</em></p></td></tr><tr><td class="polarisTd"><p><strong>Lisans</strong></p></td><td class="polarisTd"><p>ihtiyaç yok</p></td><td class="polarisTd"><p>ihtiyaç yok</p></td><td class="polarisTd"><p>ihtiyaç yok</p></td><td class="polarisTd"><p>Lisansa gerek var</p></td><td class="polarisTd"><p>Lisansa gerek var</p></td></tr></tbody></table>

## **İşleyiş adımları kısaca şu şekilde özetlenebilir;**

##### 1.  **Erişim Kontrol**

Herhangi bir işlem öncesinde yazılımcı access token (erişim belirteci) çağrısını servise gönderir. Bu çağrıda bağlantı kurulacak Logo ürünü içerisinde tanımlanmış standart bir kullanıcının kullanıcı adı, şifresi ve bağlantı kurulmak istenen şirket, şube bilgileri yer alır. Rest servisi bu çağrıyı olumlu karşılarsa geriye JSON formatında token bilgisi döndürür.

##### 2\. **İşlem**

Birinci adımda karşılanan token bilgisi ile yazılımcı yaptırmak istediği işlem bilgisini rest servise gönderir. Bu işlem herhangi bir data işlemi, örneğin sipariş fişi aktarımı olabileceği gibi irsaliye faturalama, borç kapama işlemi vb. Application nesnesi işlemi veya bir sorgulama işlemi de olabilir. Rest servis çağrıyı olumlu karşıladığında geriye JSON formatında bir dönüş yapmaktadır.

##### **3\. İşlem Sonlandırma**

İşlem sonrasında ilgili session açık bırakılabilir veya yazılımcı tarafından sonlandırılabilir.

Sonlandırılmadığı takdirde birinci aşamada elde edilen access token parametrik olarak belirlenebilen bir süre sonra otomatik olarak kullanım dışı olacaktır.

Bu durumda da ileride değineceğimiz yöntemlerle access token için ek süre verilebilir.

Kaydet
