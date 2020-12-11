var express = require('express');
var router = express.Router();
var requests = require('../requests/user_requests');

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
router.post('/update/email', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changeMail(req.body, res);
});

// Requête Changement de Name
router.post('/update/name', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changeName(req.body, res);
});

// Requête Changement de Password
router.post('/update/password', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changePassword(req.body, res);
});

// Requête Suppression utilisateur
router.post('/delete', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.changePassword(req.body, res);
});

// Requête vérification utilisateur
router.post('/check/name', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.nameVerification(req.body, res);
});

// Requête récupération nom
router.post('/get/name', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.getName(req.body, res);
});

// Requête récupération email
router.post('/get/email', function (req, res) {
  console.log('post called');
  console.log(req.body);
  requests.getEmail(req.body, res);
});

module.exports = router;
