import './commands';

Cypress.on('uncaught:exception', (err) => {
    if (err.message?.includes('google_trackConversion')) return false;
    return true;
});
