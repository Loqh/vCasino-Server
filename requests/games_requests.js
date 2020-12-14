var db = require('../database');
var wallet = require('./wallet_requests');

function playRoulette (req, res) {
    console.log(req);
    wallet.addBitcoin(req, res);

    /*var ResultColor = "";
    var RanNum = Math.floor((Math.random() * 36) + 0);
    var SuspenceFactor = Math.floor(Math.random() * 8) - 4;

    if (RanNum == 0) {
      ResultColor = "Green";
    }else if (RanNum % 2 == 0) {
      ResultColor = "Red";
    }else {
      ResultColor = "Black";
    }

    if (greenBet > 0 && ResultColor == "Green") {
        wallet = wallet + greenBet * 36 - redBet - blackBet;
      }else if (redBet > 0 && ResultColor == "Red") {
        wallet = wallet + redBet - greenBet - blackBet;
      }else if (blackBet > 0 && ResultColor == "Black") {
        wallet = wallet + blackBet - redBet - greenBet;
      }else if (blackBet > 0 || redBet > 0 || greenBet > 0) {
        wallet = wallet - redBet - greenBet - blackBet;*/


    /*var sql = "SELECT bitcoin FROM user_wallet WHERE user_wallet_id=" + req.user_id
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
    });*/
}

module.exports.playRoulette = playRoulette;