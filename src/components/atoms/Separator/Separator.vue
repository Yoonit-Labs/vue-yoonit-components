<template lang="pug">
div
  div(
    :class="['yoo-separator', ...takeModifier]"
  )
    p.m__l--l.m__t--none.m__b--none.m__r--none(
      v-show="text"
      :class="['separator__label',  ...takeModifier]"
    )
      | {{text}}
</template>

<script>

import PropsConfig from '@/components/atoms/Separator/Separator.config'

export default {
  name: 'YooSeparator',
  props: {
    fill: {
      type: String,
      default: 'default',
      validator: value => PropsConfig.fill.options.includes(value)
    },
    text: {
      type: String,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: ''
    },
    fontSize: {
      type: String,
      default: 'md',
      validator: value => PropsConfig.fontSize.options.includes(value)
    }
  },
  computed: {
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-separator'
      const classList = []

      classList
        .push(
          `${block}__fill--${this.fill}`
        )
      classList
        .push(
          `${block}__font--${this.fontSize}`
        )

      return classList
    }
  }
}
</script>

<style src="./Separator.sass" lang="sass" scoped></style>
