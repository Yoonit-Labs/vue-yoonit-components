<template lang="pug">
  YooFlexLayout(
    justifyContent="space-between"
    alignItems="center"
    flexDirection="row"
    width="100%"
    :class="[ 'yoo-table-card', takeModifier ]"
  )
    YooFlexLayout(
      justifyContent="space-between"
      alignItems="flex-start"
      flexDirection="column"
      width="90%"
    )
      YooFlexLayout.m__b--s(
        flexWrap="wrap"
        alignItems="center"
        flexDirection="row"
      )
        div.yoo-table-card__title {{ title }}

        div(
          :class="[ 'yoo-table-card__subtitle', takeFillModifier ]"
        )
          | {{ `• ${subtitle}` }}

      YooFlexLayout(
        flexWrap="wrap"
        alignItems="flex-start"
        flexDirection="row"
        justifyContent="flex-start"
      )
        p.yoo-table-card__no-detail(
          v-if="(typeof details !== 'object')"
        )
          | {{ details }}

        p(
          v-else
          v-for="(detail, index) in details",
          :key="index"
          :class="detail.status ? ['yoo-table-card__detail', 'yoo-table-card__detail--on', takeFillModifier] : 'yoo-table-card__detail'"
        )
          | {{ detail.text }}

    YooFlexLayout(
      justifyContent="space-between"
      :alignItems="flexAlignItems"
      :flexDirection="flexDirection"
    )
      YooButton(
        v-if="actionable && actionableType === 'button'"
        variation="clear"
        :fill="fill"
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
        :text="detail"
        @response="doGetValue"
      )

</template>

<script>

import PropsConfig from '@/components/molecules/TableCard/TableCard.config'
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import YooButton from '@/components/atoms/Button/Button.vue'
import YooCheckButton from '@/components/atoms/CheckButton/CheckButton.vue'

export default {
  name: 'YooTableCard',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    details: {
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
      validator: value => PropsConfig.actionableType.options
    },
    separator: {
      type: Boolean,
      default: false
    },
    fill: {
      type: String,
      default: 'primary',
      validator: value => PropsConfig.fill.options
    }
  },
  components: {
    YooFlexLayout,
    YooButton,
    YooCheckButton
  },
  data: () => ({
    flexAlignItems: 'center',
    flexDirection: 'row'
  }),
  computed: {
    /**
    * @description Returns classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-table-card'
      const classList = []
      if (this.separator) {
        classList
          .push(
            `${block}--separated`
          )
      }
      return classList
    },
    /**
    * @description Returns class based on the fill prop
    * @computed takeFillModifier
    * @returns {string}
    */
    takeFillModifier () {
      return `yoo-table-card__fill--${this.fill}`
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

<style src="./TableCard.sass" lang="sass" scoped></style>
