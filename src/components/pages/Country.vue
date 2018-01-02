<template>
  <div>
    <b-table striped hover :items="countriesInfos"></b-table>
  </div>
</template>

<script>
import Api from '../../services/api'
import { EventBus } from '../../event_bus/eventBus'

const api = new Api()

export default {
  name: 'Country',
  data () {
    return {
      country: 'France',
      countriesInfos: []
    }
  },

  mounted () {
    api.getAllCountriesInfos().then(results => {
      this.countriesInfos = results.data
      EventBus.$emit('countriesInfosReceived')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
