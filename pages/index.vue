<template>
  <section class="section">
    <div class="container is-fluid">
        <div class="column">
          <h3 class="title is-4">Simple Crypto Prices</h3>
          <div class="content">
            <p>Get the latest crypto prices straight from <code>bittrex</code> api.</p>
          </div>
        </div>
        <div class="columns is-multiline is-desktop">
          <div class="column is-one-quarter" v-for="currency in markets.slice(0, 20)"  :key="currency.MarketName">
            <crypto-item :btcPrice="btcPrice" :currency="currency" />
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import CryptoItem from '~/components/CryptoItem'

export default {
  components: {
    CryptoItem
  },
  async asyncData () {
    let { data } = await axios.get('/api/markets/bittrex/all')
    return { markets: data }
  },
  head () {
    return {
      title: 'Markets'
    }
  },
  computed: {
    btcPrice: function () {
      return this.markets.find(x => x.MarketName === 'USDT-BTC').Last
    }
  }
}
</script>
