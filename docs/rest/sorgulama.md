---
title: Sorgulama
url: https://netsis.bahadirdogru.com/rest/sorgulama/
---

# Sorgulama parametreleri

Liste döndüren `GET` uçları ortak sorgu parametrelerini kabul eder. Değerler **URL-encode** edilmelidir.

| Parametre | Anlam | Varsayılan |
|-----------|-------|------------|
| `limit` | Sayfadaki kayıt sayısı | Kütüphane sayfasında 20, Başlangıç sayfasında 10 yazıyor (doğrulanmadı). Her zaman açıkça verin. |
| `offset` | Kaçıncı kayıttan başlanacağı | `0` |
| `sort` | `KOLON ASC` / `KOLON DESC`; birden çok kolon virgülle | yok |
| `fields` | Yalnızca bu kolonlar, virgülle | tüm kolonlar |
| `first` | `true`: ilk sayfa | |
| `last` | `true`: son sayfa | |
| `q` | SQL `WHERE` koşulu, ör. `CARI_KOD like 'C%'` | |
| `expandLevel` | `full`: alt koleksiyonları ve model tanımlarını da getir | |

Örnek:

```http
GET api/v2/ARPs?limit=20&offset=40&sort=CARI_KOD%20ASC&fields=CARI_KOD,CARI_ISIM&q=CARI_KOD%20like%20'120%25'
```

Kolon adları **veritabanı kolon adlarıdır** (`CARI_KOD`, `STOK_KODU`, `SUBE_KODU`…). Hangi tablonun sorgulandığını bilmek için [veritabanı şemasına](/veritabani/temel-tablolar/) bakın: `ARPs` → `TBLCASABIT`, `ARPTransactions` → `TBLCAHAR`, `Items` → `TBLSTSABIT`, `GLAccounts` → `TBLMUPLAN`…

## Sayfalama döngüsü

```python
def tum_cariler(s, base):
    offset, limit = 0, 200
    while True:
        r = s.get(f"{base}/ARPs", params={"limit": limit, "offset": offset, "sort": "CARI_KOD ASC"}).json()
        veri = r.get("Data") or []
        yield from veri
        if len(veri) < limit:
            break
        offset += limit
```

## C#: SelectFilter

```csharp
var sonuc = new ARPsManager(oAuth2).GetInternal(new SelectFilter
{
    Limit  = 20,
    Offset = 0,
    Filter = "CARI_KOD like '%120%'",                        // q
    Fields = new List<string> { "CARI_KOD", "CARI_ISIM", "Plasiyer_Kodu" },
    Sort   = new List<SortParam> { new SortParam { Column = "CARI_KOD", SortType = SortParamType.ASC } },
    ExpandLevel = "Full"
});
```

## Şema uçları

Her kaynak için model ve denetleyici şeması alınabilir:

| Uç | Döner |
|----|-------|
| `GET api/v2/definitions/<Kaynak>` | Model şeması (JSON string) |
| `GET api/v2/services/<Kaynak>` | Denetleyici şeması; `expandLevel=full` ile model tanımlarıyla |
| `GET api/v2/services` | Tüm API şeması |
| `GET api/v2/services/describe` | Model tanımları olmadan tüm denetleyiciler |

Bir uca hangi alanları gönderebileceğinizi öğrenmenin en güvenilir yolu `definitions/<Kaynak>` ve `helpinfo` sayfalarıdır.

## Güvenlik notu

`q` ve `Filter` **doğrudan SQL `WHERE` parçası** olarak işlenir. Kullanıcı girdisini ham hâlde bu alanlara koymayın:

- Kolon adlarını bir izin listesinden (allowlist) seçin.
- Değerlerde tek tırnağı kaçırın (`'` → `''`) ve tipini doğrulayın (sayı, tarih).
- Mümkünse son kullanıcıya serbest filtre vermeyin; sabit filtre şablonları kullanın.
