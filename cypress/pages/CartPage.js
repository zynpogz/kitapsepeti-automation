class CartPage {
    elements = {
        cartButton: () => cy.contains('Sepetim'),
        quantityInput: () => cy.get('input[type="number"]').first(),
        cartItem: () => cy.get('[class*="cart"]'),
    };

    goToCart() {
        this.elements.cartButton().click({ force: true });
    }

    increaseQuantity() {
        // input değerini direkt artır (en stabil yöntem)
        this.elements.quantityInput()
            .invoke('val')
            .then((val) => {
                const newVal = Number(val) + 1;
                this.elements.quantityInput()
                    .clear({ force: true })
                    .type(`${newVal}`, { force: true });
            });
    }
}

export default new CartPage();
