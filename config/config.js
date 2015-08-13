var environment = {
  'development': {
    firebaseUrl: 'https://brewlab.firebaseio.com/',
    imagePath: './assets/images/',
    testUrl: 'http://localhost:9000',
    localUrl: 'http://localhost:8000',
  },
  'production': {
    firebaseUrl: 'https://brewlab.firebaseio.com/',
    imagePath: './assets/images/',
    siteUrl: 'http://localhost:8000',
  }
}

var ENV = environment['development']

module.exports = ENV
