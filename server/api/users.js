import { Router } from 'express'
import bittrex from 'node-bittrex-api'
bittrex.options({
  'apikey': 'API_KEY',
  'apisecret': 'API_SECRET'
})

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  // bittrex.getmarketsummaries(function (data, err) {
  //   if (err) {
  //     return console.error(err)
  //   }
  //   // for (var i in data.result) {
  //   //   bittrex.getticker({ market: data.result[i].MarketName }, function (ticker) {
  //   //     console.log(ticker)
  //   //   })
  //   // }
  //
  //   const currencies = {
  //     'USDT-BTC': { name: 'BTC' },
  //     'BTC-ETH': { name: 'BTC' },
  //     'BTC-XRP': { name: 'BTC' },
  //     'BTC-LTC': { name: 'BTC' },
  //     'BTC-DASH': { name: 'BTC' },
  //     'BTC-ADA': { name: 'BTC' },
  //     'BTC-BTG': { name: 'BTC' },
  //     'BTC-XMR': { name: 'BTC' }
  //   }
  //   res.json(data.result.filter(x => Object.keys(currencies).includes(x.MarketName)))
  // })

  // bittrex.websockets.subscribe(['BTC-ETH', 'BTC-XMR', 'BTC-DASH'], function (data, client) {
  //   if (data.M === 'updateExchangeState') {
  //     data.A.forEach(function (dataFor) {
  //       console.log('Market Update for ' + dataFor.MarketName, dataFor)
  //     })
  //   }
  // })
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
