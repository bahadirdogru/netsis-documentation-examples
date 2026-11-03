---
title: TBLNAKLIYEBELGELINK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblnakliyebelgelink/
---

# TBLNAKLIYEBELGELINK

> KAYIT>NAKLİYE İŞLEMLERİ>NAKLİYE BİLGİ GİRİŞİ>BELGE SEÇİMİ SEKMESİ EKRANINDA GİRİLEN KAYITLARI TUTAR

- **Modül:** [FATURA](/veritabani/moduller/fatura/)
- **Kolon sayısı:** 14
- **Birincil anahtar:** `NAKLIYENO+BELGETIPI+BELGENO+CARI_KOD`

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `NAKLIYENO` | TDBBELGENO | hayır |  | 15 karakterden oluşan tblnakliye tablosundaki nakliye numarasını gösterir. |
| 2 | `BELGETIPI` | char(1) | hayır |  | Belge seçimi sekmesindeki seçilen belge tipini gösterir. |
| 3 | `BELGENO` | TDBBELGENO | hayır |  | Seçilen irsaliye ya da dep arası transfer fişinin numarasını gösterir. |
| 4 | `CARI_KOD` | TDBCARIKOD | hayır |  | Seçilen irsaliye ya da dep arası transfer fişine ait cari kodunu gösterir. |
| 5 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 6 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 7 | `I_YEDEK3` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 8 | `I_YEDEK4` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 9 | `F_YEDEK5` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde toplam mesafeyi gösterir. |
| 10 | `F_YEDEK6` | TDBFLOAT | evet | `0` | Toplamlar sekmesinde toplam mesafeyi gösterir. |
| 11 | `D_YEDEK7` | TDBDATETIME | evet |  | Toplamlar sekmesinde toplam ağırlığı gösterir. |
| 12 | `D_YEDEK8` | TDBDATETIME | evet |  | Toplamlar sekmesinde birim maliyeti gösterir. |
| 13 | `V_YEDEK10` | varchar(50) | evet |  | Toplamlar sekmesinde taşıma brüt maliyeti gösterir. |
| 14 | `V_YEDEK11` | varchar(50) | evet |  | Toplamlar sekmesinde taşıma net maliyeti gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLNAKLIYEBELGELINK_PKEY1` | `NAKLIYENO+BELGETIPI+BELGENO+CARI_KOD` |
| FOREIGN KEY | `TBLNAKLIYEBELGELINK_FKEY1` | `NAKLIYENO` |
| FOREIGN KEY | `TBLNAKLIYEBELGELINK_FKEY2` | `BELGETIPI+BELGENO+CARI_KOD` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLNAKLIYEBELGELINK_IND1` | `BELGETIPI+BELGENO+CARI_KOD` | Unique,Non-clustered |
| `TBLNAKLIYEBELGELINK_PKEY1` | `NAKLIYENO+BELGETIPI+BELGENO+CARI_KOD` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 NAKLIYENO, BELGETIPI, BELGENO, CARI_KOD, C_YEDEK1, C_YEDEK2
FROM dbo.TBLNAKLIYEBELGELINK WITH (NOLOCK);
```
