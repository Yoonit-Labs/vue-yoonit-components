import { shallowMount } from '@vue/test-utils'
import ThemeProvider from '@/components/bosons/ThemeProvider/ThemeProvider.vue'

const classBlock = 'theme-provider'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(ThemeProvider, {
    slots: { default: SlotText }
  })
}

describe('ThemeProvider Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.theme-provider').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('composition', () => {
      it('Has a valid default value', () => {
        expect(ThemeProvider.props.composition.default).toBe('default')
      })
      it('Includes data composition', async () => {
        await wrapper.setProps({ composition: 'blue' })
        expect(wrapper.find(`.${classBlock}`).attributes('data-composition')).toEqual('blue')
      })
    })
    describe('theme', () => {
      it('Has a valid default value', () => {
        expect(ThemeProvider.props.theme.default).toBe('default')
      })
      it('Includes data composition', async () => {
        await wrapper.setProps({ theme: 'dark' })
        expect(wrapper.find(`.${classBlock}`).attributes('data-theme')).toEqual('dark')
      })
    })
  }) // describe Props
})
