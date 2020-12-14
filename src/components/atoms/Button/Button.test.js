import { shallowMount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'
import PropsConfig from '@/config/Props.config'

const classBlock = 'yoo-btn'
const SlotText = 'Default Slot Text'

const mountButton = () => {
  return shallowMount(Button, {
    slots: { default: SlotText }
  })
}

describe('Button Component', () => {
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
      PropsConfig.variation.options.forEach(variation => {
        it(`Includes variation class: .${classBlock}--${variation}`, async () => {
          await wrapper.setProps({ variation })
          if (variation !== 'base') {
            expect(wrapper.find(`.${classBlock}--${variation}`).exists()).toBe(true)
          }
        })
      })
    })

    describe('buttonSize', () => {
      PropsConfig.buttonSize.options.forEach(buttonSize => {
        it(`Includes buttonSize class: .${classBlock}--${buttonSize}`, async () => {
          await wrapper.setProps({ buttonSize })
          if (buttonSize !== 'normal') {
            expect(wrapper.find(`.${classBlock}--${buttonSize}`).exists()).toBe(true)
          }
        })
      })
    })

    describe('fill', () => {
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('disabled', () => {
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes disabled class: .${classBlock}--disabled`, async () => {
          await wrapper.setProps({ fill, disabled: true })
          expect(wrapper.find(`.${classBlock}--disabled`).exists()).toBe(true)
        })
      })
    })

    describe('active', () => {
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes active class: .${classBlock}--active`, async () => {
          await wrapper.setProps({ active: true, fill, disabled: false })
          expect(wrapper.find(`.${classBlock}--active`).exists()).toBe(true)
        })
      })
    })

    describe('hover', () => {
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes hover class: .${classBlock}--hover`, async () => {
          await wrapper.setProps({ hover: true, fill, disabled: false })
          expect(wrapper.find(`.${classBlock}--hover`).exists()).toBe(true)
        })
      })
    })

    describe('iconPosition', () => {
      PropsConfig.iconPosition.options.forEach(iconPosition => {
        it(`Includes iconPosition class: .${classBlock}__icon--${iconPosition}`, async () => {
          await wrapper.setProps({ text: 'default text', icon: 'icon-value', iconPosition: iconPosition })
          expect(wrapper.find(`.${classBlock}__icon--${iconPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('iconSize', () => {
      PropsConfig.iconSize.options.forEach(iconSize => {
        it(`Includes iconSize class: .${classBlock}__icon--${iconSize}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconSize })
          expect(wrapper.find(`.${classBlock}__icon--${iconSize}`).exists()).toBe(true)
        })
      })
    })

    describe('iconStyle', () => {
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        it(`Includes iconStyle class: .${iconStyle === 'solid' ? 'fas' : 'far'}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconStyle })
          expect(wrapper.find('.yoo-btn__icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
        })
      })
    })

    describe('animation', () => {
      PropsConfig.animation.options.forEach(animation => {
        it(`Include animation class: .${classBlock}--animation-${animation}`, async () => {
          await wrapper.setProps({ animation })
          if (animation !== 'none') {
            expect(wrapper.find(`.${classBlock}`).classes().includes(`${classBlock}--animation-${animation}`)).toBe(true)
          }
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
