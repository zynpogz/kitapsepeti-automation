# 📚 Kitapsepeti Automation Project

## 🎯 Projenin Amacı
Bu proje, canlı bir e-ticaret sitesi olan **kitapsepeti.com** üzerinde temel kullanıcı akışlarını
manuel ve otomasyon testleri ile doğrulamak amacıyla hazırlanmıştır.

Amaç; kullanıcıların site üzerinde sorunsuz bir şekilde alışveriş yapabilmesini sağlamak ve
kritik işlevlerin doğru çalıştığını test etmektir.

---

## 🧪 Test Edilen User Story’ler

| US Kodu | User Story | Açıklama |
|--------|------------|----------|
| US01 | Kullanıcı Girişi | Kayıtlı kullanıcı sisteme giriş yapabilmeli |
| US02 | Ürün Arama | Kullanıcı ürün araması yapabilmeli |
| US03 | Ürün Detay | Ürün detay sayfası görüntülenebilmeli |
| US04 | Sepet Yönetimi | Sepete ürün ekleme, artırma ve silme |
| US05 | Ödeme Adımı | Sipariş ve ödeme adımına geçiş |
| US06 | Misafir Satın Alma | Üye olmadan satın alma adımına geçiş |

---

## 📝 Manuel Testler
- Manuel test senaryoları **Excel** formatında hazırlanmıştır.
- Her User Story için **pozitif ve negatif** test senaryoları bulunmaktadır.
- Senaryolar **User Story** ve **Acceptance Criteria (AC)** bazlıdır.

---

## 🤖 Otomasyon Testleri
- Cypress kullanılarak **End-to-End (E2E)** testler yazılmıştır.
- **Page Object Model (POM)** mimarisi uygulanmıştır.
- Her User Story için ayrı test dosyaları oluşturulmuştur.
- Testler stabil şekilde çalışmakta ve başarılı sonuç vermektedir.

---

## 🛠️ Kullanılan Teknolojiler
- JavaScript  
- Cypress (E2E test otomasyonu)  
- Page Object Model (POM)  
- Node.js & npm  
- Mocha (test raporlama altyapısı)

---

## 📁 Proje Yapısı

![Proje Yapısı](images/image.png)


---

## ▶️ Testleri Çalıştırma

### Cypress Test Runner’ı açmak için:

```bash
npx cypress open

Headless modda çalıştırmak için:
npx cypress run

ℹ️ Notlar

Testler canlı sistem üzerinde çalıştırılmıştır.

Gerçek ödeme işlemi tamamlanmamıştır.

Proje eğitim ve test amaçlı hazırlanmıştır.


