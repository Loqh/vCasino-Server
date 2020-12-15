var { dbQuery } = require('../database');

async function createWallet(user_id) {
    console.log("user_id")
    console.log(user_id);
    const sql = "INSERT INTO user_wallet VALUES ('0','" + user_id + "','0','0')";
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result);
        return result
    }
    catch(err) {
        throw new Error('Cannot create wallet')
    }

}

async function addBitcoin(req, res) {
    var sql = "UPDATE user_wallet SET bitcoin = " + req.amount + " WHERE user_wallet_id = " + req.user
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    } catch (err) {
        console.log("Bitcoin error");
        console.log(err);
        throw new Error('Cannot add Bitcoin')
    }

}

function getUserWallet(user_id) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user
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
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user
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
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user
    console.log(req.user_id);
    const wallet = await getUserWallet(req.user_id)
    return res.json({
        bitcoin: wallet.bitcoin,
        ethereum: wallet.ethereum
    })
}

function getBitcoin (req, res) {
    var sql = "SELECT bitcoin FROM users_wallet WHERE user_wallet_id=" + req.user + "'"
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

function getEthereum (req, res) {
    var sql = "SELECT ethereum FROM users_wallet WHERE user_wallet_id=" + req.user + "'"
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
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user
    console.log(req.user);
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
exports.createWallet = createWallet;
exports.addBitcoin = addBitcoin;
module.exports.retraitBitcoin = retraitBitcoin;
