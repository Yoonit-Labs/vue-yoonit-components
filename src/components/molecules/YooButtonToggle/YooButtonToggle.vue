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
        :fill="selectedIndex === index ? 'primary' : 'default'",
        size="normal",
        style="width: 100%;"
        @onClick="doEmitChoice($event, index)"
      )
</template>

<script>
import YooButton from '@/components/atoms/Button/Button.vue'

import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'

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
    },
    toggleInit: {
      type: Number
    }
  },
  components: {
    YooFlexLayout,
    YooButton
  },
  data: () => ({
    selectedIndex: 0
  }),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.selectedIndex = this.current
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {},
  methods: {
    doEmitChoice (event, index) {
      console.log('Event:', event.target.offsetLeft)
      this.selectedIndex = index
      this.$emit('tapChoice', index)
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooButtonToggle.sass" lang="sass" scoped></style>
