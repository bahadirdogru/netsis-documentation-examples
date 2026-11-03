---
title: TBLLOGIZLEMEWIDGET
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tbllogizlemewidget/
---

# TBLLOGIZLEMEWIDGET

> Yönetici izleme konsolu ayarları yer alır.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 13

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `LISTENER_ID` | TDBSMALLINT | hayır |  |  |
| 3 | `KULLANICI_NO` | TDBSMALLINT | evet |  |  |
| 4 | `MODUL_NO` | TDBSMALLINT | evet |  | Modül numarası bilgisi yer alır. |
| 5 | `PROGRAM_NO` | TDBSMALLINT | evet |  | Program numarası bilgisi yer alır. |
| 6 | `KAYIT` | char(1) | hayır |  | Kayıt işaretli ise E değerini alır. |
| 7 | `SILME` | char(1) | hayır |  | Silme işaretli ise E değerini alır. |
| 8 | `DUZELTME` | char(1) | hayır |  | Düzeltme işaretli ise E değerini alır. |
| 9 | `OPERASYON` | char(1) | hayır |  | Operasyon işaretli ise E değerini alır. |
| 10 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kod bilgisi yer alır. |
| 11 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | şletme kodu bilgisi yer alır. |
| 12 | `TANIM_TIP` | char(1) | hayır |  | Tanım tipi bilgisi yer alır. K- Kullanıcı bazında |
| 13 | `TANIM_KODU` | varchar(128) | hayır |  | tanım kodu bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, LISTENER_ID, KULLANICI_NO, MODUL_NO, PROGRAM_NO, KAYIT
FROM dbo.TBLLOGIZLEMEWIDGET WITH (NOLOCK);
```
