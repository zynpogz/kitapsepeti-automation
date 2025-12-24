class CartPage {
    emptyCartMessage() {
        return cy.contains('Sepetinizde');
    }
}

export default new CartPage();
