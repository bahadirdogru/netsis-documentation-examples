---
title: TBLMUPLAN
url: https://netsis.bahadirdogru.com/veritabani/tablolar/tblmuplan/
---

# TBLMUPLAN

> MUHASEBE HESAP PLANI EKRANINDA TANIMLANAN KAYITLARI TUTAR

- **Modül:** [MUHASEBE](/veritabani/moduller/muhasebe/)
- **Kolon sayısı:** 33
- **Birincil anahtar:** `HESAP_KODU`

## İlgili sayfalar

- [Muhasebe (REST GLAccounts)](/rest/uclar/#muhasebe-fisi-glslips-ve-hesap-plani-glaccounts)

## Kolonlar

| # | Kolon | Tip | Null | Varsayılan | Açıklama |
|---|-------|-----|------|------------|----------|
| 1 | `SUBE_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 2 | `ISLETME_KODU` | TDBSMALLINT | hayır |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 3 | `HESAP_KODU` | TDBMUHKOD | hayır |  | Hesap planı ekranında seviye takibine göre tanımlanan muhasebe hesap kodunu gösterir. |
| 4 | `AGM` | char(1) | evet |  | Girilen muhasebe hesabın hesap türünü gösterir. Ana hesap ise 'A', grup gesap ise 'G', muavin hesap ise 'M' değerini gösterir. |
| 5 | `HS_ADI` | varchar(50) | evet |  | Hesap planı ekranında seviye takibine göre tanımlanan muhasebe hesap kodunun adını gösterir. |
| 6 | `HS_YD_ADI` | varchar(50) | evet |  | Hesap planı ekranında seviye takibine göre tanımlanan muhasebe hesap kodunun yabancı ismini gösterir. |
| 7 | `HS_GRKOD` | varchar(8) | evet |  | İlgili muhasebe hesabın grup kodunu gösterir. |
| 8 | `OLCU_BIRIM` | varchar(2) | evet |  | İlgili muhasebe hesabın varsa ölçü birimini gösterir. |
| 9 | `HS_BLKZ` | char(1) | evet |  | Girilen muhasebe hesabın hesap tipini gösterir. Aktif hesap ise 'A', pasif hesap ise 'P', nazım hesap ise 'N', gider hesap ise 'I', gelir hesap ise 'G' değerini gösterir. |
| 10 | `CALIS_TIP` | char(1) | evet |  | Muhasebe hesabın çalışma tipini gösterir. Borç ise 'B', alacak ise 'A' değerini gösterir. |
| 11 | `CALIS_BAG` | char(1) | evet |  | Tanımlanan muhasebe hesabın cari bağlantılı olup olmadığını gösterir. Cari bağlantısız ise 'H', bağlantılı ise 'E' değerini gösterir. |
| 12 | `DOVIZLIMI` | char(1) | evet |  | İlgili muhasebe hesabının dövizli bir hesap olup olmadığını gösterir. |
| 13 | `DOVIZ_TIPI` | TDBBYTE | evet |  | İlgili muhasebe hesabı dövizli ise, döviz tipini gösterir. |
| 14 | `HESAPLAMATURU` | char(1) | evet |  | Hesap planı ekranında döviz/enflasyon bilgileri sekmesinde hesaplama türünü gösterir. Hesaplama türü kayıt tarihi ise 'K', ortalama vade ise 'O', verilen tarih ise 'V' değerini gösterir. |
| 15 | `DOVIZKONTROL` | char(1) | evet |  | Döviz kontrolüne 'E' denildiği taktirde, ilgili hesap koduna kayıt girilirken döviz girilmesi zorulu olur. |
| 16 | `UPDATE_KODU` | char(1) | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 17 | `REFKODLU_CALIS` | char(1) | evet |  |  |
| 18 | `YEDEK1` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 19 | `YEDEK2` | varchar(8) | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 20 | `YEDEK3` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 21 | `YEDEK4` | TDBFLOAT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 22 | `YEDEK5` | char(1) | evet |  | Hesap planı ekranında döviz/enflasyon bilgileri sekmesinde düzeltilecek hesap parametresi işaretli ise 'E' değerini gösterir.Dövizli hesap parametresinin değeridir. |
| 23 | `YEDEK6` | char(1) | evet |  | Hesap planı ekranında döviz/enflasyon bilgileri sekmesinde düzeltilecek hesap parametresi işaretli iken aktif hale gelen parasal hesap parametresi işaretli ise 'E' değerini gösterir. |
| 24 | `YEDEK7` | TDBBYTE | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 25 | `YEDEK8` | TDBSMALLINT | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 26 | `YEDEK9` | TDBINTEGER | evet |  | Daha sonra kullanılmak için bırakılan yedek saha |
| 27 | `KAYITYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 28 | `KAYITTARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 29 | `DUZELTMEYAPANKUL` | TDBNETSISKUL | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 30 | `DUZELTMETARIHI` | TDBDATETIME | evet |  | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 31 | `ONAYTIPI` | char(1) | evet | `A` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 32 | `ONAYNUM` | TDBINTEGER | evet | `0` | [Ortak kolon](/veritabani/ortak-kolonlar/) |
| 33 | `ENF_FARK_HESKOD` | TDBMUHKOD | evet |  | Hesap planı ekranında döviz/enflasyon bilgileri sekmesinde enflasyon fark hesap kodu girilmişse, hesap kodunu gösterir. |

## Anahtarlar

| Tür | Ad | Kolonlar |
|-----|----|----------|
| PRIMARY KEY | `TBLMUPLAN_PKEY` | `HESAP_KODU` |
| FOREIGN KEY | `TBLMUPLAN_FKEY` | `GRUP_KOD` |
| FOREIGN KEY | `TBLMUPLAN_FKEY1` | `SUBE_KODU` |
| FOREIGN KEY | `TBLMUPLAN_FKEY2` | `ISLETME_KODU` |

Şema dokümanı yabancı anahtarların hangi tabloya bağlandığını vermiyor; yalnızca bu tablodaki kolonları listeliyor.

## İndeksler

| Ad | Kolonlar | Tanım |
|----|----------|-------|
| `TBLMUPLAN_IND_AGM` | `ISLETME_KODU+SUBE_KODU+AGM+HESAP_KODU` | Unique, Non-clustered |
| `TBLMUPLAN_IND_ENFFKOD` | `ISLETME_KODU+SUBE_KODU+ENF_FARK_HESKOD` | Non-unique, Non-clustered |
| `TBLMUPLAN_IND_GRKOD` | `ISLETME_KODU+SUBE_KODU+AGM+HESAP_KODU+HS_GRKOD` | Unique, Non-clustered |
| `TBLMUPLAN_IND_HESADI` | `ISLETME_KODU+SUBE_KODU+HS_ADI` | Non-unique, Non-clustered |
| `TBLMUPLAN_IND_HSBLKZ` | `ISLETME_KODU+SUBE_KODU+HS_BLKZ` | Unique, Non-clustered |
| `TBLMUPLAN_IND_WKRTIP` | `ISLETME_KODU+SUBE_KODU+ONAYTIPI` | Non-unique, Non-clustered |
| `TBLMUPLAN_IND_WRKON` | `ISLETME_KODU+SUBE_KODU+ONAYNUM` | Non-unique, Non-clustered |
| `TBLMUPLAN_PKEY` | `HESAP_KODU` | Clustered |

## Örnek sorgu

```sql
SELECT TOP 100 SUBE_KODU, ISLETME_KODU, HESAP_KODU, AGM, HS_ADI, HS_YD_ADI
FROM dbo.TBLMUPLAN WITH (NOLOCK);
```
