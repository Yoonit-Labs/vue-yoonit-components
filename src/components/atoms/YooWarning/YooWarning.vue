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
      ) {{takeTitle}}
      p.warning__text.m__t--none.m__b--none.m__l--l.m__r--l {{takeText}}
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
    takeTitle () {
      return this.title
    },
    takeText () {
      return this.text
    },
    takeIconName () {
      return `fa-${this.icon}`
    },
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas' // fontawesome solid
        : 'far' // fontawesome regular
    },
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
