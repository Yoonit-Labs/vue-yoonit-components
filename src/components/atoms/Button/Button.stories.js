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
    borderRadius: {
      control: {
        type: 'select',
        options: PropsConfig.borderRadius.options
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
    },
    textSize: {
      control: {
        type: 'select',
        options: PropsConfig.textSize.options
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

export const DangerOutline = Template.bind({})
DangerOutline.args = { text: 'Yoo Button', fill: 'danger', variation: 'outline' }

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = { text: 'Yoo Button', fill: 'primary', variation: 'outline' }

export const LightOutline = Template.bind({})
LightOutline.args = { text: 'Yoo Button', fill: 'light', variation: 'outline' }

export const DarkOutline = Template.bind({})
DarkOutline.args = { text: 'Yoo Button', fill: 'dark', variation: 'outline' }

export const DangerBase = Template.bind({})
DangerBase.args = { text: 'Yoo Button', fill: 'danger', variation: 'base' }

export const PrimaryBase = Template.bind({})
PrimaryBase.args = { text: 'Yoo Button', fill: 'primary', variation: 'base' }

export const LightBase = Template.bind({})
LightBase.args = { text: 'Yoo Button', fill: 'light', variation: 'base' }

export const DarkBase = Template.bind({})
DarkBase.args = { text: 'Yoo Button', fill: 'dark', variation: 'base' }

export const DangerClear = Template.bind({})
DangerClear.args = { text: 'Yoo Button', fill: 'danger', variation: 'clear' }

export const PrimaryClear = Template.bind({})
PrimaryClear.args = { text: 'Yoo Button', fill: 'primary', variation: 'clear' }

export const LightClear = Template.bind({})
LightClear.args = { text: 'Yoo Button', fill: 'light', variation: 'clear' }

export const DarkClear = Template.bind({})
DarkClear.args = { text: 'Yoo Button', fill: 'dark', variation: 'clear' }

export const Icon = Template.bind({})
Icon.args = { text: 'Yoo Button', variation: 'base', fill: 'danger', icon: 'trash-alt', iconStyle: 'regular' }

export const Animated = Template.bind({})
Animated.args = { text: 'Yoo Button', variation: 'base', fill: 'dark', animation: 'pulse', icon: 'credit-card', iconStyle: 'solid' }

export const Short = Template.bind({})
Short.args = { text: '99', variation: 'base', fill: 'primary', animation: 'pulse', buttonSize: 'short' }
