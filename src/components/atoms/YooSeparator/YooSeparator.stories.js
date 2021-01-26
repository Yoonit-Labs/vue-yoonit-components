import yooSeparator from './YooSeparator.vue'
import PropsConfig from './YooSeparator.config'

export default {
  title: 'Yoonit/YooSeparator',
  component: yooSeparator,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooSeparator },
  template:
    '<yoo-separator v-bind="$props"></yoo-separator>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Warning test component' }

export const Default = Template.bind({})
Default.args = { text: 'Yoo Warning test component', fill: 'default' }

export const Primary = Template.bind({})
Primary.args = { text: 'Yoo Warning test component', fill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { text: 'Yoo Warning test component', fill: 'danger' }
