<template lang="pug">
  .yoo-scroll-view(
    :class="takeOrientation"
  )
    slot
</template>

<script>

import PropsConfig from '@/components/bosons/ScrollView/ScrollView.config'

export default {
  name: 'YooScrollView',
  props: {
    orientation: {
      type: String,
      required: false,
      default: 'vertical',
      validator: value => PropsConfig.orientation.options.includes(value)
    }
  },
  components: {},
  computed: {
    takeOrientation () {
      return `yoo-scroll-view--${this.orientation}`
    }
  }
}
</script>
<style src="./ScrollView.sass" lang="sass" scoped></style>
