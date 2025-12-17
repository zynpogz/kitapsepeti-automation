class SearchPage {
    elements = {
        searchInput: () =>
            cy.get('input[type="search"], input[placeholder*="Aradığınız"]'),
        productList: () => cy.get('.product-item'),
        acceptCookiesButton: () => cy.contains('Tümünü Kabul Et'),
    };

    visitHome() {
        cy.visit('/');

        // Cookie popup varsa kapat
        cy.get('body').then(($body) => {
            if ($body.text().includes('Tümünü Kabul Et')) {
                this.elements.acceptCookiesButton().click({ force: true });
            }
        });
    }

    searchProduct(keyword) {
        this.elements.searchInput()
            .first()
            .clear()
            .type(`${keyword}{enter}`, { force: true });
    }
}

export default new SearchPage();
