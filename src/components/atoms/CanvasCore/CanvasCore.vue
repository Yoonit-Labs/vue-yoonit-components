<template lang="pug">
#core(
  :style="takeAreaDimensions"
)
  canvas#core__canvas--input(
    ref="canvasInput"
  )

  YooCanvasGuide(
    v-if="debug"
  )

  slot
</template>

<script>
import YooCanvasBind from '@/components/bosons/CanvasBind/CanvasBind'

import YooCanvasGuide from '@/components/quarks/CanvasGuide/CanvasGuide.vue'

export default {
  name: 'YooCanvasCore',
  props: {
    width: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]+)(px)$/gi) ||
        value === '',
      default: '720px'
    },
    height: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]+)(px)$/gi) ||
        value === '',
      default: '480px'
    },
    debug: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    canvas: {
      input: {}
    },
    context: {
      input: {}
    },
    pendingSave: true,
    pendingRestore: false,
    children: [],
    slots: [],
    renderers: [],
    renderingID: null
  }),
  components: {
    YooCanvasGuide
  },
  created () {},
  mounted () {
    if (this.$refs.canvasInput) {
      this.canvas.input = this.$refs.canvasInput

      this.context.input = YooCanvasBind.mountCanvas({
        canvas: this.canvas.input,
        width: this.width.replace('px', ''),
        height: this.height.replace('px', ''),
        attributes: {
          alpha: true
        }
      })

      if (!this.context.input) {
        return
      }
    }

    this.doMountRender()
  },
  updated () {
    this.doMountRender()
  },
  computed: {
    takeAreaDimensions () {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  methods: {
    doMountRender () {
      if (this.renderingID) {
        window.cancelAnimationFrame(this.renderingID)
      }

      this.slots = []
      this.children = []

      if (this.debug) {
        console.log('------------------------------')
        console.log('|   CANVAS CORE DEBUG: ON    |')
        console.log('------------------------------')

        const CanvasGuide = this.$children[0]

        this.children = [
          {
            name: CanvasGuide.$options.name,
            render: CanvasGuide.doCanvasRender
          }
        ]
      }

      this.slots = this.$slots.default
        .reduce((acc, elm) => {
          const component = elm.componentInstance
          const name = component.$options.name
          const render = component.doCanvasRender

          return [
            ...acc,
            {
              name,
              render
            }
          ]
        }, [])

      this.renderers = [
        ...this.slots,
        ...this.children
      ]

      this.doExecuteRender()
    },
    doRender (
      name,
      render,
      inputContext,
      inputCanvas,
      debug
    ) {
      if (!render) {
        return
      }

      if (render.saveBeforeRender &&
        this.pendingSave) {
        this.pendingSave = false
        this.pendingRestore = true
        inputContext.save()

        // if (debug) {
        //   console.log('\n[Saving state before render]\n')
        // }
      }

      // if (debug) {
      //   console.log('\nInvoking:', name)
      // }

      render(
        inputContext,
        inputCanvas,
        debug
      )

      // if (debug) {
      //   console.log('Rendered:', name, '\n')
      // }

      if (render.restoreAfterRender &&
        this.pendingRestore) {
        this.pendingSave = true
        this.pendingRestore = false
        inputContext.restore()

        // if (debug) {
        //   console.log('\n[Restoring state after render]\n')
        // }
      }
    },
    async doExecuteRender () {
      const inputCanvas = this.canvas.input
      const inputContext = this.context.input

      if (!inputCanvas ||
          !inputContext) {
        return
      }

      // if (this.debug) {
      //   console.log('\n----------------------')
      // }
      YooCanvasBind
        .setContext(inputContext)
        .clearFrame()

      await this.renderers
        .forEach(
          ({ name, render }) =>
            this.doRender(
              name,
              render,
              inputContext,
              inputCanvas,
              this.debug
            )
        )

      /**
       * 34ms is plenty as video frame rate is typically never more than 30 FPS
       * (NTSC) or 25 FPS (PAL), ie 1000 / 30. If you use 0 you risk stacking up
       * your calls which means the browser will be busy trying to empty the
       * event queue.
       *
       * If you use anything lower than 33-34ms you end up having the same frame
       * processed twice or more which of course is unnecessary (your video is
       * actually 29.97 FPS/NTSC so you might want to consider keeping 34ms).
       */

      // setTimeout(() => {
      //   this.doExecuteRender()
      // }, 34)
      this.renderingID = window.requestAnimationFrame(this.doExecuteRender)
    }
  }
}
</script>

<style src="./CanvasCore.sass" lang="sass" scoped></style>
