var express = require('express');
var router = express.Router();
var skillDb = require('../models/skill')
var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index);

module.exports = router;