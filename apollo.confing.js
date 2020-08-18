module.exports = {
  client: {
    service: {
      name: 'nikki',
      // URL to the GraphQL API
      url: 'http://localhost:8080/viewer/query'
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js'
    ]
  }
}
