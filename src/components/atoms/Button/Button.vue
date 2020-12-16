<template lang="pug">
.yoo__container--button
  button(
    :class="['yoo-btn', ...takeModifier]"
    :disabled="disabled"
    @click="$emit('onClick')"
  )
    i(
      v-if="icon.length && iconPosition === 'left'"
      :class="['yoo-btn__icon', takeIconStyle, takeIconName, ...takeModifierIcon]"
      :style="takeIconColor"
    )
    p.yoo-btn__text {{ text }}

    i(
      v-if="icon.length && iconPosition === 'right'"
      :class="['yoo-btn__icon', takeIconStyle, takeIconName, ...takeModifierIcon]"
      :style="takeIconColor"
    )
</template>
<script>
import PropsConfig from '@/config/Props.config'

export default {
  name: 'Button',
  props: {
    variation: {
      type: String,
      default: 'base',
      required: false,
      validator: value => PropsConfig.variation.options.includes(value)
    },
    buttonSize: {
      type: String,
      default: 'normal',
      required: false,
      validator: value => PropsConfig.buttonSize.options.includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      required: false,
      validator: value => PropsConfig.fill.options.includes(value)
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
      validator: value => PropsConfig.iconPosition.options.includes(value)
    },
    iconSize: {
      type: String,
      required: false,
      default: 'normal',
      validator: value => PropsConfig.iconSize.options.includes(value)
    },
    iconStyle: {
      type: String,
      required: false,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
    },
    animation: {
      type: String,
      required: false,
      default: 'none',
      validator: value => PropsConfig.animation.options.includes(value)
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
  components: {},
  computed: {
    takeIconColor () {
      return { color: `${this.iconCustomColor}` }
    },
    takeModifierIcon () {
      const block = 'yoo-btn__icon'
      const classList = []
      classList.push(`${block}--${this.iconSize}`)
      if (this.iconPosition && this.text) {
        classList.push(`${block}--${this.iconPosition}`)
      }
      return classList
    },
    takeModifier () {
      const block = 'yoo-btn'
      const classList = []
      classList.push(`${block}__fill--${this.fill}`)
      classList.push(`${block}--${this.variation}`)
      classList.push(`${block}--${this.buttonSize}`)
      classList.push(`${block}--animation-${this.animation}`)
      if (this.fill && this.hover && !this.disabled) {
        classList.push(`${block}--hover`)
      }
      if (this.fill && this.active && !this.disabled) {
        classList.push(`${block}--active`)
      }
      if (this.fill && this.disabled) {
        classList.push(`${block}--disabled`)
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
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style src="./Button.sass" lang="sass" scoped></style>
