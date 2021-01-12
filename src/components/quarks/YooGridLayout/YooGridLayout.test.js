import { shallowMount } from '@vue/test-utils'
import YooGridLayout from '@/components/quarks/YooGridLayout/YooGridLayout.vue'
import PropsConfig from '@/components/quarks/YooGridLayout/YooGridLayout.config'

const classBlock = 'yoo-grid-layout'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooGridLayout, {
    slots: { default: SlotText },
    propsData: {
      cols: 'auto',
      rows: 'auto'
    }
  })
}

describe('YooGridLayout Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-grid-layout').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('horizontalAlign', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.horizontalAlign.options.includes(YooGridLayout.props.horizontalAlign.default)).toBe(true)
      })
      PropsConfig.horizontalAlign.options.forEach(horizontalAlign => {
        it(`Includes horizontalAlign class: .${classBlock}--h-${horizontalAlign}`, async () => {
          await wrapper.setProps({ horizontalAlign })
          expect(wrapper.find(`.${classBlock}--h-${horizontalAlign}`).exists()).toBe(true)
        })
      })
    })
    describe('verticalAlign', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.verticalAlign.options.includes(YooGridLayout.props.verticalAlign.default)).toBe(true)
      })
      PropsConfig.verticalAlign.options.forEach(verticalAlign => {
        it(`Includes verticalAlign class: .${classBlock}--h-${verticalAlign}`, async () => {
          await wrapper.setProps({ verticalAlign })
          expect(wrapper.find(`.${classBlock}--v-${verticalAlign}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
