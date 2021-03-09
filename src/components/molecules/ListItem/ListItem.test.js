import { shallowMount } from '@vue/test-utils'
import YooListItem from '@/components/molecules/ListItem/ListItem.vue'
import PropsConfig from './ListItem.config'

const classBlock = 'yoo-list-item'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooListItem, {
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
    describe('borderLeft', () => {
      it('Has a valid default value', () => {
        expect(YooListItem.props.borderLeft.default).toBe(false)
      })
      it(`Does not includes borderLeft class: .${classBlock}__style--border-left`, async () => {
        await wrapper.setProps({ borderLeft: true })
        expect(wrapper.find(`.${classBlock}__style--border-left`).exists()).toBe(true)
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
})
