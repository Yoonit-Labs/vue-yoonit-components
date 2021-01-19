import { shallowMount } from '@vue/test-utils'
import YooSwitch from '@/components/molecules/YooSwitch/YooSwitch.vue'
import PropsConfig from './YooSwitch.config'

const classBlock = 'yoo-switch'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooSwitch, {
    slots: { default: SlotText }
  })
}

describe('YooSwitch Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    await wrapper.setData({ timeId: 'custom-time-id' })
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo-switch-container')).toBe(true)
    expect(wrapper.find('input.yoo-switch').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooSwitch.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it(`Includes size class: .${classBlock}--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}--${size}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
  })
