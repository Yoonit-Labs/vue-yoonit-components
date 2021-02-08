import { shallowMount } from '@vue/test-utils'
import YooDropdown from '@/components/atoms/Dropdown/Dropdown.vue'
import PropsConfig from '@/components/atoms/Dropdown/Dropdown.config'

const classBlock = 'yoo-dropdown'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooDropdown, {
    slots: { default: SlotText },
    propsData: { options: [{ label: 'YooDropDown 1', value: '1' }, { label: 'YooDropDown 2', value: '2' }]}
  })
}

describe('YooDropdown Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-dropdown').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooDropdown.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it(`Includes variation class: .${classBlock}--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}--${size}`).exists()).toBe(true)
        })
      })
    })
  })

  describe('Events', () => {
    describe('Click', () => {
      it('Options are loaded by clicking on select', async () => {
        await wrapper.find('.yoo-dropdown__select').trigger('click')
        expect(wrapper.find('.yoo-dropdown__options').exists()).toBe(true)
      })
      it('Emits Click Event', async () => {
        await wrapper.find('.yoo-dropdown__select').trigger('click')
        expect(wrapper.find('.yoo-dropdown__options').exists()).toBe(true)
        await wrapper.find('.yoo-dropdown__options .option').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClick')
      })
    })
  }) // describe Events
})
