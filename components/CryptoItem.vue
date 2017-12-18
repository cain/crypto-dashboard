<template>
  <div class="content crypto-item">
    <div class="">
      <div class="column">
        <commit-chart :candleData="candleData" />
      </div>
    </div>
    <div class="">
      <p class="column">
        <br />
        <strong :class="{title: true}">{{currency.MarketName.split('-')[1]}}</strong>
        <span :class="{subtitle: true,percentage: true, up: calculatePercentage > 0, down: calculatePercentage < 0}">{{calculatePercentage}}%</span> </br >
        <small> {{currency.Last}} {{isUSDT ? 'USDT' : 'BTC'}} {{calculateUSD}}</small>
      </p>
    </div>
  </div>
</template>

<script>
import CommitChart from '~/components/Graph'
import axios from '~/plugins/axios'

export default {
  props: ['currency', 'btcPrice'],
  components: {
    CommitChart
  },
  data () {
    return {
      candleData: []
    }
  },
  mounted () {
    axios.get(`/api/markets/bittrex/currency/${this.currency.MarketName}/candles`).then((res) => { this.candleData = res.data.result.slice(0, 20) })
  },
  computed: {
    isUSDT: function () {
      return this.currency.MarketName.includes('USDT')
    },
    calculateUSD: function () {
      return this.isUSDT ? '' : ` / $${(this.btcPrice * this.currency.Last).toFixed(2)}`
    },
    calculatePercentage: function () {
      return (this.currency.Last / this.currency.PrevDay * 100 - 100).toFixed(2)
    }
  }
}
</script>

<style scoped>
  .crypto-item {
    border-bottom: 1px solid #eaeaea;
  }
  .percentage {
    position: relative;
    margin-left: 10px;
  }
  .percentage:after {
    height: 7px;
    width: 7px;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: calc(50% - 3.5px);
    right: -15px;
  }
 .up:after {
   background: #23d160;
 }
 .down:after {
   background: #ff3860;
 }
</style>
