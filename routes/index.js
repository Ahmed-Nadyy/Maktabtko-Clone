var express = require('express');
var router = express.Router();
const Cardlib= require('../model/cardlib');
const CardAca= require('../model/cardaca');
const CardBuy= require('../model/cardbuy');

/* GET home page. */
router.get('/', async(req, res, next) => {
  const cardlib = await Cardlib.findOne().sort({ _id: -1 }).limit(1)
  const Cardaca = await CardAca.findOne().sort({ _id: -1 }).limit(1)
  const Cardbuy = await CardBuy.findOne().sort({ _id: -1 }).limit(1)
  console.log(cardlib)
  console.log(Cardaca)
  console.log(Cardbuy)
  res.render('index', { cardlib: cardlib ,cardaca:Cardaca,cardbuy:Cardbuy});
});

module.exports = router;
