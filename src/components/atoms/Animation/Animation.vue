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
    * @prop options
    */
    options: {
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
      ...this.options
    })

    this.$emit('created', this.animation)
  }
}

</script>

<style src="./Animation.sass" lang="sass" scoped></style>
