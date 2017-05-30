
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(morgan('tiny'));
app.use(require('./session.middleware'));
app.use(require('./passport.middleware'));
app.use('/public', express.static(path.join(__dirname, '..', '..', 'browser')))

// routers
app.use('/', (req, res, next) => {
    res.send('yay!');
})
app.use('/api', require('../api'));
app.use('/auth', require('../auth'));

// error
app.use(require('./error.middleware'));

module.exports = app;