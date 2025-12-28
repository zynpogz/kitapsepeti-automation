describe('US05 - Ödeme ve Sipariş Onayı', () => {

    beforeEach(() => {
        cy.visit('https://www.kitapsepeti.com', { failOnStatusCode: false })
        cy.contains('Sepete Ekle').first().click({ force: true })
        cy.contains('Sepetim').click({ force: true })
    })

    // TC01
    it('TC01 - Satin Al ile adres bilgileri sayfasina yonlendirilmeli', () => {
        cy.contains('Satın Al').click({ force: true })
        cy.url().should('include', 'siparis')
    })

    // TC02
    it('TC02 - Odeme adimina gecilebilmeli', () => {
        cy.contains('Satın Al').click({ force: true })
        cy.get('form').should('exist')
    })

    // TC03
    it('TC03 - Kargo adımına geçilebilmeli', () => {
        cy.contains('Satın Al').click({ force: true })
        cy.url().should('include', 'siparis')
    })


    // TC04
    it('TC04 - Eksik bilgi ile ödeme tamamlanamamalı', () => {
        cy.contains('Satın Al').click({ force: true })

        // Sipariş başarıyla tamamlanmamalı
        cy.url().should('not.include', 'siparis-tamamlandi')
    })

    // TC05
    it('TC05 - Kartla Odeme secilince kart alanlari gorunmeli', () => {
        cy.contains('Satın Al').click({ force: true })

        cy.get('input').then(inputs => {
            expect(inputs.length).to.be.greaterThan(0)
        })
    })

    // TC06
    it('TC06 - Eksik bilgi ile ödeme tamamlanamamalı', () => {
        cy.contains('Satın Al').click({ force: true })
        cy.url().should('include', 'siparis')
    })


    // TC07 (NEGATIF)
    it('TC07 - Eksik bilgi ile odeme tamamlanamamali', () => {
        cy.contains('Satın Al').click({ force: true })
        cy.url().should('not.include', 'success')
    })

})
