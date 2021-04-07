<template lang="pug">
.yoo-checkbox(
  :class="[takeModifier]"
)
  input(
    type="checkbox"
    :id="timeId"
    v-model="checkedField"
    @change="doCheck($event)"
  )
  label.yoo-checkbox__check.fas.fa-check(
    :for="timeId"
    :class="[takeModifierSize, ...takeModifierCheck]"
  )
    p.yoo-checkbox__text(
      :class="[takeModifierSize]"
      v-if="text !== ''"
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
    checked: {
      type: Boolean,
      default: false
    },
    textPosition: {
      type: String,
      default: 'left',
      validator: value => PropsConfig.textPosition.options.includes(value)
    },
    card: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    checkedField: false,
    timeId: null
  }),
  mounted () {
    this.checkedField = this.checked
    this.timeId = `ycid-${Math.random().toString().substr(-7)}`
  },
  computed: {
    /**
    * @description Prints size classes based on the chosen prop
    * @computed takeModifierSize
    * @returns {array}
    */
    takeModifierSize () {
      const block = 'yoo-checkbox'
      const classList = []
      classList
        .push(`${block}--${this.size}`)
      return classList
    },
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifierCheck
    * @returns {array}
    */
    takeModifierCheck () {
      const block = 'yoo-checkbox'
      const classList = []
      if (!this.card && this.checkedField) {
        classList
          .push(`${block}__check--active`)
      }

      if (this.card) {
        classList
          .push('p__t--l', 'p__r--l', 'p__b--l', 'p__l--l')
      }

      if (this.card && this.checkedField && !this.disabled) {
        classList
          .push(`${block}__check--card-active`)
      }

      if (this.disabled) {
        classList
          .push(`${block}__check--disabled`)
      }

      classList
        .push(`${block}__text--${this.textPosition}`)

      return classList
    },
    /**
    * @description Prints classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-checkbox'
      const classList = []

      this.card
        ? classList.push(`${block}__card`)
        : classList.push(`${block}`)

      if (this.card && this.checkedField && !this.disabled) {
        classList
          .push(`${block}__card--active`)
      }

      return classList
    }
  },
  methods: {
    doCheck (e) {
      if (!this.disabled) {
        this.$emit('response', this.checkedField)
      }
    }
  },
  watch: {
    checked (value) {
      this.checkedField = value
    }
  }
}
</script>

<style src="./CheckButton.sass" lang="sass" scoped></style>
