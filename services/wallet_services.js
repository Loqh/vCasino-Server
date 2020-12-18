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

async function addBitcoin(user_id, req) {
    var sql = "UPDATE user_wallet SET bitcoin = '" + req.amount + "' WHERE user_wallet_id = '" + user_id +"'"
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
        var sql = "SELECT bitcoin,ethereum FROM user_wallet WHERE user_wallet_id= '" + user_id + "'"
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
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id= '" + user_id + "'"
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

async function getWallet (user_id) {
    var sql = "SELECT bitcoin,ethereum FROM user_wallet WHERE user_wallet_id= '" + user_id + "'"
    console.log(req.user_id);
    const wallet = await getUserWallet(req.user_id)
    return res.json({
        bitcoin: wallet.bitcoin,
        ethereum: wallet.ethereum
    })
}

async function getWalletByName (user_id) {
    var sql = "SELECT bitcoin,ethereum" +
              "FROM users " +
              "LEFT JOIN user_wallet on users.user_id = user_wallet_id" +
              "WHERE user_name= '" + user_id + "'"
    console.log(req.user_id);
    const wallet = await getUserWallet(req.user_id)
    return res.json({
        bitcoin: wallet.bitcoin,
        ethereum: wallet.ethereum
    })
}

async function getBitcoin (user_id) {
    var sql = "SELECT bitcoin FROM users_wallet WHERE user_wallet_id= '" + user_id + "'"
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    }
    catch(err) {
        console.log("getBitcoin error");
        console.log(err);
        throw new Error('Cannot getBitcoin')
    }
}

async function getEthereum (user_id) {
    var sql = "SELECT ethereum FROM users_wallet WHERE user_wallet_id= '" + user_id + "'"
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    }
    catch(err) {
        console.log("get Ethereum error");
        console.log(err);
        throw new Error('Cannot getEthereum')
    }
}


function retraitBitcoin (user_id) {
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id= '" + user_id +"'"
    console.log(req.user);
    db.connection.query(sql, function (err, result) {
        console.log(result);
        console.log(err);
        if (result < req.user_retrait) {
            console.log('Fond insuffisant pour retrait!');
        } else {
            var resultat = req.user_retrait - result;
            var sql = "UPDATE users_wallet SET bitcoin = '" + resultat + "' WHERE user_id = '" + user_id + "'"
            console.log("Retrait en cours");
        }
    });
}

module.exports.getBitcoin = getBitcoin;
module.exports.getEthereum = getEthereum;
module.exports.addBitcoin = addBitcoin;
module.exports.createWallet = createWallet;
module.exports.addBitcoin = addBitcoin;
module.exports.retraitBitcoin = retraitBitcoin;
module.exports.getWallet = getWallet;
module.exports.returnBitcoin = returnBitcoin;
module.exports.getWalletByName = getWalletByName;
