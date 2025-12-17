Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.kitapsepeti.com/giris');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});