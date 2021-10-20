<template lang="pug">
  .yoo-input-group(
  )
    label.yoo-input(
      :class="[...takeModifier]"
    )
      input.yoo-input__field(
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        @input="handleInput"
        @blur="doValidate"
        ref="textField"
      )
      span.yoo-input__label(
      ) {{ label }}
        i.fa
      span.yoo-input__feedback(
        v-show="!isValid"
      ) {{ invalidMessage }}
</template>

<script>
/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Vue Yoonit Components
 * VueJS Atomic Design System framework
 *
 * Vitória Costa, Tiago Brito, Fernando Junior, Sabrina Sampaio, Gabriel Mule, Gabriel Moraes, Gabriel Rizzo & Luigui Delyer @ 2020-2021
 */

export default {
  name: 'YooFormGroup',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    requiredRule: {
      type: Function
    },
    validateOnDataInput: {
      type: Boolean,
      default: false
    },
    isValid: {
      type: Boolean
    }
  },
  data: () => ({
    userHasTyped: false,
    invalidMessage: ''
  }),
  mounted () {
    if (this.disabled) this.$refs.textField.disabled = true
  },
  computed: {
    listeners () {
      const {
        input,
        ...others
      } = this.$listeners
      // protect custom input
      return { ...others }
    },
    /**
     * @description Returns classes based on the chosen props
     * @computed takeModifier
     * @returns {array}
     */
    takeModifier () {
      const block = 'yoo-input'
      const classList = []
      if (!this.userHasTyped) {
        return classList
      }
      if (this.isValid === false) {
        classList.push(`${block}--error`)
      }
      if (this.isValid === true) {
        classList.push(`${block}--success`)
      }
      return classList
    }
  },
  methods: {
    async handleInput (event) {
      await this.$emit('input', event.target.value)
      if (this.validateOnDataInput) {
        this.doValidate(event)
      }
    },
    /**
     * @description Validate inputed value
     * @method doValidate
     */
    doValidate () {
      if (this.required) {
        this.value === ''
          ? this.$emit('update:isValid', false)
          : this.$emit('update:isValid', true)
        this.invalidMessage = `O campo ${this.label} é obrigatório.`
      }
      if (this.value && this.requiredRule) {
        const {
          result,
          message
        } = this
          .requiredRule(this.value)
        this.$emit('update:isValid', result)
        this.invalidMessage = message
      }
    }
  },
  watch: {
    value: function (newValue) {
      this.userHasTyped = true
    }
  }
}
</script>
