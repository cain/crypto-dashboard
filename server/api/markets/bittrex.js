import { Router } from 'express'
import bittrex from 'node-bittrex-api'
bittrex.options({
  'apikey': 'API_KEY',
  'apisecret': 'API_SECRET'
})

const router = Router()
const currencies = [
  'USDT-BTC',
  'BTC-ETH',
  'BTC-XRP',
  'BTC-LTC',
  'BTC-DASH',
  'BTC-ADA',
  'BTC-BTG',
  'BTC-XMR',
  'BTC-POT',
  'BTC-ETC',
  'USDT-ETH',
  'BTC-NEO',
  'BTC-XVG',
  'BTC-EMC2',
  'BTC-OMG',
  'BTC-STRAT'
]
/* GET users listing. */
router.get('/all', function (req, res, next) {
  bittrex.getmarketsummaries(function (data, err) {
    if (err) {
      return console.error(err)
    }

    const top10 = data.result.filter(x => currencies.includes(x.MarketName))
    res.json(top10.sort((a, b) => b.BaseVolume - a.BaseVolume))
  })
})

/* GET user by ID. */
router.get('/currency/:id/summary', function (req, res, next) {
  const id = req.params.id
  bittrex.getmarketsummary({'market': id}, function (data, error) {
    if (error) {
      return res.json(error)
    }
    res.json(data)
  })
})

/* GET user by ID. */
router.get('/currency/:id/candles', function (req, res, next) {
  const id = req.params.id

  bittrex.getcandles({
    marketName: id,
    tickInterval: 'day'
  }, function (data, err) {
    if (err) {
      /**
        {
          success: false,
          message: 'INVALID_TICK_INTERVAL',
          result: null
        }
      */
      return res.json(err)
    }
    res.json(data)
  })
})

export default router
