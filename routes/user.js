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

// Requête Changement de mail
router.post('/changeEmail', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changeMail(req.body, res);
});

// Requête Changement de Name
router.post('/changeName', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changeName(req.body, res);
});

// Requête Changement de Password
router.post('/changePassword', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changePassword(req.body, res);
});

// Requête Suppression utilisateur
router.post('/deleteUser', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changePassword(req.body, res);
});

module.exports = router;
