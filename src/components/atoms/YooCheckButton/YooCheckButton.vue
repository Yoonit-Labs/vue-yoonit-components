<template lang="pug">
  div(
    :class="['yoo-checkbox', takeModifier]"
  )
    input(
      type="checkbox"
      :id="timeId"
      v-model="checkedField"
      @change="doCheck($event)"
    )
    label(
      :for="timeId"
      :class="['yoo-check','fas fa-check', ...takeModifierCheck]"
    )
      p(
        v-if="text !== ''"
      ) {{ text }}

      span(
        v-else
      ) {{ text }}

</template>

<script>
import PropsConfig from './Props.config'
export default {
  name: 'YooCheckButton',
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator: value => PropsConfig.size.options.includes(value)
    },
    initialValue: {
      type: Boolean,
      required: false,
      default: false
    },
    textPosition: {
      type: String,
      required: false,
      default: 'right',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    switchCard: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    checkedField: false,
    timeId: null
  }),
  beforeCreated () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.checkedField = this.initialValue
    this.timeId = `ycid-${Math.random().toString().substr(-7)}`
  },
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  components: {},
  computed: {
    takeModifierCheck () {
      const block = 'yoo-check'
      const classList = []
      switch (this.size) {
        case 'small':
          classList
            .push(`${block}--${this.size}`)
          break
        case 'medium':
          classList
            .push(`${block}--${this.size}`)
          break
        case 'large':
          classList
            .push(`${block}--${this.size}`)
          break
      }
      if (this.checkedField) {
        classList
          .push(`${block}--checked`)
      }
      if (this.switchCard) {
        classList
          .push(`${block}--switch-card`)
      }

      classList
        .push(`${block}--text-${this.textPosition}`)

      return classList
    },
    takeModifier () {
      const block = 'yoo-checkbox'
      const classList = []
      if (this.switchCard) {
        classList
          .push(`${block}--switch-card`)
      }

      return classList
    }
  },
  methods: {
    doCheck (e) {
      this.$emit('response', this.checkedField)
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooCheckButton.sass" lang="sass" scoped></style>
