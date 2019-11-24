var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const db = require('../models')


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {
  let user = new db.User(req.body)
  
})

module.exports = router;
