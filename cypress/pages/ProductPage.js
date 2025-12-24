class ProductPage {
    elements = {
        firstProduct: () =>
            cy.get('.product-item, .productItem, [class*="product"]', { timeout: 15000 })
                .filter(':visible')
                .first(),

        addToCartBtn: () =>
            cy.contains('button,a,input', /Sepete Ekle/i, { timeout: 15000 })
                .scrollIntoView()
                .should('be.visible')
                .first(),

        goToCartBtn: () =>
            cy.contains('a,button', /Sepetim|Sepete Git/i, { timeout: 15000 })
                .should('be.visible')
                .first(),
    };

    openFirstProduct() {
        this.elements.firstProduct().click({ force: true });
    }

    addToCart() {
        this.elements.addToCartBtn().click({ force: true });
    }

    goToCart() {
        this.elements.goToCartBtn().click({ force: true });
    }
}

export default new ProductPage();
