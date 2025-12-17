const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kitapsepeti.com',
    setupNodeEvents(on, config) {
      // şimdilik boş bırak
    },
  },
});
