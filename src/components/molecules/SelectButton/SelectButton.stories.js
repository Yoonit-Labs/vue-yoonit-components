import YooSelectButton from './SelectButton.vue'

export default {
  title: 'Yoonit/YooSelectButton',
  component: YooSelectButton
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooSelectButton },
  template:
    '<yoo-select-button v-bind="$props"></yoo-select-button>'
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

export const Multiple = Template.bind({})
Multiple.args = {
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
  ],
  multiple: true
}
