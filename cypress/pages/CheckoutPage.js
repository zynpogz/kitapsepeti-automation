class CheckoutPage {
    continueAsGuest() {
        cy.contains('Üye Olmadan Devam Et').click();
    }
}

export default new CheckoutPage();
