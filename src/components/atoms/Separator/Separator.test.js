import { shallowMount } from '@vue/test-utils'
import YooSeparator from '@/components/atoms/Separator/Separator.vue'
import PropsConfig from '@/components/atoms/Separator/Separator.config'

const classBlock = 'yoo-separator'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooSeparator, {
    slots: { default: SlotText }
  })
}

describe('YooSeparator Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-separator').exists()).toBe(true)
    expect(wrapper.find('.yoo-separator__label').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooSeparator.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes variation class: .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('fontSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fontSize.options.includes(YooSeparator.props.fontSize.default)).toBe(true)
      })
      PropsConfig.fontSize.options.forEach(fontSize => {
        it(`Includes variation class: .${classBlock}__font--${fontSize}`, async () => {
          await wrapper.setProps({ fontSize })
          expect(wrapper.find(`.${classBlock}__font--${fontSize}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
