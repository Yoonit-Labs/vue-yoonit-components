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
      buttonSize="normal"
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
  computed: {},
  methods: {
    doActive (index, valor) {
      this.$emit('doClick', valor)
      this.selectedIn = index
    }
  }
}
</script>

<style src="./YooRateButton.sass" lang="sass" scoped></style>
