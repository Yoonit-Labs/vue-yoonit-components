<template />

<script>
import YooCanvasBind from '@/components/bosons/CanvasBind/CanvasBind'
import YooCanvasMixin from '@/components/bosons/CanvasMixin/CanvasMixin'

export default {
  name: 'YooCanvasGuide',
  data: () => ({
    color: '0, 255, 255',
    fps: 0,
    fpsAvg: [],
    lastFPS: 0,
    delta: 0,
    frameNumber: 0
  }),
  mixins: [
    YooCanvasMixin
  ],
  mounted () {
    this.mixSaveBeforeRender(true)
    this.mixRestoreAfterRender(true)
    this.doResetFPS()
  },
  methods: {
    doResetFPS () {
      return setInterval(
        () => {
          this.fps = Number((1 / this.delta).toFixed(0))
          if (this.fpsAvg.length < 10) {
            this.fpsAvg.push(this.fps)
          } else {
            this.fpsAvg.shift()
            this.fpsAvg.push(this.fps)
          }

          if (this.fps < 10) {
            this.fps = `0${this.fps}`
          }

          this.frameNumber = 0
        }, 1000)
    },
    doCanvasRender (inputContext, inputCanvas, debug) {
      if (!inputContext ||
        !inputCanvas) {
        return
      }

      // if (debug) {
      //   console.log('Rendering:', this.$options.name)
      // }

      const {
        elementSize: {
          width,
          height,
          center
        }
      } = this.mixGetDimensions(inputCanvas)

      const padding = {
        top: 8,
        right: 8,
        bottom: 8,
        left: 8
      }
      this.frameNumber++
      const color = 'red'

      const fpsWidth = YooCanvasBind
        .setContext(inputContext)
        .drawTag({
          x: 0,
          color,
          title: 'FPS',
          content: `${this.fps || '00'}`,
          padding
        }) + 8

      const fpsAvgWidth = YooCanvasBind
        .setContext(inputContext)
        .drawTag({
          x: fpsWidth,
          color,
          title: 'FPS(AVG)',
          content: Number((this.fpsAvg.reduce((acc, elm) => (acc += elm), 0) / this.fpsAvg.length).toFixed(0)) || '00',
          padding
        }) + 8

      const frameCounterWidth = YooCanvasBind
        .setContext(inputContext)
        .drawTag({
          x: fpsWidth + fpsAvgWidth,
          color,
          title: 'FRAME',
          content: this.frameNumber < 10
            ? `0${this.frameNumber}`
            : this.frameNumber,
          padding
        }) + 8

      YooCanvasBind
        .setContext(inputContext)
        .drawTag({
          x: fpsWidth + fpsAvgWidth + frameCounterWidth,
          color,
          title: 'CANVAS SIZE',
          content: `${Number(width).toFixed(0)} x ${Number(height).toFixed(0)}`,
          padding
        })

      if (!this.lastFPS) {
        this.lastFPS = performance.now()
      }

      this.delta = (performance.now() - this.lastFPS) / 1000
      this.lastFPS = performance.now()

      // debugger
      // line paint
      const colorOpaque = `rgba(${this.color}, 1)`
      const colorTransparent = `rgba(${this.color}, 0.3)`

      YooCanvasBind
        .setContext(inputContext)
        .drawLine({
          startX: center.x,
          startY: 0,
          stopX: center.x,
          stopY: height,
          color: colorOpaque
        })
        .drawLine({
          startX: center.x * 0.5,
          startY: 0,
          stopX: center.x * 0.5,
          stopY: height,
          color: colorTransparent
        })
        .drawLine({
          startX: center.x * 1.5,
          startY: 0,
          stopX: center.x * 1.5,
          stopY: height,
          color: colorTransparent
        })
        .drawLine({
          startX: 0,
          startY: center.y,
          stopX: width,
          stopY: center.y,
          color: colorOpaque
        })
        .drawLine({
          startX: 0,
          startY: center.y * 0.5,
          stopX: width,
          stopY: center.y * 0.5,
          color: colorTransparent
        })
        .drawLine({
          startX: 0,
          startY: center.y * 1.5,
          stopX: width,
          stopY: center.y * 1.5,
          color: colorTransparent
        })
    }
  }
}
</script>
