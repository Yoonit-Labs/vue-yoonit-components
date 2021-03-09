import { mount } from '@vue/test-utils'
import YooCard from '@/components/molecules/Card/Card.vue'
import PropsConfig from './Card.config'

const classBlock = 'yoo-card'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooCard, {
    slots: { default: SlotText },
    propsData: {
      showIndicator: true
    }
  })
}

describe('YooCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-card')).toBe(true)
    expect(wrapper.find('.yoo-card__icon').exists()).toBe(true)
    expect(wrapper.find('.yoo-indicator').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooCard.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('doClick', () => {
      it('Emits doClick Event', async () => {
        wrapper.find(`.${classBlock}`).trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClick')
      })
    })
  }) // describe Events
})
