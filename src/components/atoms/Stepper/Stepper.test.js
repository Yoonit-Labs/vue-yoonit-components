import { shallowMount } from '@vue/test-utils'
import YooStepper from '@/components/atoms/Stepper/Stepper.vue'
import PropsConfig from '@/components/atoms/Stepper/Stepper.config'

const classBlock = 'yoo-stepper'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooStepper, {
    slots: { default: SlotText }
  })
}

describe('YooStepper Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-stepper').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('counterType', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.counterType.options.includes(YooStepper.props.counterType.default)).toBe(true)
      })
      PropsConfig.counterType.options.forEach(counterType => {
        it(`Includes variation class: .${classBlock}__${counterType}`, async () => {
          await wrapper.setProps({ counterType })
          expect(wrapper.find(`.${classBlock}__${counterType}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
