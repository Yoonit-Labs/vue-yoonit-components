<script>
import YooCanvasBind from '@/components/bosons/CanvasBind/CanvasBind'
import YooCanvasMixin from '@/components/bosons/CanvasMixin/CanvasMixin'

export default {
  name: 'YooCanvasRenderFrame',
  props: {
    frame: {
      type: [
        HTMLImageElement,
        HTMLVideoElement,
        HTMLCanvasElement,
        String
      ],
      required: true
    },
    x: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^(-|)([0-9]+)(px)$/gi) ||
        value === '',
      default: ''
    },
    y: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^(-|)([0-9]+)(px)$/gi) ||
        value === '',
      default: ''
    },
    width: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]+)(px)$/gi) ||
        value === '',
      default: ''
    },
    height: {
      type: String,
      required: false,
      validator: value =>
        value.match(/^([0-9]+)(px)$/gi) ||
        value === '',
      default: ''
    },
    rotate: {
      type: Number,
      required: false,
      default: 0
    },
    blackWhite: {
      type: Boolean,
      required: false,
      default: false
    },
    invert: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({}),
  mixins: [
    YooCanvasMixin
  ],
  mounted () {
    this.mixSaveBeforeRender(true)
    this.mixRestoreAfterRender(true)
  },
  methods: {
    doSetPositionsAndSizes ({
      canvas = null,
      x = undefined,
      y = undefined,
      width = canvas.width,
      height = canvas.height,
      invert = false
    }) {
      if (!canvas) {
        return undefined
      }

      const frameRatio = width / height
      const canvasRatio = canvas.width / canvas.height

      if (canvasRatio > frameRatio) {
        width = Math.ceil(canvas.width)
        height = Math.ceil(canvas.width / frameRatio)
      } else {
        width = Math.ceil(canvas.height * frameRatio)
        height = Math.ceil(canvas.height)
      }

      const canvasCenterX = canvas.width / 2
      const frameCenterX = width / 2
      const canvasCenterY = canvas.height / 2
      const frameCenterY = height / 2

      if (x === undefined) {
        x = canvasCenterX - frameCenterX
      }

      if (y === undefined) {
        y = canvasCenterY - frameCenterY
      }

      if (invert) {
        x = x * -1
      }

      return {
        x,
        y,
        width,
        height
      }
    },
    doCanvasRender (inputContext, inputCanvas, debug) {
      if (!inputContext ||
        !inputCanvas) {
        return
      }

      const {
        x,
        y,
        width,
        height
      } = this.doSetPositionsAndSizes({
        canvas: inputCanvas,
        x: this.mixUnityAsNumber(this.x),
        y: this.mixUnityAsNumber(this.y),
        width: this.mixUnityAsNumber(this.width),
        height: this.mixUnityAsNumber(this.height),
        invert: this.invert
      })

      YooCanvasBind
        .setContext(inputContext)
        .drawFrame({
          image: this.frame,
          invert: this.invert,
          blackAndWhite: this.blackWhite,
          rotate: this.rotate,
          source: {},
          destination: {
            dX: x,
            dY: y,
            dWidth: width,
            dHeight: height
          }
        })

      if (debug) {
        const padding = {
          top: 8,
          right: 8,
          bottom: 8,
          left: 8
        }

        inputContext.restore()
        inputContext.save()

        YooCanvasBind
          .setContext(inputContext)
          .drawTag({
            x: 0,
            y: inputCanvas.height - 48,
            color: 'black',
            title: 'FRAME SIZE',
            content: `${Number(width).toFixed(0)} x ${Number(height).toFixed(0)}`,
            padding
          })
      }
    }
  }
}
</script>
