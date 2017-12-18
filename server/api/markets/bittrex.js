import { Router } from 'express'
import bittrex from 'node-bittrex-api'
bittrex.options({
  'apikey': 'API_KEY',
  'apisecret': 'API_SECRET'
})

const router = Router()

/* GET users listing. */
router.get('/all', function (req, res, next) {
  bittrex.getmarketsummaries(function (data, err) {
    if (err) {
      return console.error(err)
    }
    const currencies = [
      'USDT-BTC',
      'BTC-ETH',
      'BTC-XRP',
      'BTC-LTC',
      'BTC-DASH',
      'BTC-ADA',
      'BTC-BTG',
      'BTC-XMR'
    ]
    const top10 = data.result.filter(x => currencies.includes(x.MarketName))
    res.json(top10.sort((a, b) => b.BaseVolume - a.BaseVolume))
  })
})

/* GET user by ID. */
router.get('/currency/:id', function (req, res, next) {
  const id = req.params.id
  bittrex.getmarketsummary({'market': id}, function (data, error) {
    if (error) {
      return res.json(error)
    }
    res.json(data)
  })
})

export default router
