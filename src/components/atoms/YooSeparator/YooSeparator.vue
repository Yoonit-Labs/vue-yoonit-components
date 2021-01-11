<template lang="pug">
div
  div(
    :class="['separator', ...takeModifier]"
  )
    p(
      class="separator__label m__l--l m__t--none m__b--none m__r--none"
      v-show="text"
    )
      | {{text}}
</template>

<script>
export default {
  name: 'YooSeparator',
  props: {
    fill: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'primary',
          'danger'
        ].indexOf(value) !== -1
      }
    },
    text: {
      type: String,
      required: false,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: ''
    }
  },
  data: () => ({
  }),
  created () {},
  mounted () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  components: {},
  computed: {
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'separator'
      const classList = []

      if (this.fill) {
        classList
          .push(
            `${block}--fill-${this.fill}`
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

<style src="./YooSeparator.sass" lang="sass" scoped></style>
