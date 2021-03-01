import yooNotify from './Notify.vue'
import PropsConfig from './Notify.config'

export default {
  title: 'Yoonit/YooNotify',
  component: yooNotify,
  argTypes: {
    notifyFill: {
      control: {
        type: 'select',
        options: PropsConfig.notifyFill.options
      }
    },
    notifyTextColor: {
      control: {
        type: 'select',
        options: PropsConfig.notifyTextColor.options
      }
    },
    notifyTextSize: {
      control: {
        type: 'select',
        options: PropsConfig.notifyTextSize.options
      }
    },
    indicatorFill: {
      control: {
        type: 'select',
        options: PropsConfig.indicatorFill.options
      }
    },
    showIndicator: {
      control: {
        type: 'boolean'
      }
    },
    closeButton: {
      control: {
        type: 'boolean'
      }
    },
    showIcon: {
      control: {
        type: 'boolean'
      }
    },
    indicatorSize: {
      control: {
        type: 'select',
        options: PropsConfig.indicatorSize.options
      }
    },
    iconColor: {
      control: {
        type: 'select',
        options: PropsConfig.iconColor.options
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    },
    buttonColor: {
      control: 'color'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooNotify },
  template:
    '<yoo-notify v-bind="$props"></yoo-notify>'
})

export const Custom = Template.bind({})
Custom.args = { notifyText: 'Yoo Notify' }

export const Primary = Template.bind({})
Primary.args = { notifyText: 'Yoo Notify', notifyFill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { notifyText: 'Yoo Notify', notifyFill: 'danger' }

export const Light = Template.bind({})
Light.args = { notifyText: 'Yoo Notify', notifyFill: 'light' }
