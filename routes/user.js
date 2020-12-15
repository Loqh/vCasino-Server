var express = require('express');
var router = express.Router();
var requests = require('../requests/user_requests');
const { mw_check_auth } = require('../middlewares')


router.post('/create',requests.createUser);

router.post('/connect',requests.connectUser);

router.post('/delete',requests.deleteUser);

router.post('/email', mw_check_auth ,requests.changeEmail);

router.post('/name',mw_check_auth,requests.changeName);

router.post('/password',mw_check_auth,requests.changePassword);

router.post('/nameVerification',requests.nameVerification);

router.post('/getEmail', mw_check_auth ,requests.getEmail);

router.post('/getName', mw_check_auth ,requests.getName);


module.exports = router;
