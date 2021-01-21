import { shallowMount } from '@vue/test-utils'
import YooCheckButton from '@/components/atoms/YooCheckButton/YooCheckButton.vue'
import PropsConfig from './Props.config'

const classBlock = 'yoo-check'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooCheckButton, {
    slots: { default: SlotText }
  })
}

describe('YooCheckButton Component', () => {
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
    expect(wrapper.classes('yoo-checkbox')).toBe(true)
  })

  describe('Props', () => {
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooCheckButton.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it(`Includes size class: .${classBlock}--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}--${size}`).exists()).toBe(true)
        })
      })
    })

    describe('textPosition', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textPosition.options.includes(YooCheckButton.props.textPosition.default)).toBe(true)
      })
      PropsConfig.textPosition.options.forEach(textPosition => {
        it(`Includes textPosition class: .${classBlock}--text-${textPosition}`, async () => {
          await wrapper.setProps({ textPosition })
          expect(wrapper.find(`.${classBlock}--text-${textPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('initialValue', () => {
      it('Includes initialValue class: .yoo-check--checked when initialValue', async () => {
        wrapper = shallowMount(YooCheckButton, { propsData: { initialValue: true } })
        await wrapper.vm.$nextTick()
        expect(wrapper.find(`.${classBlock}--checked`).exists()).toBe(true)
      })
      it('Does not include initialValue class: .yoo-check--checked when not initialValue', async () => {
        await wrapper.setProps({ initialValue: false })
        expect(wrapper.find(`.${classBlock}--checked`).exists()).toBe(false)
      })
    })

    describe('switchCard', () => {
      it('Has a valid default value', () => {
        expect(YooCheckButton.props.switchCard.default).toBe(false)
      })
      it(`Includes switch-card class: .${classBlock}--switch-card when switchCard`, async () => {
        await wrapper.setProps({ switchCard: true })
        expect(wrapper.find(`.${classBlock}--switch-card`).exists()).toBe(true)
      })
      it(`Does not include switch-card class: .${classBlock}--switch-card when not switchCard`, async () => {
        await wrapper.setProps({ switchCard: false })
        expect(wrapper.find(`.${classBlock}--switch-card`).exists()).toBe(false)
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits change Event', async () => {
        wrapper.find('input').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
    })
  }) // describe Events
})
