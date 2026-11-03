---
title: POS modülü
url: https://netsis.bahadirdogru.com/veritabani/moduller/pos/
---

# POS modülü tabloları

Bu modülde şema dokümanında ayrıntısı bulunan **7** tablo var.

| Tablo | Kolon | Açıklama |
|-------|------:|----------|
| [`TBLMAGAZALAR`](/veritabani/tablolar/tblmagazalar/) | 7 | MAGAZA TANIMLAMA KAYITLARINI TUTAN TABLODUR. |
| [`TBLMICROSSTHAR`](/veritabani/tablolar/tblmicrossthar/) | 10 | YAZARKASALAR-MICROS-SATIS BILGILERI IZLEME DUZELTME EKRANINDAKI KAYITLARI TUTAN TABLODUR.NETSIS'E AKTARIMDAN ONCE IZLEME/DUZELTME YAPILABILSIN PARAMETRESI ISARETLENDIGINDE AKTIF OLAN EKRANDIR. |
| [`TBLMUHASEBEKODLAR`](/veritabani/tablolar/tblmuhasebekodlar/) | 7 | POS MODÜLÜ>KAYIT>MUHASEBE KODLARININ TANIMLANMASI EKRANIDA GİRİLEN KAYITLARI TUTAR. |
| [`TBLPOSAKTARILANLAR`](/veritabani/tablolar/tblposaktarilanlar/) | 12 | POS MODÜLÜ>POS MAKİNASINDAN AKTARILAN KAYITLARI TUTAR. |
| [`TBLPOSODEME`](/veritabani/tablolar/tblposodeme/) | 11 | POS MODÜLÜ>KAYIT>POS PARAMETRELERİ>ÖDEME DETAY KAYITLARI SEKMESİNDE TANIMLANAN KAYITLARI TUTAR. |
| [`TBLPOSPARAM`](/veritabani/tablolar/tblposparam/) | 117 | POS MODÜLÜ>KAYIT>POS PARAMETRELERİNİ TUTAR |
| [`TBLTERAZIPARAM`](/veritabani/tablolar/tblteraziparam/) | 29 | POS MODÜLÜ>KAYIT>TERAZİ PARAMETRELERİNİ TUTAR. |

## Ayrıntısı olmayan tablolar

Aşağıdaki tablolar tablo listesinde bu modülle anılıyor ama kolon ayrıntısı şema dokümanında yok.

| Tablo | Açıklama |
|-------|----------|
| `TBLPOSTEMP` | POSTAN SATIŞ İŞLEME SIRASINDAKİ KAYITLARI TUTAR. POSTAN SATIŞ İŞLEME BİTTİKTEN SONRA, BU TABLODAKİ KAYITLAR OTOMATİK OLARAK SİLİNİR. |
