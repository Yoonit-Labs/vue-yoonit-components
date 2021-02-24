<template lang="pug">
  .yoo-switch-container.m__t--s.m__b--s.m__r--s.m__l--s
    input(
      type="checkbox"
      :id="timeId"
      :class="['yoo-switch', ...takeModifier]"
      v-model="checkedField"
      @change="doCheck($event)"
    )
    label(
      :for="timeId"
      class="yoo-switch__label"
    )

</template>

<script>

import PropsConfig from '@/components/atoms/Switch/Switch.config'

export default {
  name: 'YooSwitch',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: value => PropsConfig.size.options.includes(value)
    },
    initialValue: {
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
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-switch'
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

<style src="./Switch.sass" lang="sass" scoped></style>
