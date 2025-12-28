class CartPage {

    cartIcon() {
        return cy.get('a[href*="sepet"]', { timeout: 10000 }).first()
    }

    productName() {
        return cy.get('[class*="product-name"]', { timeout: 10000 }).first()
    }

    productPrice() {
        return cy.get('[class*="price"]', { timeout: 10000 }).first()
    }

    subTotal() {
        return cy.contains('Toplam')
    }

    increaseQuantity() {
        cy.get('button').contains('+').first().click()
    }

    decreaseQuantity() {
        cy.get('button').contains('-').first().click()
    }

    removeProduct() {
        cy.contains('Sil').first().click({ force: true })
    }

    clearCart() {
        cy.contains('Sepeti Temizle').click({ force: true })
    }

    emptyCartMessage() {
        return cy.contains('Sepetiniz boş')
    }

    buyNowButton() {
        return cy.contains('Satın Al')
    }

    continueShoppingButton() {
        return cy.contains('Alışverişe Devam Et')
    }
}

export default new CartPage()
