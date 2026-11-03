---
title: Kimlik doğrulama
url: https://netsis.bahadirdogru.com/rest/kimlik-dogrulama/
---

# Kimlik doğrulama

NetOpenX REST, OAuth2 "resource owner password" akışına benzer bir token kullanır. Token şirkete ve şubeye bağlıdır: hangi şirketle işlem yapılacağı token alınırken belirlenir.

## Ham HTTP

```http
POST /api/v2/token HTTP/1.1
Host: netsis-sunucu:7070
Content-Type: application/x-www-form-urlencoded

grant_type=password&branchcode=0&username=NETSIS&password=SIFRE&dbname=ACME2024&dbuser=TEMELSET&dbpassword=&dbtype=0
```

| Alan | Anlamı |
|------|--------|
| `grant_type` | Her zaman `password` |
| `branchcode` | Şube kodu |
| `username`, `password` | **Netsis** kullanıcı adı ve şifresi |
| `dbname` | Şirket (veritabanı) adı |
| `dbuser`, `dbpassword` | Veritabanı kullanıcısı (çoğunlukla `TEMELSET`) ve şifresi |
| `dbtype` | Veritabanı tipi; `0` = MSSQL (örneklerde böyle kullanılır, doğrulanmadı) |

Başarılı yanıt JSON'dur ve `access_token` içerir (standart OAuth2 alanları beklenir: `access_token`, `token_type`, `expires_in`; tam alan listesi doğrulanmadı). Sonraki her istekte:

```http
GET /api/v2/ARPs?limit=5 HTTP/1.1
Authorization: Bearer <access_token>
```

Hatalı girişte standart OAuth2 hata gövdesi döner:

```json
{"error":"invalid_grant","error_description":"Hata Kodu : 401\r\nDetay : Login Failed ..."}
```

`GET` ile token istenirse `unsupported_grant_type` döner.

### curl

```bash
TOKEN=$(curl -s -X POST http://localhost:7070/api/v2/token \
  -d grant_type=password -d branchcode=0 -d username=NETSIS -d password=SIFRE \
  -d dbname=ACME2024 -d dbuser=TEMELSET -d dbpassword= -d dbtype=0 | jq -r .access_token)

curl -H "Authorization: Bearer $TOKEN" "http://localhost:7070/api/v2/ARPs?limit=5"
```

### Python

```python
import requests

BASE = "http://localhost:7070/api/v2"
r = requests.post(f"{BASE}/token", data={
    "grant_type": "password", "branchcode": 0,
    "username": "NETSIS", "password": "SIFRE",
    "dbname": "ACME2024", "dbuser": "TEMELSET", "dbpassword": "", "dbtype": 0,
}, timeout=30)
r.raise_for_status()
token = r.json()["access_token"]

s = requests.Session()
s.headers["Authorization"] = f"Bearer {token}"
cariler = s.get(f"{BASE}/ARPs", params={"limit": 5}).json()
```

## Token gerektirmeyen uçlar

| Uç | Döner |
|----|-------|
| `GET api/v2/public/Ping` | `"<tarih saat> > OK"` |
| `GET api/v2/public/Version` | NetOpenX sürümü |
| `GET api/v2/public/AuthorizedBranches?company={company}&username={username}` | Kullanıcının yetkili şubeleri |
| `GET api/v2/HealthCheck` | Kernel oluşturma testi |
| `GET api/v2/help`, `api/v2/helpinfo?apiId=...` | Yardım sayfaları |

Token isteyen hafif kontrol ucu: `GET api/v2/ping` (token yoksa `401`). Bağlantı testi için idealdir.

## Oturumu kapatma

`GET api/v2/revoke` (token ile). Kapatılmazsa token süresi dolunca kendiliğinden geçersiz olur.

## C#: NetOpenX.Rest.Client

Logo'nun .NET istemci kütüphanesi `NetOpenX.Rest.Client.dll` token işini sarmalar.

```csharp
using NetOpenX.Rest.Client;
using NetOpenX.Rest.Client.BLL;
using NetOpenX.Rest.Client.Model;
using NetOpenX.Rest.Client.Model.Enums;
using NetOpenX.Rest.Client.Model.NetOpenX;

var oAuth2 = new oAuth2("http://localhost:7070");
oAuth2.Login(new JLogin
{
    BranchCode     = 0,
    NetsisUser     = "NETSIS",
    NetsisPassword = "SIFRE",
    DbType         = JNVTTipi.vtMSSQL,
    DbName         = "ACME2024",
    DbUser         = "TEMELSET",
    DbPassword     = ""
});
string token = oAuth2.AccessToken;

var arps = new ARPsManager(oAuth2);
var sonuc = arps.GetInternal(new SelectFilter { Limit = 5 });
```

`JLogin` alanları: `BranchCode`, `NetsisUser`, `NetsisPassword`, `DbType`, `DbName`, `DbUser`, `DbPassword`, `HashCode` (anlamı belgelenmemiş). `oAuth2` üyeleri: `Login(JLogin)`, `LogOut()`, `AccessToken`, `TimeOut`, `AllowCompress`, `ChangeHeader` olayı.

### TokenSafeOperation

Token süresi dolduğunda yeniden giriş yapıp işlemi tekrarlayan yardımcı:

```csharp
TokenRestSettings.Init("http://localhost:7070", 120, true);   // 2. ve 3. parametre belgelenmemiş

var safeOp = new TokenSafeOperation(new JLogin { /* ... */ });
var result = safeOp.Exec<List<CasaBit>>(token =>
{
    var q = token.CreateManager<QueryManager>();
    return q.GetInternal("select top 2 * from TBLCASABIT");
});
```

Aynı blok içinde birden fazla yönetici (`CreateManager<T>()`) kullanılabilir. Yeniden deneme davranışı kaynak koddan çıkarılmıştır; Logo dokümanında açıkça yazılmaz.

### Ham çağrı (RequestManager)

```csharp
var req = new RequestManager(oAuth2) { Method = "GET", Path = "api/v2/ARPs?limit=5" };
string json = req.GetResult();
```

## Pratik öneriler

- Tokenı **önbelleğe alın** ve süresi dolmadan yenileyin. Örnek projelerdeki "her işlemde yeniden login" deseni yavaştır ve lisans/oturum tüketir.
- 401 aldığınızda bir kez yeniden login olup isteği tekrarlayın; yazma isteklerinde tekrar etmeden önce kaydın oluşmadığını kontrol edin ([idempotency](/rest/transaction-ve-hatalar/#cift-kayit-riski)).
- Kimlik bilgilerini koda ve depoya koymayın.
