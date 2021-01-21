import { mount } from '@vue/test-utils'
import yooPagination from './YooPagination.vue'
import PropsConfig from './YooPagination.config'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(yooPagination, {
    slots: { default: SlotText },
    propsData: {
      totalPages: 5,
      currentPage: 1
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
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.find('.button__back').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
      })
    })

    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.find('.button__last').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
      })
    })

    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.find('.button__next').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
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
