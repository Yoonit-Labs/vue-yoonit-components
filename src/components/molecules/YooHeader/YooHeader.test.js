import { shallowMount } from '@vue/test-utils'
import YooHeader from '@/components/molecules/YooHeader/YooHeader.vue'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooHeader, {
    slots: { default: SlotText }
  })
}

describe('YooHeader Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-header').exists()).toBe(true)
  })
})
