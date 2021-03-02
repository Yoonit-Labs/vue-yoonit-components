<template lang="pug">
YooFlexLayout.yoo-stepper(
  flexDirection="row"
  justifyContent="space-around"
  alignItems="center"
)
  .yoo-stepper__number.m__t--xs(
    v-if="counterType === 'number'"
  ) {{takeNumberLabel}}
  .yoo-stepper__dot(
    v-if="counterType === 'dot'"
    v-for="(step, index) in takeStepsLength"
    :key="'dotStep-' + index"
    :class=`[
      { 'yoo-stepper__dot--active': index === currentStep },
      { 'yoo-stepper__dot--last': index === totalSteps }]`
  )
</template>

<script>

import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import PropsConfig from '@/components/atoms/Stepper/Stepper.config'

export default {
  name: 'YooStepper',
  components: {
    YooFlexLayout
  },
  props: {
    counterType: {
      type: String,
      default: 'dot',
      validator: value => PropsConfig.counterType.options.includes(value)
    },
    totalSteps: {
      type: Number,
      default: 1
    },
    currentStep: {
      type: Number,
      default: 0
    }
  },
  computed: {
    /**
    * @description Returns an array of the totalSteps prop
    * @computed takeStepsLength
    * @returns {array}
    */
    takeStepsLength () {
      return new Array(this.totalSteps)
    },
    /**
    * @description Returns the currentStep prop adding 1
    * @computed takeCurrentStepNumber
    * @returns {number}
    */
    takeCurrentStepNumber () {
      return this.currentStep + 1
    },
    /**
    * @description Returns a formatted string when the counterType prop is equal to type "number"
    * @computed takeNumberLabel
    * @returns {string}
    */
    takeNumberLabel () {
      return `${this.takeCurrentStepNumber} de ${this.totalSteps}`
    }
  }
}
</script>

<style src="./Stepper.sass" lang="sass" scoped></style>
