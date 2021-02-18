<template lang="pug">
YooFlexLayout(
  justifyContent="space-between"
  alignItems="center"
  flexDirection="row"
  width="100%"
  :class="[ 'yoo-table-attribute', takeModifier ]"
)
    YooFlexLayout(
      justifyContent="space-between"
      :alignItems="flexAlignItems"
      :flexDirection="flexDirection"
    )
      YooFlexLayout(
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="row"
      )
        YooIcon.m__r--m(
          v-if="icon"
          :icon="icon"
          :iconStyle="iconStyle",
          :fill="takeIconFillModifier"
          size="lg"
        )

        p.m__t--none.m__b--none(
          :class="[ 'yoo-table-attribute__title', takeTitleModifier ]"
        )
          | {{ title }}

      p.m__t--s.m__b--none(
        v-if="detail && wrap"
        :class="[ 'yoo-table-attribute__detail', 'yoo-table-attribute__detail--wrap', takeDetailFillModifier ]"
      )
        | {{ detail }}

    YooFlexLayout(
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
    )
      p(
        v-if="!wrap"
        :class="[ 'yoo-table-attribute__detail', takeDetailFillModifier ]"
      )
        | {{ detail }}

      YooButton.m__l--s(
        v-if="actionable && actionableType === 'button'"
        variation="clear"
        :fill="detailFill"
        icon="chevron-right"
        iconPosition="right"
        :hover="true"
        :active="true"
        :disabled="actionableDisable"
        @onClick="$emit('response')"
      )

      YooCheckButton.m__l--s(
        v-else-if="actionable && actionableType === 'check'"
        size="small"
        :class="[ 'yoo-table-attribute__detail', takeDetailFillModifier ]"
        :checked="actionableActive"
        @response="$emit('response', $event)"
      )

      YooSwitch.m__l--m(
        v-else-if="actionable && actionableType === 'switch'"
        size="small"
        :class="[ 'yoo-table-attribute__detail' ]"
        :disabled="actionableDisable"
        :initialValue="actionableActive"
        @response="$emit('response', $event)"
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
    titleWeight: {
      type: String,
      default: 'medium',
      validator: value => PropsConfig.titleWeight.options
    },
    titleSize: {
      type: String,
      default: 'md',
      validator: value => PropsConfig.titleSize.options
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
      default: 'dark',
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
    actionableActive: {
      type: Boolean,
      default: false
    },
    actionableType: {
      type: String,
      default: 'button',
      validator: value => PropsConfig.actionableType.options
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
    * @description Returns classes based on the chosen props
    * @computed takeTitleModifier
    * @returns {array}
    */
    takeTitleModifier () {
      const block = 'yoo-table-attribute'
      const classList = []
      classList
        .push(
          `${block}__title--${this.titleFill}`
        )
      classList
        .push(
          `yoo-table-attribute__title--${this.titleWeight}`
        )
      classList
        .push(
          `yoo-table-attribute__title--${this.titleSize}`
        )
      return classList
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
