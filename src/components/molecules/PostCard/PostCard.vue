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

import YooIcon from '@/components/atoms/Icon/Icon.vue'
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import YooIndicator from '@/components/quarks/Indicator/Indicator.vue'

import PropsConfig from '@/components/molecules/PostCard/PostCard.config'

export default {
  name: 'YooPostCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    fill: {
      type: String,
      default: 'white',
      validator: value => PropsConfig.fill.options.includes(value)
    },
    showIndicator: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: 'md',
      validator: value => PropsConfig.iconSize.options.includes(value)
    },
    iconFill: {
      type: String,
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
      default: 'danger',
      validator: value => PropsConfig.appIndicatorFill.options.includes(value)
    }
  },
  components: {
    YooFlexLayout,
    YooIndicator,
    YooIcon
  },
  computed: {
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      return `yoo-post-card__fill--${this.fill}`
    }
  },
  methods: {
    doClick (event) {
      this.$emit('onClick', event)
    }
  }
}
</script>

<style src="./PostCard.sass" lang="sass" scoped></style>
