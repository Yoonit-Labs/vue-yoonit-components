<template lang="pug">
  YooFlexLayout.yoo-segmented-bar(
    flexDirection="row",
    alignContent="center",
    alignItems="center",
    justifyContent="center",
    flexWrap="nowrap"
  )
    YooFlexLayout(
      v-for="(option, index) in list",
      :key="option.title",
      :class="index !== takeLastItem ? 'yoo-segmented-bar__item yoo-segmented-bar__item--border' : 'yoo-segmented-bar__item '"
      justifyContent="center"
    )
      YooButton(
        :text="option.title"
        variation="clear",
        :fill="index === selectedIndex ? 'primary' : 'dark'",
        size="normal",
        style="width: 100%; height: 40px;"
        @onClick="onSelectedIndexChange(index)"
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
  name: 'YooSegmentedBar',
  props: {
    list: {
      type: Array,
      required: true
    },
    currentIndex: {
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
    this.selectedIndex = this.currentIndex
  },
  computed: {
    takeLastItem () {
      return this.list.length - 1
    }
  },
  methods: {
    onSelectedIndexChange (index) {
      this.selectedIndex = index
      this.$emit('onClick', index)
    }
  }
}
</script>
