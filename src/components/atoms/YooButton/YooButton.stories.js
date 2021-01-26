import YooButton from './YooButton.vue'
import PropsConfig from '@/components/atoms/YooButton/YooButton.config'

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

export const Outline = Template.bind({})
Outline.args = { text: 'Yoo Button', variation: 'outline' }
