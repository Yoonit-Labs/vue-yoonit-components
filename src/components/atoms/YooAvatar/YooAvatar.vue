<template lang="pug">
  div(
    :class="['yoo-avatar', ...takeModifier, ...takeFill]"
  )
    p(
      :class="['yoo-avatar__text', ...takeTextColor]"
      v-if="takeInitials && !takeImage"
    ) {{ takeInitials }}

    img(
      v-else
      :src="takeImage"
      :class="['yoo-avatar', ...takeModifier]"
    )
</template>

<script>
import { StringParser } from '../../bosons'

export default {
  name: 'YooAvatar',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: value =>
        [
          'small',
          'medium',
          'large',
          'xlarge'
        ]
          .includes(value)
    },
    fill: {
      type: String,
      default: 'neutral',
      validator: value =>
        [
          'primary',
          'danger',
          'light',
          'dark',
          'neutral'
        ]
          .includes(value)
    },
    text: {
      type: String,
      required: false
    },
    textColor: {
      type: String,
      default: 'light',
      validator: value =>
        [
          'light',
          'dark'
        ]
          .includes(value)
    },
    image: {
      type: String,
      required: false
    }
  },
  data: () => ({
  }),
  created () {},
  computed: {
    takeModifier () {
      const block = 'yoo-avatar'
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
        case 'xlarge':
          classList
            .push(`${block}--${this.size}`)
          break
      }
      return classList
    },
    takeFill () {
      return [`yoo-avatar--${this.fill}`]
    },
    takeInitials () {
      return StringParser.generateNameInitials(this.text)
    },
    takeTextColor () {
      return [`yoo-avatar__text--${this.textColor}`]
    },
    takeImage () {
      return this.image
    }
  },
  mounted () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  components: {},
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style src="./YooAvatar.sass" lang="sass" scoped></style>
