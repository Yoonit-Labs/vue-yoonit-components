<template lang="pug">
  YooGridLayout.p__t--xs.p__b--xs.p__r--s.p__l--s(
    :class="['yoo-notify', ...takeModifier]"
    :cols="takeCols"
    rows="*"
    horizontalAlign="space-between"
    verticalAlign="center"
    width="100%"
    height="auto"
  )
    YooFlexLayout(
      justifyContent="space-between"
      alignItems="center"
    )
      YooIndicator(
        v-show="showIndicator"
        :size="indicatorSize"
        :fill="indicatorFill"
      )

      p.m__r--l.m__l--l(
        :class="['yoo-notify__text', ...takeTextColor, ...takeTextSize]"
      ) {{ notifyText }}

      YooButton(
        v-show="showButton"
        variation="clear"
        icon="times"
        :iconCustomColor="buttonColor"
      )

</template>

<script>

import YooButton from '@/components/atoms/Button/Button.vue'
import YooFlexLayout from '@/components/quarks/FlexLayout/FlexLayout.vue'
import YooIndicator from '@/components/quarks/Indicator/Indicator.vue'
import YooGridLayout from '@/components/quarks/GridLayout/GridLayout.vue'

import PropsConfig from '@/components/molecules/Notify/Notify.config'

export default {
  name: 'YooNotify',
  components: {
    YooGridLayout,
    YooFlexLayout,
    YooIndicator,
    YooButton
  },
  props: {
    notifyFill: {
      type: String,
      default: 'light',
      validator: value => PropsConfig.notifyFill.options.includes(value)
    },
    notifyText: {
      type: String,
      default: 'Yoo-Notify'
    },
    notifyTextColor: {
      type: String,
      default: 'dark',
      validator: value => PropsConfig.notifyTextColor.options.includes(value)
    },
    notifyTextSize: {
      type: String,
      default: 'xs',
      validator: value => PropsConfig.notifyTextSize.options.includes(value)
    },
    indicatorSize: {
      type: String,
      required: false
    },
    indicatorFill: {
      type: String,
      required: false
    },
    buttonColor: {
      type: String,
      required: false
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    showButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    /**
    * @description Print classes based on the chosen prop notifyFill
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      return [`yoo-notify--${this.notifyFill}`]
    },
    /**
    * @description Print classes based on the chosen prop notifyTextColor
    * @computed takeTextColor
    * @returns {array}
    */
    takeTextColor () {
      return [`yoo-notify__text--${this.notifyTextColor}`]
    },
    /**
    * @description Print classes based on the chosen prop notifyTextSize
    * @computed takeTextSize
    * @returns {array}
    */
    takeTextSize () {
      return [`yoo-notify__text--${this.notifyTextSize}`]
    },
    /**
    * @description Print style based on the chosen props showIndicator and showCloseButton
    * @computed takeCols
    * @returns {string}
    */
    takeCols () {
      if (this.showIndicator && this.showButton) {
        return '30px, *, 30px'
      }
      return '*'
    }
  }
}
</script>

<style src="./Notify.sass" lang="sass" scoped></style>
