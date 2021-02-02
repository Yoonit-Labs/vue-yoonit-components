import yooWarning from './Warning.vue'
import PropsConfig from './Warning.config'

export default {
  title: 'Yoonit/YooWarning',
  component: yooWarning,
  argTypes: {
    variation: {
      control: {
        type: 'select',
        options: PropsConfig.variation.options
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooWarning },
  template:
    '<yoo-warning v-bind="$props"></yoo-warning>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Warning test component' }

export const Danger = Template.bind({})
Danger.args = { text: 'Yoo Warning test component', variation: 'danger' }

export const Clear = Template.bind({})
Clear.args = { text: 'Yoo Warning test component', variation: 'clear' }
