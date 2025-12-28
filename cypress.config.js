const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kitapsepeti.com",
    viewportWidth: 1280,
    viewportHeight: 800,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
