import { mount } from '@vue/test-utils'
import YooSegmentedBar from '@/components/molecules/SegmentedBar/SegmentedBar.vue'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooSegmentedBar, {
    slots: { default: SlotText },
    propsData: {
      list: [
        { title: 'First' },
        { title: 'Second' }
      ]
    },
    data: () => ({
      selectedIndex: 1
    })
  })
}

describe('YooSegmentedBar Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-segmented-bar')).toBe(true)
    expect(wrapper.find('.yoo-segmented-bar__item').exists()).toBe(true)
    expect(wrapper.find('button.yoo-btn').exists()).toBe(true)
  })

  describe('Events', () => {
    describe('onSelectedIndexChange', () => {
      it('Emits onSelectedIndexChange Event', async () => {
        wrapper.find('button.yoo-btn').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClick')
      })
    })
  }) // describe Events
})
