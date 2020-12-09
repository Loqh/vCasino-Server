var express = require('express');
var router = express.Router();

var requests = require('../requests/user_requests');

// Requête GET
router.get('/create', function (req, res) {
  console.log("get called");
  requests.newuser(req.query.name);
  res.json({name : req.query.name});
})

// Requête POST
router.get('/login', function (req, res) {
  console.log("post called");
  res.send(req.params.name);
})

module.exports = router;