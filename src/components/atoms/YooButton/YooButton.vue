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
import PropsConfig from '@/components/atoms/YooButton/YooButton.config'
export default {
  name: 'YooButton',
  props: {
    variation: {
      type: String,
      default: 'base',
      validator: value => PropsConfig.variation.options.includes(value)
    },
    buttonSize: {
      type: String,
      default: 'normal',
      validator: value => PropsConfig.buttonSize.options.includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      validator: value => PropsConfig.fill.options.includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: value => PropsConfig.iconPosition.options.includes(value)
    },
    iconSize: {
      type: String,
      default: 'normal',
      validator: value => PropsConfig.iconSize.options.includes(value)
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
    },
    animation: {
      type: String,
      default: 'none',
      validator: value => PropsConfig.animation.options.includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    hover: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
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
  }
}
</script>

<style src="./YooButton.sass" lang="sass" scoped></style>
