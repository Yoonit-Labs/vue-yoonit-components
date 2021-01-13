<template lang="pug">
  .yoo-scroll-view(
    :class="takeOrientation"
  )
    slot
</template>

<script>

export default {
  name: 'YooScrollView',
  props: {
    orientation: {
      type: String,
      required: false,
      default: 'vertical',
      validator: value => [
        'vertical',
        'horizontal'
      ]
        .includes(value)
    }
  },
  components: {},
  computed: {
    takeOrientation () {
      return `yoo-scroll-view--${this.orientation}`
    }
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>
