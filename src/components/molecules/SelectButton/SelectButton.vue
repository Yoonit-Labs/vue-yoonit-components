<template lang="pug">
  YooFlexLayout.yoo-select(
    justifyContent="space-around"
    alignItems="center"
  )
    YooButton(
      v-for="(item, index) in rate"
      :key="index"
      :text="item.text"
      :fill="selectedArray.includes(item.value) ? 'primary' : 'light'"
      buttonSize="short"
      variation="base"
      height="inherit"
      @onClick="doActive(index, item.value)"
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

import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'

import YooButton from '@/components/atoms/Button/Button.vue'

export default {
  name: 'YooSelectButton',
  components: {
    YooFlexLayout,
    YooButton
  },
  props: {
    rate: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    selectedArray: []
  }),
  mounted () {
    this.doSetItemsActive()
  },
  methods: {
    doSetItemsActive () {
      this.rate.forEach(item => {
        if (item.active === true) {
          this.selectedArray.push(item.value)
        }
      })
    },
    doActive (index, valor) {
      if (this.multiple) {
        const idx = this.selectedArray.indexOf(valor)
        if (idx === -1) {
          this.selectedArray.push(valor)
        } else {
          this.selectedArray = this.selectedArray.filter(n => n !== valor)
        }
        this.selectedArray.sort((a, b) => a - b)
      } else {
        this.selectedArray = [valor]
      }
      this.$emit('doClick', this.selectedArray)
    }
  },
  watch: {
    rate: {
      handler: function () {
        this.doSetItemsActive()
      },
      deep: true
    }
  }
}
</script>
