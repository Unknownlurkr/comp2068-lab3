'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var potentialNames = ['Brittany', 'Joe', 'Dina','Chris','Lou-Lou', 'Maggie','Remington'];//myself,my grand parents, my brother, my 2 cats and my dog
    var randomName = potentialNames[Math.floor(Math.random() * potentialNames.length)];
    res.render('users', { 'name': randomName });
});

module.exports = router;
