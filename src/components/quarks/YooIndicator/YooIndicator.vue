<template lang="pug">
  div(
    :class="['yoo-indicator', ...takeModifier]"
  ) {{ text }}
</template>

<script>

export default {
  name: 'YooIndicator',
  props: {
    fill: {
      type: String,
      required: false,
      default: 'danger',
      validator: value =>
        [
          'primary',
          'danger',
          'light',
          'dark',
          'neutral'
        ]
          .includes(value)
    },
    size: {
      type: String,
      required: false,
      default: 'normal',
      validator: value =>
        [
          'small',
          'medium',
          'normal',
          'large'
        ]
          .includes(value)
    },
    animation: {
      type: Boolean,
      required: false,
      default: true
    },
    text: {
      type: String,
      required: false,
      default: ''
    }
  },
  components: {},
  data: () => ({}),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    takeModifier () {
      const classList = [`yoo-indicator--${this.size}`, `yoo-indicator--${this.fill}`]

      if (this.animation) {
        classList
          .push('yoo-indicator--pulse')
      }

      return classList
    }
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style src="./YooIndicator.sass" lang="sass" scoped></style>
