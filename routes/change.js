var express = require('express');
var router = express.Router();
var requests = require('../requests/change_requests');
const { mw_check_auth } = require('../middlewares')


// Requête POST
router.post('/mail',requests.changeMail);

// Requête POST
router.post('/name',requests.changeName);

// Requête POST
router.post('/password',requests.changPassword);





module.exports = router;