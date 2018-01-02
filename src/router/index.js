import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Country from '@/components/pages/Country'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/country',
      name: 'Country',
      component: Country
    }
  ]
})
