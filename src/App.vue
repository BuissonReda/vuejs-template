<template>
  <div id="app">
    <Header/>
    <vue-progress-bar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { EventBus } from './event_bus/eventBus'

export default {
  name: 'app',
  components: { Footer, Header },
  mounted () {
    this.$Progress.finish()
  },

  created () {
    this.$Progress.start()

    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      // Continue to next page
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })

    // Start listening to various events
    EventBus.$on('countriesInfosRequested', countriesInfos => {
      console.log('Getting countries infos...')
    })

    EventBus.$on('countriesInfosReceived', countriesInfos => {
      console.log('Countries infos received!')
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: white;
  text-decoration: none;

  &:hover {
    color: white;
    text-decoration: none;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
