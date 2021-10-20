/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Vue Yoonit Components
 * VueJS Atomic Design System framework
 *
 * Vitória Costa, Tiago Brito, Fernando Junior, Sabrina Sampaio, Gabriel Mule, Gabriel Moraes, Gabriel Rizzo & Luigui Delyer @ 2020-2021
 */

import yooNotify from './Notify.vue'
import PropsConfig from './Notify.config'

export default {
  title: 'Yoonit/YooNotify',
  component: yooNotify,
  argTypes: {
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
    },
    textSize: {
      control: {
        type: 'select',
        options: PropsConfig.textSize.options
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
Custom.args = { text: 'Yoo Notify' }

export const Primary = Template.bind({})
Primary.args = { text: 'Yoo Notify', fill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { text: 'Yoo Notify', fill: 'danger' }

export const Light = Template.bind({})
Light.args = { notifyText: 'Yoo Notify', notifyFill: 'light' }

export const Dark = Template.bind({})
Dark.args = { text: 'Yoo Notify', fill: 'dark' }
