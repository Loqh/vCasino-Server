var express = require('express');
var router = express.Router();
var requests = require('../requests/user_requests');

// Requête GET
router.get('/get', function (req, res) {
  requests.createUser(req.query);
  res.json({name : req.query.name});
})

// Requête POST
router.post('/create', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.createUser(req.body, res);
});

// Requête Connection
router.post('/login', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.connectUser(req.body, res);
});

module.exports = router;
