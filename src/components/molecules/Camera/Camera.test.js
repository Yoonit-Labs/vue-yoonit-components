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

import { mount, shallowMount } from '@vue/test-utils'
import YooCamera from '@/components/molecules/Card/Card.vue'
import PropsConfig from './Camera.config'

const mountDefaultYooCamera = (mountType) => {
  return mountType(YooCamera, {
    propsData: {
      showCamera: true,
      debug: false,
      capture: true,
      roi: {
        areaRadius: 0,
        areaStroke: 5,
        areaColor: '#d1ff00'
      },
      captureAmount: 3,
      mode: PropsConfig.mode.default,
      base64: true,
      blob: false,
      facingMode: PropsConfig.facingMode.default
    }
  })
}

describe('Testing YooCamera', () => {
  describe('Testing render & style', () => {
    it('Should match snapshot', () => {
      const wrapper = mountDefaultYooCamera(shallowMount)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Component Logic', () => {
    it('Should emit capture event', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.$emit('frame')

      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().frame).toBeTruthy()
    })
  })
})
