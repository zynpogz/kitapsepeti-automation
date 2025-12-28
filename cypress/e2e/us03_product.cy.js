import ProductPage from '../pages/ProductPage'

const productPage = new ProductPage()

describe('US03 - Ürün Detay', () => {

    beforeEach(() => {
        cy.visit('https://www.kitapsepeti.com')
    })

    it('TC01 / AC01 - Ürün detay sayfası açılmalı', () => {
        productPage.firstProduct().click({ force: true })
        cy.url().should('include', 'kitapsepeti')
    })

    it('TC02 / AC02 - Ürün başlık bilgisi DOM’da olmalı', () => {
        productPage.firstProduct().click({ force: true })
        productPage.productTitle().should('exist')
    })

    it('TC03 / AC03 - Sepete Ekle butonu DOM’da olmalı', () => {
        productPage.firstProduct().click({ force: true })
        productPage.addToCartButton().should('exist')
    })

    it('TC04 / AC04 - Sepete ekleme sonrası popup DOM’da olmalı', () => {
        productPage.firstProduct().click({ force: true })
        productPage.addToCartButton().click({ force: true })
        productPage.cartPopup().should('exist')
    })

})
