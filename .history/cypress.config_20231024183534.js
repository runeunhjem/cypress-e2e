const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920, // Set your preferred width
  viewportHeight: 1200g, // Set your preferred height
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
