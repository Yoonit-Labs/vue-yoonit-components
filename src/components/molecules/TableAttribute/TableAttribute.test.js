import { mount, shallowMount } from '@vue/test-utils'
import PropsConfig from './TableAttribute.config'
import YooTableAttribute from './TableAttribute.vue'

const classBlock = 'yoo-table-attribute'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooTableAttribute, {
    slots: { default: SlotText },
    propsData: {
      title: 'Title'
    }
  })
}

describe('YooTableAttribute Component', () => {
  let wrapper
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789)
    wrapper = mountComponent()
  })

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes(`${classBlock}`)).toBe(true)
    expect(wrapper.find('.yoo-table-attribute__title').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('titleFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.titleFill.options.includes(YooTableAttribute.props.titleFill.default)).toBe(true)
      })
      PropsConfig.titleFill.options.forEach(titleFill => {
        it(`Has class .${classBlock}__title--${titleFill}`, async () => {
          await wrapper.setProps({ titleFill })
          expect(wrapper.find(`.${classBlock}__title--${titleFill}`).exists()).toBe(true)
        })
      })
    })

    describe('titleWeight', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.titleWeight.options.includes(YooTableAttribute.props.titleWeight.default)).toBe(true)
      })
      PropsConfig.titleWeight.options.forEach(titleWeight => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ titleWeight })
          expect(wrapper.find(`.${classBlock}__title--${titleWeight}`).exists()).toBe(true)
        })
      })
    })

    describe('titleSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.titleSize.options.includes(YooTableAttribute.props.titleSize.default)).toBe(true)
      })
      PropsConfig.titleSize.options.forEach(titleSize => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ titleSize })
          expect(wrapper.find(`.${classBlock}__title--${titleSize}`).exists()).toBe(true)
        })
      })
    })

    describe('detailFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.detailFill.options.includes(YooTableAttribute.props.detailFill.default)).toBe(true)
      })
      PropsConfig.detailFill.options.forEach(detailFill => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ detailFill })
          expect(wrapper.find(`.${classBlock}__detail--${detailFill}`).exists()).toBe(true)
        })
      })
    })

    describe('actionable', () => {
      it('Has a valid default value', () => {
        expect(YooTableAttribute.props.actionable.default).toBe(false)
      })
      it('Is actionable', async () => {
        await wrapper.setProps({ actionable: true })
        expect(wrapper.find('.yoo-btn').exists()).toBe(true)
      })
      it('Is not actionable', async () => {
        await wrapper.setProps({ actionable: false })
        expect(wrapper.find('.yoo-btn').exists()).toBe(false)
      })
    })

    describe('actionableType', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.actionableType.options.includes(YooTableAttribute.props.actionableType.default)).toBe(true)
      })
      it('Has a button', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button' })
        expect(wrapper.find('.yoo-btn').exists()).toBe(true)
      })
      it('Has a check button', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'check' })
        expect(wrapper.find('.yoo-checkbox').exists()).toBe(true)
      })
    })

    describe('iconStyle', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconStyle.options.includes(YooTableAttribute.props.iconStyle.default)).toBe(true)
      })
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ icon: 'icon-value', iconStyle })
          expect(wrapper.find('.yoo-icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
          expect(wrapper.find(`.${classBlock}--tall`).exists()).toBe(true)
        })
      })
    })

    describe('iconFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconFill.options.includes(YooTableAttribute.props.iconFill.default)).toBe(true)
      })
      PropsConfig.iconFill.options.forEach(iconFill => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ icon: 'icon-value', iconFill })
          expect(wrapper.find(`.yoo-icon__fill--${iconFill}`).exists()).toBe(true)
        })
      })
    })

    describe('separator', () => {
      it('Has a valid default value', () => {
        expect(YooTableAttribute.props.separator.default).toBe(false)
      })
      it(`Includes separator class: .${classBlock}--separated`, async () => {
        await wrapper.setProps({ separator: true })
        expect(wrapper.find(`.${classBlock}--separated`).exists()).toBe(true)
      })
      it(`Does not includes separator class: .${classBlock}--separated`, async () => {
        await wrapper.setProps({ separator: false })
        expect(wrapper.find(`.${classBlock}--separated`).exists()).toBe(false)
      })
    })

    describe('actionableDisable', () => {
      it('Has a valid default value', () => {
        expect(YooTableAttribute.props.actionableDisable.default).toBe(false)
      })
      it('Has a button disabled', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button', actionableDisable: true })
        expect(wrapper.find('.yoo-btn--disabled').exists()).toBe(true)
      })
      it('Has not a button disabled', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button', actionableDisable: false })
        expect(wrapper.find('.yoo-btn--disabled').exists()).toBe(false)
      })
    })

    describe('actionableActive', () => {
      it('Has a valid default value', () => {
        expect(YooTableAttribute.props.actionableActive.default).toBe(false)
      })
      it('Has a checkButton is active', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'check', actionableActive: true })
        expect(wrapper.find('.yoo-checkbox__check--active').exists()).toBe(true)
      })
      it('Has a switch is active', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'switch', actionableActive: true })
        expect(wrapper.find('.yoo-switch--checked').exists()).toBe(true)
      })
    })

    describe('wrap', () => {
      it('Has a valid default value', () => {
        expect(YooTableAttribute.props.wrap.default).toBe(false)
      })
      it('Does not includes wrap class', async () => {
        expect(wrapper.vm.flexAlignItems).toBe('center')
        expect(wrapper.vm.flexDirection).toBe('row')
      })
      it('Includes wrap style', async () => {
        wrapper = shallowMount(YooTableAttribute, {
          propsData: {
            title: 'wrap',
            wrap: true
          }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.flexAlignItems).toBe('flex-start')
        expect(wrapper.vm.flexDirection).toBe('column')
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button' })
        await wrapper.find('.yoo__container--button').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  })

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'check' })
        await wrapper.find('.yoo-checkbox').vm.$emit('response')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  }) // describe Events
})
