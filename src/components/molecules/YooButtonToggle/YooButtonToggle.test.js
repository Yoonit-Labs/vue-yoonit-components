import { mount } from '@vue/test-utils'
import YooButtonToggle from '@/components/molecules/YooButtonToggle/YooButtonToggle.vue'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooButtonToggle, {
    slots: { default: SlotText },
    propsData: {
      options: ['Yoo Button Toggle', 'Yoo Button Toggle 1']
    },
    data: () => ({
      selectedIndex: 0
    })
  })
}

describe('YooButtonToggle Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.find('.yoo-button-toggle').exists()).toBe(true)
    expect(wrapper.find('.yoo-button-toggle__container').exists()).toBe(true)
    expect(wrapper.find('.yoo-btn').exists()).toBe(true)
  })

  describe('Events', () => {
    describe('doEmitChoice', () => {
      it('Emits doEmitChoice Event', async () => {
        wrapper.find('.yoo-btn').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('tapChoice')
      })
    })
  }) // describe Events
})
