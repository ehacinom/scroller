
const db = require('./db');
const app = require('./app');
const { PORT } = require('../secrets_constants');

var server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('HTTP server listening on port', PORT);
    db.sync().then(() => {
        console.log('Postgres connected.');
    })
})

module.exports = server;
