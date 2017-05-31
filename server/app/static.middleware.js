const express = require('express')
const router = express.Router();
const path = require('path');

const nodePath = path.join(__dirname, '..', '..', 'node_modules');
// const jqueryPath = path.join(nodePath, 'jquery', 'dist');
// const bootstrapPath = path.join(nodePath, 'bootstrap', 'dist');
const browserFiles = path.join(__dirname, '..', '..', 'browser');

// router.use('/jquery/jquery.js', express.static(jqueryPath))
// router.use('/bootstrap/bootstrap.js', express.static(bootstrapPath))
router.use('/js', express.static(path.join(browserFiles, 'js')));
router.use('/images', express.static(path.join(browserFiles, 'images')));
router.use('/stylesheets', express.static(path.join(browserFiles, 'stylesheets')));

module.exports = router;