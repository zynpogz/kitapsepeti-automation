Cypress.Commands.add('acceptCookies', () => {
    cy.get('body', { timeout: 10000 }).then(($body) => {

        if ($body.find('#onetrust-accept-btn-handler').length) {
            cy.get('#onetrust-accept-btn-handler').click({ force: true });
            return;
        }

        const texts = ['Tümünü Kabul Et', 'Kabul Et', 'Anladım', 'Tamam'];
        for (const t of texts) {
            if ($body.find(`button:contains("${t}")`).length) {
                cy.contains('button', t, { matchCase: false }).click({ force: true });
                return;
            }
        }
    });
});
