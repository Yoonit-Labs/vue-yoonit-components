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

import YooCamera from './Camera'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Yoonit/YooCamera',
  component: YooCamera
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooCamera },
  template: `
    <div style="width: 400px; height: 430px">
      <yoo-camera v-bind="$props" @frame="emitFrame" @permissionDenied="permissionDenied"/>
    </div>`,
  methods: { emitFrame: action('Frame'), permissionDenied: action('Denied') }
})

export const Custom = Template.bind({})
Custom.args = {
  showCamera: true,
  debug: false,
  capture: false,
  roi: {
    areaRadius: 0,
    areaStroke: 5,
    areaColor: '#d1ff00'
  },
  captureAmount: 3,
  mode: 'face',
  base64: true,
  blob: false,
  facingMode: 'user'
}
