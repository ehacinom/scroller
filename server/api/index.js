const router = require('express').Router();

router.post('/login', (req, res, next) => {
    const strategy = 'local-login';
    passport.authenticate(strategy, {
        successRedirect : '/user/' + req.user.id,
        failureRedirect : '/login'
    })
})

router.post('/signup', (req, res, next) => {
    const strategy = 'local-signup';
    passport.authenticate(strategy, {
        successRedirect : '/user/' + req.user.id,
        failureRedirect : '/signup'
    })
})

module.exports = router;