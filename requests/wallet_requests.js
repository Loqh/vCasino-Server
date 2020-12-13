var db = require('../database');

function getBitcoin (req, res) {
    var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user_id
    console.log(req.user_id);
    db.connection.query(sql, function (err, result) {
        console.log(result);
        console.log(err);
        if (result.length === 0) {
            console.log('error bitcoin');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("bitcoin ok");
            res.status(200).send(""+ result[0].bitcoin);
        }
    });
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

module.exports.getBitcoin = getBitcoin;
module.exports.getEthereum = getEthereum;
