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
      col="1"
      row="1"
    )
      YooIndicator(
        v-show="showIndicator"
        :size="indicatorSize"
        :fill="indicatorFill"
      )
      i(
        v-if="showIcon && !showIndicator"
        :class="['yoo-notify__icon', takeIconStyle, takeIconName, takeIconColor]"
      )
    YooFlexLayout(
      justifyContent="space-between"
      alignItems="center"
      :col="takeTextColumn"
      row="1"
    )
      p.m__r--l.m__l--s(
        :class="['yoo-notify__text', takeTextColor, takeTextSize]"
        alignItems="center"
      ) {{ notifyText }}

    YooFlexLayout(
      justifyContent="space-between"
      alignItems="center"
      :col="takeButtonColumn"
      row="1"
    )
      YooButton(
        v-show="showButton"
        variation="clear"
        icon="times"
        :iconCustomColor="buttonColor"
      )

</template>

<script>

import YooButton from '@/components/atoms/Button/Button.vue'
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import YooGridLayout from '@/components/bosons/GridLayout/GridLayout.vue'
import YooIndicator from '@/components/quarks/Indicator/Indicator.vue'

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
      default: 'md',
      validator: value => PropsConfig.notifyTextSize.options.includes(value)
    },
    indicatorSize: {
      type: String,
      default: 'normal',
      validator: value => PropsConfig.indicatorSize.options.includes(value)
    },
    indicatorFill: {
      type: String,
      default: 'danger',
      validator: value => PropsConfig.indicatorFill.options.includes(value)
    },
    buttonColor: {
      type: String,
      required: false
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      validator: (value) => {
        return typeof value === 'string'
      },
      default: 'cog'
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
    },
    iconColor: {
      type: String,
      default: 'dark',
      validator: value => PropsConfig.iconColor.options.includes(value)
    },
    showButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
    * @description Returns formatted icon name
    * @computed takeIconName
    * @returns {string}
    */
    takeIconName () {
      return `fa-${this.icon}`
    },
    /**
    * @description Returns icon style based on iconStyle prop
    * @computed takeIconStyle
    * @returns {string}
    */
    takeIconStyle () {
      return this.iconStyle === 'solid'
        ? 'fas'
        : 'far'
    },
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
    * @description Print classes based on the chosen prop iconColor
    * @computed takeIconColor
    * @returns {array}
    */
    takeIconColor () {
      return [`yoo-notify__icon--${this.iconColor}`]
    },
    /**
    * @description Print style based on the chosen props showIndicator and showCloseButton
    * @computed takeCols
    * @returns {string}
    */
    takeCols () {
      if ((this.showIndicator || this.showIcon) && this.showButton) {
        return 'auto, 1, auto'
      } else if (this.showIndicator || this.showIcon) {
        return 'auto, 1'
      } else if (this.showButton) {
        return '1, auto'
      }
      return '*'
    },
    /**
    * @description Defines text column based on wich props are being displayed
    * @computed takeTextColumn
    * @returns {string}
    */
    takeTextColumn () {
      if (this.showIndicator || this.showIcon) {
        return '2'
      }
      return '1'
    },
    /**
    * @description Defines button column based on wich props are being displayed
    * @computed takeButtonColumn
    * @returns {string}
    */
    takeButtonColumn () {
      if (this.showIndicator || this.showIcon) {
        return '3'
      }
      return '2'
    }
  }
}
</script>

<style src="./Notify.sass" lang="sass" scoped></style>
