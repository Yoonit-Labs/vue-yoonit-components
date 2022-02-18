<template lang="pug">
  .yoo-scroll-view(
    :class="takeOrientation"
  )
    slot
</template>

<script>
/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Vue Yoonit Components
 * VueJS Atomic Design System framework
 *
 * Vitória Costa, Tiago Brito, Fernando Junior, Sabrina Sampaio, Gabriel Mule, Gabriel Moraes, Gabriel Rizzo & Luigui Delyer @ 2020-2021
 */

import PropsConfig from '@/components/bosons/ScrollView/ScrollView.config'

export default {
  name: 'YooScrollView',
  props: {
    orientation: {
      type: String,
      required: false,
      default: 'vertical',
      validator: value => PropsConfig.orientation.options.includes(value)
    }
  },
  components: {},
  computed: {
    takeOrientation () {
      return `yoo-scroll-view--${this.orientation}`
    }
  }
}
</script>
