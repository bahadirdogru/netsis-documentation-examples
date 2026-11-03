---
title: Güvenlik
url: https://netsis.bahadirdogru.com/rest/guvenlik/
---

# Güvenlik

NetOpenX REST servisi şirket verisine yazabilen, ham SQL çalıştırabilen bir servistir. **İnternete doğrudan açmayın.**

## Ağ

- Servisi yalnızca onu kullanan uygulama sunucularının erişebileceği bir ağ bölümünde tutun (güvenlik duvarı izin listesi).
- Dışarıdan erişim gerekiyorsa önüne kimlik doğrulama ve TLS yapan bir ters vekil (reverse proxy) / API ağ geçidi koyun; yalnızca kullandığınız uçları yönlendirin.
- Servis varsayılan olarak HTTP çalışır; ağ üzerinde parola ve token düz metin gider.

## Anonim uçlar

`public/*`, `HealthCheck`, `help` ve `helpinfo` token istemez. Bunlardan bazıları bilgi sızdırır:

- `public/AuthorizedBranches` kullanıcıların şube yetkilerini,
- `public/CompanyList` şirket listesini,
- `public/GetLicInfo/KeyInfo` lisans bilgisini,
- `help` tüm API yüzeyini gösterir.

Ters vekilde bu uçları dış erişime kapatın.

## Ham SQL uçları

`api/v2/Queries` ve `api/v2/Queries/NetRS` gönderilen SQL'i çalıştırır; `insert`, `update`, `delete` de dahildir. Token'ı ele geçiren biri veritabanında her şeyi yapabilir.

- Uygulamalarınızda kullanmayın.
- Ters vekilde engelleyin.

## Filtre enjeksiyonu

`q` (ve C#'ta `SelectFilter.Filter`) SQL `WHERE` parçası olarak işlenir. Kullanıcı girdisini ham koymak SQL enjeksiyonuna açıktır. Kolon adlarını izin listesinden seçin, değerleri kaçırın ve tipini doğrulayın ([Sorgulama](/rest/sorgulama/#guvenlik-notu)).

## Yama seviyesi

Üçüncü taraf bir kaynak, NetOpenX REST token ucunda kimlik doğrulamasız SQL enjeksiyonu bildirmiştir. Bu bilgi Logo dokümanında yoktur; etkilenen sürümler ve yama **doğrulanmamıştır**. Sunucunuzun sürümünü (`public/Version`) Logo'dan güncel güvenlik duyurularıyla karşılaştırın ve servisi ağ düzeyinde koruyun.

## Kimlik bilgileri

- Örnek kodlardaki kullanıcılar (`sa`/`sapass`, `NETSIS`/`NET1`, `Admin`/`Admin`) **yalnızca örnektir**; üretimde kullanmayın.
- REST için ayrı, yalnızca gereken modüllere yetkili bir Netsis kullanıcısı açın.
- Veritabanı kullanıcısının (`TEMELSET`) şifresini boş bırakmayın.
- Kimlik bilgilerini kaynak koda, depoya, CI değişkenlerine düz metin koymayın; örnek projelerdeki "Beni hatırla" ayarı bilgileri düz metin saklar.

## Yıkıcı işlemler

Silme, kod değiştirme, e-belge gönderme, toplu MRP gibi işlemleri ([liste](/rest/istemci-kutuphanesi/#yikici-yontemler)) yalnızca açıkça tanımlı ve yetkilendirilmiş akışlardan çağırın; her biri için kayıt (audit log) tutun.
