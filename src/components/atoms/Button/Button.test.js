import { mount } from '@vue/test-utils'
import Button from '@/components/atoms/Button/Button.vue'

const classBlock = 'yoo-btn'
const SlotText = 'Default Slot Text'
const ButtonProps = {
  variation: ['base', 'outline', 'clear'],
  buttonSize: ['normal', 'short', 'large'],
  fill: ['primary', 'danger'],
  iconPosition: ['left', 'right'],
  iconSize: ['large', 'normal', 'small'],
  iconStyle: ['solid', 'regular'],
  animation: ['none', 'pulse']
}

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
      ButtonProps.variation.forEach(variation => {
        it(`Accept prop variation: ${variation}`, async () => {
          await wrapper.setProps({ variation })
          if (variation !== 'base') {
            expect(wrapper.find(`.${classBlock}--${variation}`).exists()).toBe(true)
          }
        })
      })
    })

    describe('buttonSize', () => {
      ButtonProps.buttonSize.forEach(buttonSize => {
        it(`Accept prop buttonSize: ${buttonSize}`, async () => {
          await wrapper.setProps({ buttonSize })
          if (buttonSize !== 'normal') {
            expect(wrapper.find(`.${classBlock}--${buttonSize}`).exists()).toBe(true)
          }
        })
      })
    })

    describe('fill', () => {
      ButtonProps.fill.forEach(fill => {
        it(`Accept prop fill: ${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('iconPosition', () => {
      ButtonProps.iconPosition.forEach(iconPosition => {
        it(`Accept prop iconPosition: ${iconPosition}`, async () => {
          await wrapper.setProps({ iconPosition })

          expect(wrapper.find(`.${classBlock}__icon--${iconPosition}`).exists()).toBe(false)

          await wrapper.setProps({ text: 'Custom Text' })

          expect(wrapper.find(`.${classBlock}__icon--${iconPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('iconSize', () => {
      ButtonProps.iconSize.forEach(iconSize => {
        it(`Accept prop iconSize: ${iconSize}`, async () => {
          await wrapper.setProps({ iconSize })
          expect(wrapper.find(`.${classBlock}--${iconSize}`).exists()).toBe(false)
        })
      })
    })

    //   ButtonProps.iconStyle.forEach(iconStyle => {
    //     it(`Accept prop iconStyle: ${iconStyle}`, async () => {
    //       await wrapper.setProps({ iconStyle })
    //       // expect(wrapper.find(`.${SubtitleClass}--${size}`))
    //     })
    //   })
    //   ButtonProps.animation.forEach(animation => {
    //     it(`Accept prop animation: ${animation}`, async () => {
    //       await wrapper.setProps({ animation })
    //       // expect(wrapper.find(`.${SubtitleClass}--${size}`))
    //     })
    //   })
  })
})
