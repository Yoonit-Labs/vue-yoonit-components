<template lang="pug">
.yoo-dropdown(
  :class="['dropdowns', ...takeModifier]"
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
      validator (value) {
        return [
          'small',
          'medium',
          'large'
        ].indexOf(value) !== -1
      }
    }
  },
  data: () => ({
    selectLabel: {},
    showOptions: false
  }),
  created () {},
  mounted () {
    this.selectLabel = this.selected || this.takeOptions[0]
  },
  updated () {},
  beforeDestroy () {
    // document.removeEventListener(
    //     '',
    //     event =>
    //         this.functionName(event)
    // )
  },
  destroyed () {},
  components: {},
  computed: {
    takeSelectedOptionLabel () {
      if (this.selectLabel && this.selectLabel.label) {
        return this.selectLabel.label
      }
      return this.takeOptions[0].label
    },
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
    doShowOptions () {
      this.showOptions = !this.showOptions
    },
    doSelectLabelChange (label, value) {
      this.selectLabel = Object.assign({ label, value })
      this.$emit('onClick', value)
      this.doShowOptions()
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./Dropdown.sass" scoped lang="sass">

</style>
