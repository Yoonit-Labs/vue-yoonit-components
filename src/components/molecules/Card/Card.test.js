import { shallowMount } from '@vue/test-utils'
import YooCard from '@/components/molecules/Card/Card.vue'
import PropsConfig from './Card.config'

const classBlock = 'yoo-card'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooCard, {
    slots: { default: SlotText },
    propsData: {
      title: 'Default Title',
      subtitle: 'Default Subtitle'
    }
  })
}

describe('YooCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-card')).toBe(true)
    expect(wrapper.find('.yoo-card__title').exists()).toBe(true)
    expect(wrapper.find('.yoo-card__subtitle').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('borderLeft', () => {
      it('Has a valid default value', () => {
        expect(YooCard.props.borderLeft.default).toBe(true)
      })

      it(`Includes borderLeft class: .${classBlock}__style--border-left`, async () => {
        expect(wrapper.find(`.${classBlock}__style--border-left`).exists()).toBe(true)
      })

      it(`Does not includes borderLeft class: .${classBlock}__style--border-left`, async () => {
        await wrapper.setProps({ borderLeft: false })
        expect(wrapper.find(`.${classBlock}__style--border-left`).exists()).toBe(false)
      })
    })

    describe('borderFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.borderFill.options.includes(YooCard.props.borderFill.default)).toBe(true)
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
