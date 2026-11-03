---
title: TBLSCHEDULERTASK
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblschedulertask/
---

# TBLSCHEDULERTASK

> NETSİS VERİTABANI ALTINDA ZAMANLANMIŞ GÖREVLER BİLGİLERİ YER ALIR.

- **Modül:** [GENEL](/veritabani/moduller/genel/)
- **Kolon sayısı:** 19

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `ID` | int | hayır |  | Program tarafından ID numarasıdır. |
| 2 | `TITLE` | varchar(250) | evet |  | Zamanlanmış görevin ismi yer alır. |
| 3 | `DESCRIPTION` | varchar(250) | evet |  | Zamanlanmış görevin açıklaması yer alır. |
| 4 | `MESSAGE` | varchar(-1) | evet |  | Gelen uyarı mesajı yer alır. |
| 5 | `TASKTYPE` | smallint | hayır |  | Görev tipi değeri yer alır. |
| 6 | `SSOUSERID` | int | evet |  | Kullanıcının SSO User ID bilgisi yer alır. |
| 7 | `STARTTIME` | datetime | evet |  | Başlangıç tarihi yer alır. |
| 8 | `ENDTIME` | datetime | evet |  | Bitiş tarihi yer alır. |
| 9 | `RECURRENCE` | int | evet |  | 1 |
| 10 | `RECURRENCETYPE` | int | evet |  | yineleme sıklığı bilgisi yer alır |
| 11 | `COMPLETED` | bit | evet |  | Tamamlandı değeri yer alır. |
| 12 | `ACTIVE` | bit | evet |  | Aktif-1 |
| 13 | `NOTIFICATIONTYPE` | int | evet |  | 1-Email,2-SMS,0-Websocket(Bildirim mesajı) |
| 14 | `BRANCHCODE` | int | evet |  | 0 |
| 15 | `COMPANYNAME` | varchar(30) | evet |  | Şirket bilgisi yer alır. |
| 16 | `BEFORETASKID` | int | evet |  | Öncül görev ID si yer alır. |
| 17 | `AFTERTASKID` | int | evet |  |  |
| 18 | `SETTINGS` | varbinary(-1) | evet |  | Tanıma ait veri içerir. |
| 19 | `RECORDDATE` | datetime | evet |  | kayıt tarihi bilgisi yer alır. |

## Örnek sorgu

```sql
SELECT TOP 100 ID, TITLE, DESCRIPTION, MESSAGE, TASKTYPE, SSOUSERID
FROM dbo.TBLSCHEDULERTASK WITH (NOLOCK);
```
