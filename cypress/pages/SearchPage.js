class SearchPage {

    searchInput() {
        return cy.get('input[name="q"]')
    }

    searchButton() {
        return cy.get('button[type="submit"]')
    }

    searchResultList() {
        return cy.get('.product-list, .search-results')
    }

    noResultMessage() {
        return cy.contains(/sonuç bulunamadı|bulunamadı/i)
    }
}

export default new SearchPage()
