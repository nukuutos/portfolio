const { defineConfig } = require('cypress')

module.exports = defineConfig({
  numTestsKeptInMemory: 5,
  requestTimeout: 10000,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
})
