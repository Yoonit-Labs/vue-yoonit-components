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

import PropsConfig from '@/components/atoms/CheckButton/CheckButton.config'

export default {
  name: 'YooCheckButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => PropsConfig.size.options.includes(value)
    },
    initialValue: {
      type: Boolean,
      default: false
    },
    textPosition: {
      type: String,
      default: 'right',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    switchCard: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    checkedField: false,
    timeId: null
  }),
  mounted () {
    this.checkedField = this.initialValue
    this.timeId = `ycid-${Math.random().toString().substr(-7)}`
  },
  computed: {
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifierCheck
    * @returns {array}
    */
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
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifierCheck
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-checkbox'
      const classList = []
      classList
        .push(`${block}--switch-card`)

      return classList
    }
  },
  methods: {
    /**
    * @description Emit response in click item
    * @method doCheck
    */
    doCheck (e) {
      this.$emit('response', this.checkedField)
    }
  }
}
</script>

<style src="./CheckButton.sass" lang="sass" scoped></style>
