import { shallowMount } from '@vue/test-utils'
import YooSeparator from '@/components/atoms/Separator/Separator.vue'
import PropsConfig from '@/components/atoms/Separator/Separator.config'

const classBlock = 'separator'
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
    expect(wrapper.find('.separator').exists()).toBe(true)
    expect(wrapper.find('.separator__label').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooSeparator.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes variation class: .${classBlock}--fill-${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}--fill-${fill}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
