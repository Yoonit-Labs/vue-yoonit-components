<template lang="pug">
  YooFlexLayout.yoo-tag(
    flexWrap="wrap"
    justifyContent="flex-start"
    flexDirection="row"
  )
    p.yoo-tag__notag.m__t--xs.m__b--none(
      v-if="(typeof tags !== 'object')"
    )
      | {{ tags }}

    p(
      v-else
      v-for="(tag, index) in tags",
      :key="index"
      :class="tag.status ? ['yoo-tag__item', 'yoo-tag__item--on', takeFillModifier] : ['yoo-tag__item', takeFillModifier]"
    )
      | {{ tag.name }}
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

import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'

import PropsConfig from '@/components/atoms/Tag/Tag.config'

export default {
  name: 'YooTag',
  props: {
    tags: {
      type: [Array, String],
      required: true
    },
    fill: {
      type: String,
      default: 'primary',
      validator: value => PropsConfig.fill.options.includes(value)
    }
  },
  components: {
    YooFlexLayout
  },
  computed: {
    /**
    * @description Returns class based on the fill prop
    * @computed takeFillModifier
    * @returns {string}
    */
    takeFillModifier () {
      return `yoo-tag__fill--${this.fill}`
    }
  }
}
</script>
