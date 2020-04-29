import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '../views/main/index'
import customize from '../views/config_customize/index'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "",
    component: app
  },
  {
    path: '/customize',
    name: 'customize',
    component: customize
  }
]

const router = new VueRouter({
  routes
})

export default router