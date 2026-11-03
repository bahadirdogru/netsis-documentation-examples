---
title: Veritabanı
url: https://netsis.bahadirdogru.com/veritabani/
---

# Veritabanı şeması

Bu bölüm Netsis şirket veritabanının şemasını belgeler. Her tablonun kolonları, tipleri, boş geçilebilirliği, varsayılan değerleri, anahtarları ve indeksleri ayrı sayfadadır.

- **Başlangıç için:** [Temel tablolar](/veritabani/temel-tablolar/): cari, stok, fatura, sipariş tablolarının nasıl bağlandığı.
- **Hazır sorgular:** [SQL örnekleri](/veritabani/sql-ornekleri/).
- **Tek tablo:** üstteki arama kutusuna tablo ya da kolon adı yazın (ör. `STHAR_GCMIK`), ya da [tüm tablolar](/veritabani/tum-tablolar/) listesini süzün.
- **Makine okunur:** [sema.txt](/veritabani/sema.txt) (tek dosya, sıkıştırılmış) ve [schema.json](/data/schema.json).

## Bu şemayı okurken

- Şema dokümanı bir **9.0.x** sürümüne aittir. Sizin sürümünüzde kolon eklenmiş ya da kaldırılmış olabilir. Kesin bilgi için kendi veritabanınızda:

  ```sql
  SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH, IS_NULLABLE
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE TABLE_NAME = 'TBLCASABIT'
  ORDER BY ORDINAL_POSITION;
  ```

- Yabancı anahtar satırları yalnızca bu tablodaki kolonları gösterir; hedef tabloyu göstermez. İlişkiler için [Temel tablolar](/veritabani/temel-tablolar/) sayfasındaki eşlemeye bakın.
- Kolon açıklamaları Netsis ekranlarındaki adlara göre yazılmıştır ("KAYIT>STOK KARTI" gibi menü yolları geçer).
- `TDB` önekli tipler Netsis'in kullanıcı tanımlı tipleridir: [Veri tipleri](/veritabani/veri-tipleri/).
- Kaynaktaki bariz hatalar düzeltilmiştir (ör. `TBLFATUIRS` içinde `TBLTEKLIFMAS` diye yazılmış kolon aslında `FTIRSIP`).


## Modüller

