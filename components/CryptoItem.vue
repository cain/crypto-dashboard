<template>
  <div class="content">
    <div class="">
      <p class="column">
        <strong>{{currency.MarketName}}</strong>
        <small> {{currency.Last}} {{currency.MarketName.includes('USDT') ? 'USDT' : 'BTC'}}</small>
        <br>
      </p>
    </div>
    <div class="">
      <div class="column">
        <commit-chart />
      </div>
    </div>
  </div>
</template>

<script>
import CommitChart from '~/components/Graph'

export default {
  props: ['currency', 'message'],
  components: {
    CommitChart
  }
}
</script>
