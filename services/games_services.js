const { json } = require('body-parser');
var { dbQuery } = require('../database');

async function play1(red_bet, black_bet, green_bet) {
    var ResultColor = "";

    var RanNum = Math.floor((Math.random() * 36) + 0);
    var SuspenceFactor = Math.floor(Math.random() * 8) - 4;

    if (RanNum == 0) {
      ResultColor = "Green";
    }else if (RanNum % 2 == 0) {
      ResultColor = "Red";
    }else {
      ResultColor = "Black";
    }

    var SpinPro = ((RanNum - 4 + SuspenceFactor / 10) * 0.54054054054 + 60) * -1;
    console.log("spinpro : " + SpinPro);
    console.log("resultColor : " + ResultColor)

    var basewallet = 100;
    var wallet = 100;

    if (green_bet > 0 && ResultColor == "Green") {
        wallet = wallet + green_bet * 36 - red_bet - black_bet;
      }else if (red_bet > 0 && ResultColor == "Red") {
        wallet = wallet + red_bet - green_bet - black_bet;
      }else if (black_bet > 0 && ResultColor == "Black") {
        wallet = wallet + black_bet - red_bet - green_bet;
      }else if (black_bet > 0 || red_bet > 0 || green_bet > 0) {
        wallet = wallet - red_bet - green_bet - black_bet;
      }

      var gain = 0;
      var loss = 0;

      if (wallet > basewallet) {
          gain = wallet - basewallet;
      }
      else {
          loss = basewallet - wallet;
      }

    return {
        ResultColor,
        SpinPro,
        loss,
        gain
    }
}

exports.play1 = play1