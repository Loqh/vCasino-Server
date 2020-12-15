var db = require('../database');
const GamesServices = require('../services/games_services.js')

async function playRoulette (req, res) {
  try {
    const { red_bet, black_bet, green_bet } = req.body;
    const result = await GamesServices.play1(red_bet, black_bet, green_bet)
    console.log("result");
    console.log(result);
    res.status(200).json(result)
  } catch (error) {

  }
}

module.exports.playRoulette = playRoulette;