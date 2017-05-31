const router = require('express').Router();
const session = require('express-session');
const passport = require('passport');
const { SESSION_SECRET } = require('../../secrets_constants');


router.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 500000, // timing out cookies to 9 mins
        httpOnly: true
    } // secure : true // need to set up SSL people!
}))

// session logging for debugging purposes
router.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

module.exports = router;