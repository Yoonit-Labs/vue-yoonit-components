import PropsConfig from './CanvasMixin.config'

export default {
  name: 'CanvasMixin',
  mounted () {},
  methods: {
    doCanvasState (state, value) {
      if (!PropsConfig.states.options.includes(state)) {
        return
      }

      return Object.defineProperty(
        this.doCanvasRender,
        state,
        {
          value
        }
      )
    },
    doCalcDimensions (width, height) {
      return {
        width: Number(width.toFixed(2)),
        height: Number(height.toFixed(2)),
        center: {
          x: Number(width.toFixed(2)) / 2,
          y: Number(height.toFixed(2)) / 2
        }
      }
    },
    mixSaveBeforeRender (state = true) {
      if (!this.doCanvasRender) {
        return
      }

      return this.doCanvasState(
        'saveBeforeRender',
        state
      )
    },
    mixRestoreAfterRender (state = true) {
      if (!this.doCanvasRender) {
        return
      }

      return this.doCanvasState(
        'restoreAfterRender',
        state
      )
    },
    mixGetDimensions (element = { width: 0, height: 0 }) {
      const elementWidth = element.width || element.clientWidth
      const elementHeight = element.height || element.clientHeight
      const {
        width: screenWidth,
        height: screenHeight
      } = window.screen
      const {
        clientWidth: documentWidth,
        clientHeight: documentHeight
      } = document.documentElement

      const screenSize = this.doCalcDimensions(screenWidth, screenHeight)
      const documentSize = this.doCalcDimensions(documentWidth, documentHeight)
      const elementSize = this.doCalcDimensions(elementWidth, elementHeight)

      return {
        screenSize,
        documentSize,
        elementSize
      }
    },
    mixRegisterWatchers () {
      if (!this.$data ||
          !this.$props) {
        return
      }

      return Object
        .keys(this.$props)
        .forEach(key => {
          const watch = Object.hasOwnProperty.call(this.$data, `${key}Watch`)
          const old = Object.hasOwnProperty.call(this.$data, `${key}Old`)

          if (!watch && !old) {
            return
          }

          return this.$watch(
            key,
            (newValue, oldValue) => {
              if (watch) {
                this.$data[`${key}Watch`] = newValue
              }

              if (old) {
                this.$data[`${key}Old`] = oldValue
              }
            },
            {
              deep: true,
              immediate: true
            }
          )
        })
    },
    mixUnityAsNumber (value) {
      if (!value) {
        return undefined
      }

      return Number(value.replace(/(%|px|rem|em)+$/s, ''))
    },
    mixGet16by9 (value = 0) {
      return Math.floor((value / 16) * 9)
    }
  }
}
