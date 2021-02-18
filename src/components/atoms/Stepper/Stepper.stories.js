import yooStepper from './Stepper.vue'
import PropsConfig from './Stepper.config'

export default {
  title: 'Yoonit/YooStepper',
  component: yooStepper,
  argTypes: {
    counterType: {
      control: {
        type: 'select',
        options: PropsConfig.counterType.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooStepper },
  template:
    '<yoo-stepper v-bind="$props"></yoo-stepper>'
})

export const Custom = Template.bind({})
Custom.args = { totalSteps: 5, counterType: 'number' }

export const Dots = Template.bind({})
Dots.args = { totalSteps: 5, counterType: 'dot' }

export const Number = Template.bind({})
Number.args = { totalSteps: 3, counterType: 'number' }