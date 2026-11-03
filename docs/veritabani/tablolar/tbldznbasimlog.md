---
title: TBLDZNBASIMLOG
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbldznbasimlog/
---

# TBLDZNBASIMLOG

> BASIM LOG BİLGİLERİNİ TUTAR

- **Modül:** [DİZAYN](/veritabani/moduller/dizayn/)
- **Kolon sayısı:** 15
- **Birincil anahtar:** `KAYITNO`
- **Identity:** `KAYITNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KAYITNO` | TDBINTEGER | hayır |  | İlk kayıttan itibaren sırayla artan unique değeri gösterir. Program tarafından otomatik olarak atılmaktadır |
| 2 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `TARIH` | TDBDATETIME | evet | `getdate()` | Kayıt tarihini gösterir. |
| 4 | `MODULNO` | TDBSMALLINT | hayır |  | Dizaynın hangi modülde basıldığı bilgisini gösterir. |
| 5 | `PROGRAMNO` | TDBSMALLINT | hayır |  | Dizaynın basıldığı program bilgisini gösterir. |
| 6 | `KULLANICINO` | TDBSMALLINT | hayır |  | Basımın hangi kullanıcı tarafından yapıldığını gösterir. |
| 7 | `ISTEMCIADI` | varchar(100) | hayır |  | Basım işleminin yapıldığı istemci adını gösterir. |
| 8 | `YAZICIADI` | varchar(100) | evet |  | Basım yapılan yazıcı adını gösterir. |
| 9 | `UYGULAMAADI` | varchar(50) | hayır |  | Uygulama dosyasının adını gösterir. |
| 10 | `DIZAYNTIPI` | TDBINTEGER | hayır |  | Dizaynın basıldığı evrak tipi bilgisini gösterir. (Alış Fat.+İş emri vb.) |
| 11 | `DIZAYNNO` | TDBINTEGER | hayır |  | Dizaynın kayıt sıra numarasını gösterir. |
| 12 | `ANAHTAR` | varchar(100) | hayır |  | Evrak Fiş N+Cari No vb. bilgilerinin bulunduğu anahtarı gösterir. |
| 13 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `KAYITTARIHI` | TDBDATETIME | evet | `getdate()` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 15 | `HATA` | varchar(255) | evet |  | Dizayn basımı sırasında hata alındıysa+hata bilgisini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLDZNBASIMLOG_PKEY` | `KAYITNO` |
| FOREIGN KEY | `TBLDZNBASIMLOG_FKEYKULLANICI` | `SUBE_KODU+KULLANICI_NO` |
| FOREIGN KEY | `TBLDZNBASIMLOG_FKEYSUBE` | `SUBE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLDZNBASIMLOG_PKEY` | `KAYITNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KAYITNO, SUBE_KODU, TARIH, MODULNO, PROGRAMNO, KULLANICINO
FROM dbo.TBLDZNBASIMLOG WITH (NOLOCK);
```
