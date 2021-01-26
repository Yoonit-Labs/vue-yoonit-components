import YooRateButton from './RateButton.vue'

export default {
  title: 'Yoonit/YooRateButton',
  component: YooRateButton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooRateButton },
  template:
    '<yoo-rate-button v-bind="$props"></yoo-rate-button>'
})

export const Custom = Template.bind({})
Custom.args = {
  rate: [
    {
      text: '1',
      value: 1
    },
    {
      text: '2',
      value: 2
    },
    {
      text: '3',
      value: 3
    }
  ]
}
