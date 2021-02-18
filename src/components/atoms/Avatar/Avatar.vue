<template lang="pug">
  div(
    :class="['yoo-avatar', ...takeModifier, ...takeFill]"
    :style="image ? `background: url('${image}')no-repeat center center / cover` : ''"
  )
    p(
      :class="['yoo-avatar__text', ...takeTextColor]"
      v-if="takeInitials && !image"
    ) {{ takeInitials }}

</template>

<script>

import { StringParser } from '@/components/bosons'

export default {
  name: 'YooAvatar',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: value =>
        [
          'small',
          'medium',
          'large',
          'xlarge'
        ]
          .includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      validator: value =>
        [
          'primary',
          'danger',
          'light',
          'dark'
        ]
          .includes(value)
    },
    text: {
      type: String,
      required: false
    },
    textColor: {
      type: String,
      default: 'light',
      validator: value =>
        [
          'light',
          'dark'
        ]
          .includes(value)
    },
    image: {
      type: String,
      required: false
    }
  },
  computed: {
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-avatar'
      const classList = []
      switch (this.size) {
        case 'small':
          classList
            .push(`${block}--${this.size}`)
          break
        case 'medium':
          classList
            .push(`${block}--${this.size}`)
          break
        case 'large':
          classList
            .push(`${block}--${this.size}`)
          break
        case 'xlarge':
          classList
            .push(`${block}--${this.size}`)
          break
      }
      return classList
    },
    /**
    * @description Returns an array of the Fill prop
    * @computed takeFill
    * @returns {array}
    */
    takeFill () {
      return [`yoo-avatar--${this.fill}`]
    },
    takeInitials () {
      return StringParser.generateNameInitials(this.text)
    },
    /**
    * @description Returns an array of the textColor prop
    * @computed takeTextColor
    * @returns {array}
    */
    takeTextColor () {
      return [`yoo-avatar__text--${this.textColor}`]
    }
  }
}
</script>

<style src="./Avatar.sass" lang="sass" scoped></style>
