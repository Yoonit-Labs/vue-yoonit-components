import { shallowMount } from '@vue/test-utils'
import YooAnimation from '@/components/atoms/YooAnimation/YooAnimation.vue'

const classBlock = 'yoo-animation'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooAnimation, {
    slots: { default: SlotText }
  })
}

describe('YooAnimation Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-animation').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('active', () => {
      it('Has a valid default value', () => {
        expect(YooAnimation.props.active.default).toBe(false)
      })
    })
  })
})
