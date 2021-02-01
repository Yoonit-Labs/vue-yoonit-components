import yooCheckButton from './CheckButton.vue'
import PropsConfig from './CheckButton.config'

export default {
  title: 'Yoonit/YooCheckButton',
  component: yooCheckButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: PropsConfig.size.options
      }
    },
    textPosition: {
      control: {
        type: 'select',
        options: PropsConfig.textPosition.options
      }
    },
    text: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooCheckButton },
  template:
    '<yoo-check-button v-bind="$props"></yoo-check-button>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Checkbox' }

export const Default = Template.bind({})
Default.args = { text: 'Yoo Checkbox' }
