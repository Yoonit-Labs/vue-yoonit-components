import { shallowMount } from '@vue/test-utils'
import YooCard from '@/components/molecules/YooCard/YooCard.vue'
import PropsConfig from './YooCard.config'

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
    describe('borderFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.borderFill.options.includes(YooCard.props.borderFill.default)).toBe(true)
      })
      PropsConfig.borderFill.options.forEach(borderFill => {
        it(`Includes borderFill class: .${classBlock}__item--border-fill-${borderFill}`, async () => {
          await wrapper.setProps({ borderFill })
          expect(wrapper.find(`.${classBlock}__item--border-fill-${borderFill}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
