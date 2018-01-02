<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand><router-link to="Home">Home</router-link></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item><router-link to="Country">Countries</router-link></b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

</style>