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
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'

export default {
  name: 'YooHeader',
  components: {
    YooFlexLayout
  }
}
</script>

<style src="./Header.sass" lang="sass" scoped></style>
