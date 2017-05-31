const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/User');
const router = require('express').Router();

passport.use(new LocalStrategy((email, password, done) => {
    User.findOne( { email : email } )
        .then(user => {
            if (!user) done(null, false);
            else if (!user.verifyPassword(password)) done(null, false);
            else done(null, user);
        })
        .catch(done)
}));

router.get('/', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect : '/user/' + req.user.id,
        failureRedirect : '/login'
    })
})

module.exports = router;
