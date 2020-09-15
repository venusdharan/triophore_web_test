import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13b44d31 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _57eb5b99 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3d75a176 = () => interopDefault(import('..\\pages\\gdpr.vue' /* webpackChunkName: "pages/gdpr" */))
const _74ed8c80 = () => interopDefault(import('..\\pages\\terms.vue' /* webpackChunkName: "pages/terms" */))
const _f8b382fc = () => interopDefault(import('..\\pages\\service\\blockchain.vue' /* webpackChunkName: "pages/service/blockchain" */))
const _1b8b7b8b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _13b44d31,
    name: "404"
  }, {
    path: "/contact",
    component: _57eb5b99,
    name: "contact"
  }, {
    path: "/gdpr",
    component: _3d75a176,
    name: "gdpr"
  }, {
    path: "/terms",
    component: _74ed8c80,
    name: "terms"
  }, {
    path: "/service/blockchain",
    component: _f8b382fc,
    name: "service-blockchain"
  }, {
    path: "/",
    component: _1b8b7b8b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