| Modül | Tablo | Örnek tablolar |
|-------|------:|----------------|
| [GENEL](/veritabani/moduller/genel/) | 10 | `TBLNFDMAS`, `TBLNFDTRA`, `TBLPARAM`, `TBLEVRAK` |
| [CARİ](/veritabani/moduller/cari/) | 56 | `TBLADRESMAS`, `TBLCARIPLASIYER`, `TBLCABNKSABIT`, `TBLCAGRUP` |
| [STOK](/veritabani/moduller/stok/) | 59 | `TBLSTSABIT`, `TBLSTOKBIL`, `TBLSTOKDP`, `TBLSTOKKOD1` |
| [FATURA](/veritabani/moduller/fatura/) | 55 | `TBLSSATIRAC`, `TBLSIPAMAS`, `TBLSEVKMAS`, `TBLSEVKTRA` |
| [BANKA](/veritabani/moduller/banka/) | 51 | `TBLTCMBANASABIT`, `TBLTCMBSUBESABIT`, `TBLBNKGKSSABIT`, `TBLBNKHESSABIT` |
| [KASA](/veritabani/moduller/kasa/) | 4 | `KASANUM`, `TBLKASA`, `TBLKASAMAS`, `TBLKASAEK` |
| [MUHASEBE](/veritabani/moduller/muhasebe/) | 45 | `TBLMUHAPRM`, `TBLYANS600`, `TBLYANS700`, `TBLNETBIL` |
| [SENET-ÇEK](/veritabani/moduller/senet-cek/) | 27 | `TBLKAMBBSEN`, `TBLBCEK`, `TBLBCEKNO`, `TBLBCEKPAR` |
| [ENTEGRASYON](/veritabani/moduller/entegrasyon/) | 5 | `TBLMUHAGEC`, `TBLREFERANS`, `TBLFATUISK`, `TBLENTKUMULASYON` |
| [ÜRETİM](/veritabani/moduller/uretim/) | 42 | `TBLURTYENIALAN`, `TBLURTYENIALANTABLO`, `TBLURTYENIALANDEGER`, `TBLURMSUBEDEPO` |
| [TALEP-TEKLİF](/veritabani/moduller/talep-teklif/) | 3 | `TBLTEKLIFPRM`, `TBLTEKLIFMAS`, `TBLTEKLIFTRA` |
| [DİZAYN](/veritabani/moduller/dizayn/) | 5 | `TBLDIZAYNMOD`, `TBLDIZAYNSABIT`, `TBLDZNBASIMLOG`, `TBLDIZAYNGENEL` |
| [DEKONT](/veritabani/moduller/dekont/) | 9 | `TBLDEKONO`, `TBLDAMGASOZ`, `TBLDAMGAVERGISI`, `TBLDEKOPRM` |
| [RAPOR](/veritabani/moduller/rapor/) | 30 | `TBLMUSMAL (Müşteri Mal Analizi)`, `TBLSATMAL (Satıcı Mal Analizi)`, `TBLSAT12 (Satıcı 12 Aylık Alış)`, `TBLSAT12DUMY` |
| [YARDIMCI PROGRAMLAR](/veritabani/moduller/yardimci-programlar/) | 28 | `TBLNDS`, `TBLSUBELER`, `TBLPAKETDBPARAM`, `TBLPRGPRM` |
| [POS](/veritabani/moduller/pos/) | 7 | `TBLPOSPARAM`, `TBLMUHASEBEKODLAR`, `TBLTERAZIPARAM`, `TBLPOSODEME` |
| [LOG](/veritabani/moduller/log/) | 4 | `TBLNETSISLOG`, `TBLLOGPARAM`, `TBLLOGKULTABLOLAR`, `TBLNETSISLOG_MAPPING` |
| [KULLANICI İŞLEMLERİ](/veritabani/moduller/kullanici-islemleri/) | 10 | `TBLSATIRGUVENLIK (Oracle veritabanında vardır.)`, `TBLKULEMAIL`, `TBLKULLANHAKP`, `TBLKULLANP` |
| [CRM](/veritabani/moduller/crm/) | 40 | `TBLCRMADAYURUN`, `TBLCRMADAY`, `TBLCRMPARAM`, `TBLCRMANK` |
| [MRP](/veritabani/moduller/mrp/) | 61 | `TBLOPERATIONS_KATALOG`, `TBLISTASYON`, `TBLISTASYON_TAKVIM`, `TBLGENEL_TAKVIM` |
| [KALİTE KONTROL](/veritabani/moduller/kalite-kontrol/) | 18 | `TBLKKTRA`, `TBLKKREDKABUL`, `TBLKKPARAM`, `TBLKKOLCUM` |
| [MÜSTAHSİL](/veritabani/moduller/mustahsil/) | 8 | `TBLMUSTAHSI`, `TBLMUSTNO`, `TBLMUSTPRM`, `TBLTEMBAG` |
| [KANTAR](/veritabani/moduller/kantar/) | 2 | `TBLTARTIMBLG`, `TBLTBLKANTPRM` |
| [ÜRETİM AKIŞ KONTROL](/veritabani/moduller/uretim-akis-kontrol/) | 4 | `TBLUAKAKTIVITESABIT`, `TBLUAKARIZASABIT`, `TBLUAKPARAM`, `TBLUAKMAS` |
| [İŞ AKIŞ YÖNETİMİ](/veritabani/moduller/is-akis-yonetimi/) | 4 | `TBLWORKPATH`, `TBLWORKPATHTRA`, `TBLWORKFLOWTRA`, `TBLWORKPATHOPERATOR` |
| [DİNAMİK DEPO](/veritabani/moduller/dinamik-depo/) | 11 | `TBLSTHACIM`, `TBLDEPDURUM`, `TBLDEPHACİMGRP`, `TBLDEPHAR` |
| [DAĞITIM](/veritabani/moduller/dagitim/) | 29 | `TBLTMPDISSIPATRA`, `TBLDAGBOLGESABIT`, `TBLDAGCARIDAGITIM`, `TBLDAGVASITABILGI` |
| [MAKİNA BAKIM](/veritabani/moduller/makina-bakim/) | 25 | `TBLBKMSB`, `TBLBKMDURUM`, `TBLBKMTIP`, `TBLBKMSOZTIP` |
| [MALİYET MUHASEBESİ](/veritabani/moduller/maliyet-muhasebesi/) | 10 | `TBLMALIANAG`, `TBLMALISIRA`, `TBLMALISARF`, `TBLMALIGRUP` |
| [DÖVİZ](/veritabani/moduller/doviz/) | 1 | `TBLCARIKUR` |
| [NETSİS SÜREÇ YÖNETİMİ](/veritabani/moduller/netsis-surec-yonetimi/) | 16 | `TBLBSCMODELMAS`, `TBLBSCVIZYONMAS`, `TBLBSCMISYONMAS`, `TBLBSCSTRATEJIMAS` |
| [DIŞ TİCARET](/veritabani/moduller/dis-ticaret/) | 35 | `TBLIHRODEMETIP`, `TBLIHRODEMEACIK`, `TBLIHRGUMRUKMAS`, `TBLPAKETMAS` |
