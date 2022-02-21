<template lang="pug">
.app__container(
  ref="cameraContainer"
)
  YooGetUserMedia(
    v-if="showCamera"
    :visible="false"
    from="camera"
    :stream="takeStream"
    @output="doGetVideoElm"
    @permissionDenied="doEmitPermissionDenied"
  )

  YooCanvasCore(
    v-if="doVerifyOutputFrame(userMediaElm)"
    :width="`${canvasSize.width}px`"
    :height="`${canvasSize.height}px`"
    :debug="debug"
  )
    YooCanvasRenderFrame(
      :frame="userMediaElm"
      :invert="true"
      :rotate="0"
      :width="`${frameSize.width}px`"
      :height="`${frameSize.height}px`"
      :blackWhite="false"
    )

    YooCanvasFrameCapture(
      :roiX="takeRoiConfig.x"
      :roiY="takeRoiConfig.y"
      :roiWidth="takeRoiConfig.width"
      :roiHeight="takeRoiConfig.height"
      :roiAreaRadius="takeRoiConfig.areaRadius"
      :roiAreaStroke="takeRoiConfig.areaStroke"
      :roiAreaColor="takeRoiConfig.areaColor"
      :capture="capture"
      :captureAmount="captureAmount"
      :captureInterval="1000"
      :luminance="true"
      :sharpness="true"
      :invert="false"
      :blackWhite="false"
      :base64="base64"
      :blob="blob"
      resizeWidth=""
      resizeHeight=""
      :rotate="0"
      @frame="doGetFrame"
    )
</template>

<script>
import { dimensionRulesEnum } from '@/enums/CanvasSize'
import YooCanvasCore from '@/components/atoms/CanvasCore/CanvasCore.vue'
import YooGetUserMedia from '@/components/quarks/GetUserMedia/GetUserMedia.vue'
import YooCanvasFrameCapture from '@/components/quarks/CanvasFrameCapture/CanvasFrameCapture.vue'
import YooCanvasRenderFrame from '@/components/quarks/CanvasRenderFrame/CanvasRenderFrame.vue'
import PropsConfig from '@/components/molecules/Camera/Camera.config'

