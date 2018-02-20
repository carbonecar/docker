// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',// Match any network id
       gas: 470000,
       from: "0xa886b090a2879443c39930ff45e4d87e1b088cfe"
    }
  }
}
