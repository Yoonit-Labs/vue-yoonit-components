import YooIcon from './Icon.vue'
import PropsConfig from './Icon.config'

export default {
  title: 'Yoonit/YooIcon',
  component: YooIcon,
  argTypes: {
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    },
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
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooIcon },
  template:
    '<yoo-icon v-bind="$props"></yoo-avatar>'
})

export const Custom = Template.bind({})
Custom.args = { icon: 'cog' }

export const Primary = Template.bind({})
Primary.args = { icon: 'cog', fill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { icon: 'cog', fill: 'danger' }

export const Light = Template.bind({})
Light.args = { icon: 'cog', fill: 'light' }

export const Dark = Template.bind({})
Dark.args = { icon: 'cog', fill: 'dark' }

export const Neutral = Template.bind({})
Neutral.args = { icon: 'cog', fill: 'neutral' }
