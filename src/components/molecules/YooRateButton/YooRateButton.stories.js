import YooRateButton from './YooRateButton.vue'
import PropsConfig from './YooRateButton.config'

export default {
  title: 'Yoonit/YooRateButton',
  component: YooRateButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: PropsConfig.size.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooRateButton },
  template:
    '<yoo-rate v-bind="$props"></yoo-rate>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Switch' }