import { shallowMount } from '@vue/test-utils'
import YooRateButton from '@/components/molecules/YooRateButton/YooRateButton.vue'

const classBlock = 'yoo-rate'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooRateButton, {
    slots: { default: SlotText },
    propsData: {
      rate: [
        {
          text: '1',
          value: 1
        },
        {
          text: '2',
          value: 2
        },
        {
          text: '3',
          value: 3
        }
      ]
    }
  })
}

describe('YooRateButton Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo-rate')).toBe(true)
    expect(wrapper.find('button.yoo-btn').exists()).toBe(true)
  })

  describe('Events', () => {
    describe('doCheck', () => {
      it('Emits doCheck Event', async () => {
        wrapper.find('.yoo-rate').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  }) // describe Events
})
