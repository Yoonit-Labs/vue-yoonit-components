import { shallowMount } from '@vue/test-utils'
import YooNotify from '@/components/molecules/YooNotify/YooNotify.vue'
import PropsConfig from './YooNotify.config'
import YooButton from '@/components/atoms/Button/Button.vue'
import YooIndicator from '@/components/quarks/YooIndicator/YooIndicator.vue'

const classBlock = 'yoo-notify'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooNotify, {
    slots: { default: SlotText }
  })
}

describe('YooNotify Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-notify')).toBe(true)
    expect(wrapper.find('.yoo-notify__text').exists()).toBe(true)
    // Test check YooIndicator
    wrapper = shallowMount(YooIndicator)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.yoo-indicator').exists()).toBe(true)
    // Test check YooButton
    wrapper = shallowMount(YooButton)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.yoo-btn').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('notifyFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.notifyFill.options.includes(YooNotify.props.notifyFill.default)).toBe(true)
      })
      PropsConfig.notifyFill.options.forEach(notifyFill => {
        it(`Includes notifyFill class: .${classBlock}--${notifyFill}`, async () => {
          await wrapper.setProps({ notifyFill })
          expect(wrapper.find(`.${classBlock}--${notifyFill}`).exists()).toBe(true)
        })
      })
    })
    describe('notifyTextColor', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.notifyTextColor.options.includes(YooNotify.props.notifyTextColor.default)).toBe(true)
      })
      PropsConfig.notifyTextColor.options.forEach(notifyTextColor => {
        it(`Includes notifyTextColor class: .${classBlock}__text--${notifyTextColor}`, async () => {
          await wrapper.setProps({ notifyTextColor })
          expect(wrapper.find(`.${classBlock}__text--${notifyTextColor}`).exists()).toBe(true)
        })
      })
    })
    describe('notifyTextSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.notifyTextSize.options.includes(YooNotify.props.notifyTextSize.default)).toBe(true)
      })
      PropsConfig.notifyTextSize.options.forEach(notifyTextSize => {
        it(`Includes notifyTextSize class: .${classBlock}__text--${notifyTextSize}`, async () => {
          await wrapper.setProps({ notifyTextSize })
          expect(wrapper.find(`.${classBlock}__text--${notifyTextSize}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
