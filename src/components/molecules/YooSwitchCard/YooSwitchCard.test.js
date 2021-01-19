import { mount } from '@vue/test-utils'
import YooSwitchCard from './YooSwitchCard.vue'
import PropsConfig from './YooSwitchCard.config'
import YooCheckButton from '@/components/atoms/YooCheckButton/YooCheckButton.vue'

const classBlock = 'yoo-switch-card'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooSwitchCard, {
    slots: { default: SlotText },
    propsData: {
      text: SlotText
    }
  })
}

describe('YooSwitchCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    await wrapper.findComponent(YooCheckButton).setData({ timeId: 'custom-time-id' })
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo-switch-card')).toBe(true)
    expect(wrapper.find('.yoo-switch-card__checkbox').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('checked', () => {
      it('Has a valid default value', () => {
        expect(YooSwitchCard.props.checked.default).toBe(false)
      })
      it(`Includes checked class: .${classBlock}--active when checked`, async () => {
        await wrapper.setProps({ checked: true })
        expect(wrapper.find(`.${classBlock}--active`).exists()).toBe(true)
      })
      it(`Does not include checked class: .${classBlock}--active when not checked`, async () => {
        await wrapper.setProps({ checked: false })
        expect(wrapper.find(`.${classBlock}--active`).exists()).toBe(false)
      })
    })

    describe('textPosition', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textPosition.options.includes(YooSwitchCard.props.textPosition.default)).toBe(true)
      })
      PropsConfig.textPosition.options.forEach(textPosition => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ textPosition })
          expect(wrapper.find(`.yoo-check--text-${textPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooSwitchCard.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.yoo-check--${size}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('doCheck', () => {
      it('Emits doCheck Event', async () => {
        await wrapper.find(`.${classBlock}__checkbox`).vm.$emit('response')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  }) // describe Events
})
