const router = require('express').Router();
const passport = require('passport');
const User = require('../db/User');

// passport
router.use(passport.initialize());
router.use(passport.session());

// serialize and unserialize
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then(user => done(null, user))
        .catch(done);
});

module.exports = router;