<template lang="pug">
.yoo__container--button
  button(
    :class="['yoo-btn', ...takeModifier]"
    :disabled="disabled"
    @click="doClick"
  )
    i(
      v-if="icon.length && iconPosition === 'left'"
      :class="['yoo-btn__icon', takeIconStyle, takeIconName, ...takeModifierIcon]"
      :style="takeIconColor"
    )
    p.yoo-btn__text {{takeText}}

    i(
      v-if="icon.length && iconPosition === 'right'"
      :class="['yoo-btn__icon', takeIconStyle, takeIconName, ...takeModifierIcon]"
      :style="takeIconColor"
    )
</template>
<script>

export default {
  name: 'Button',
  props: {
    variation: {
      type: String,
      default: 'base',
      required: false,
      validator: value =>
        [
          'base',
          'outline',
          'clear'
        ]
          .includes(value)
    },
    buttonSize: {
      type: String,
      default: 'normal',
      required: false,
      validator: value =>
        [
          'normal',
          'short',
          'large'
        ]
          .includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      required: false,
      validator: value =>
        [
          'primary',
          'danger'
        ]
          .includes(value)
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    iconPosition: {
      type: String,
      required: false,
      default: 'left',
      validator: value =>
        [
          'left',
          'right'
        ]
          .includes(value)
    },
    iconSize: {
      type: String,
      required: false,
      default: 'normal',
      validator: value =>
        [
          'large',
          'normal',
          'small'
        ]
          .includes(value)
    },
    iconStyle: {
      type: String,
      required: false,
      default: 'solid',
      validator: value =>
        [
          'solid',
          'regular'
        ]
          .includes(value)
    },
    animation: {
      type: String,
      required: false,
      default: 'none',
      validator: value =>
        [
          'none',
          'pulse'
        ]
          .includes(value)
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    hover: {
      type: Boolean,
      required: false,
      default: false
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    iconCustomColor: {
      type: String,
      default: '',
      validator (value) {
        if (value.includes('#')) {
          const rx = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
          return value.match(rx)
        } else {
          return value === ''
        }
      }
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
    takeText () {
      return this.text
    },
    takeIconColor () {
      return {
        color: `${this.iconCustomColor}`
      }
    },
    takeHover () {
      if (this.hover) {
        return 'hover'
      }
      return ''
    },
    takeActive () {
      if (this.active) {
        return 'active'
      }
      return ''
    },
    takeDisabled () {
      if (this.disabled) {
        return 'disabled'
      }
      return ''
    },
    takeModifierIcon () {
      const block = 'yoo-btn__icon'
      const classList = []
      if (this.icon) {
        if (this.iconSize) {
          classList
            .push(
              `${block}--${this.iconSize}`
            )
        }
        if (this.iconPosition && this.text) {
          classList
            .push(
              `${block}--${this.iconPosition}`
            )
        }
      }
      return classList
    },
    takeModifier () {
      const block = 'yoo-btn'
      const classList = []

      if (this.fill) {
        classList
          .push(
            `${block}__fill--${this.fill}`
          )
      }
      if (this.fill && this.hover && !this.disabled) {
        classList
          .push(
            `${block}--${this.takeHover}`
          )
      }
      if (this.fill && this.active && !this.disabled) {
        classList
          .push(
            `${block}--${this.takeActive}`
          )
      }
      if (this.fill && this.disabled) {
        classList
          .push(
            `${block}--${this.takeDisabled}`
          )
      }
      if (this.variation && (this.variation !== 'base')) {
        classList
          .push(
            `${block}--${this.variation}`
          )
      }

      if (this.format && (this.format !== 'block')) {
        classList
          .push(
            `${block}--${this.format}`
          )
      }

      if (this.size && (this.size !== 'normal')) {
        classList
          .push(
            `${block}--${this.size}`
          )
      }

      if (this.buttonSize && (this.buttonSize !== 'normal')) {
        classList
          .push(
            `${block}--${this.buttonSize}`
          )
      }

      if (this.animation && (this.animation !== 'none')) {
        classList
          .push(
            `${block}--animation-${this.animation}`
          )
      }
      return classList
    },
    takeIconName () {
      return `fa-${this.icon}`
    },
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas' // fontawesome solid
        : 'far' // fontawesome regular
    }
  },
  methods: {
    doClick (event) {
      if (event) {
        this.$emit('onClick', event)
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./Button.sass" lang="sass" scoped></style>
