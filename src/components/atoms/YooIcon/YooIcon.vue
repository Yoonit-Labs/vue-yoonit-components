<template lang="pug">
  i(
    :class="['yoo-icon', takeIconStyle, takeIconName, ...takeModifier]"
  )
</template>

<script>

export default {
  name: 'YooIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value =>
        [
          'solid',
          'regular'
        ]
          .includes(value)
    },
    event: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: value =>
        [
          'xxxs',
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          'xxl',
          'xxxl',
          'display'
        ]
          .includes(value)
    },
    fill: {
      type: String,
      default: 'neutral',
      validator: value =>
        [
          'primary',
          'danger',
          'neutral',
          'light',
          'dark'
        ]
          .includes(value)
    }
  },
  data: () => ({}),
  created () {},
  mounted () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  components: {},
  computed: {
    takeIconName () {
      return `fa-${this.icon}`
    },
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas' // fontawesome solid
        : 'far' // fontawesome regular
    },
    takeModifier () {
      const block = 'yoo-icon'
      const classList = []

      if (this.size) {
        classList
          .push(
            `${block}__size--${this.size}`
          )
      }

      if (this.fill) {
        classList
          .push(
            `${block}__fill--${this.fill}`
          )
      }
      return classList
    }
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style src="./YooIcon.sass" lang="sass" scoped></style>
