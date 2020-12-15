var db = require('../database');

async function addBitcoin(req, res) {
    const currentWallet = await getUserWallet(req.user_id);
    const mesBitcoin = currentWallet.bitcoin
    console.log(currentWallet);
    console.log("wallet");
    console.log(mesBitcoin);
    console.log("bitcoin")

    /*var sql = "UPDATE user_wallet SET bitcoin = " + req.amount + " WHERE user_wallet_id = " + req.user_id
    db.connection.query(sql, function (err, result) {
        console.log(result);
        if (result == null) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("bitcoin updated");
            res.status(200).send();
        }
    });*/
}

function getUserWallet(user_id) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + user_id
        db.connection.query(sql, function (err, result) {
            console.log(result);
            console.log(err);
            if (result.length === 0) {
                reject(new Error('Not found'))
            } else {
                resolve(result[0])
            }
        });
    })
}

function returnBitcoin(user_id) {
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + user_id
    db.connection.query(sql, function (err, result) {
        console.log(result);
        console.log(err);
        if (result.length === 0) {
            console.log('error bitcoin2');
            return 1000;
        } else {
            console.log("bitcoin2 ok");
            return result[0].bitcoin;
        }
    });
}

async function getWallet (req, res) {
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user_id
    console.log(req.user_id);
    const wallet = await getUserWallet(req.user_id)
    return res.json({
        bitcoin: wallet.bitcoin,
        ethereum: wallet.ethereum
    })
}

async function getBitcoin (req, res) {
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user_id
    console.log(req.user_id);
    const wallet = await getUserWallet(req.user_id)
    return res.json({
        bitcoin: wallet.bitcoin
    })
    /*
    db.connection.query(sql, function (err, result) {
        console.log(result);
        console.log(err);
        if (result.length === 0) {
            console.log('error bitcoin');
            //console.log(err);
            res.status(400).send('Something broke!');
            return 100;
        } else {
            console.log("bitcoin ok");
            res.status(200).send(""+ result[0].bitcoin);
            return result[0].bitcoin;
        }
    });
    */
}

function getEthereum (req, res) {
    var sql = "SELECT ethereum FROM users_wallet WHERE id=" + req.user_wallet_id + "'"
    db.connection.query(sql, function (err, result) {
        if (result.length === 0) {
            console.log('error on ethereum');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("ethereum ok");
            res.status(200).send(""+ result[0]);
        }
    });
}

function retraitBitcoin (req, res) {
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user_id
    console.log(req.user_id);
    db.connection.query(sql, function (err, result) {
        console.log(result);
        console.log(err);
        if (result < req.user_retrait) {
            console.log('error retrait');
            res.status(400).send('Fond insuffisant pour retrait!');
        } else {
            var resultat = req.user_retrait - result;
            var sql = "UPDATE users_wallet SET bitcoin = " + resultat + "' WHERE user_id = " + req.user_id + ""
            console.log("Retrait en cours");
            res.status(200).send();
        }
    });
}

module.exports.getBitcoin = getBitcoin;
module.exports.getEthereum = getEthereum;
module.exports.addBitcoin = addBitcoin;
