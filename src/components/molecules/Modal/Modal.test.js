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

import { shallowMount } from '@vue/test-utils'
import YooModal from '@/components/molecules/Modal/Modal.vue'
import PropsConfig from '@/components/molecules/Modal/Modal.config'

const classBlock = 'yoo-modal'

const mountYooModal = () => {
  return shallowMount(YooModal)
}

describe('YooModal Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountYooModal()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the component HTML', () => {
    expect(wrapper.find('.backdrop').exists()).toBe(true)
    expect(wrapper.find('.yoo-modal').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooModal.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('borderStyle', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.borderStyle.options.includes(YooModal.props.borderStyle.default)).toBe(true)
      })
      PropsConfig.borderStyle.options.forEach(borderStyle => {
        it(`Includes borderStyle class: .${classBlock}__border--${borderStyle}`, async () => {
          await wrapper.setProps({ borderStyle })
          expect(wrapper.find(`.${classBlock}__border--${borderStyle}`).exists()).toBe(true)
        })
      })
    })
  })

  describe('Events', () => {
    describe('Close Modal', () => {
      it('Emits Click Event', async () => {
        await wrapper.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClose')
      })
      it('doCloseModal function emits onClose', async () => {
        await wrapper.vm.doCloseModal()
        expect(wrapper.emitted()).toHaveProperty('onClose')
      })
      it('Click runs doCloseModal method', async () => {
        const logger = jest.spyOn(wrapper.vm, 'doCloseModal')
        await wrapper.trigger('click')
        expect(logger).toHaveBeenCalled()
      })
      it('Emits onClose on ESC keyup', async () => {
        var event = new KeyboardEvent('keyup', { which: 27 })
        window.dispatchEvent(event)
        expect(wrapper.emitted('onClose')).toBeTruthy()
      })
      it('Does not emit on other key codes', async () => {
        var event = new KeyboardEvent('keyup', { which: 13 })
        window.dispatchEvent(event)
        expect(wrapper.emitted('onClose')).toBeFalsy()
      })
      it('Does not emit after destroy component', async () => {
        var event = new KeyboardEvent('keyup', { which: 27 })
        wrapper.destroy()
        window.dispatchEvent(event)
        expect(wrapper.emitted('onClose')).toBeFalsy()
      })
    })
  })
})
