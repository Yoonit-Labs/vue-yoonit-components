<template lang="pug">
  .backdrop(
    @click.self.stop="doCloseModal"
  )
    YooFlexLayout.yoo-modal.m__l--l.m__r--l(
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

import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout'

export default {
  name: 'YooModal',
  components: {
    YooFlexLayout
  },
  data: () => ({}),
  beforeMount () {
    window.addEventListener('keyup', this.onEscapeKeyUp)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.onEscapeKeyUp)
  },
  computed: {},
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
