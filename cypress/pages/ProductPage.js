// cypress/pages/ProductPage.js
class ProductPage {
    elements = {
        firstProduct: () => cy.get('.product-item').filter(':visible').first(),
        addToCartBtn: () => cy.contains('button, a', /Sepete Ekle/i).filter(':visible').first(),
        goToCartBtn: () => cy.contains('a, button', /Sepete Git|Sepetim/i).filter(':visible').first(),
    };

    openFirstProduct() {
        this.elements.firstProduct().scrollIntoView().click({ force: true });
    }

    addToCart() {
        this.elements.addToCartBtn().scrollIntoView().click({ force: true });
    }

    goToCart() {
        this.elements.goToCartBtn().scrollIntoView().click({ force: true });
    }
}

export default new ProductPage();
