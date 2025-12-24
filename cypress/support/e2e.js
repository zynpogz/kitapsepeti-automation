import './commands';

Cypress.on('uncaught:exception', (err) => {
    if (err.message && err.message.includes('google_trackConversion is not a function')) {
        return false;
    }
});
