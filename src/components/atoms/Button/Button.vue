<template lang="pug">
.yoo__container--button
  button.yoo-btn(
    :class="[...takeModifierButton]"
    :disabled="disabled"
    @click="$emit('onClick')"
  )
    i.yoo-btn__icon(
      v-if="icon.length && iconPosition === 'left'"
      :class="[takeIconStyle, takeIconName, ...takeModifierIcon]"
      :style="takeIconColor"
    )

    p.yoo-btn__text(
      :class="[...takeTextSize]"
    ) {{ text }}

    i.yoo-btn__icon(
      v-if="icon.length && iconPosition === 'right'"
      :class="[takeIconStyle, takeIconName, ...takeModifierIcon]"
      :style="takeIconColor"
    )
</template>

<script>
import PropsConfig from './Button.config'

export default {
  name: 'YooButton',
  props: {
    variation: {
      type: String,
      default: 'base',
      validator: value =>
        PropsConfig.variation.options.includes(value)
    },
    buttonSize: {
      type: String,
      default: 'normal',
      validator: value =>
        PropsConfig.buttonSize.options.includes(value)
    },
    fill: {
      type: String,
      default: 'primary',
      validator: value =>
        PropsConfig.fill.options.includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: value =>
        PropsConfig.iconPosition.options.includes(value)
    },
    iconSize: {
      type: String,
      default: 'normal',
      validator: value =>
        PropsConfig.iconSize.options.includes(value)
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value =>
        PropsConfig.iconStyle.options.includes(value)
    },
    animation: {
      type: String,
      default: 'none',
      validator: value =>
        PropsConfig.animation.options.includes(value)
    },
    textSize: {
      type: String,
      default: 'md',
      validator: value =>
        PropsConfig.textSize.options.includes(value)
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
      validator: value => value.match(PropsConfig.iconCustomColor.color)
    }
  },
  computed: {
    /**
    * @description Add icon color based on the chosen props
    * @computed takeIconColor
    * @returns {string}
    */
    takeIconColor () {
      return { color: `${this.iconCustomColor}` }
    },
    /**
    * @description Prints classes in icon based on the chosen props
    * @computed takeModifierIcon
    * @returns {array}
    */
    takeModifierIcon () {
      const block = 'yoo-btn__icon'
      const classList = []

      classList.push(`${block}--${this.iconSize}`)

      if (this.iconPosition && this.text) {
        classList.push(`${block}--${this.iconPosition}`)
      }

      return classList
    },
    /**
    * @description Prints classes in button based on the chosen props
    * @computed takeModifierButton
    * @returns {array}
    */
    takeModifierButton () {
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
    /**
    * @description Prints icon name based on the chosen props
    * @computed takeIconName
    * @returns {string}
    */
    takeIconName () {
      return `fa-${this.icon}`
    },
    /**
    * @description Prints icon style based on the chosen props
    * @computed takeIconStyle
    * @returns {string}
    */
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas' // fontawesome solid
        : 'far' // fontawesome regular
    },
    /**
    * @description Prints text size based on the chosen props
    * @computed takeTextSize
    * @returns {string}
    */
    takeTextSize () {
      const block = 'yoo-btn__text'
      const classList = []

      classList.push(`${block}--${this.textSize}`)

      return classList
    }
  }
}
</script>

<style src="./Button.sass" lang="sass" scoped></style>
