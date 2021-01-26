import { shallowMount } from '@vue/test-utils'
import YooIndicator from '@/components/quarks/Indicator/Indicator.vue'
import PropsConfig from '@/components/quarks/Indicator/Indicator.config'

const classBlock = 'yoo-indicator'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooIndicator, {
    slots: { default: SlotText }
  })
}

describe('YooIndicator Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-indicator').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooIndicator.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}--${fill}`).exists()).toBe(true)
        })
      })
    })
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooIndicator.props.size.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(size => {
        it(`Includes size class: .${classBlock}--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}--${size}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
