const router = require('express').Router();
const passport = require('passport');
const hasher = require('object-encrypt-decrypt'); // not good way

// passport
router.use(passport.initialize());
router.use(passport.session());

// serialize and unserialize
passport.serializeUser((user, done) => done(null, hasher.encrypt(user)));
passport.deserializeUser((user, done) => done(null, hasher.decrypt(user)));

module.exports = router;