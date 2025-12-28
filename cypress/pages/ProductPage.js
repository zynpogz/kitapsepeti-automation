class ProductPage {

    firstProduct() {
        return cy.get('a').filter('[href]').first()
    }

    productTitle() {
        return cy.get('body')
    }

    addToCartButton() {
        return cy.contains('Sepete Ekle')
    }

    cartPopup() {
        return cy.contains('Sepet')
    }

}

export default ProductPage
