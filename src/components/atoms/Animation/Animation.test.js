import { shallowMount } from '@vue/test-utils'
import YooAnimation from '@/components/atoms/Animation/Animation.vue'
import * as animationData from '@/assets/animations/loading.json'

const classBlock = 'yoo-animation'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooAnimation, {
    slots: { default: SlotText },
    propsData: { options: { animationData: animationData.default } }
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
    expect(wrapper.find(`.${classBlock}`).exists()).toBe(true)
  })
})
