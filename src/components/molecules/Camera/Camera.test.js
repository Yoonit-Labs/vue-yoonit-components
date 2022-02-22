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
import YooCamera from '@/components/molecules/Camera/Camera.vue'
import PropsConfig from './Camera.config'

beforeAll(() => {
  window.MediaStream = jest.fn().mockImplementation(() => ({
    addTrack: jest.fn()
  }))
  window.HTMLMediaElement.prototype.play = jest.fn()
})

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

    it('Should emit finish event', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.$emit('finish')

      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().finish).toBeTruthy()
    })

    it('Should emit permissionDenied event', async () => {
      const wrapper = mountDefaultYooCamera(mount)

      wrapper.vm.$emit('permissionDenied')

      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().permissionDenied).toBeTruthy()
    })

    it('Should return correct facing mode', () => {
      const localThis = { facingMode: PropsConfig.facingMode.default }

      expect(YooCamera.computed.takeStream.call(localThis).video.facingMode).toBe(PropsConfig.facingMode.default)
    })
  })
})
