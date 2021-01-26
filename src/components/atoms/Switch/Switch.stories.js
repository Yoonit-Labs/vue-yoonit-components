import yooSwitch from './Switch.vue'
import PropsConfig from './Switch.config'

export default {
  title: 'Yoonit/YooSwitch',
  component: yooSwitch,
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
  components: { yooSwitch },
  template:
    '<yoo-switch v-bind="$props"></yoo-switch>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Switch' }

export const Small = Template.bind({})
Small.args = { text: 'Yoo Warning test component', size: 'small' }

export const Medium = Template.bind({})
Medium.args = { text: 'Yoo Warning test component', size: 'medium' }

export const Large = Template.bind({})
Large.args = { text: 'Yoo Warning test component', size: 'large' }
