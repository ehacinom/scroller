const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/User');
const router = require('express').Router();

// login
passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    }, (email, password, done) => {
        User.findOne( { where : { email } } )
            .then(user => {
                if (!user) done(null, false);
                else if (user.verifyPassword(password)) done(null, user);
                else done(null, false);
            })
            .catch(done);
    }
));

// signup
passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    }, (email, password, done) => {
        User.findOrCreate( { where : { email } } )
            .spread((user, created) => {
                if (created) done(null, user);
                else if (user.verifyPassword(password)) done(null, user);
                else done(null, false);
            })
            .catch(done);
    }
));


module.exports = router;
