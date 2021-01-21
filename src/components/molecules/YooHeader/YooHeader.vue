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
<<<<<<< HEAD
=======

>>>>>>> a0e1b578264e31dc18dcdd379833b5f25aa25892
import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'

export default {
  name: 'YooHeader',
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

<<<<<<< HEAD
<style src="./YooHeader.sass" lang="sass" scoped></style>
=======
<style src="./YooHeader.sass" lang="sass" scoped></style>
>>>>>>> a0e1b578264e31dc18dcdd379833b5f25aa25892
