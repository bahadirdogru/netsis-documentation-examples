---
title: TBLEPOSTAKUYRUK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblepostakuyruk/
---

# TBLEPOSTAKUYRUK

> KUYRUKTAKİ E-POSTA BİLGİLERİNİ TUTAR

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 12
- **Birincil anahtar:** `SIRANO`
- **Identity:** `SIRANO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `SIRANO` | TDBINTEGER | hayır |  | E-Posta sıra numarasını gösterir. |
| 3 | `NETSISKUL` | TDBINTEGER | hayır |  | Gönderen netsis kullanıcı numarasını gösterir. |
| 4 | `HATA` | varchar(255) | evet |  | Gönderilememe nedenini gösterir. |
| 5 | `HTMLDESTEK` | char(1) | hayır |  | HTML Destek var mı parametresini gösterir. |
| 6 | `KIMDEN` | varchar(100) | hayır |  | E-Posta gönderen kullanıcı adını gösterir. |
| 7 | `KIMDENADRES` | varchar(100) | hayır |  | E-Postanın kim tarafından gönderildiği |
| 8 | `KIME` | varchar(255) | hayır |  | E-Postanın kime gönderildiğini gösterir. |
| 9 | `KOPYA` | varchar(255) | hayır |  | E-Posta başka kimlere gönderildiğini (CC bilgisi) gösterir. |
| 10 | `KONU` | varchar(100) | hayır |  | E-Postanın konusunu gösterir. |
| 11 | `DOSYALAR` | varchar(255) | evet |  | E-Posta ekinde dosya bilgisini gösterir. |
| 12 | `MESAJ` | TDBMEMO | hayır |  | E Posta içeriğini gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLEPOSTAKUYRUK_PKEY` | `SIRANO` |
| FOREIGN KEY | `TBLEPOSTAKUYRUK_FKEY` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLEPOSTAKUYRUK_IND_1` | `ISLETME_KODU` | Non-unique+Non-clustered |
| `TBLEPOSTAKUYRUK_PKEY` | `SIRANO` | clustered |

## Örnek sorgu

```sql
SELECT TOP 100 ISLETME_KODU, SIRANO, NETSISKUL, HATA, HTMLDESTEK, KIMDEN
FROM dbo.TBLEPOSTAKUYRUK WITH (NOLOCK);
```
