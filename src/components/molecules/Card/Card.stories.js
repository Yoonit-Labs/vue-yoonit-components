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

import YooCard from './Card.vue'
import PropsConfig from './Card.config'

export default {
  title: 'Yoonit/YooCard',
  component: YooCard,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
    iconSize: {
      control: {
        type: 'select',
        options: PropsConfig.iconSize.options
      }
    },
    iconFill: {
      control: {
        type: 'select',
        options: PropsConfig.iconFill.options
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    },
    appIndicatorFill: {
      control: {
        type: 'select',
        options: PropsConfig.appIndicatorFill.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooCard },
  template:
    '<yoo-card v-bind="$props"></yoo-card>'
})

export const Custom = Template.bind({})
Custom.args = { title: 'YooCard', subtitle: 'Test' }

export const Danger = Template.bind({})
Danger.args = { title: 'YooCard', subtitle: 'Test', fill: 'danger', showIndicator: true, icon: 'cog', iconFill: 'white', iconSize: 'xl' }

export const Neutral = Template.bind({})
Neutral.args = { title: 'YooCard', subtitle: 'Test', fill: 'neutral', showIndicator: true, icon: 'cog', iconFill: 'white', iconSize: 'xl' }

export const Light = Template.bind({})
Light.args = { title: 'YooCard', subtitle: 'Test', fill: 'light', showIndicator: true, icon: 'cog', iconFill: 'neutral', iconSize: 'xl' }

export const Dark = Template.bind({})
Dark.args = { title: 'YooCard', subtitle: 'Test', fill: 'dark', showIndicator: true, icon: 'cog', iconFill: 'white', iconSize: 'xl' }
