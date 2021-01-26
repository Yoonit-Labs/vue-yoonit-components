import { mount } from '@vue/test-utils'
import YooPostCard from '@/components/molecules/PostCard/PostCard.vue'
import PropsConfig from './PostCard.config'

const classBlock = 'yoo-post-card'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooPostCard, {
    slots: { default: SlotText },
    propsData: {
      showIndicator: true
    }
  })
}

describe('YooPostCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes('yoo-post-card')).toBe(true)
    expect(wrapper.find('.yoo-post-card__icon').exists()).toBe(true)
    expect(wrapper.find('.yoo-indicator').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooPostCard.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}--fill-${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}--fill-${fill}`).exists()).toBe(true)
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
