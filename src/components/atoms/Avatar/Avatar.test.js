/**
 * ██╗   ██╗ ██████╗  ██████╗ ███╗   ██╗██╗████████╗
 * ╚██╗ ██╔╝██╔═══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝
 *  ╚████╔╝ ██║   ██║██║   ██║██╔██╗ ██║██║   ██║
 *   ╚██╔╝  ██║   ██║██║   ██║██║╚██╗██║██║   ██║
 *    ██║   ╚██████╔╝╚██████╔╝██║ ╚████║██║   ██║
 *    ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝
 *
 * https://yoonit.dev - about@yoonit.dev
 *
 * Vue Yoonit Components
 * VueJS Atomic Design System framework
 *
 * Vitória Costa, Tiago Brito, Fernando Junior, Sabrina Sampaio, Gabriel Mule, Gabriel Moraes, Gabriel Rizzo & Luigui Delyer @ 2020-2021
 */

import { shallowMount } from '@vue/test-utils'
import YooAvatar from '@/components/atoms/Avatar/Avatar.vue'
import PropsConfig from '@/components/atoms/Avatar/Avatar.config'

const classBlock = 'yoo-avatar'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooAvatar, {
    slots: { default: SlotText }
  })
}

describe('YooAvatar Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-avatar').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('size', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.size.options.includes(YooAvatar.props.size.default)).toBe(true)
      })
      PropsConfig.size.options.forEach(size => {
        it(`Includes variation class: .${classBlock}--${size}`, async () => {
          await wrapper.setProps({ size })
          expect(wrapper.find(`.${classBlock}--${size}`).exists()).toBe(true)
        })
      })
    })
    // describe Props
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooAvatar.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes variation class: .${classBlock}--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('textColor', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textColor.options.includes(YooAvatar.props.textColor.default)).toBe(true)
      })
      PropsConfig.textColor.options.forEach(textColor => {
        it(`Includes variation class: .${classBlock}__text--${textColor}`, async () => {
          await wrapper.setProps({ text: 'text-value', textColor })
          expect(wrapper.find(`.${classBlock}__text--${textColor}`).exists()).toBe(true)
        })
      })
    })
  })
})
