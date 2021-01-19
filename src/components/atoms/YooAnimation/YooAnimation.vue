<template lang="pug">
.yoo-animation
  .yoo-animation__content(
    ref="lavContainer"
    :style="style"
  )
</template>

<script>

import lottie from 'lottie-web'

export default {
  name: 'YooAnimation',
  props: {
    options: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    height: String,
    width: String
  },
  data () {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      }
    }
  },
  mounted () {
    this.animation = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings
    })
    this.$emit('animCreated', this.animation)
  }
}
</script>

<style src="./YooAnimation.sass" lang="sass" scoped></style>
