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

import { mount } from '@vue/test-utils'
import YooSelectButton from '@/components/molecules/SelectButton/SelectButton.vue'
const SlotText = 'Default Slot Text'
const mountComponent = () => {
  return mount(YooSelectButton, {
    slots: { default: SlotText },
    propsData: {
      rate: [
        {
          text: '1',
          value: 1
        },
        {
          text: '2',
          value: 2,
          active: true
        },
        {
          text: '3',
          value: 3
        }
      ]
    }
  })
}
describe('YooSelectButton Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })
  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-select')).toBe(true)
    expect(wrapper.find('button.yoo-btn').exists()).toBe(true)
  })
  describe('Props', () => {
    describe('multiple', () => {
      it('Has a valid default value', () => {
        expect(YooSelectButton.props.multiple.default).toBe(false)
      })
    })
  })
  describe('Events', () => {
    describe('doActive', () => {
      it('Emits doActive Event when multiple not active', async () => {
        wrapper.findAll('button.yoo-btn').at(2).trigger('click')
        wrapper.findAll('button.yoo-btn').at(0).trigger('click')
        expect(wrapper.emitted()).toHaveProperty('doClick')
        expect(wrapper.vm.selectedArray.length === 1)
      })
      it('Emits doActive Event when multiple active', async () => {
        await wrapper.setProps({ multiple: true })
        wrapper.findAll('button.yoo-btn').at(1).trigger('click')
        wrapper.findAll('button.yoo-btn').at(0).trigger('click')
        wrapper.findAll('button.yoo-btn').at(1).trigger('click')
        expect(wrapper.emitted()).toHaveProperty('doClick')
        expect(wrapper.vm.selectedArray.length === 1)
      })
    })
    describe('Watchers - rate', () => {
      let spy
      beforeEach(() => {
        spy = jest.spyOn(wrapper.vm, 'doSetItemsActive')
      })
      afterEach(() => {
        spy.mockClear()
      })
      it('Check Watch rate', async () => {
        await wrapper.vm.$options.watch.rate.handler.call(wrapper.vm)
        expect(spy).toBeCalled()
      })
    })
  }) // describe Events
})
