import { shallowMount } from '@vue/test-utils'
import YooInfiniteScroll from '@/components/bosons/InfiniteScroll/InfiniteScroll.vue'
import PropsConfig from '@/components/bosons/InfiniteScroll/InfiniteScroll.config'

const classBlock = 'yoo-infinite'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooInfiniteScroll, {
    slots: { default: SlotText },
    data: () => ({
      showLoading: true
    })
  })
}

describe('YooInfiniteScroll Component', () => {
  let wrapper
  beforeEach(() => {
    const observe = jest.fn()

    window.IntersectionObserver = jest.fn(function () {
      console.log(this.observe)
      this.observe = observe
    })
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-infinite').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('loadingFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.loadingFill.options.includes(YooInfiniteScroll.props.loadingFill.default)).toBe(true)
      })
      PropsConfig.loadingFill.options.forEach(loadingFill => {
        it(`Includes loadingFill class: .${classBlock}__loader--${loadingFill}`, async () => {
          await wrapper.setProps({ loadingFill })
          expect(wrapper.find(`.${classBlock}__loader--${loadingFill}`).exists()).toBe(true)
        })
      })
    })
    describe('loadingSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.loadingSize.options.includes(YooInfiniteScroll.props.loadingSize.default)).toBe(true)
      })
      PropsConfig.loadingSize.options.forEach(loadingSize => {
        it(`Includes loadingSize class: .${classBlock}__loader--${loadingSize}`, async () => {
          await wrapper.setProps({ loadingSize })
          expect(wrapper.find(`.${classBlock}__loader--${loadingSize}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Check emit method', () => {
      it('Emitted true intersecting', async () => {
        wrapper.vm.callbackObserver([{ isIntersecting: true }])
        expect(wrapper.emitted('intersecting')).toEqual([[true]])
      })
    })
    describe('Check emit method', () => {
      it('Emitted false intersecting', async () => {
        wrapper.vm.callbackObserver([{ isIntersecting: false }])
        expect(wrapper.emitted('intersecting')).toEqual(undefined)
      })
    })
  }) // describe Events
})
