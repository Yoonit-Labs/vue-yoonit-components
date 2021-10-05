<template lang="pug">
  .yoo-avatar(
    :class="[...takeModifier, ...takeFill]"
    :style="image ? `background: url('${image}')no-repeat center center / cover` : ''"
  )
    p.yoo-avatar__text(
      :class="[...takeTextColor]"
      v-if="takeInitials && !image"
    ) {{ takeInitials }}
</template>

<script>
import PropsConfig from './Avatar.config'
import { StringParser } from '@/components/bosons'

export default {
  name: 'YooAvatar',
  props: {
    size: {
      type: String,
      default: 'md',
      validator: value =>
        PropsConfig.size.options.includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      validator: value =>
        PropsConfig.fill.options.includes(value)
    },
    text: {
      type: String,
      required: false
    },
    textColor: {
      type: String,
      default: 'light',
      validator: value =>
        PropsConfig.textColor.options.includes(value)
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
      case 'sm':
        classList
          .push(`${block}--sm`)
        break

      case 'md':
        classList
          .push(`${block}--md`)
        break

      case 'lg':
        classList
          .push(`${block}--lg`)
        break

      case 'xl':
        classList
          .push(`${block}--xl`)
        break

      case 'hg':
        classList
          .push(`${block}--hg`)
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
    /**
    * @description Prints initials letters of name based on props text
    * @computed takeInitials
    * @returns {string}
    */
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
