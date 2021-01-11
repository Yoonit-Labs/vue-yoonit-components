import yooWarning from './YooWarning.vue'
import PropsConfig from './YooWarning.config'

export default {
  title: 'Yoonit/Warning',
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

export const Default = Template.bind({})
Default.args = { text: 'Yoo Warning test component', variation: 'default' }

export const Clear = Template.bind({})
Clear.args = { text: 'Yoo Warning test component', variation: 'clear' }

export const Danger = Template.bind({})
Danger.args = { text: 'Yoo Warning test component', variation: 'danger' }
