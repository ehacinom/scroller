const router = require('express').Router();
const session = require('express-session');
const passport = require('passport');
const { SESSION_SECRET } = require('../../secrets_constants');


router.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 500000,
        httpOnly: true
    } // secure : true
}))

module.exports = router;