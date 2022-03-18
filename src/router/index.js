import Vue from 'vue'
import VueRouter from 'vue-router'
import Site from '../Pages/Site/Site.vue'
import Profile from '../Pages/Profile/Profile.vue'
import Order from '../Pages/Order/Order.vue'
import Search from '../Pages/Search/Search.vue'
import Login from '../Pages/Login/Login.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[

    {
        path:'/site',
        component:Site,
        meta:
        {
            showFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:
        {
            showFooter:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:
        {
            showFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:
        {
            showFooter:true
        }
    },
    {
        path:'/',
        redirect:'/site'
    },
    {
        path:'/login',
        component:Login
    }
  ]

})