<template lang="pug">
.yoo-animation
  .yoo-animation__content(
    ref="lavContainer"
    :style="takeStyles"
  )
</template>

<script>

import lottie from 'lottie-web'

export default {
  name: 'YooAnimation',
  props: {
    /**
    * @description Set options for rendering animation based on lottie.loadAnimation()
    * @prop options
    * @returns {object}
    */
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
  data: () => ({}),
  computed: {
    takeStyles () {
      return { width: `${this.width}`, height: `${this.height}`, overflow: 'hidden', margin: '0 auto' }
    }
  },
  mounted () {
    this.createAnimation()
  },
  methods: {
    createAnimation () {
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
}

</script>

<style src="./Animation.sass" lang="sass" scoped></style>
