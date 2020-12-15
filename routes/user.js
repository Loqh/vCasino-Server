var express = require('express');
var router = express.Router();
var requests = require('../requests/user_requests');
const { mw_check_auth } = require('../middlewares')

// Requête POST
router.post('/create',requests.createUser);

// Requête POST
router.post('/email', mw_check_auth ,requests.changeMail);

// Requête POST
router.post('/name',mw_check_auth,requests.changeName);

// Requête POST
router.post('/password',mw_check_auth,requests.changePassword);







// Requête Connection
router.post('/login', function (req, res) {
  console.log('post called');
  console.log(req.body, req.query, req.params, req.headers, );
  requests.connectUser(req.body, res);
});

// Requête Changement de Name
router.post('/update/name', mw_check_auth, function (req, res) {
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
router.post('/delete', mw_check_auth, function (req, res) {
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
