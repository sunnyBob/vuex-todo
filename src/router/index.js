import Vue from 'vue'
import Router from 'vue-router'
import ListItem from '../components/ListItem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListItem',
      component: ListItem
    }
  ]
})
