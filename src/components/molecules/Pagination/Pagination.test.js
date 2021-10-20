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
import yooPagination from './Pagination.vue'
import PropsConfig from './Pagination.config'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(yooPagination, {
    slots: { default: SlotText },
    propsData: {
      totalPages: 5,
      currentPage: 0
    }
  })
}

describe('YooPagination Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo-pagination')).toBe(true)
    expect(wrapper.find('.yoo-stepper').exists()).toBe(true)
    expect(wrapper.find('.yoo__container--button').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('disableFirstAction', () => {
      it('Include disableFirstAction class: .yoo-btn--disabled', async () => {
        await wrapper.setProps({ disableFirstAction: true })
        expect(wrapper.find('.yoo-btn--disabled').exists()).toBe(true)
      })
    })
    describe('variationButtonNext', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.variationButtonNext.options.includes(yooPagination.props.variationButtonNext.default)).toBe(true)
      })
      PropsConfig.variationButtonNext.options.forEach(variation => {
        it('Include variation class: ', async () => {
          await wrapper.setProps({ variation })
          expect(wrapper.find(`.yoo-btn--${variation}`).exists()).toBe(true)
        })
      })
    })

    describe('counterType', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.counterType.options.includes(yooPagination.props.counterType.default)).toBe(true)
      })
      PropsConfig.counterType.options.forEach(counterType => {
        it(`Include counterType class: .yoo-stepper__${counterType}`, async () => {
          await wrapper.setProps({ counterType })
          expect(wrapper.find(`.yoo-stepper__${counterType}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click in Back Button', () => {
      it('Emits Click Back Button Event - Check First', async () => {
        await wrapper.find('.button__back').vm.$emit('onClick')
        expect(wrapper.emitted().tapPage[0]).toEqual(['first'])
      })
      it('Emits Click Back Button Event - Check Back', async () => {
        await wrapper.setProps({ currentPage: 2 })
        await wrapper.find('.button__back').vm.$emit('onClick')
        expect(wrapper.emitted().tapPage[0]).toEqual(['back'])
      })
    })

    describe('Click in Last Button', () => {
      it('Emits Click last Button Event', async () => {
        await wrapper.find('.button__last').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
      })
    })

    describe('Click in Next Button', () => {
      it('Emits Click Next Button Event - Check Next step', async () => {
        await wrapper.find('.button__next').vm.$emit('onClick')
        expect(wrapper.emitted().tapPage[0]).toEqual(['next'])
      })
      it('Emits Click Next Button Event - Check Last Step', async () => {
        await wrapper.setProps({ currentPage: 4 })
        await wrapper.find('.button__next').vm.$emit('onClick')
        expect(wrapper.emitted().tapPage[0]).toEqual(['last'])
      })
    })

    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.find('.button__next--grow').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
      })
    })
  }) // describe Events
})
