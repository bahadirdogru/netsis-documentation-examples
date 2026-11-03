---
title: NetRS ve transaction
description: NetOpenX oturumu üzerinden SQL çalıştırma (NetRS) ve NetsisTransaction ile toplu işlemleri geri alınabilir yapma.
---

# NetRS ve transaction

## NetRS: oturum üzerinden SQL

`NetRS`, açık NetOpenX oturumunun veritabanı bağlantısıyla SQL çalıştırır. Ayrı bir `SqlConnection` açmadan okuma yapmak için kullanışlıdır ve hem MSSQL hem Oracle'da çalışır. REST'teki `api/v2/Queries/NetRS` ucu bunun HTTP karşılığıdır.

```csharp
NetRS rs = kernel.yeniNetRS(sirket);
try
{
    rs.Ac("SELECT CARI_KOD, CARI_ISIM FROM TBLCASABIT WHERE SUBE_KODU = 0");
    while (!rs.EOF)
    {
        string kod = rs.FieldByName("CARI_KOD").AsString;
        // ...
        rs.SonrakiK();      // sonraki kayıt
    }
}
finally { Marshal.ReleaseComObject(rs); }
```

| Üye | İşlev |
|-----|-------|
| `Ac(sql)` | `SELECT` çalıştırır, imleci ilk kayda konumlar |
| `EOF` | Kayıtların sonuna gelindi mi |
| `FieldByName(ad)` | Alan; `.AsString` gibi dönüştürücülerle okunur |
| `IlkK()`, `SonrakiK()` | İlk / sonraki kayda git |
| `Calistir(sql)` | `INSERT`/`UPDATE`/`DELETE` çalıştırır |
| `NetsisTransaction(TTransactionTipi)` | Transaction başlat / bitir / geri al |

Logo örneklerinde tablo adı `TBL` öneki olmadan da yazılır (`SELECT * FROM CASABIT`). Kendi kurulumunuzda hangisinin çalıştığını deneyin; `TBL…` adları her durumda tablonun kendisidir.

> **`Calistir` iş kurallarını atlar.** Logo örneği `CASABIT`/`CASABITEK`'e `INSERT` ile cari ekler; bu, [yazma kuralının](/genel-bakis/#yazma-kurali) dışındadır. Kart ve belge yazmak için ilgili nesneyi (`Cari`, `Fatura`…) kullanın. `Calistir`'i yalnızca Netsis'in kendisinin de basit `UPDATE` ile değiştirdiği alanlar ya da kendi yardımcı tablolarınız için kullanın.

## NetsisTransaction

Birden çok kaydı tek bir iş olarak yazmak için iş nesnelerinde (`Cari`, `Stok`, `CekSenAna`, `NetRS`…) `NetsisTransaction` vardır:

```csharp
Stok stok = kernel.yeniStok(sirket);
StokTemelBilgi tb = stok.TemelBilgi();
StokEkBilgi ek = stok.EkBilgi();

stok.NetsisTransaction(TTransactionTipi.ttBaslat);
try
{
    tb.Stok_Kodu = "STK-0001"; tb.Stok_Adi = "Örnek";
    ek.Stok_Kodu = "STK-0001";
    stok.kayitYeni();
    // aynı transaction içinde başka kayıtlar...
    stok.NetsisTransaction(TTransactionTipi.ttBitir);    // onayla
}
catch
{
    stok.NetsisTransaction(TTransactionTipi.ttGeriAl);   // geri al
    throw;
}
```

| `TTransactionTipi` | Anlamı |
|--------------------|--------|
| `ttBaslat` | Transaction başlat |
| `ttBitir` | Onayla (commit) |
| `ttGeriAl` | Geri al (rollback) |

Transaction'ın aynı oturumdaki (aynı `Sirket`) diğer nesnelere de yayıldığı örneklerden anlaşılır; farklı `Sirket` nesneleri ayrı bağlantılardır. Uzun transaction'lar Netsis kullanıcılarını kilitleyebilir; kısa tutun.

REST'te karşılığı `OpenTransaction` / `CommitTransaction` / `RollBackTransaction` uçlarıdır ([Transaction ve hatalar](/rest/transaction-ve-hatalar/)).
