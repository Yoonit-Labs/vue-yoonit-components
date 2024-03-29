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
import YooCheckButton from '@/components/atoms/CheckButton/CheckButton.vue'
import PropsConfig from './CheckButton.config'

const classBlock = 'yoo-checkbox'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooCheckButton, {
    setProps: { locked: false },
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
        it(`Includes textPosition class: .${classBlock}__text--${textPosition}`, async () => {
          await wrapper.setProps({ textPosition })
          expect(wrapper.find(`.${classBlock}__text--${textPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('checked', () => {
      it(`Does not include checked class: .${classBlock}__check--active when not checked`, async () => {
        expect(wrapper.find(`.${classBlock}__check--active`).exists()).toBe(false)
      })
      it(`Includes checked class: .${classBlock}__check--active when checked`, async () => {
        await wrapper.setProps({ checked: true })
        expect(wrapper.find(`.${classBlock}__check--active`).exists()).toBe(true)
      })
      it(`Includes card active class: .${classBlock}__card--active when card`, async () => {
        await wrapper.setProps({ checked: true, card: true })
        expect(wrapper.find(`.${classBlock}__card--active`).exists()).toBe(true)
      })
    })

    describe('disabled', () => {
      it(`Does not include disabled class: .${classBlock}__check--disabled when not disabled`, async () => {
        expect(wrapper.find(`.${classBlock}__check--disabled`).exists()).toBe(false)
      })
      it(`Includes disabled class: .${classBlock}__check--disabled when checked`, async () => {
        await wrapper.setProps({ disabled: true })
        expect(wrapper.find(`.${classBlock}__check--disabled`).exists()).toBe(true)
      })
    })

    describe('locked', () => {
      it('If prop locked is false', async () => {
        await wrapper.setProps({ locked: false })
        await wrapper.setProps({ checked: true })
        expect(wrapper.find(`.${classBlock}__check--active`).exists()).toBe(true)
      })

      it('If prop locked is true', async () => {
        await wrapper.setProps({ checked: true })
        await wrapper.setProps({ locked: true })
        await wrapper.setProps({ checked: false })
        expect(wrapper.find(`.${classBlock}__check--active`).exists()).toBe(true)
      })
    })

    describe('card', () => {
      it('Has a valid default value', () => {
        expect(YooCheckButton.props.card.default).toBe(false)
      })
      it(`Does not include card class: .${classBlock}__card when not card`, async () => {
        expect(wrapper.find(`.${classBlock}__card`).exists()).toBe(false)
      })
      it(`Includes card class: .${classBlock}__card when card`, async () => {
        await wrapper.setProps({ card: true })
        expect(wrapper.find(`.${classBlock}__card`).exists()).toBe(true)
      })
      it(`Includes card active class: .${classBlock}__card--active when card`, async () => {
        wrapper = shallowMount(YooCheckButton, { propsData: { checked: true, card: true } })
        await wrapper.vm.$nextTick()
        expect(wrapper.find(`.${classBlock}__card--active`).exists()).toBe(true)
      })
    })

    describe('borderStyle', () => {
      it('Has a valid default value', () => {
        expect(YooCheckButton.props.borderStyle.default).toBe('rounded')
      })
      it(`Includes borderStyle square active class: ${classBlock}__check--square`, async () => {
        await wrapper.setProps({ borderStyle: 'square' })
        expect(wrapper.find(`.${classBlock}__check--square`).exists()).toBe(true)
      })
      it(`Includes borderStyle rounded active class: ${classBlock}__check--rounded`, async () => {
        await wrapper.setProps({ borderStyle: 'rounded' })
        expect(wrapper.find(`.${classBlock}__check--rounded`).exists()).toBe(true)
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits change Event', async () => {
        wrapper.find('input').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('response')
      })

      it('Locked is true, emits no change', async () => {
        await wrapper.setProps({ locked: true })
        wrapper.find('input').trigger('click')
        expect(wrapper.emitted('response')[0][0]).toBe(false)
      })

      it('Does not emits change Event', async () => {
        await wrapper.setProps({ disabled: true })
        wrapper.find('input').trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty('response')
      })
    })
  }) // describe Events
})
