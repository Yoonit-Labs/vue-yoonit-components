<template lang="pug">
  .backdrop(
    @click.self.stop="doCloseModal"
  )
    YooFlexLayout.yoo-modal.m__l--l.m__r--l(
      :class="takeModifierModal"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    )
      slot(
        name="modal"
      )
</template>

<script>

import PropsConfig from './Modal.config'
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout'

export default {
  name: 'YooModal',
  components: {
    YooFlexLayout
  },
  props: {
    fill: {
      type: String,
      default: 'light',
      validator: value =>
        PropsConfig.fill.options.includes(value)
    },
    borderStyle: {
      type: String,
      default: 'square',
      validator: value =>
        PropsConfig.borderStyle.options.includes(value)
    }
  },
  data: () => ({}),
  beforeMount () {
    window.addEventListener('keyup', this.onEscapeKeyUp)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.onEscapeKeyUp)
  },
  computed: {
    takeModifierModal () {
      const block = 'yoo-modal'
      const classList = []

      classList.push(`${block}__fill--${this.fill}`)
      classList.push(`${block}__border--${this.borderStyle}`)

      return classList
    }
  },
  methods: {
    doCloseModal (event) {
      this.$emit('onClose', event)
    },
    onEscapeKeyUp (event) {
      if (event.which === 27) {
        this.doCloseModal(event)
      }
    }
  }
}
</script>

<style src="./Modal.sass" lang="sass" scoped></style>
