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

import yooSwitch from './Switch.vue'
import PropsConfig from './Switch.config'

export default {
  title: 'Yoonit/YooSwitch',
  component: yooSwitch,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: PropsConfig.size.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooSwitch },
  template:
    '<yoo-switch v-bind="$props"></yoo-switch>'
})

export const Custom = Template.bind({})
Custom.args = { size: 'medium', initialValue: true }

export const Small = Template.bind({})
Small.args = { size: 'small' }

export const Medium = Template.bind({})
Medium.args = { size: 'medium' }

export const Large = Template.bind({})
Large.args = { size: 'large' }
