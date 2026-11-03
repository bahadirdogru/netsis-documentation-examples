---
title: TBLFARKLITESLIM
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblfarkliteslim/
---

# TBLFARKLITESLIM

> KANTAR MODÜLÜNDE FARKLI TESLİM PARAMETRESİ KULLANILARAK OLUŞTURULAN FATURA VEYA İRSALİYELERE AİT FARKLI TESLİM BİLGİLERİ TABLOSUDUR.

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 16
- **Birincil anahtar:** `TARTIM_NO, CARI_KOD, STOK_KODU`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `TARTIM_NO` | int | hayır |  | Kantar modülü tartım no'su |
| 2 | `PLAKA_NO` | varchar(15) | evet |  | Kamyon plaka no'su |
| 3 | `IRSALIYE_NO` | TDBBELGENO | evet |  | İrsaliye no'su |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | cari kod bilgisi |
| 5 | `STOK_KODU` | TDBSTOKKOD | hayır |  | Stok kodu bilgisi |
| 6 | `MIKTAR` | TDBFLOAT | evet | `0` | Miktar |
| 7 | `SIPARIS_NO` | TDBSTOKKOD | evet |  | Kantar modülünde girişi yapılmış olan sipariş no'su |
| 8 | `C_YEDEK1` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 9 | `C_YEDEK2` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 10 | `C_YEDEK3` | char(1) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 11 | `S_YEDEK1` | varchar(20) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 12 | `S_YEDEK2` | varchar(20) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 13 | `S_YEDEK3` | varchar(20) | evet |  | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 14 | `F_YEDEK1` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 15 | `F_YEDEK2` | TDBFLOAT | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |
| 16 | `F_YEDEK3` | decimal(28,9) | evet | `0` | Netsis programında ek gereksinimler için tanımlanmış yedek sahadır |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLFARKLITESLIMPKEY` | `TARTIM_NO, CARI_KOD, STOK_KODU` |
| FOREIGN KEY | `TBLFARKLITESLIM_FKEY` | `TARTIM_NO` |
| FOREIGN KEY | `TBLFARKLITESLIM_FKEY1` | `STOK_KODU` |
| FOREIGN KEY | `TBLFARKLITESLIM_FKEY2` | `CARI_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLFARKLITESLIM_IND_1` | `PLAKA_NO, TARTIM_NO` | Unique |
| `TBLFARKLITESLIMPKEY` | `TARTIM_NO, CARI_KOD, STOK_KODU` | Unique ,Primary Key |

## Örnek sorgu

```sql
SELECT TOP 100 TARTIM_NO, PLAKA_NO, IRSALIYE_NO, CARI_KOD, STOK_KODU, MIKTAR
FROM dbo.TBLFARKLITESLIM WITH (NOLOCK);
```
