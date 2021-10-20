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

import yooPagination from './Pagination.vue'
import PropsConfig from './Pagination.config'

export default {
  title: 'Yoonit/YooPagination',
  component: yooPagination,
  argTypes: {
    totalPages: {
      control: {
        type: 'number',
        step: 10
      }
    },
    currentPage: {
      control: {
        type: 'number',
        step: 1
      }
    },
    counterType: {
      control: {
        type: 'select',
        options: PropsConfig.counterType.options
      }
    },
    variationButtonNext: {
      control: {
        type: 'select',
        options: PropsConfig.variationButtonNext.options
      }
    },
    lastButton: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooPagination },
  template:
    '<yoo-pagination v-bind="$props"></yoo-pagination>'
})

export const Custom = Template.bind({})
Custom.args = { totalPages: 5, currentPage: 0 }

export const Default = Template.bind({})
Default.args = { totalPages: 5, currentPage: 0 }
