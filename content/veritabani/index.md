---
title: Veritabanı
description: Netsis SQL Server şeması; modüller, tablolar, kolonlar, anahtarlar ve indeksler.
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
