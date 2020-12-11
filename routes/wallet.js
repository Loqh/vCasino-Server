var express = require('express');
var router = express.Router();
var requests = require('../requests/wallet_requests');

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
