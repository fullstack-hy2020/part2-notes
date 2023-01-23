const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
  env: {
    BACKEND: 'http://localhost:3001/api'
  }
})
