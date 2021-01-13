<template lang="pug">
  .warning.p__t--l.p__b--l.m__b--xl(
    :class="[takeModifier]"
  )
    .warning__icon.m__l--l
      i(
        :class="['yoo-warning__icon', takeIconStyle, takeIconName]"
      )

    .warning__body
      p.warning__title.m__t--none.m__b--xs.m__l--l.m__r--l(
        v-show="title"
      ) {{title}}
      p.warning__text.m__t--none.m__b--none.m__l--l.m__r--l {{text}}
</template>

<script>

export default {
  name: 'YooWarning',
  props: {
    title: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: ''
    },
    text: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: ''
    },
    icon: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: 'cog'
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator (value) {
        return [
          'solid',
          'regular'
        ].indexOf(value) !== -1
      }
    },
    variation: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'clear',
          'danger'
        ].indexOf(value) !== -1
      }
    }
  },
  components: {},
  computed: {
    /**
    * @description Returns formatted icon name
    * @computed takeIconName
    * @returns {string}
    */
    takeIconName () {
      return `fa-${this.icon}`
    },
    /**
    * @description Returns icon style based on iconStyle prop
    * @computed takeIconStyle
    * @returns {string}
    */
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas'
        : 'far'
    },
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'warning'
      const classList = []

      if (this.variation) {
        classList
          .push(
            `${block}--${this.variation}`
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

<style src="./YooWarning.sass" lang="sass" scoped></style>
