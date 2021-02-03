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
      alignItems="flex-start"
      flexDirection="column"
      width="90%"
    )
      YooFlexLayout(
        justifyContent="wrap"
        alignItems="center"
        flexDirection="row"
      )
        p(
          :class="[ 'yoo-table-attribute__title', takeTitleColorModifier, takeTitleWrapModifier ]"
        )
          | {{ title }}

        p(
          :class="[ 'yoo-table-attribute__subtitle', takeTitleColorModifier, takeTitleWrapModifier ]"
        )
          | {{ `• ${subtitle}` }}

      YooFlexLayout(
        justifyContent="wrap"
        flexWrap="wrap"
        alignItems="flex-start"
        flexDirection="row"
      )
        p.yoo-table-attribute__no-detail(
          v-if="!options.length"
          size="small"
        )
          | Não pertence a nenhum grupo

        p(
          v-else
          v-for="(option, index) in options",
          :class="option.status ? ['yoo-table-attribute__detail', 'yoo-table-attribute__detail--on'] : 'yoo-table-attribute__detail'"
        )
          | {{ option.text }}

    YooFlexLayout(
      justifyContent="space-between"
      :alignItems="flexAlignItems"
      :flexDirection="flexDirection"
    )
      YooButton(
        v-if="actionable && actionableType === 'button'"
        variation="clear"
        fill="primary"
        icon="chevron-right"
        iconPosition="right"
        hover=true
        active=true
        :disabled="buttonDisable"
        @doClick="doGetValue"
      )

      YooCheckButton.m__t--l.m__r--l.m__b--l.m__l--l(
        v-else-if="actionable && actionableType === 'check'"
        size="small"
        :text="detail"
        :textPosition="actionableTextPosition"
        @response="doGetValue"
      )

</template>

<script>

import PropsConfig from '@/components/molecules/TableCard/TableCard.config'
import YooFlexLayout from '@/components/quarks/FlexLayout/FlexLayout.vue'
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
    options: {
      type: Array,
      required: true
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
    actionableTextPosition: {
      type: String,
      default: 'left',
      validator: value => PropsConfig.actionableTextPosition.options
    },
    separator: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
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
  beforeCreate () {},
  created () {
    if (this.wrap) {
      this.flexAlignItems = 'flex-start'
      this.flexDirection = 'column'
    }
  },
  beforeMount () {},
  mounted () {
    console.log(this.options)
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  computed: {
    /**
    * @description Returns classes based on the chosen props
    * @computed takeModifier
    * @returns {array}
    */
    takeModifier () {
      const block = 'yoo-table-attribute'
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
  },
  filters: {},
  watch: {}
}
</script>

<style src="./TableCard.sass" lang="sass" scoped></style>
