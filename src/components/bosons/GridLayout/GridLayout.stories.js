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

import yooGridLayout from './GridLayout.vue'
import PropsConfig from './GridLayout.config'

export default {
  title: 'Yoonit/YooGridLayout',
  component: yooGridLayout,
  argTypes: {
    horizontalAlign: {
      control: {
        type: 'select',
        options: PropsConfig.horizontalAlign.options
      }
    },
    verticalAlign: {
      control: {
        type: 'select',
        options: PropsConfig.verticalAlign.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooGridLayout },
  template:
    `<yoo-grid-layout v-bind="$props">
      <div row="1" col="1/3" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 1</div>
      <div row="1" col="3" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 2</div>
      <div row="1" col="4" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 3</div>
      <div row="2" col="1" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 4</div>
      <div row="2" col="2" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 5</div>
      <div row="2" col="3" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 6</div>
      <div row="2" col="4" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 7</div>
      <div row="3" col="1" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 8</div>
      <div row="3" col="2/5" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 9</div>
      <div row="4/6" col="1/3" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 10</div>
      <div row="4/6" col="3/5" style="border-radius: 4px; padding: 4px; font-family: Montserrat, sans-serif; color: white; background-color: #47C8C3;">Item 11</div>
    </yoo-grid-layout>`
})

const TemplateDefault = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooGridLayout },
  template:
    `<yoo-grid-layout v-bind="$props">
      <div row="1" col="1/3" style="padding: 8px; color: black; font-family: Montserrat, sans-serif; font-size: 16px; background-color: #F5F6F7;">Item 1</div>
      <div row="2" col="1" style="padding: 8px; color: black; font-family: Montserrat, sans-serif; font-size: 16px; background-color: #F5F6F7;">Item 2</div>
      <div row="2" col="2" style="padding: 8px; color: black; font-family: Montserrat, sans-serif; font-size: 16px; background-color: #F5F6F7;">Item 3</div>
    </yoo-grid-layout>`
})

export const Custom = Template.bind({})
Custom.args = { rows: 'auto', cols: 'auto', gap: '10px', height: '300px' }

export const Default = TemplateDefault.bind({})
Default.args = { rows: 'auto', cols: 'auto', height: '140px' }

export const Gap = TemplateDefault.bind({})
Gap.args = { rows: 'auto', cols: 'auto', gap: '40px', height: '140px' }

export const Center = TemplateDefault.bind({})
Center.args = { rows: 'auto', cols: 'auto', height: '140px', verticalAlign: 'center', horizontalAlign: 'center' }
