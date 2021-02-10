<template lang="pug">
  YooFlexLayout(
    flexDirection="column",
    flexWrap="nowrap"
    class="yoo-button-toggle"
  )
    YooFlexLayout(
      flexDirection="row",
      alignContent="center",
      alignItems="center",
      justifyContent="center",
      flexWrap="nowrap"
      class="yoo-button-toggle__container"
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

import YooButton from '@/components/atoms/Button/Button.vue'

import YooFlexLayout from '@/components/quarks/FlexLayout/FlexLayout.vue'

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

<style src="./ButtonToggle.sass" lang="sass" scoped></style>
