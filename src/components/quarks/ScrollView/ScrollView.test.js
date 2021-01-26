import { shallowMount } from '@vue/test-utils'
import YooScrollView from '@/components/quarks/ScrollView/ScrollView.vue'
import PropsConfig from '@/components/quarks/ScrollView/ScrollView.config'

const classBlock = 'yoo-scroll-view'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooScrollView, {
    slots: { default: SlotText }
  })
}

describe('YooIndicator Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-scroll-view').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('orientation', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.orientation.options.includes(YooScrollView.props.orientation.default)).toBe(true)
      })
      PropsConfig.orientation.options.forEach(orientation => {
        it(`Includes orientation class: .${classBlock}--${orientation}`, async () => {
          await wrapper.setProps({ orientation })
          expect(wrapper.find(`.${classBlock}--${orientation}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
