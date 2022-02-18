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

import yooInfiniteScroll from './InfiniteScroll.vue'
import PropsConfig from './InfiniteScroll.config'

export default {
  title: 'Yoonit/YooInfiniteScroll',
  component: yooInfiniteScroll,
  argTypes: {
    loadingFill: {
      control: {
        type: 'select',
        options: PropsConfig.loadingFill.options
      }
    },
    loadingSize: {
      control: {
        type: 'select',
        options: PropsConfig.loadingSize.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooInfiniteScroll },
  template:
    `<yoo-infinite-scroll v-bind="$props" style="height:300px;overflow:auto">
        <template v-slot>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">item</h3>
          <h3 style="background-color: #47C8C3; color: white; font-family: Montserrat, sans-serif; font-size: 16px; padding: 8px; text-align: center;">último</h3>
        </template>
    </yoo-infinite-scroll>`
})

export const Custom = Template.bind({})
Custom.args = { loadingFill: 'primary' }
