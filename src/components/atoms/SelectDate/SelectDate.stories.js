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

import yooSelectDate from '@/components/atoms/SelectDate/SelectDate.vue'
import PropsConfig from '@/components/atoms/SelectDate/SelectDate.config'

export default {
  title: 'Yoonit/YooSelectDate',
  component: yooSelectDate,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: PropsConfig.type.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooSelectDate },
  template:
    '<yoo-select-date v-bind="$props"></yoo-select-date>'
})

export const Custom = Template.bind({})
// Custom.args = { type: 'time' }
// Custom.args = { type: 'date', value: '23/01/1990' }

export const Date = Template.bind({})

export const Time = Template.bind({})
Time.args = { type: 'time' }
