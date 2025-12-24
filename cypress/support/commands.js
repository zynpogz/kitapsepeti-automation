Cypress.Commands.add('acceptCookies', () => {
    cy.get('body', { timeout: 10000 }).then(($body) => {
        const candidates = [
            () => cy.contains('button', /kabul et/i, { timeout: 1000 }),
            () => cy.contains('button', /kabul/i, { timeout: 1000 }),
            () => cy.contains('button', /tamam/i, { timeout: 1000 }),
            () => cy.contains('button', /accept/i, { timeout: 1000 }),
        ];

        const tryClick = (i) => {
            if (i >= candidates.length) return;
            candidates[i]()
                .then(($btn) => cy.wrap($btn).click({ force: true }))
                .catch(() => tryClick(i + 1));
        };

        tryClick(0);
    });
});
