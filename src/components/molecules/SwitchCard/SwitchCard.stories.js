import YooSwitchCard from './SwitchCard.vue'
import PropsConfig from './SwitchCard.config'

export default {
  title: 'Yoonit/YooSwitchCard',
  component: YooSwitchCard,
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
  components: { YooSwitchCard },
  template:
    '<yoo-switch-card v-bind="$props"></yoo-switch-card>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo SwitchCard' }

export const Small = Template.bind({})
Small.args = { text: 'Yoo SwitchCard test component checked', size: 'small', checked: true }

export const Medium = Template.bind({})
Medium.args = { text: 'Yoo SwitchCard test component', size: 'medium' }

export const Large = Template.bind({})
Large.args = { text: 'Yoo SwitchCard test component', size: 'large' }
