import { mount } from '@vue/test-utils'
import YooRateButton from '@/components/molecules/RateButton/RateButton.vue'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooRateButton, {
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
    },
    data: () => ({
      selectedIn: '1'
    })
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

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-rate')).toBe(true)
    expect(wrapper.find('button.yoo-btn').exists()).toBe(true)
  })

  describe('Events', () => {
    describe('doActive', () => {
      it('Emits doActive Event', async () => {
        wrapper.find('button.yoo-btn').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('doClick')
      })
    })
  }) // describe Events
})