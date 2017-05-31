const Sequelize = require('sequelize');
const { dbURI } = require('../../secrets_constants'); // `postgres://localhost:5432/${NAME}`

// initialize
var db = new Sequelize(dbURI, {
    logging: false
});

module.exports = db;