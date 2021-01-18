<template lang="pug">
  div(
    :class="['yoo-post-card', takeModifier]"
    @click="doClick"
  )
    YooFlexLayout(
      row="1"
      col="1"
      width="100%"
      justifyContent="space-between"
    )
      YooIcon(
        :icon="icon"
        :fill="iconFill"
        :size="iconSize"
        :iconStyle="iconStyle"
        class="yoo-post-card__icon"
      )

      YooIndicator(
        v-if="showIndicator"
        size="small"
        :fill="appIndicatorFill"
      )

    h3(
      row="2"
      col="1"
      class="yoo-post-card__title"
    ) {{ title }}

    p(
      row="3"
      col="1"
      class="yoo-post-card__subtitle"
    ) {{ subtitle }}
</template>

<script>

import YooIcon from '@/components/atoms/YooIcon/YooIcon.vue'
import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'
import YooIndicator from '@/components/quarks/YooIndicator/YooIndicator.vue'

import PropsConfig from '@/components/molecules/YooPostCard/YooPostCard.config'

export default {
  name: 'YooPostCard',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    },
    fill: {
      type: String,
      default: 'white',
      validator: value => PropsConfig.fill.options.includes(value)
    },
    showIndicator: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    iconSize: {
      type: String,
      required: false,
      default: 'md',
      validator: value => PropsConfig.iconSize.options.includes(value)
    },
    iconFill: {
      type: String,
      required: false,
      default: 'neutral',
      validator: value => PropsConfig.iconFill.options.includes(value)
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
    },
    appIndicatorFill: {
      type: String,
      required: false,
      default: 'danger',
      validator: value => PropsConfig.appIndicatorFill.options.includes(value)
    }
  },
  components: {
    YooFlexLayout,
    YooIndicator,
    YooIcon
  },
  data: () => ({}),
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    takeModifier () {
      return `yoo-post-card--fill-${this.fill}`
    }
  },
  methods: {
    doClick (event) {
      if (event) {
        this.$emit('onClick', event)
      }
    }
  },
  filters: {},
  watch: {}
}
</script>

<style src="./YooPostCard.sass" lang="sass" scoped></style>
