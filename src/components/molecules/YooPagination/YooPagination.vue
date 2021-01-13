<template lang="pug">
  YooFlexLayout(
      flexDirection="row",
      justifyContent="space-between"
    )
      YooButton.button__container--back(
        icon="arrow-left"
        iconStyle="solid"
        fill="primary"
        variation="outline"
        @onClick="doBack()"
        :disabled="takeBackBtnEnabled"
      )

      YooStepper(
        :counterType="counterType"
        :totalSteps="totalPages",
        :currentStep="currentPage"
      )

      YooButton(
        v-show="!nextButton ? !(lastButton && takeAtLastPage) : false"
        icon="arrow-right"
        iconStyle="solid"
        @onClick="doNext()",
        :disabled="takeNextBtnEnabled"
      )
      YooButton(
        v-show="nextButton && !takeAtLastPage",
        icon="arrow-right"
        iconPosition="right"
        flexGrow="1"
        :text="nextButton"
        :disabled="takeNextBtnEnabled"
        @onClick="doNext()"
      )
      YooButton(
        v-show="lastButton && takeAtLastPage",
        icon="arrow-right"
        iconPosition="right"
        flexGrow="1"
        :text="lastButton"
        :disabled="takeLastBtnEnabled"
        @onClick="doLast()"
      )
</template>

<script>
import YooFlexLayout from '@/components/quarks/YooFlexLayout/YooFlexLayout.vue'
import YooStepper from '@/components/atoms/YooStepper/YooStepper.vue'
import YooButton from '@/components/atoms/Button/Button.vue'

import PropsConfig from './YooPagination.config'

export default {
  name: 'YooPagination',
  components: {
    YooButton,
    YooStepper,
    YooFlexLayout
  },
  props: {
    totalPages: {
      type: Number,
      validator (value) { return value > 0 }
    },
    currentPage: {
      type: Number,
      default: 0
    },
    counterType: {
      type: String,
      required: false,
      default: 'dot',
      validator: value => PropsConfig.counterType.options.includes(value)
    },
    variationButtonNext: {
      type: String,
      default: 'base',
      validator: value => PropsConfig.variationButtonNext.options.includes(value)
    },
    nextButton: {
      type: String,
      required: false,
      default: ''
    },
    lastButton: {
      type: String,
      required: false,
      default: ''
    },
    disableFirstAction: {
      type: Boolean,
      required: false,
      default: false
    },
    disableNextAction: {
      type: Boolean,
      required: false,
      default: false
    },
    disableLastAction: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    takeAtFirstPage () {
      return this.currentPage === 0
    },
    takeAtLastPage () {
      return this.currentPage === this.totalPages - 1
    },
    takeBackBtnEnabled () {
      return this.disableFirstAction
        ? this.currentPage === 0
        : false
    },
    takeNextBtnEnabled () {
      let btnState = false
      if (this.disableNextAction) {
        btnState = this.disableNextAction
      }
      return btnState
    },
    takeLastBtnEnabled () {
      let btnState = false
      if (this.disableLastAction) {
        btnState = !((this.currentPage + 1) <= (this.totalPages - 1))
      }
      return btnState
    }
  },
  methods: {
    doBack (e) {
      this.$emit(
        'tapPage',
        this.takeAtFirstPage ? 'first' : 'back'
      )
    },
    doNext (e) {
      this.$emit(
        'tapPage',
        this.takeAtLastPage ? 'last' : 'next'
      )
    },
    doLast (e) {
      this.$emit(
        'tapPage',
        'last'
      )
    }
  }
}

</script>
