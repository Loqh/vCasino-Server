var express = require('express');
var router = express.Router();
var requests = require('../requests/wallet_requests');
const { mw_check_auth } = require('../middlewares')



// Requête POST
router.post('/add/Bitcoin', mw_check_auth ,requests.addBitcoin);

// Requête POST
router.post('/get/Userwallet', mw_check_auth ,requests.getUserWallet);

// Requête POST
router.post('/get/bitcoin', mw_check_auth ,requests.getBitcoin);

// Requête POST
router.post('/get/ethereum', mw_check_auth ,requests.getEthereum);

// Requête POST
router.post('/retrait/bitcoin', mw_check_auth ,requests.retraitBitcoin);






module.exports = router;
