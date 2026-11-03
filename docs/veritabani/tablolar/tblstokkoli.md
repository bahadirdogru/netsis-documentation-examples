---
title: TBLSTOKKOLI
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblstokkoli/
---

# TBLSTOKKOLI

> STOK PARAMERTELERİNDEKI KARMA KOLİ PARAMETRESİ İŞARETLENDİĞİNDE. KARMA KOLİ KAYITLARI EKRANINDA TANIMLANAN KAYITLARI YAPILIR

- **Modül:** [STOK](/veritabani/moduller/stok/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `INCKEYNO`
- **Identity:** `INCKEYNO` (seed 1, artış 1)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `KOLISTOK_KODU` | TDBSTOKKOD | evet |  | Birden fazla ürünün bir araya getirilmesiyle oluşan koli stok kodunu gösterir. |
| 2 | `KOLIYAPKOD` | varchar(15) | evet |  | Esnek Yapılandırma uygulamasının kullanıldığı durumlarda ekrana gelen ve Koli Stok Kodu sahasına girilen stok koduna ait kartta Esnek Yapılandır seçeneğinin işaretlenmesi halinde esnek yapılandırma kodunu gösterir. |
| 3 | `BILESENSTOK_KODU` | TDBSTOKKOD | evet |  | Koli stok kodunu meydana getiren ürünlerin stok kodlarını gösterir. |
| 4 | `BILESENYAPKOD` | varchar(15) | evet |  | Bileşenlerin esnek yapılandırma kodlarını gösterir. |
| 5 | `MIKTAR` | TDBFLOAT | evet | `0` | Bileşen stok kodunun karma koli içindeki miktarını gösterir. |
| 6 | `ORAN` | TDBFLOAT | evet | `0` | Koli stok kodu fiyatının bileşen kodlarına nasıl yansıtılacağını gösterir. |
| 7 | `BILGIAMACLI` | char(1) | evet | `H` | Karma koli tanımları ekranında bilgi amaçlı parametresi işaretlendiğinde 'E', işaretlenmediğinde 'H' değerini gösterir. |
| 8 | `FIYAT` | TDBFLOAT | evet | `0` | Karma koli satışalrında bileşenlerin girilen satış fiyatlarını gösterir. |
| 9 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 10 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 11 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 12 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 13 | `PROJE_KODU` | TDBPROJEKOD | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 14 | `BILESENOZELFIYAT` | char(1) | evet | `E` | Fiyat oran üzerinden hesaplansın parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 15 | `BILESENISKONTO` | char(1) | evet | `H` | Bileşen iskontolardan etkilenmesin parametresi işaretli ise 'E', değilse 'H' değerini gösterir. |
| 16 | `INCKEYNO` | TDBINTEGER | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLSTOKKOLI_PKEY` | `INCKEYNO` |
| FOREIGN KEY | `TBLSTOKKOLI_FKEY` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTOKKOLI_FKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLSTOKKOLI_FKEY2` | `YAPKOD` |
| FOREIGN KEY | `TBLSTOKKOLI_FKEY3` | `YAPKOD` |
| FOREIGN KEY | `TBLSTOKKOLI_FKEYPROJE` | `PROJE_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLSTOKKOLI_IND_1` | `KOLISTOK_KODU+KOLIYAPKOD+BILESENSTOK_KODU+BILESENYAPKOD` | Unique, Non-clustered |
| `TBLSTOKKOLI_PKEY` | `INCKEYNO` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 KOLISTOK_KODU, KOLIYAPKOD, BILESENSTOK_KODU, BILESENYAPKOD, MIKTAR, ORAN
FROM dbo.TBLSTOKKOLI WITH (NOLOCK);
```
