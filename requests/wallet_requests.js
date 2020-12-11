var db = require('../database');

function getBitcoin (req, res) {
    var sql = "SELECT bitcoin FROM users_wallet WHERE id=" + req.user_wallet_id + "'"
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+ result);
        }
    });
}

function getEthereum (req, res) {
    var sql = "SELECT ethereum FROM users_wallet WHERE id=" + req.user_wallet_id + "'"
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+ result);
        }
    });
}

module.exports.getBitcoin = getBitcoin;
module.exports.getEthereum = getEthereum;
