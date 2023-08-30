const {defineConfig} = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localcoding.us', //we can create any configs for different environment and in package.json add script with different flag and create folder for configs
    watchForFileChanges: false,
    excludeSpecPattern: ['cypress/e2e/1-getting-started/*', 'cypress/e2e/2-advanced-examples/*'],
    viewportWidth: 1200, //viewport settings
    viewportHeight: 700,
    projectId: "su9h2r",
  },
})
