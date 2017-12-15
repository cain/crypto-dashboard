<template>
    <section class="section">
    <div class="container is-fluid">
      <h3 class="title is-4">Crypto Price</h3>
      <div class="content">
        <p>Get the latest crypto prices straight from <code>bittrex</code> api.</p>
      </div>



      <div class="columns">
        <div class="column">
          <article  v-for="currency in markets" :key="index" class="media">
              <div class="content">
                <p>
                  <strong>{{currency.MarketName}}</strong> <br /><small>Last: {{currency.Last}}</small>
                  <br>
                </p>
            </div>
          </article>
        </div>
        <div class="column">
          <article  v-for="currency in markets" :key="index" class="media">
              <div class="content">
                <p>
                  <strong>{{currency.MarketName}}</strong> <br /><small>Last: {{currency.Last}}</small>
                  <br>
                </p>
            </div>
          </article>
        </div>
        <div class="column">
          <article  v-for="currency in markets" :key="index" class="media">
              <div class="content">
                <p>
                  <strong>{{currency.MarketName}}</strong> <br /><small>Last: {{currency.Last}}</small>
                  <br>
                </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { markets: data }
  },
  head () {
    return {
      title: 'Markets'
    }
  },
  mounted() {
    require('node-bittrex-api')

    bittrex.websockets.subscribe(['BTC-ETH', 'BTC-SC', 'BTC-ZEN'], function (data, client) {
      if (data.M === 'updateExchangeState') {
        data.A.forEach(function (dataFor) {
          console.log('Market Update for ' + dataFor.MarketName, dataFor)
        })
      }
    })
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.markets.filter((x) => x.MarketName === 'USDT-BTC')[0].last
    }
  }
}
</script>
