<template lang="pug">
  div(
    :class="['yoo-input-group']"
  )
    label(
      :class="['yoo-input', ...takeModifier]"
    )
      input(
        :class="['yoo-input__field']"
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        @input="handleInput"
        @blur="doValidate"
        ref="textField"
      )

      span(
        class="yoo-input__label"
      ) {{ label }}
        i.fa

      span(
        :class="['yoo-input__feedback']",
        v-show="!isValid"
      ) {{ invalidMessage }}

</template>

<script>

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
    }
  },
  data: () => ({
    isValid: '',
    invalidMessage: ''
  }),
  mounted () {
    if (this.disabled) this.$refs.textField.disabled = true

    if (this.required) {
      this.value === ''
        ? this.isValid = false
        : this.isValid = true
    }
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
          ? this.isValid = false
          : this.isValid = true

        this.invalidMessage = `O campo ${this.label} é obrigatório.`
      }

      if (this.value && this.requiredRule) {
        const {
          result,
          message
        } = this
          .requiredRule(this.value)

        this.isValid = result
        this.invalidMessage = message
      }
      this.$emit('update:isValid', this.isValid)
    }
  }
}
</script>

<style src="./FormGroup.sass" lang="sass" scoped></style>
