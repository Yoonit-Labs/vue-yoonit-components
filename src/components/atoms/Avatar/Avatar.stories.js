import YooAvatar from './Avatar.vue'
import PropsConfig from './Avatar.config'

export default {
  title: 'Yoonit/YooAvatar',
  component: YooAvatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: PropsConfig.size.options
      }
    },
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
    textColor: {
      control: {
        type: 'select',
        options: PropsConfig.textColor.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooAvatar },
  template:
    '<yoo-avatar v-bind="$props"></yoo-avatar>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Avatar' }

export const Primary = Template.bind({})
Primary.args = { text: 'Yoo Avatar', fill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { text: 'Yoo Avatar', fill: 'danger' }

export const Light = Template.bind({})
Light.args = { text: 'Yoo Avatar', fill: 'light' }

export const Dark = Template.bind({})
Dark.args = { text: 'Yoo Avatar', fill: 'dark' }

export const Neutral = Template.bind({})
Neutral.args = { text: 'Yoo Avatar', fill: 'neutral' }
