describe('US06 - Misafir Olarak Satin Alma', () => {

    it('TC01 - Satin Al ile giris/misafir ekranina yonlendirilmelidir', () => {
        cy.visit('https://www.kitapsepeti.com')

        cy.contains('Sepete Ekle').first().click({ force: true })
        cy.contains('Satın Al').click({ force: true })

        cy.url().should('include', 'siparis')
    })

    it('TC02 - Uye Olmadan Devam Et butonu gorunmeli ve aktif olmali', () => {
        cy.visit('https://www.kitapsepeti.com')

        cy.contains('Sepete Ekle').first().click({ force: true })
        cy.contains('Satın Al').click({ force: true })

        cy.contains('Üye Olmadan Devam Et')
            .should('be.visible')
            .and('not.be.disabled')
    })

    it('TC03 - Uye Olmadan Devam Et secilince adres formu gorunmeli', () => {
        cy.visit('https://www.kitapsepeti.com')

        cy.contains('Sepete Ekle').first().click({ force: true })
        cy.contains('Satın Al').click({ force: true })
        cy.contains('Üye Olmadan Devam Et').click({ force: true })

        cy.contains('Adres').should('exist')
    })

    it('TC04 - Adres formunda zorunlu alanlar gorunmeli', () => {
        cy.visit('https://www.kitapsepeti.com')

        cy.contains('Sepete Ekle').first().click({ force: true })
        cy.contains('Satın Al').click({ force: true })
        cy.contains('Üye Olmadan Devam Et').click({ force: true })

        cy.get('input').should('have.length.greaterThan', 3)
    })

    it('TC05 - Zorunlu alanlar bos birakilinca ilerlenmemeli', () => {
        cy.visit('https://www.kitapsepeti.com')

        cy.contains('Sepete Ekle').first().click({ force: true })
        cy.contains('Satın Al').click({ force: true })
        cy.contains('Üye Olmadan Devam Et').click({ force: true })

        cy.contains('Kaydet').click({ force: true })
        cy.contains('Kaydet').click({ force: true })

        cy.url().should('include', 'address')

    })

})
