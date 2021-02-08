<template lang="pug">
  .yoo-warning.p__t--l.p__b--l.m__b--xl(
    :class="[takeModifier]"
  )
    .yoo-warning__item.m__l--l
      i(
        :class="['yoo-warning__icon', takeIconStyle, takeIconName]"
      )

    .yoo-warning__body
      p.yoo-warning__title.m__t--none.m__b--xs.m__l--l.m__r--l(
        v-show="title"
      ) {{title}}
      p.yoo-warning__text.m__t--none.m__b--none.m__l--l.m__r--l {{text}}
</template>

<script>

import PropsConfig from '@/components/atoms/Warning/Warning.config'

export default {
  name: 'YooWarning',
  props: {
    title: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: ''
    },
    text: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: ''
    },
    icon: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: 'cog'
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
    },
    variation: {
      type: String,
      default: 'danger',
      validator: value => PropsConfig.variation.options.includes(value)
    }
  },
  components: {},
  computed: {
    /**
    * @description Returns formatted icon name
    * @computed takeIconName
    * @returns {string}
    */
    takeIconName () {
      return `fa-${this.icon}`
    },
    /**
    * @description Returns icon style based on iconStyle prop
    * @computed takeIconStyle
    * @returns {string}
    */
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas'
        : 'far'
    },
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-warning'
      const classList = []

      classList
        .push(
          `${block}__variation--${this.variation}`
        )

      return classList
    }
  }
}
</script>

<style src="./Warning.sass" lang="sass" scoped></style>
