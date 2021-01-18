import { shallowMount } from '@vue/test-utils'
import YooPostCard from '@/components/molecules/YooPostCard/YooPostCard.vue'
import YooIndicator from '@/components/quarks/YooIndicator/YooIndicator.vue'
import YooIcon from '@/components/atoms/YooIcon/YooIcon.vue'
import PropsConfig from './YooPostCard.config'

const classBlock = 'yoo-post-card'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooPostCard, { components: { YooIndicator } }, {
    slots: { default: SlotText }
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
    // Test check YooIndicator
    wrapper = shallowMount(YooIndicator)
    await wrapper.vm.$nextTick()
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
