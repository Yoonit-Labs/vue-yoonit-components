<template lang="pug">
YooFlexLayout.yoo-table-attribute(
  justifyContent="space-between"
  alignItems="center"
  flexDirection="row"
  width="100%"
  :class="[...takeModifier]"
)
    YooFlexLayout(
      :alignItems="flexAlignItems"
      :flexDirection="flexDirection"
      justifyContent="flex-start"
      width="100%"
      @click="doClickRow"
    )
      YooFlexLayout(
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="row"
      )
        YooIcon.m__r--m(
          v-if="icon"
          :icon="icon"
          :iconStyle="iconStyle",
          :fill="takeIconFillModifier"
          size="lg"
        )

        p.yoo-table-attribute__title.m__t--none.m__b--none(
          :class="[...takeTitleModifier]"
        )
          | {{ title }}

      p.yoo-table-attribute__detail.yoo-table-attribute__detail--wrap.m__t--s.m__b--none(
        v-if="detail && wrap"
        :class="[takeDetailFillModifier]"
      )
        | {{ detail }}

    YooFlexLayout(
      justifyContent="flex-end"
      alignItems="center"
      flexDirection="row"
      style="min-width: max-content;"
    )
      p.yoo-table-attribute__detail(
        v-if="!wrap && !actionable || actionableType !== 'button'"
        :class="[...takeDetailFillModifier]"
        @click="doClickRow"
      )
        | {{ detail }}

      YooButton.yoo-table-attribute__actionable.m__l--s(
        v-if="actionable && actionableType === 'button'"
        variation="clear"
        :fill="detailFill"
        :icon="buttonIcon"
        iconPosition="right"
        :hover="true"
        :active="true"
        :text="detail"
        :disabled="actionableDisable"
        @onClick="$emit('response')"
        :textSize="buttonTextSize"
        :iconSize="iconButtonSize"
        textWeight="medium"
      )
      YooCheckButton.yoo-table-attribute__detail.yoo-table-attribute__actionable.m__l--s(
        v-else-if="actionable && actionableType === 'check'"
        size="small"
        :class="[...takeDetailFillModifier]"
        :checked="isChecked"
        @response="doClickRow"
      )

      YooSwitch.yoo-table-attribute__detail.yoo-table-attribute_actionable.m__l--m(
        v-else-if="actionable && actionableType === 'switch'"
        size="small"
        :disabled="actionableDisable"
        :initialValue="isChecked"
        @response="doClickRow"
      )

</template>

<script>

import PropsConfig from '@/components/molecules/TableAttribute/TableAttribute.config'
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import YooIcon from '@/components/atoms/Icon/Icon.vue'
import YooButton from '@/components/atoms/Button/Button.vue'
import YooCheckButton from '@/components/atoms/CheckButton/CheckButton.vue'
import YooSwitch from '@/components/atoms/Switch/Switch.vue'

export default {
  name: 'YooTableAttribute',
  props: {
    title: {
      type: String,
      required: false
    },
    titleWeight: {
      type: String,
      default: 'medium',
      validator: value => PropsConfig.titleWeight.options.includes(value)
    },
    titleSize: {
      type: String,
      default: 'md',
      validator: value => PropsConfig.titleSize.options.includes(value)
    },
    fill: {
      type: String,
      default: 'none',
      validator: value => PropsConfig.fill.options.includes(value)
    },
    detail: {
      type: String,
      default: ''
    },
    detailFill: {
      type: String,
      default: 'light',
      validator: value => PropsConfig.detailFill.options.includes(value)
    },
    titleFill: {
      type: String,
      default: 'dark',
      validator: value => PropsConfig.titleFill.options.includes(value)
    },
    iconFill: {
      type: String,
      default: 'neutral',
      validator: value => PropsConfig.iconFill.options.includes(value)
    },
    buttonIcon: {
      type: String,
      default: 'chevron-right'
    },
    buttonTextSize: {
      type: String,
      default: 'sm',
      validator: value => PropsConfig.buttonTextSize.options.includes(value)
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
      validator: value => PropsConfig.actionableType.options.includes(value)
    },
    separator: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconButtonSize: {
      type: String,
      default: 'normal',
      validator: value => PropsConfig.iconButtonSize.options.includes(value)
    },
    iconStyle: {
      type: String,
      default: 'solid',
      validator: value => PropsConfig.iconStyle.options.includes(value)
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
    flexDirection: 'row',
    isChecked: false
  }),
  created () {
    this.isChecked = this.actionableActive
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
      if (this.fill !== 'none') {
        classList
          .push(
            `${block}__fill--${this.fill} p__l--m p__r--m`
          )
      }
      if (this.wrap) {
        classList
          .push(
            `${block}--wrap`
          )
      }
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
  },
  methods: {
    doClickRow () {
      if (this.actionable && !this.actionableDisable) {
        if (this.actionableType !== 'button') {
          this.isChecked = !this.isChecked
        }
        this.$emit('response', this.isChecked)
      }
    }
  },
  watch: {
    actionableActive (value) {
      this.isChecked = value
    }
  }
}
</script>

<style src="./TableAttribute.sass" lang="sass" scoped></style>
