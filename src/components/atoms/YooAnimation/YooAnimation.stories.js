import YooAnimation from './YooAnimation.vue'
import PropsConfig from '@/config/YooAnimation.config'

export default {
  title: 'Yoonit/YooAnimation',
  component: YooAnimation,
  argTypes: {
    variation: {
      control: {
        type: 'select',
        options: PropsConfig.variation.options
      }
    },
    buttonSize: {
      control: {
        type: 'select',
        options: PropsConfig.buttonSize.options
      }
    },
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
    iconPosition: {
      control: {
        type: 'select',
        options: PropsConfig.iconPosition.options
      }
    },
    iconSize: {
      control: {
        type: 'select',
        options: PropsConfig.iconSize.options
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    },
    animation: {
      control: {
        type: 'select',
        options: PropsConfig.animation.options
      }
    },
    iconCustomColor: {
      control: {
        type: 'text'
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

export const Outline = Template.bind({})
Outline.args = { text: 'Yoo Avatar', variation: 'outline' }
