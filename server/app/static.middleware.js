const express = require('express')
const router = express.Router();
const path = require('path');

const browserFiles = path.join(__dirname, '..', '..', 'browser');
router.use('/js', express.static(path.join(browserFiles, 'js')));
router.use('/images', express.static(path.join(browserFiles, 'images')));
router.use('/stylesheets', express.static(path.join(browserFiles, 'stylesheets')));

module.exports = router;