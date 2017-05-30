
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

// routers
app.use('/api', require('../api'));
app.use('/auth', require('../auth'));

// front end
const validFrontEndRoutes = ['/'];
const indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');
validFrontEndRoutes.forEach(route => {
    console.log(route)
    app.get(route, (req, res, next) => {
        res.sendFile(indexPath);
    })
});

// middleware
// WARNING this makes static files have the "error" title text
app.use('/static', require('./static.middleware'));
app.use(require('./error.middleware'));

module.exports = app;