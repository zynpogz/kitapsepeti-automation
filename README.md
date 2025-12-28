# 📚 Kitapsepeti Automation Project

## 🎯 Projenin Amacı
Bu proje, canlı bir e-ticaret sitesi olan **kitapsepeti.com** üzerinde temel kullanıcı akışlarını
manuel ve otomasyon testleri ile doğrulamak amacıyla hazırlanmıştır.

Amaç; kullanıcıların site üzerinde sorunsuz bir şekilde alışveriş yapabilmesini sağlamak ve
kritik işlevlerin doğru çalıştığını test etmektir.

---

## 🧪 Test Edilen User Story’ler

| US Kodu | User Story | Açıklama |
|-------|-----------|---------|
| US01 | Kullanıcı Girişi | Kayıtlı kullanıcı sisteme giriş yapabilmeli |
| US02 | Ürün Arama | Kullanıcı ürün araması yapabilmeli |
| US03 | Ürün Detay | Ürün detay sayfası görüntülenebilmeli |
| US04 | Sepet Yönetimi | Sepete ürün ekleme, artırma ve silme |
| US05 | Ödeme Adımı | Sipariş ve ödeme adımına geçiş |
| US06 | Misafir Satın Alma | Üye olmadan satın alma adımına geçiş |

---

## 📝 Manuel Testler
- Manuel test senaryoları **Excel** formatında hazırlanmıştır.
- Her User Story için **pozitif ve negatif** senaryolar bulunmaktadır.
- Senaryolar **User Story ve Acceptance Criteria (AC)** bazlıdır.

---

## 🤖 Otomasyon Testleri
- Cypress kullanılarak **E2E (End-to-End)** testler yazılmıştır.
- **Page Object Model (POM)** yapısı kullanılmıştır.
- Her User Story için ayrı test dosyası bulunmaktadır.

---

## 🛠️ Kullanılan Teknolojiler
- JavaScript  
- Cypress (E2E test otomasyonu)  
- Page Object Model (POM)  
- Node.js & npm  
- Mocha (test raporlama altyapısı)

---

## Proje Yapısı
![Proje Yapısı](screenshots/image-2.png)
## ▶️ Testleri Çalıştırma

### Cypress Test Runner’ı açmak için:
```bash
npx cypress open

## 📸 Test Sonuçları

### US01 – Login
![US01 Login](screenshots/us01_login.png)

### US04 – Cart
![US04 Cart](screenshots/us04_cart.png)

### US06 – Guest Checkout
![US06 Guest Checkout](screenshots/us06_guest_checkout.png)
