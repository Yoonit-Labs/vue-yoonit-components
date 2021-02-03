<template lang="pug">
  YooFlexLayout(
    justifyContent="space-between"
    :alignItems="flexAlignItems"
    :flexDirection="flexDirection"
    width="100%"
    :class="[ 'yoo-table-attribute', takeModifier ]"
  )
    p.m__t--l.m__r--l.m__b--l(
      :class="[ 'yoo-table-attribute__title', takeTitleColorModifier, takeTitleWrapModifier ]"
    )
      YooIcon.m__t--l.m__r--l.m__b--l.m__l--l(
        v-show="icon"
        :icon="icon"
        :iconStyle="iconStyle",
        :fill="takeIconFillModifier"
        size="lg"
      )
      | {{ title }}

    YooButton(
      v-if="actionable && actionableType === 'button'"
      :text="detail"
      variation="clear"
      :fill="detailFill"
      icon="chevron-right"
      iconPosition="right"
      hover=true
      active=true
      :disabled="actionableDisable"
      @doClick="$emit('response')"
    )

    YooCheckButton.m__t--l.m__r--l.m__b--l.m__l--l(
      v-else-if="actionable && actionableType === 'check'"
      size="small"
      :class="[ 'yoo-table-attribute__detail', takeDetailFillModifier ]"
      :text="detail"
      :textPosition="actionableCheckPosition"
      @response="$emit('response')"
    )

    YooSwitch.m__t--l.m__b--l.m__l--l(
      v-else-if="actionable && actionableType === 'switch'"
      size="small"
      :class="[ 'yoo-table-attribute__detail', takeDetailFillModifier ]"
      :disabled="actionableDisable"
      @response="$emit('response')"
    )

    p(
      v-else
      :class="[ 'yoo-table-attribute__detail', takeDetailFillModifier, takeDetailWrapModifier ]"
    )
      | {{ detail }}

      YooCheckButton(
        v-if="actionable && actionableType === 'check'"
        size="small"
        :disabled="actionableDisable"
      )

</template>

<script>

import PropsConfig from '@/components/molecules/TableAttribute/TableAttribute.config'
import YooFlexLayout from '@/components/quarks/FlexLayout/FlexLayout.vue'
import YooIcon from '@/components/atoms/Icon/Icon.vue'
import YooButton from '@/components/atoms/Button/Button.vue'
import YooCheckButton from '@/components/atoms/CheckButton/CheckButton.vue'
import YooSwitch from '@/components/atoms/Switch/Switch.vue'

export default {
  name: 'YooTableAttribute',
  props: {
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      default: ''
    },
    detailFill: {
      type: String,
      default: 'light',
      validator: value => PropsConfig.detailFill.options
    },
    titleFill: {
      type: String,
      default: 'neutral',
      validator: value => PropsConfig.titleFill.options
    },
    iconFill: {
      type: String,
      default: 'neutral',
      validator: value => PropsConfig.iconFill.options
    },
    actionable: {
      type: Boolean,
      default: false
    },
    actionableDisable: {
      type: Boolean,
      default: false
    },
    actionableType: {
      type: String,
      default: 'button',
      validator: value => PropsConfig.actionableType.options
    },
    actionableCheckPosition: {
      type: String,
      default: 'right',
      validator: value => PropsConfig.actionableCheckPosition.options
    },
    separator: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options
    },
    wrap: {
      type: Boolean,
      default: false
    }
  },
  components: {
    YooFlexLayout,
    YooIcon,
    YooButton,
    YooCheckButton,
    YooSwitch
  },
  data: () => ({
    flexAlignItems: 'center',
    flexDirection: 'row'
  }),
  created () {
    if (this.wrap) {
      this.flexAlignItems = 'flex-start'
      this.flexDirection = 'column'
    }
  },
  computed: {
    /**
    * @description Returns classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-table-attribute'
      const classList = []
      if (this.icon && this.icon.length > 2) {
        classList
          .push(
            `${block}--tall`
          )
      }
      if (this.separator) {
        classList
          .push(
            `${block}--separated`
          )
      }
      return classList
    },
    /**
    * @description Returns class based on the detailFill prop
    * @computed takeDetailFillModifier
    * @returns {string}
    */
    takeDetailFillModifier () {
      return `yoo-table-attribute__detail--${this.detailFill}`
    },
    /**
    * @description Returns class based on the titleFill prop
    * @computed takeTitleColorModifier
    * @returns {string}
    */
    takeTitleColorModifier () {
      return `yoo-table-attribute__title--${this.titleFill}`
    },
    /**
    * @description Returns class based on the wrap prop
    * @computed takeTitleWrapModifier
    * @returns {string}
    */
    takeTitleWrapModifier () {
      return this.wrap
        ? 'yoo-table-attribute__title--wrap'
        : ''
    },
    /**
    * @description Returns class based on the wrap prop
    * @computed takeDetailWrapModifier
    * @returns {string}
    */
    takeDetailWrapModifier () {
      return this.wrap
        ? 'yoo-table-attribute__detail--wrap'
        : ''
    },
    /**
    * @description Returns icon color based on the iconFill prop
    * @computed takeIconFillModifier
    * @returns {string}
    */
    takeIconFillModifier () {
      return this.iconFill
    }
  }
}
</script>

<style src="./TableAttribute.sass" lang="sass" scoped></style>
