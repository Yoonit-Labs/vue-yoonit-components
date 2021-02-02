import YooButton from './Button.vue'
import PropsConfig from '@/components/atoms/Button/Button.config'

export default {
  title: 'Yoonit/YooButton',
  component: YooButton,
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
  components: { YooButton },
  template:
    '<yoo-button v-bind="$props"></yoo-button>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Button' }

export const Danger = Template.bind({})
Danger.args = { text: 'Yoo Button', variation: 'base', fill: 'danger' }

export const Dark = Template.bind({})
Dark.args = { text: 'Yoo Button', variation: 'base', fill: 'dark' }

export const Light = Template.bind({})
Light.args = { text: 'Yoo Button', variation: 'base', fill: 'light' }

export const Outline = Template.bind({})
Outline.args = { text: 'Yoo Button', variation: 'outline' }

export const Clear = Template.bind({})
Clear.args = { text: 'Yoo Button', variation: 'clear' }

export const Icon = Template.bind({})
Icon.args = { text: 'Yoo Button', variation: 'base', fill: 'danger', icon: 'trash-alt', iconStyle: 'regular' }

export const Animated = Template.bind({})
Animated.args = { text: 'Yoo Button', variation: 'base', fill: 'dark', animation: 'pulse', icon: 'credit-card', iconStyle: 'solid' }

export const Short = Template.bind({})
Short.args = { text: 'Yoo Button', variation: 'base', fill: 'primary', icon: 'check', buttonSize: 'short' }

export const Xs = Template.bind({})
Xs.args = { text: '99', variation: 'base', fill: 'danger', animation: 'pulse', buttonSize: 'xs' }
