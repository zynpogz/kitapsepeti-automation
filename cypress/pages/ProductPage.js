class ProductPage {
    elements = {
        firstProduct: () => cy.get('.product-item').first(),
        addToCartButton: () => cy.contains('Sepete Ekle'),
        successPopup: () => cy.contains('Sepete Git'),
    };

    openFirstProduct() {
        this.elements.firstProduct().click({ force: true });
    }

    addToCart() {
        this.elements.addToCartButton().click({ force: true });
    }
}

export default new ProductPage();
