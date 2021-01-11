<template lang="pug">
.yoo-header
  YooFlexLayout(
    justifyContent="space-between"
    alignItems="center"
    alignContent="center"
  )
    Div
      slot(
        name="header-left"
      )
    Div
      slot(
        name="header-center"
      )
    Div
      slot(
        name="header-right"
      )
</template>

<script>

import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'

export default {
  name: 'YooHeader',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Usuário'
    }
  },
  data: () => ({}),
  created () {},
  mounted () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  components: {
    YooFlexLayout
  },
  computed: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style src="./YooHeader.sass" lang="sass" scoped></style>
