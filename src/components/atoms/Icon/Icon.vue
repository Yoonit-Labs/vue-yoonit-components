<template lang="pug">
  i.yoo-icon(
    :class="[takeIconStyle, takeIconName, ...takeModifier]"
  )
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

import PropsConfig from '@/components/atoms/Icon/Icon.config'

export default {
  name: 'YooIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
    },
    size: {
      type: String,
      default: 'lg',
      validator: value => PropsConfig.size.options.includes(value)
    },
    fill: {
      type: String,
      default: 'neutral',
      validator: value => PropsConfig.fill.options.includes(value)
    }
  },
  computed: {
    /**
    * @description Prints formatted class based on Icon prop
    * @computed takeIconName
    * @returns {array}
    */
    takeIconName () {
      return `fa-${this.icon}`
    },
    /**
    * @description Returns class based on IconStyle prop
    * @computed takeIconStyle
    * @returns {array}
    */
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas' // fontawesome solid
        : 'far' // fontawesome regular
    },
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-icon'
      const classList = []

      classList
        .push(
          `${block}__size--${this.size}`
        )
      classList
        .push(
          `${block}__fill--${this.fill}`
        )

      return classList
    }
  }
}
</script>
