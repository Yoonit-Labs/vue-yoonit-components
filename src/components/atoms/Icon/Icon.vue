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
  computed: {
    /**
    * @description Prints formatted class based on Icon prop
    * @computed takeIconName
    * @returns {array}
    */
    takeIconName () {
      return `fa-${this.icon}`
    },
    /**
    * @description Returns class based on IconStyle prop
    * @computed takeIconStyle
    * @returns {array}
    */
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas' // fontawesome solid
        : 'far' // fontawesome regular
    },
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-icon'
      const classList = []

      classList
        .push(
          `${block}__size--${this.size}`
        )
      classList
        .push(
          `${block}__fill--${this.fill}`
        )

      return classList
    }
  }
}
</script>

<style src="./Icon.sass" lang="sass" scoped></style>
