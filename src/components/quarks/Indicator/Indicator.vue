<template lang="pug">
  .yoo-indicator(
    :class="[...takeModifier]"
  ) {{ text }}
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

import PropsConfig from '@/components/quarks/Indicator/Indicator.config'

export default {
  name: 'YooIndicator',
  props: {
    fill: {
      type: String,
      required: false,
      default: 'danger',
      validator: value => PropsConfig.fill.options.includes(value)
    },
    size: {
      type: String,
      required: false,
      default: 'large',
      validator: value => PropsConfig.size.options.includes(value)
    },
    animation: {
      type: Boolean,
      required: false,
      default: true
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    takeModifier () {
      const classList = [`yoo-indicator--${this.size}`, `yoo-indicator--${this.fill}`]
      if (this.animation) {
        classList
          .push('yoo-indicator--pulse')
      }

      return classList
    }
  }
}
</script>
