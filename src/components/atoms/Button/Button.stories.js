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

export const DangerOutline = Template.bind({})
DangerOutline.args = { text: 'Yoo Button', fill: 'danger', variation: 'outline' }

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = { text: 'Yoo Button', fill: 'primary', variation: 'outline' }

export const DangerBase = Template.bind({})
DangerBase.args = { text: 'Yoo Button', fill: 'danger', variation: 'base' }

export const PrimaryBase = Template.bind({})
PrimaryBase.args = { text: 'Yoo Button', fill: 'primary', variation: 'base' }

export const DangerClear = Template.bind({})
DangerClear.args = { text: 'Yoo Button', fill: 'danger', variation: 'clear' }

export const PrimaryClear = Template.bind({})
PrimaryClear.args = { text: 'Yoo Button', fill: 'primary', variation: 'clear' }

export const LightBase = Template.bind({})
LightBase.args = { text: 'Yoo Button', fill: 'light', variation: 'base' }