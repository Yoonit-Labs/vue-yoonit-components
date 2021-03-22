import { mount } from '@vue/test-utils'
import YooListItem from '@/components/molecules/ListItem/ListItem.vue'
import PropsConfig from './ListItem.config'

const classBlock = 'yoo-list-item'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooListItem, {
    slots: { default: SlotText },
    propsData: {
      title: 'Default Title',
      subtitle: 'Default Subtitle'
    }
  })
}

describe('YooListItem Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-list-item')).toBe(true)
    expect(wrapper.find('.yoo-list-item__title').exists()).toBe(true)
    expect(wrapper.find('.yoo-list-item__subtitle').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('actionable', () => {
      it('Has a valid default value', () => {
        expect(YooListItem.props.actionable.default).toBe(false)
      })
      it('Is actionable', async () => {
        await wrapper.setProps({ actionable: true })
        expect(wrapper.find('.yoo-btn').exists()).toBe(true)
      })
      it('Is not actionable', async () => {
        await wrapper.setProps({ actionable: false })
        expect(wrapper.find('.yoo-btn').exists()).toBe(false)
      })
    })

    describe('Test slot', () => {
      it('Without slot', () => {
        const wrapper = mount(YooListItem, {
          propsData: {
            title: 'Default Title',
            subtitle: 'Default Subtitle'
          }
        })

        expect(wrapper.find('.yoo-grid-layout').attributes().style).toBe('grid-template-columns: 1fr; grid-template-rows: auto;')
      })

      it('With a slot named control', () => {
        const wrapper = mount(YooListItem, {
          slots: {
            control: '<p>19%</p>'
          },
          propsData: {
            title: 'Default Title',
            subtitle: 'Default Subtitle'
          }
        })

        expect(wrapper.find('.yoo-grid-layout').attributes().style).toBe('grid-template-columns: 1fr auto; grid-template-rows: auto;')
      })
    })

    describe('actionableType', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.actionableType.options.includes(YooListItem.props.actionableType.default)).toBe(true)
      })
      it('Has a button', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button' })
        expect(wrapper.find('.yoo-btn').exists()).toBe(true)
      })
      it('Has a check button', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'check' })
        expect(wrapper.find('.yoo-checkbox').exists()).toBe(true)
      })
    })
    describe('actionableActive', () => {
      it('Has a valid default value', () => {
        expect(YooListItem.props.actionableActive.default).toBe(false)
      })
      it('Has a checkButton is active', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'check', actionableActive: true })
        expect(wrapper.find('.yoo-checkbox__check--active').exists()).toBe(true)
      })
    })
    describe('separator', () => {
      it('Has a valid default value', () => {
        expect(YooListItem.props.separator.default).toBe(false)
      })
      it(`Includes separator class: .${classBlock}--separated`, async () => {
        await wrapper.setProps({ separator: true })
        expect(wrapper.find(`.${classBlock}--separated`).exists()).toBe(true)
      })
      it(`Does not includes separator class: .${classBlock}--separated`, async () => {
        await wrapper.setProps({ separator: false })
        expect(wrapper.find(`.${classBlock}--separated`).exists()).toBe(false)
      })
    })
    describe('borderLeft', () => {
      it('Has a valid default value', () => {
        expect(YooListItem.props.borderLeft.default).toBe(false)
      })
      it(`Does not includes borderLeft class: .${classBlock}--border-left`, async () => {
        await wrapper.setProps({ borderLeft: true })
        expect(wrapper.find(`.${classBlock}--border-left`).exists()).toBe(true)
      })
    })
    describe('borderLeft', () => {
      it('Has a valid default value', () => {
        expect(YooListItem.props.borderLeft.default).toBe(false)
      })
      it(`Does not includes borderLeft class: .${classBlock}--border-left`, async () => {
        await wrapper.setProps({ borderLeft: true })
        expect(wrapper.find(`.${classBlock}--border-left`).exists()).toBe(true)
      })
    })
    describe('borderFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.borderFill.options.includes(YooListItem.props.borderFill.default)).toBe(true)
      })
      PropsConfig.borderFill.options.forEach(borderFill => {
        it(`Includes borderFill class: .${classBlock}__fill--border-${borderFill}`, async () => {
          await wrapper.setProps({ borderFill })
          expect(wrapper.find(`.${classBlock}__fill--border-${borderFill}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button' })
        await wrapper.find('.yoo__container--button').vm.$emit('doClick')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  })

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'check' })
        await wrapper.find('.yoo-checkbox').vm.$emit('response')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  }) // describe Events
})
