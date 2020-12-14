import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'
import PropsConfig from '@/config/Props.config'

const classBlock = 'yoo-btn'
const SlotText = 'Default Slot Text'

const mountButton = () => {
  return mount(Button, {
    slots: { default: SlotText }
  })
}

describe('Button Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountButton()
    // console.log('wrapper', wrapper)
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
        it(`Accept prop variation: ${variation}`, async () => {
          await wrapper.setProps({ variation })
          if (variation !== 'base') {
            expect(wrapper.find(`.${classBlock}--${variation}`).exists()).toBe(true)
          }
        })
      })
    })

    describe('buttonSize', () => {
      PropsConfig.buttonSize.options.forEach(buttonSize => {
        it(`Accept prop buttonSize: ${buttonSize}`, async () => {
          await wrapper.setProps({ buttonSize })
          if (buttonSize !== 'normal') {
            expect(wrapper.find(`.${classBlock}--${buttonSize}`).exists()).toBe(true)
          }
        })
      })
    })

    describe('fill', () => {
      PropsConfig.fill.options.forEach(fill => {
        it(`Accept prop fill: ${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('iconPosition', () => {
      PropsConfig.iconPosition.options.forEach(iconPosition => {
        // @TODO MULTIPLE PROPS NEEDED
        it(`Accept prop iconPosition: ${iconPosition}`, async () => {
          await wrapper.setProps({ text: 'default text', icon: 'icon-value', iconPosition: iconPosition })
          expect(wrapper.find(`.${classBlock}__icon--${iconPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('iconSize', () => {
      PropsConfig.iconSize.options.forEach(iconSize => {
        // @TODO MULTIPLE PROPS NEEDED
        it(`Accept prop iconSize: ${iconSize}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconSize })
          expect(wrapper.find(`.${classBlock}__icon--${iconSize}`).exists()).toBe(true)
        })
      })
    })

    describe('iconStyle', () => {
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        // @TODO MULTIPLE PROPS NEEDED
        it(`Accept prop iconStyle: ${iconStyle}`, async () => {
          await wrapper.setProps({ icon: 'icon-value', iconStyle })
          expect(wrapper.find('.yoo-btn__icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
        })
      })
    })

    describe('animation', () => {
      PropsConfig.animation.options.forEach(animation => {
        it(`Accept prop animation: ${animation}`, async () => {
          await wrapper.setProps({ animation })
          if (animation !== 'none') {
            expect(wrapper.find(`.${classBlock}`).classes().includes(`${classBlock}--animation-${animation}`)).toBe(true)
          }
        })
      })
    })
  }) // describe Props
})
