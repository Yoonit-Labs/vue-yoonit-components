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
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      style: {
        width: this.width,
        height: this.height,
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

<style src="./Animation.sass" lang="sass" scoped></style>
