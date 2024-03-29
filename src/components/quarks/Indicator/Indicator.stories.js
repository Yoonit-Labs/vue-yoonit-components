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

import yooIndicator from './Indicator.vue'
import PropsConfig from './Indicator.config'

export default {
  title: 'Yoonit/YooIndicator',
  component: yooIndicator,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
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
  components: { yooIndicator },
  template:
    '<yoo-indicator v-bind="$props"></yoo-indicator>'
})

export const Custom = Template.bind({})
Custom.args = { text: '1' }

export const Default = Template.bind({})
Default.args = { text: '1' }

export const Primary = Template.bind({})
Primary.args = { text: '1', fill: 'primary' }

export const Light = Template.bind({})
Light.args = { text: '2', fill: 'light' }

export const Dark = Template.bind({})
Dark.args = { text: '10', fill: 'dark' }

export const Neutral = Template.bind({})
Neutral.args = { text: '5', fill: 'neutral' }
