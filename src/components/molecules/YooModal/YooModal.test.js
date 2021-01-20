import { shallowMount } from '@vue/test-utils'
import YooModal from '@/components/molecules/YooModal/YooModal.vue'

const mountYooModal = () => {
  return shallowMount(YooModal)
}

describe('YooModal Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountYooModal()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the component HTML', () => {
    expect(wrapper.find('.yoo-modal').exists()).toBe(true)
  })

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        wrapper.find('.backdrop').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClose')
      })
    })
  })
})
