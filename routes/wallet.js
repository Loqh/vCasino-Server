var express = require('express');
var router = express.Router();
var requests = require('../requests/wallet_requests');
const { mw_check_auth } = require('../middlewares')



// Requête POST
router.post('/addBitcoin', mw_check_auth ,requests.addBitcoin);






// Requête récupération nom
router.post('/get/bitcoin', function (req, res) {
    console.log('post called');
    console.log(req.body);
    requests.getBitcoin(req.body, res);
});

// Requête récupération nom
router.post('/get/ethereum', function (req, res) {
    console.log('post called');
    console.log(req.body);
    requests.getEthereum(req.body, res);
});


module.exports = router;
