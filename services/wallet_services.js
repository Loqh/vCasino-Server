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

exports.createWallet = createWallet
exports.addBitcoin = addBitcoin
