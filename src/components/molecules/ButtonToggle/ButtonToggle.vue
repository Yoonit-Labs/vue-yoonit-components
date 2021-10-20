<template lang="pug">
  YooFlexLayout.yoo-button-toggle(
    flexDirection="column",
    flexWrap="nowrap"
  )
    YooFlexLayout.yoo-button-toggle__container(
      flexDirection="row",
      alignContent="center",
      alignItems="center",
      justifyContent="center",
      flexWrap="nowrap"
    )
      YooButton(
        v-for="(option, index) in options",
        :key="option.toLowerCase()",
        v-show="options[index]"
        :text="option",
        :variation="selectedIndex === index ? 'base' : 'clear'",
        :fill="selectedIndex === index ? 'primary' : 'dark'",
        size="normal",
        style="width: 100%;"
        @onClick="doEmitChoice($event, index)"
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

import YooButton from '@/components/atoms/Button/Button.vue'
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'

export default {
  name: 'YooButtonToggle',
  props: {
    options: {
      type: Array,
      required: true
    },
    current: {
      type: Number,
      default: 0
    }
  },
  components: {
    YooFlexLayout,
    YooButton
  },
  data: () => ({
    selectedIndex: 0
  }),
  mounted () {
    this.selectedIndex = this.current
  },
  methods: {
    doEmitChoice (event, index) {
      this.selectedIndex = index
      this.$emit('tapChoice', index)
    }
  }
}
</script>
