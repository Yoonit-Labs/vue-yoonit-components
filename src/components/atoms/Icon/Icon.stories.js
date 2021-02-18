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
    '<yoo-icon v-bind="$props"></yoo-icon>'
})

export const Custom = Template.bind({})
Custom.args = { icon: 'angry', size: 'hg' }

export const Primary = Template.bind({})
Primary.args = { icon: 'angry', fill: 'primary', size: 'hg' }

export const Danger = Template.bind({})
Danger.args = { icon: 'angry', fill: 'danger', size: 'hg' }

export const Light = Template.bind({})
Light.args = { icon: 'angry', fill: 'light', size: 'hg' }

export const Dark = Template.bind({})
Dark.args = { icon: 'angry', fill: 'dark', size: 'hg' }

export const Neutral = Template.bind({})
Neutral.args = { icon: 'angry', fill: 'neutral', size: 'hg' }
