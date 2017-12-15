<template>
    <section class="section">
    <div class="container is-fluid">
      <h3 class="title is-4">Crypto Price</h3>
      <div class="content">
        <p>If you don't want to have a maximum width but want to keep the 32px margin on the left and
           right sides, add the <code>is-fluid</code> modifier:</p>
      </div>


      <div class="box">
      <article  v-for="currency in markets" :key="index" class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{currency.MarketName}}</strong> <small>Last: {{currency.Last}}</small>
              <br>
            </p>
          </div>
        </div>
      </article>
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
  }
}
</script>