export default {
  name: 'YooCamera',
  props: {
    showCamera: {
      type: Boolean,
      default: true
    },
    debug: {
      type: Boolean,
      default: false
    },
    roi: {
      type: Object,
      default: () => ({})
    },
    capture: {
      type: Boolean,
      default: false
    },
    captureAmount: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      validator: (mode) => PropsConfig.mode.options.includes(mode),
      default: PropsConfig.mode.default
    },
    facingMode: {
      type: String,
      validator: (facingMode) => PropsConfig.facingMode.options.includes(facingMode),
      default: PropsConfig.facingMode.default
    },
    blob: {
      type: Boolean,
      default: true
    },
    base64: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    userMediaElm: null,
    canvasSize: {
      width: '',
      height: ''
    },
    frameSize: {
      width: 0,
      height: 0
    },
    roiWidth: 0,
    roiHeight: 0
  }),
  components: {
    YooCanvasCore,
    YooGetUserMedia,
    YooCanvasFrameCapture,
    YooCanvasRenderFrame
  },
  mounted () {
    this.$nextTick().then(setTimeout(() => {
      this.doSetRenderCanvas()
    }, 100))
  },
  computed: {
    /**
     * @computed takeStream
     * @description Generate stream config
     */
    takeStream () {
      return {
        audio: false,
        video: {
          facingMode: this.facingMode,
          width: 1920,
          height: 1080,
          focusMode: 'continuous'
        }
      }
    },
    /**
     * @computed takeRoiConfig
     * @description Generate Roi config
     * @returns roiConfig {x: number, y: number, width: number, height: number,
     * areaRadius: number, areaStroke: number, areaColor: number}
     */
    takeRoiConfig () {
      if (!this.canvasSize.width || !this.canvasSize.height) {
        return {}
      }

      // It's necessary to do this division and subtraction in order to maintain roi in the center
      return {
        x: (this.canvasSize.width / 2) - (this.roiWidth / 2),
        y: (this.canvasSize.height / 2) - (this.roiHeight / 2),
        width: this.roiWidth,
        height: this.roiHeight,
        areaRadius: this.roi.radius || 0,
        areaStroke: this.roi.areaStroke || 10,
        areaColor: this.roi.areaColor || '#00FF00'
      }
    }
  },
  methods: {
    /**
     * @method doSetCanvasDimension
     * @description Set canvasSize with container width and height. cameraContainer is always 100% height and width
     */
    doSetCanvasDimension () {
      let { width, height } = window.getComputedStyle(this.$refs.cameraContainer)
      width = Math.round(width.replace('px', ''))
      height = Math.round(height.replace('px', ''))

      this.canvasSize.width = width
      this.canvasSize.height = height
    },
    /**
     * @method doGenerateFaceRoi
     * @description Generate Face Roi based on multiplier, canvas width and height.
     * @param multiplier
     */
    doGenerateFaceRoi (multiplier) {
      // Necessary to make Roi dimension better on square images
      const EQUAL_DIMENSIONS_INCREMENT = 0.15

      if (this.canvasSize.width > this.canvasSize.height) {
        this.roiWidth = this.canvasSize.width * multiplier
        this.roiHeight = this.roiWidth
        return
      }
      if (this.canvasSize.height > this.canvasSize.width) {
        this.roiHeight = this.canvasSize.height * multiplier
        this.roiWidth = this.roiHeight
        return
      }

      this.roiWidth = this.canvasSize.width * (multiplier + EQUAL_DIMENSIONS_INCREMENT)
      this.roiHeight = this.roiWidth
    },
    /**
     * @method doGenerateDocRoi
     * @description Generate Doc Roi based on multiplier, canvas width and height.
     * @param multiplier
     */
    doGenerateDocRoi (multiplier) {
      // Necessary to make roi become a rectangle and maintain proportion
      const PROPORTION_MULTIPLIER = 1.2
      const multiplierToRectangle = multiplier * PROPORTION_MULTIPLIER

      this.roiWidth = this.canvasSize.width * multiplierToRectangle
      this.roiHeight = this.roiWidth * multiplier
    },
    /**
     * @method doSetRenderCanvas
     * @description Render the canvas component, with it's dimensions and Roi based on canvas size and mode.
     * @returns {*}
     */
    doSetRenderCanvas () {
      this.doSetCanvasDimension()

      const modeDimensionRules = dimensionRulesEnum[this.mode]

      const generateRoi = this.mode === 'face'
        ? this.doGenerateFaceRoi
        : this.doGenerateDocRoi

      if (this.canvasSize.width >= dimensionRulesEnum.BIG_CANVAS) {
        return generateRoi(modeDimensionRules.BIG_CANVAS_ADJUSTMENT)
      }

      if (this.canvasSize.width <= dimensionRulesEnum.SMALL_CANVAS) {
        return generateRoi(modeDimensionRules.SMALL_CANVAS_ADJUSTMENT)
      }

      generateRoi(modeDimensionRules.REGULAR_CANVAS_ADJUSTMENT)
    },
    /**
     * @method doGetVideoElm
     * @description Set video element data to local state.
     * @param element
     */
    doGetVideoElm (element) {
      this.userMediaElm = element
      this.frameSize.width = element.videoWidth
      this.frameSize.height = element.videoHeight
    },
    /**
     * @method doVerifyOutputFrame
     * @description Verify if output is valid.
     * @param output
     * @returns {boolean}
     */
    doVerifyOutputFrame (output) {
      return output instanceof HTMLImageElement ||
        output instanceof HTMLVideoElement ||
        output instanceof HTMLCanvasElement ||
        output instanceof String
    },
    /**
     * @method doGetFrame
     * @description Handle frame emitted by canvas.
     * @param frameData {count: number, total: number,
     * faceMetrics: { darkness: number, lightness: number, sharpness: number}, frame: blob}
     */
    doGetFrame (frameData) {
      if (frameData.count >= frameData.total) {
        this.$emit('finish')
      }

      this.$emit('frame', frameData)
    },
    doEmitPermissionDenied () {
      this.$emit('permissionDenied')
    }
  }
}

</script>
