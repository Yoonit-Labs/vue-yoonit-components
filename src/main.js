import Logo from /* webpackChunkName: "Logo" */'./Logo.vue'
import Teste from /* webpackChunkName: "Teste" */'./Teste.vue'

const yooLibrary = {
  install (Vue, options = {}) {
    Vue.component(Logo.name, Logo)
    Vue.component(Teste.name, Teste)
  }
}

export default yooLibrary
