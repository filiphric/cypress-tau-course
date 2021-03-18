const { setupDb } = require('./setupDb')

module.exports = (on, config) => {
  on('task', {
    setupDb
  })
}


// require('@applitools/eyes-cypress')(module);
