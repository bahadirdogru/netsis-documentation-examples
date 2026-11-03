---
title: TBLSAHAACIKLAMA
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblsahaaciklama/
---

# TBLSAHAACIKLAMA

> Açıklama yok.

- **Modül:** [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/)
- **Kolon sayısı:** 18

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `INCKEYNO` | TDBINTEGER | hayır |  | Inckey numarası bilgisi yer alır. |
| 2 | `CULTUREID` | smallint | hayır |  | 0 |
| 3 | `MODULNO` | smallint | hayır |  | Modül numarası bilgisi yer alır. SSO dan bakılabilir. |
| 4 | `PROGNO` | smallint | hayır |  | Program numarası bilgisi yer alır.SSO dan bakılabilir |
| 5 | `SUBINDEX` | smallint | hayır |  | Kayıt tipine karşılık gelen kod bilgisi yer alır. |
| 6 | `VBSCRIPT` | varchar(4000) | evet |  | Yazılan script bilgisi yer alır. |
| 7 | `SUBE_KODU` | TDBSMALLINT | hayır |  | Şube kodu bilgisi yer alır. |
| 8 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | İşletme kodu bilgisi yer alır. |
| 9 | `C_YEDEK1` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 10 | `C_YEDEK2` | char(1) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 11 | `I_YEDEK1` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 12 | `I_YEDEK2` | TDBINTEGER | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 13 | `F_YEDEK1` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 14 | `F_YEDEK2` | TDBFLOAT | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 15 | `D_YEDEK1` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 16 | `D_YEDEK2` | TDBDATETIME | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 17 | `S_YEDEK1` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |
| 18 | `S_YEDEK2` | varchar(50) | evet |  | Daha sonra kullanılmak üzere bırakılan yedek saha |

## Örnek sorgu

```sql
SELECT TOP 100 INCKEYNO, CULTUREID, MODULNO, PROGNO, SUBINDEX, VBSCRIPT
FROM dbo.TBLSAHAACIKLAMA WITH (NOLOCK);
```
