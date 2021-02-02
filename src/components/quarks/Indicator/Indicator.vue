<template lang="pug">
  div(
    :class="['yoo-indicator', ...takeModifier]"
  ) {{ text }}
</template>

<script>

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
      default: 'normal',
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

<style src="./Indicator.sass" lang="sass" scoped></style>
