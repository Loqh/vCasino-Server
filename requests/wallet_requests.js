var db = require('../database');
const WalletServices = require('../services/wallet_services.js')


async function addBitcoin(req, res) {
    try {
        // todo: verify body
        console.log("requests addBitcoin")
        const { user_bitcoin_depot } = req.body
        console.log("req.body")
        console.log(req.body)
        console.log(req.user);
        const result = await WalletServices.addBitcoin(req.user, user_bitcoin_depot)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error addBitcoin requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getUserWallet(req, res) {
    try {
        // todo: verify body
        const { user_email } = req.body
        const result = await WalletServices.getUserWallet(user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error getUserWallet requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getBitcoin(req, res) {
    try {
        // todo: verify body
        const { user_email } = req.body
        const result = await WalletServices.getBitcoin(user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error getBitcoin requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getEthereum(req, res) {
    try {
        // todo: verify body
        const { user_email } = req.body
        const result = await WalletServices.getEthereum(user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error getEthereum requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function retraitBitcoin(req, res) {
    try {
        // todo: verify body
        const { user_email } = req.body
        const result = await WalletServices.retraitBitcoin(user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error Retrait Bitcoin requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getWalletByName(req, res) {
    try {
        // todo: verify body
        const { user_email } = req.body
        const result = await WalletServices.getWalletByName(user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error getWalletByName requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}





module.exports.addBitcoin = addBitcoin;
module.exports.getUserWallet = getUserWallet;
module.exports.getBitcoin = getBitcoin;
module.exports.getEthereum = getEthereum;
module.exports.retraitBitcoin = retraitBitcoin;
module.exports.getWalletByName = getWalletByName;
