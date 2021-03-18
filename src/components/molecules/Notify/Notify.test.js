import { mount } from '@vue/test-utils'
import YooNotify from '@/components/molecules/Notify/Notify.vue'
import PropsConfig from './Notify.config'

const classBlock = 'yoo-notify'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooNotify, {
    slots: { default: SlotText }
  })
}

describe('YooNotify Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', async () => {
    expect(wrapper.classes(`${classBlock}`)).toBe(true)
    expect(wrapper.find('.yoo-notify__text').exists()).toBe(true)
    expect(wrapper.find('.yoo-indicator').exists()).toBe(true)
    expect(wrapper.find('.yoo-btn').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('showIndicator', () => {
      it('Has a valid default value', () => {
        expect(YooNotify.props.showIndicator.default).toBe(true)
      })
      it('Test prop showIndicator', async () => {
        await wrapper.setProps({ showIndicator: false })
        expect(wrapper.find(`.${classBlock}`).attributes().style).toContain('grid-template-columns: auto;')
      })
    })
    describe('showIcon', () => {
      it('Has a valid default value', () => {
        expect(YooNotify.props.showIcon.default).toBe(false)
      })
      it('Test prop showIndicator', async () => {
        await wrapper.setProps({ showIndicator: false, showIcon: true, closeButton: true })
        expect(wrapper.find(`.${classBlock}__icon`).exists()).toBe(true)
      })
    })
    describe('iconStyle', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.iconStyle.options.includes(YooNotify.props.iconStyle.default)).toBe(true)
      })
      PropsConfig.iconStyle.options.forEach(iconStyle => {
        it(`Includes iconStyle class: .${iconStyle === 'solid' ? 'fas' : 'far'}`, async () => {
          await wrapper.setProps({ showIndicator: false, showIcon: true, icon: 'cog', iconStyle })
          expect(wrapper.find('.yoo-notify__icon').classes().includes(`${iconStyle === 'solid' ? 'fas' : 'far'}`)).toBe(true)
        })
      })
    })
    describe('indicatorFill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.indicatorFill.options.includes(YooNotify.props.indicatorFill.default)).toBe(true)
      })
      PropsConfig.indicatorFill.options.forEach(indicatorFill => {
        it(`Includes indicatorFill class: .yoo-indicator--${indicatorFill}`, async () => {
          await wrapper.setProps({ indicatorFill })
          expect(wrapper.find(`.yoo-indicator--${indicatorFill}`).exists()).toBe(true)
        })
      })
    })
    describe('indicatorSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.indicatorSize.options.includes(YooNotify.props.indicatorSize.default)).toBe(true)
      })
      PropsConfig.indicatorSize.options.forEach(indicatorSize => {
        it(`Includes indicatorFill class: .yoo-indicator--${indicatorSize}`, async () => {
          await wrapper.setProps({ indicatorSize })
          expect(wrapper.find(`.yoo-indicator--${indicatorSize}`).exists()).toBe(true)
        })
      })
    })
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooNotify.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .${classBlock}--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}--${fill}`).exists()).toBe(true)
        })
      })
    })
    describe('textColor', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textColor.options.includes(YooNotify.props.textColor.default)).toBe(true)
      })
      PropsConfig.textColor.options.forEach(textColor => {
        it(`Includes textColor class: .${classBlock}__text--${textColor}`, async () => {
          await wrapper.setProps({ textColor })
          expect(wrapper.find(`.${classBlock}__text--${textColor}`).exists()).toBe(true)
        })
      })
    })
    describe('textSize', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textSize.options.includes(YooNotify.props.textSize.default)).toBe(true)
      })
      PropsConfig.textSize.options.forEach(textSize => {
        it(`Includes textSize class: .${classBlock}__text--${textSize}`, async () => {
          await wrapper.setProps({ textSize })
          expect(wrapper.find(`.${classBlock}__text--${textSize}`).exists()).toBe(true)
        })
      })
    })
    describe('closeButton', () => {
      it('Has a valid default value', () => {
        expect(YooNotify.props.closeButton.default).toBe(false)
      })
      it('Test prop closeButton', async () => {
        await wrapper.setProps({ showIndicator: false, showIcon: false, closeButton: true })
        expect(wrapper.find('.yoo__container--button').exists()).toBe(true)
      })
    })
  }) // describe Props
})
