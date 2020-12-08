import Components from './components/index'

const yooLibrary = {
  install (Vue, options) {
    // Auto-register lib components
    Object.entries(Components).forEach(name => {
      Vue.component(name[0], name[1])
    })
  }
}

export default yooLibrary
