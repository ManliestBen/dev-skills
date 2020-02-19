var express = require('express');
var router = express.Router();
var skillDb = require('../models/skill')

router.get('/', function(req, res) {
    res.render('skills/index', {
        skills: skillDb.getAll()
    })

});

module.exports = router;