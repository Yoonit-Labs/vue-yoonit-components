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
import YooSwitch from '@/components/atoms/Switch/Switch.vue'
import PropsConfig from './Switch.config'
const classBlock = 'yoo-switch'
const SlotText = 'Default Slot Text'
const mountComponent = () => {
  return shallowMount(YooSwitch, {
    slots: { default: SlotText }
  })
}
describe('YooSwitch Component', () => {
  let wrapper
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    wrapper = mountComponent()
    wrapper.vm.$nextTick()
  })
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })
  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo-switch-container')).toBe(true)
    expect(wrapper.find('input.yoo-switch').exists()).toBe(true)
  })
  describe('Props', () => {
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooSwitch.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it(`Includes size class: .${classBlock}--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}--${size}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
  describe('Events', () => {
    describe('doCheck', () => {
      it('Emits doCheck Event', async () => {
        wrapper.find('.yoo-switch').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
    describe('Watchers - initialValue', () => {
      it('Check Watch initialValue', async () => {
        await wrapper.vm.$options.watch.initialValue.call(wrapper.vm, true)
        expect(wrapper.vm.checkedField).toBe(true)
      })
    })
  }) // describe Events
})
