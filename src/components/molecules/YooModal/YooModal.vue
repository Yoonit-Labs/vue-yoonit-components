<template lang="pug">
  .backdrop(
    @click="doCloseModal"
  )
    YooFlexLayout.yoo-modal(
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

import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout'

export default {
  name: 'YooModal',
  components: {
    YooFlexLayout
  },
  props: {},
  data: () => ({}),
  beforeCreate () {},
  created () {},
  beforeMount () {
    window.addEventListener('keyup', this.onEscapeKeyUp)
  },
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {
    window.removeEventListener('keyup', this.onEscapeKeyUp)
  },
  destroyed () {},
  computed: {},
  methods: {
    doCloseModal (event) {
      const backdrop = document.querySelector('.backdrop')
      if (event.target === backdrop || event.which === 27) {
        this.$emit('onClose', event)
      }
    },
    onEscapeKeyUp (event) {
      if (event.which === 27) {
        this.doCloseModal(event)
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooModal.sass" lang="sass" scoped></style>
