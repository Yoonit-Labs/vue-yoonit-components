<template lang="pug">
canvas#core__canvas--capture(
  v-show="debug",
  ref="captureCanvas"
)
</template>

<script>
import YooCanvasBind from '@/components/bosons/CanvasBind/CanvasBind'
import YooCanvasMixin from '@/components/bosons/CanvasMixin/CanvasMixin'

export default {
  name: 'YooCanvasFrameCapture',
  props: {
    mime: {
      type: String,
      required: false,
      default: 'image/jpeg'
    },
    compression: {
      type: Number,
      required: false,
      default: 1
    },
    resizeWidth: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]+)(px)$/gi) ||
        value === '',
      default: '0px'
    },
    resizeHeight: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]+)(px)$/gi) ||
        value === '',
      default: '0px'
    },
    rotate: {
      type: Number,
      required: false,
      default: 0
    },
    base64: {
      type: Boolean,
      required: true
    },
    blob: {
      type: Boolean,
      required: true
    },
    blackWhite: {
      type: Boolean,
      required: false,
      default: false
    },
    luminance: {
      type: Boolean,
      required: false,
      default: false
    },
    sharpness: {
      type: Boolean,
      required: false,
      default: false
    },
    invert: {
      type: Boolean,
      required: false,
      default: false
    },
    capture: {
      type: Boolean,
      required: false,
      default: true
    },
    captureAmount: {
      type: Number,
      required: false,
      default: 10
    },
    captureInterval: {
      type: Number,
      required: false,
      default: 1000
    },
    roiX: {
      type: Number,
      required: false,
      default: 0
    },
    roiY: {
      type: Number,
      required: false,
      default: 0
    },
    roiWidth: {
      type: Number,
      required: false,
      default: 0
    },
    roiHeight: {
      type: Number,
      required: false,
      default: 0
    },
    roiAreaRadius: {
      type: Number,
      required: false,
      default: 0
    },
    roiAreaStroke: {
      type: Number,
      required: false,
      default: 0
    },
    roiAreaColor: {
      type: String,
      required: false,
      default: '#FF0000'
    }
  },
  data: () => ({
    captureCanvas: null,
    captureContext: null,
    captureCount: 0,
    renderedFrame: {},
    faceMetrics: {
      darkness: 0.0,
      lightness: 0.0,
      sharpness: 0.0
    },
    timeout: null,
    debug: false
  }),
  computed: {},
  mixins: [
    YooCanvasMixin
  ],
  mounted () {
    this.mixSaveBeforeRender(false)
    this.mixRestoreAfterRender(false)

    this.captureCanvas = this.$refs.captureCanvas
    this.captureContext = YooCanvasBind.mountCanvas({
      canvas: this.captureCanvas,
      width: 0,
      height: 0,
      attributes: {
        alpha: false
      }
    })
  },
  methods: {
    async doCanvasRender (inputContext, inputCanvas, debug) {
      if (!inputContext ||
        !inputCanvas) {
        return
      }

      //   if (debug) {
      //     // console.log('Rendering:', this.$options.name)
      //   }
      let darkness = 0
      let lightness = 0
      let sharpness = 0
      const padding = {
        top: 8,
        right: 8,
        bottom: 8,
        left: 8
      }
      const x = this.roiX
      const y = this.roiY
      const stroke = this.roiAreaStroke
      let width = this.roiWidth
      let height = this.roiHeight
      this.debug = debug
      this.renderedFrame = {}

      if (this.capture &&
          !this.timeout &&
          this.captureCount < this.captureAmount) {
        if (!width ||
            !height) {
          this.captureCanvas.width = inputCanvas.width
          this.captureCanvas.height = inputCanvas.height
          width = this.captureCanvas.width
          height = this.captureCanvas.height
        } else if (
          (
            this.resizeWidth === '0px' ||
            this.resizeHeight === '0px'
          ) ||
          (
            !this.resizeWidth ||
            !this.resizeHeight
          )
        ) {
          this.captureCanvas.width = width
          this.captureCanvas.height = height
        } else if (this.resizeWidth &&
            this.resizeHeight) {
          this.captureCanvas.width = this.mixUnityAsNumber(this.resizeWidth)
          this.captureCanvas.height = this.mixUnityAsNumber(this.resizeHeight)
        }

        this.faceMetrics = await YooCanvasBind
          .setContext(this.captureContext)
          .drawFrame({
            image: inputCanvas,
            invert: this.invert,
            blackWhite: this.blackWhite,
            sharpness: this.sharpness,
            luminance: this.luminance,
            rotate: this.rotate,
            source: {
              sX: x,
              sY: y,
              sWidth: width,
              sHeight: height
            },
            destination: {
              dX: 0,
              dY: 0,
              dWidth: this.captureCanvas.width,
              dHeight: this.captureCanvas.height
            }
          })

        this.timeout = await setTimeout(async () => {
          this.captureCount += 1

          if (this.blob) {
            this.renderedFrame = {
              ...this.renderedFrame,
              blob: await YooCanvasBind
                .setContext(this.captureContext)
                .getBlob({
                  mime: this.mime,
                  compression: this.compression
                })
            }
          }

          if (this.base64) {
            this.renderedFrame = {
              ...this.renderedFrame,
              base64: await YooCanvasBind
                .setContext(this.captureContext)
                .getBase64({
                  mime: this.mime
                })
            }
          }

          this.timeout = null
          this.$emit('frame', {
            total: this.captureAmount,
            count: this.captureCount,
            frame: this.renderedFrame,
            faceMetrics: this.faceMetrics
          })
        }, this.captureInterval)
      }

      if (debug) {
        if (this.faceMetrics.darkness &&
          this.faceMetrics.lightness) {
          darkness = YooCanvasBind
            .setContext(this.captureContext)
            .drawTag({
              x: 0,
              y: 0,
              color: 'blue',
              title: 'DARKNESS',
              content: `${this.faceMetrics.darkness.toFixed(2)}`,
              padding
            }) + 8

          lightness = YooCanvasBind
            .setContext(this.captureContext)
            .drawTag({
              x: darkness,
              y: 0,
              color: 'blue',
              title: 'LIGHTNESS',
              content: `${this.faceMetrics.lightness.toFixed(2)}`,
              padding
            }) + 8

          sharpness = YooCanvasBind
            .setContext(this.captureContext)
            .drawTag({
              x: darkness + lightness,
              y: 0,
              color: 'blue',
              title: 'SHARPNESS',
              content: `${this.faceMetrics.sharpness.toFixed(2)}`,
              padding
            }) + 8
        }

        YooCanvasBind
          .setContext(this.captureContext)
          .drawTag({
            x: darkness + lightness + sharpness,
            y: 0,
            color: 'blue',
            title: 'ROI SIZE',
            content: `${Number(width).toFixed(0)} x ${Number(height).toFixed(0)}`,
            padding
          })
      }

      YooCanvasBind
        .setContext(inputContext)
        .drawRoundRect({
          x,
          y,
          width,
          height,
          radius: this.roiAreaRadius,
          stroke,
          color: this.debug ? 'blue' : this.roiAreaColor
        })
    }
  },
  watch: {
    capture: {
      handler (newValue, oldValue) {
        if (!oldValue && newValue) {
          this.captureCount = 0
        }
      }
    }
  }
}
</script>

<style src="./CanvasFrameCapture.sass" lang="sass" scoped></style>
