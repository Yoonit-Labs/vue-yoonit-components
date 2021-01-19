<template lang="pug">
  YooFlexLayout(
    class="yoo-rate"
    justifyContent="space-around"
    alignItems="center"
  )
    YooButton(
     v-for="(item, index) in rate"
     :key="index"
     :text="item.text"
     :fill="selectedIn === index ? 'primary' : 'light'"
     buttonSize="xs"
     variation="base"
     @onClick="doActive(index, item.value)"
    )

</template>

<script>

import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'

import YooButton from '@/components/atoms/YooButton/YooButton.vue'

export default {
  name: 'YooRateButton',
  components: {
    YooFlexLayout,
    YooButton
  },
  props: {
    rate: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    selectedIn: ''
  }),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {},
  methods: {
    doActive (index, valor) {
      this.$emit('doClick', valor)
      this.selectedIn = index
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooCard.sass" lang="sass" scoped></style>