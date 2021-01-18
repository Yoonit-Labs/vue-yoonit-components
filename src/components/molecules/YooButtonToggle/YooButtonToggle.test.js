import { shallowMount } from '@vue/test-utils'
import YooButtonToggle from '@/components/molecules/YooButtonToggle/YooButtonToggle.vue'
import YooButton from '@/components/atoms/Button/Button.vue'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooButtonToggle, {
    slots: { default: SlotText },
    propsData: {
      options: ['Yoo Button Toggle', 'Yoo Button Toggle 1']
    }
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
    // Test check YooButton
    wrapper = shallowMount(YooButton)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.yoo-btn').exists()).toBe(true)
  })

  describe('Events', () => {
    describe('doEmitChoice', () => {
      it('Emits doEmitChoice Event', async () => {
        // Test check YooButton
        wrapper = shallowMount(YooButton, { propsData: { fill: 'primary' } })
        await wrapper.vm.$nextTick()
        wrapper.find('.yoo-btn').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClick')
      })
    })
  }) // describe Events
})
