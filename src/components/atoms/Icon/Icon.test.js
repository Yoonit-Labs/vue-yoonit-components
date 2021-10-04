import { shallowMount } from '@vue/test-utils'
import YooIcon from '@/components/atoms/Icon/Icon.vue'
import PropsConfig from '@/components/atoms/Icon/Icon.config'

const classBlock = 'yoo-icon'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooIcon, {
    slots: { default: SlotText }
  })
}

describe('YooIcon Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-icon').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('icon', () => {
      it('Has a valid default value', () => {
        expect(YooIcon.props.icon.default).toBe('')
      })
      it('Includes icon class: .fa-cog', async () => {
        await wrapper.setProps({ icon: 'cog' })
        expect(wrapper.find('.fa-cog').exists()).toBe(true)
      })
    })
    describe('iconStyle', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconStyle.options.includes(YooIcon.props.iconStyle.default)).toBe(true)
      })
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        it(`Includes iconStyle class: .${iconStyle === 'solid' ? 'fas' : 'far'}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconStyle })
          expect(wrapper.find('.yoo-icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
        })
      })
    })
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooIcon.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it(`Includes variation class: .${classBlock}__size--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}__size--${size}`).exists()).toBe(true)
        })
      })
    })
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooIcon.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes variation class: .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })
  })
})
