<template lang="pug">
  YooGridLayout.yoo-list-item(
    alignItems="center"
    :cols="takeCols"
    rows="*"
    horizontalAlign="space-between"
    verticalAlign="center"
    :class="[...takeModifier]"
  )
    .yoo-list-item__item.m__b--m
      YooFlexLayout.yoo-list-item__item(
        justifyContent="center"
        alignItems="center"
      )
        h3.yoo-list-item__title.m__r--xs(
        ) {{title}}

        p.yoo-list-item__subtitle(
          v-show="subtitle",
          width="100%"
        ) {{subtitle}}

      YooFlexLayout(
        flexWrap="wrap"
        justifyContent="flex-start"
        flexDirection="row"
      )
        YooTag(
          :tags="tags ? tags : ''"
        )

    YooFlexLayout(
      v-if="controlVisibility"
      justifyContent="flex-end"
      alignItems="center"
    )
      slot(
        name="control"
      )
    YooFlexLayout.m__r--l.m__l--l(
      justifyContent="flex-end"
      alignItems="center"
    )
      YooButton(
        v-if="actionable && actionableType === 'button'"
        variation="clear"
        icon="chevron-right"
        iconPosition="right"
        hover=true
        active=true
        :disabled="buttonDisable"
        @doClick="doGetValue"
      )

      YooCheckButton(
        v-else-if="actionable && actionableType === 'check'"
        size="small"
        :checked="actionableActive"
        @response="doGetValue"
      )
</template>

<script>

import YooTag from '@/components/atoms/Tag/Tag.vue'
import YooButton from '@/components/atoms/Button/Button.vue'
import YooCheckButton from '@/components/atoms/CheckButton/CheckButton.vue'

import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import YooGridLayout from '@/components/bosons/GridLayout/GridLayout.vue'

import PropsConfig from '@/components/molecules/ListItem/ListItem.config'

export default {
  name: 'YooListItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    tags: {
      type: [Array, String],
      required: false
    },
    actionable: {
      type: Boolean,
      default: false
    },
    buttonDisable: {
      type: Boolean,
      default: false
    },
    actionableType: {
      type: String,
      default: 'button',
      validator: value => PropsConfig.actionableType.options.includes(value)
    },
    actionableActive: {
      type: Boolean,
      default: false
    },
    separator: {
      type: Boolean,
      default: false
    },
    borderLeft: {
      type: Boolean,
      default: false
    },
    borderFill: {
      type: String,
      default: 'neutral',
      validator: value => PropsConfig.borderFill.options.includes(value)
    }
  },
  components: {
    YooGridLayout,
    YooFlexLayout,
    YooTag,
    YooButton,
    YooCheckButton
  },
  computed: {
    /**
    * @description Print classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const blockItem = 'yoo-list-item'
      const classList = []
      if (this.borderLeft) {
        classList
          .push(`${blockItem}--border-left`)
      }
      if (this.separator) {
        classList
          .push(
            `${blockItem}--separated`
          )
      }
      classList
        .push(`${blockItem}__fill--border-${this.borderFill}`)

      return classList
    },
    /**
    * @description Changes item visibility
    * @computed controlVisibility
    * @returns {boolean}
    */
    controlVisibility () {
      return !!this.$slots.control
    },
    /**
    * @description Print style based on the chosen props showIndicator and showCloseButton
    * @computed takeCols
    * @returns {string}
    */
    takeCols () {
      if (this.actionable) {
        return 'auto, 1, auto'
      }
      return 'auto, auto'
    }
  },
  methods: {
    /**
    * @description Emits value reciveid
    * @method doGetValue
    */
    doGetValue (e) {
      this.$emit('response', e)
    }
  }
}
</script>

<style src="./ListItem.sass" lang="sass" scoped></style>
