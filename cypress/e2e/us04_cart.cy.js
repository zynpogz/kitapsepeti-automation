describe('US04 - Sepet', () => {
    it('Negatif - Sepet boşken uyarı gösterilmeli', () => {
        cy.visit('/sepet');
        cy.acceptCookies();

        // Sepet boş metni sitene göre değişebilir
        cy.contains(/Sepetiniz boş|Sepetinizde/i, { timeout: 10000 }).should('exist');
    });
});
