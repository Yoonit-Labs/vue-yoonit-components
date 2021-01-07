import { shallowMount } from '@vue/test-utils'
import YooWarning from '@/components/atoms/YooWarning/YooWarning.vue'
import PropsConfig from '@/components/atoms/YooWarning/Props.config'

const classBlock = 'warning'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooWarning, {
    slots: { default: SlotText }
  })
}

describe('YooWarning Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.warning__icon').exists()).toBe(true)
    expect(wrapper.find('.warning__body').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('variation', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.variation.options.includes(YooWarning.props.variation.default)).toBe(true)
      })
      PropsConfig.variation.options.forEach(variation => {
        it(`Includes variation class: .${classBlock}--${variation}`, async () => {
          await wrapper.setProps({ variation })
          expect(wrapper.find(`.${classBlock}--${variation}`).exists()).toBe(true)
        })
      })
    })

    describe('iconStyle', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconStyle.options.includes(YooWarning.props.iconStyle.default)).toBe(true)
      })
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        it(`Includes iconStyle class: .${iconStyle === 'solid' ? 'fas' : 'far'}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconStyle })
          expect(wrapper.find('.yoo-warning__icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
        })
      })
    })
  }) // describe Props
})
