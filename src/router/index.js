import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../Pages/Site/Site.vue'
import Profile from '../Pages/Profile/Profile.vue'
import Order from '../Pages/Order/Order.vue'
import Search from '../Pages/Search/Search.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[

    {
        path:'/site',
        component:Site
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/',
        redirect:'/site'
    }
  ]

})