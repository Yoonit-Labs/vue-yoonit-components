import Components from './components/index'

const $yoo = {
  install: Vue =>
    // Auto-register lib components
    Object
      .entries(Components)
      .forEach(([name, code]) =>
        Vue.component(name, code)
      )
}

export default $yoo
