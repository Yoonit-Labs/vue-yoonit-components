<template lang="pug">
  YooFlexLayout.yoo-pagination(
      flexDirection="row",
      justifyContent="space-between"
    )
      YooButton.button__back(
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

      YooButton.button__next(
        v-show="!nextButton ? !(lastButton && takeAtLastPage) : false"
        icon="arrow-right"
        iconStyle="solid"
        @onClick="doNext()",
        :disabled="takeNextBtnEnabled"
      )
      YooButton.button__next--grow(
        v-show="nextButton && !takeAtLastPage",
        icon="arrow-right"
        iconPosition="right"
        flexGrow="1"
        :text="nextButton"
        :disabled="takeNextBtnEnabled"
        @onClick="doNext()"
      )
      YooButton.button__last(
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
import YooButton from '@/components/atoms/YooButton/YooButton.vue'

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
      required: true,
      validator (value) { return value > 0 }
    },
    currentPage: {
      type: Number,
      default: 0
    },
    counterType: {
      type: String,
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
      default: ''
    },
    lastButton: {
      type: String,
      default: ''
    },
    disableFirstAction: {
      type: Boolean,
      default: false
    },
    disableNextAction: {
      type: Boolean,
      default: false
    },
    disableLastAction: {
      type: Boolean,
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
      return (this.takeAtFirstPage && this.disableFirstAction)
    },
    takeNextBtnEnabled () {
      return this.disableNextAction
    },
    takeLastBtnEnabled () {
      return this.disableLastAction
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
