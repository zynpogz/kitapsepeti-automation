describe('US04 - Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.kitapsepeti.com', {
            onBeforeLoad(win) {
                win.google_trackConversion = () => { }
            }
        })
    })

    // ✅ TC01
    it('TC01 - Ürün sepete eklenebilmeli', () => {
        cy.get('a[href*="/kitap"]', { timeout: 10000 })
            .first()
            .click({ force: true })

        // Sepete ekle butonu (metne bağımlı değil)
        cy.get('button[type="button"], button[type="submit"]', { timeout: 10000 })
            .filter(':visible')
            .first()
            .click({ force: true })

        cy.get('body').should('contain.text', 'Sepet')
    })

    // ✅ TC02
    it('TC02 - Sepet popup görünmeli', () => {
        cy.get('a[href*="/kitap"]')
            .first()
            .click({ force: true })

        cy.contains('Sepete Ekle', { matchCase: false })
            .click({ force: true })

        cy.get('body').should('contain.text', 'Sepetim')
    })

    // ✅ TC03
    it('TC03 - Sepete gidilebilmeli', () => {
        cy.get('a[href*="/kitap"]')
            .first()
            .click({ force: true })

        cy.contains('Sepete Ekle', { matchCase: false })
            .click({ force: true })

        cy.contains('Sepete Git', { matchCase: false })
            .click({ force: true })

        cy.url().should('include', 'sepet')
    })

    // ❌ TC04
    it('TC04 - Sepet boşken uyarı gösterilmeli', () => {
        cy.visit('https://www.kitapsepeti.com/sepet')

        cy.get('body')
            .should('contain.text', 'Sepetiniz')
    })

})
