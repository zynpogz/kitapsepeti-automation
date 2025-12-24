const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kitapsepeti.com',
    supportFile: 'cypress/support/e2e.js',
  },
});
