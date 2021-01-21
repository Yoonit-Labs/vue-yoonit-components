import { shallowMount } from '@vue/test-utils'
import YooButton from '@/components/atoms/YooButton/YooButton.vue'
import PropsConfig from '@/components/atoms/YooButton/YooButton.config'

const classBlock = 'yoo-btn'
const SlotText = 'Default Slot Text'

const mountButton = () => {
  return shallowMount(YooButton, {
    slots: { default: SlotText }
  })
}

describe('YooButton Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountButton()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo__container--button')).toBe(true)
    expect(wrapper.find('button.yoo-btn').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('variation', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.variation.options.includes(YooButton.props.variation.default)).toBe(true)
      })
      PropsConfig.variation.options.forEach(variation => {
        it(`Includes variation class: .${classBlock}--${variation}`, async () => {
          await wrapper.setProps({ variation })
          expect(wrapper.find(`.${classBlock}--${variation}`).exists()).toBe(true)
        })
      })
    })

    describe('buttonSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.buttonSize.options.includes(YooButton.props.buttonSize.default)).toBe(true)
      })
      PropsConfig.buttonSize.options.forEach(buttonSize => {
        it(`Includes buttonSize class: .${classBlock}--${buttonSize}`, async () => {
          await wrapper.setProps({ buttonSize })
          expect(wrapper.find(`.${classBlock}--${buttonSize}`).exists()).toBe(true)
        })
      })
    })

    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooButton.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('disabled', () => {
      it('Has a valid default value', () => {
        expect(YooButton.props.disabled.default).toBe(false)
      })
      it(`Includes disabled class: .${classBlock}--disabled when disabled`, async () => {
        await wrapper.setProps({ disabled: true })
        expect(wrapper.find(`.${classBlock}--disabled`).exists()).toBe(true)
      })
      it(`Does not include disabled class: .${classBlock}--disabled when not disabled`, async () => {
        await wrapper.setProps({ disabled: false })
        expect(wrapper.find(`.${classBlock}--disabled`).exists()).toBe(false)
      })
    })

    describe('active', () => {
      it('Has a valid default value', () => {
        expect(YooButton.props.active.default).toBe(false)
      })
      it(`Includes active class: .${classBlock}--active`, async () => {
        await wrapper.setProps({ active: true, disabled: false })
        expect(wrapper.find(`.${classBlock}--active`).exists()).toBe(true)
      })
    })

    describe('hover', () => {
      it('Has a valid default value', () => {
        expect(YooButton.props.hover.default).toBe(false)
      })
      it(`Includes hover class: .${classBlock}--hover`, async () => {
        await wrapper.setProps({ hover: true, disabled: false })
        expect(wrapper.find(`.${classBlock}--hover`).exists()).toBe(true)
      })
    })

    describe('iconPosition', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconPosition.options.includes(YooButton.props.iconPosition.default)).toBe(true)
      })
      PropsConfig.iconPosition.options.forEach(iconPosition => {
        it(`Includes iconPosition class: .${classBlock}__icon--${iconPosition}`, async () => {
          await wrapper.setProps({ text: 'default text', icon: 'icon-value', iconPosition: iconPosition })
          expect(wrapper.find(`.${classBlock}__icon--${iconPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('iconSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconSize.options.includes(YooButton.props.iconSize.default)).toBe(true)
      })
      PropsConfig.iconSize.options.forEach(iconSize => {
        it(`Includes iconSize class: .${classBlock}__icon--${iconSize}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconSize })
          expect(wrapper.find(`.${classBlock}__icon--${iconSize}`).exists()).toBe(true)
        })
      })
    })

    describe('iconStyle', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconStyle.options.includes(YooButton.props.iconStyle.default)).toBe(true)
      })
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        it(`Includes iconStyle class: .${iconStyle === 'solid' ? 'fas' : 'far'}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconStyle })
          expect(wrapper.find('.yoo-btn__icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
        })
      })
    })

    describe('iconCustomColor', () => {
      it('Includes iconCustomColor style color', async () => {
        await wrapper.setProps({ icon: 'icon-value', iconCustomColor: '#d2d2d2' })
        expect(wrapper.find('.yoo-btn__icon').attributes().style).toBe('color: rgb(210, 210, 210);')
      })
      it('Validator iconCustomColor returns validation object', async () => {
        // await wrapper.setProps({ icon: 'icon-value', iconCustomColor: '#d2d2d2' })
        expect(YooButton.props.iconCustomColor.validator('#d2d2d2')[0]).toBe('#d2d2d2')
        expect(YooButton.props.iconCustomColor.validator('#d2d2d2')[1]).toBe('d2d2d2')
      })
    })

    describe('animation', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.animation.options.includes(YooButton.props.animation.default)).toBe(true)
      })
      PropsConfig.animation.options.forEach(animation => {
        it(`Include animation class: .${classBlock}--animation-${animation}`, async () => {
          await wrapper.setProps({ animation })
          expect(wrapper.find(`.${classBlock}`).classes().includes(`${classBlock}--animation-${animation}`)).toBe(true)
        })
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onClick')
      })
    })
  }) // describe Events
})
