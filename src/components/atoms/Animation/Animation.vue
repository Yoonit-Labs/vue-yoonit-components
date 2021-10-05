<template lang="pug">
.yoo-animation
  .yoo-animation__content(
    ref="container"
    :style="{...style, width, height}"
  )
</template>

<script>
import { loadAnimation } from 'lottie-web'

export default {
  name: 'YooAnimation',
  props: {
    /**
    * @description Set options for rendering animation based on lottie.loadAnimation()
    * @prop lottieOptions
    * animationData: an Object with the exported animation data.
    * path: the relative path to the animation object. (animationData and path are mutually exclusive).
    * loop: true || false || number.
    * autoplay: true || false it will start playing as soon as it is ready.
    * name: animation name for future reference.
    * renderer: 'svg' || 'canvas' || 'html' to set the renderer.
    * container: the dom element on which to render the animation.
    */
    lottieOptions: {
      type: Object,
      required: true
    },
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data: () => ({
    style: {
      overflow: 'hidden',
      margin: '0 auto'
    },
    animation: null
  }),
  mounted () {
    const {
      container
    } = this.$refs

    this.animation = loadAnimation({
      container,
      renderer: 'svg',
      ...this.lottieOptions
    })

    this.$emit('created', this.animation)
  }
}

</script>
