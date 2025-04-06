const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://openferry.com',
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
  },
});
