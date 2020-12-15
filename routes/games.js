var express = require('express');
var router = express.Router();
var requests = require('../requests/games_requests');
const { mw_check_auth } = require('../middlewares')

//router.use(mw_check_auth)

// Requête POST
router.post('/play/roulette', mw_check_auth ,requests.playRoulette);

module.exports = router;