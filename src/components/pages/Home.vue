<template>
  <div>
    <b-jumbotron class="jumbotron blue" header="Home" lead="Your content here">
      <p class="orange">For more information visit the github of this site</p>
      <b-btn variant="primary" href="https://github.com/BuissonReda/vuejs-template">More Info</b-btn>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      countries: []
    }
  },

  mounted () {
    let myThis = this
    this.$api.get('https://jsonplaceholder.typicode.com/posts/1').then(function (result) {
      console.log('get: ')
      console.log(result.data)
    })

    this.$api.post('https://jsonplaceholder.typicode.com/posts', {}).then(function (result) {
      console.log('post: ')
      console.log(result.data)
    })

    this.$api.put('https://jsonplaceholder.typicode.com/posts/1', {}).then(function (result) {
      console.log('put: ')
      console.log(result.data)
    })

    this.$api.patch('https://jsonplaceholder.typicode.com/posts/1', {}).then(function (result) {
      console.log('patch: ')
      console.log(result.data)
    })

    this.$api.delete('https://jsonplaceholder.typicode.com/posts/1', {}).then(function (result) {
      console.log('delete: ')
      console.log(result.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
  margin-bottom: 0px;
}
</style>
