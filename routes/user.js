var express = require('express');
var router = express.Router();
var requests = require('../requests/user_requests');
const { mw_check_auth } = require('../middlewares')


router.post('/create',requests.createUser);

router.post('/connect',requests.connectUser);

router.post('/delete',requests.deleteUser);

router.post('/update/email', mw_check_auth ,requests.changeEmail);

router.post('/update/name',mw_check_auth,requests.changeName);

router.post('/update/password',mw_check_auth,requests.changePassword);

router.post('/check/name',requests.nameVerification);

router.post('/get/email', mw_check_auth ,requests.getEmail);

router.post('/get/name', mw_check_auth ,requests.getName);


module.exports = router;
