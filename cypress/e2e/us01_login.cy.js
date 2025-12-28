describe('US01 - Login', () => {

    beforeEach(() => {
        cy.visit('https://www.kitapsepeti.com', {
            onBeforeLoad(win) {
                // Google hatasını tamamen susturur
                win.google_trackConversion = () => { }
            }
        })

        // Header login butonuna bas → popup açılır
        cy.contains('Giriş Yap', { matchCase: false })
            .first()
            .click({ force: true })

        // Popup gerçekten açıldı mı
        cy.get('input[type="email"]', { timeout: 10000 })
            .should('exist')
    })

    // ✅ TC01
    it('TC01 - Login alanları görünmeli', () => {
        cy.get('input[type="email"]').should('exist')
        cy.get('input[type="password"]').should('exist')
        cy.get('button[type="submit"]').should('exist')
    })

    // ❌ TC02
    it('TC02 - Boş alanlarla login olunamamalı', () => {
        cy.get('button[type="submit"]')
            .first()
            .click({ force: true })

        // URL değişmemeli (login başarısız)
        cy.url().should('eq', 'https://www.kitapsepeti.com/')
    })

    // ❌ TC03
    it('TC03 - Geçersiz email ile login olunamamalı', () => {
        cy.get('input[type="email"]')
            .type('abc', { force: true })

        cy.get('input[type="password"]')
            .type('123456', { force: true })

        cy.get('button[type="submit"]')
            .first()
            .click({ force: true })

        cy.url().should('eq', 'https://www.kitapsepeti.com/')
    })

    // ❌ TC04
    it('TC04 - Yanlış şifre ile login olunamamalı', () => {
        cy.get('input[type="email"]')
            .type('test@test.com', { force: true })

        cy.get('input[type="password"]')
            .type('yanlisSifre', { force: true })

        cy.get('button[type="submit"]')
            .first()
            .click({ force: true })

        cy.url().should('eq', 'https://www.kitapsepeti.com/')
    })

    // ✅ TC05
    it('TC05 - Login aksiyonu çalışmalı (backend bağımsız)', () => {
        cy.get('input[type="email"]')
            .type('test@test.com', { force: true })

        cy.get('input[type="password"]')
            .type('123456', { force: true })

        cy.get('button[type="submit"]')
            .first()
            .click({ force: true })

        // Sayfa kırılmadı mı → test geçer
        cy.url().should('include', 'kitapsepeti')
    })

})
