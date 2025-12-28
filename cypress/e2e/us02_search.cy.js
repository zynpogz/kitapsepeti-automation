describe('US02 - Ürün Arama', () => {

    beforeEach(() => {
        cy.visit('/')

        // Çerez popup varsa kapat
        cy.get('body').then(($body) => {
            if ($body.text().includes('Tümünü Kabul Et')) {
                cy.contains('Tümünü Kabul Et').click({ force: true })
            }
        })
    })

    // ============================
    // AC2 - Geçerli kelime ile arama
    // ============================
    it('AC2 - Geçerli kelime ile arama yapılabilmeli (Pozitif)', () => {

        cy.get('input[name="q"]', { timeout: 10000 })
            .should('be.visible')
            .click({ force: true })

        // ENTER ile arama (type zinciri yok!)
        cy.get('input[name="q"]')
            .type('roman{enter}', { force: true })

        // URL değişmiş mi (roman olabilir, q=roman olabilir)
        cy.url({ timeout: 10000 }).should('include', 'roman')

        // Sayfada ürün kartı var mı
        cy.get('body', { timeout: 10000 })
            .should('contain.text', 'Roman')
    })

    // ============================
    // AC3 - Geçersiz kelime
    // ============================
    it('AC3 - Geçersiz kelime ile sonuç bulunamamalı (Negatif)', () => {

        cy.get('input[name="q"]', { timeout: 10000 })
            .click({ force: true })

        cy.get('input[name="q"]')
            .type('asdfghjklqwerty{enter}', { force: true })

        // Ürün kartı OLMAMALI
        cy.get('.product-item', { timeout: 5000 })
            .should('not.exist')
    })


    // ============================
    // AC4 - Boş arama
    // ============================
    it('AC4 - Boş arama yapılamamalı (Negatif)', () => {

        cy.get('input[name="q"]', { timeout: 10000 })
            .click({ force: true })
            .type('{enter}', { force: true })

        // URL değişmemeli
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })

})
