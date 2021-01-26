<template lang="pug">
div
  div(
    :class="['separator', ...takeModifier]"
  )
    p(
      class="separator__label m__l--l m__t--none m__b--none m__r--none"
      v-show="text"
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
    }
  },
  computed: {
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'separator'
      const classList = []

      classList
        .push(
          `${block}--fill-${this.fill}`
        )

      return classList
    }
  }
}
</script>

<style src="./Separator.sass" lang="sass" scoped></style>
