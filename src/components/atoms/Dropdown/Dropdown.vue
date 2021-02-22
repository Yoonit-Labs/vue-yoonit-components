<template lang="pug">
.yoo-dropdown(
  :class="['yoo-dropdown', ...takeModifier]"
)
  .yoo-dropdown__select(
    v-if="!showOptions"
    @click="doShowOptions"
  )
    .select
      p.select__text {{takeSelectedOptionLabel}}

  .yoo-dropdown__options(
    v-if="showOptions"
  )
    .option(
        v-for="(option, index) in takeOptions",
        :key="index"
        @click="doSelectLabelChange(option.label, option.value)"
    )
      p.option__text {{option.label}}
</template>

<script>

import PropsConfig from '@/components/atoms/Button/Dropdown.config'

export default {
  name: 'YooDropDown',
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: Object,
      required: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => PropsConfig.size.options.includes(value)
    }
  },
  data: () => ({
    selectLabel: {},
    showOptions: false
  }),
  mounted () {
    this.selectLabel = this.selected || this.takeOptions[0]
  },
  computed: {
    /**
    * @description Select the label according to the option
    * @computed takeSelectedOptionLabel
    * @returns {Object}
    */
    takeSelectedOptionLabel () {
      if (this.selectLabel && this.selectLabel.label) {
        return this.selectLabel.label
      }
      return this.takeOptions[0].label
    },
    /**
    * @description Sets the options on the element
    * @computed takeOptions
    * @returns {Array}
    */
    takeOptions () {
      const hasSelectLabel = Object.keys(this.selectLabel).length
      if (hasSelectLabel !== 0) {
        const arr = [...this.options]
        arr.unshift(
          arr.splice(
            arr.findIndex(
              elm => (elm.label === this.selectLabel.label && elm.value === this.selectLabel.value)),
            1)[0]
        )
        return arr
      }
      return this.options
    },
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {Array}
    */
    takeModifier () {
      const block = 'yoo-dropdown'
      const classList = []

      classList
        .push(
          `${block}--${this.size}`
        )
      return classList
    }
  },
  methods: {
    /**
    * @description Toggles the element's options to show them
    * @computed doShowOptions
    * @returns {array}
    */
    doShowOptions () {
      this.showOptions = !this.showOptions
    },
    /**
    * @description Changes the selected label according to the chosen option
    * @computed doSelectLabelChange
    * @returns {Function}
    */
    doSelectLabelChange (label, value) {
      this.selectLabel = Object.assign({ label, value })
      this.$emit('onClick', value)
      this.doShowOptions()
    }
  }
}
</script>

<style src="./Dropdown.sass" scoped lang="sass">

</style>
