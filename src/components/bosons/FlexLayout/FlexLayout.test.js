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
import YooFlexLayout from '@/components/bosons/FlexLayout/FlexLayout.vue'
import PropsConfig from '@/components/bosons/FlexLayout/FlexLayout.config'

const classBlock = 'yoo-flex-layout'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooFlexLayout, {
    slots: { default: SlotText }
  })
}

describe('YooFlexLayout Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-flex-layout').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('flexDirection', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.flexDirection.options.includes(YooFlexLayout.props.flexDirection.default)).toBe(true)
      })
      PropsConfig.flexDirection.options.forEach(flexDirection => {
        it(`Includes flexDirection style: ${flexDirection}`, async () => {
          await wrapper.setProps({ flexDirection })
          expect(wrapper.find(`.${classBlock}`).attributes().style).toContain(`flex-direction: ${flexDirection}`)
        })
      })
    })
    describe('flexWrap', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.flexWrap.options.includes(YooFlexLayout.props.flexWrap.default)).toBe(true)
      })
      PropsConfig.flexWrap.options.forEach(flexWrap => {
        it('Test prop validator', () => {
          expect(YooFlexLayout.props.flexWrap.validator(flexWrap)).toBe(true)
        })
        it(`Includes flexWrap style: ${flexWrap}`, async () => {
          await wrapper.setProps({ flexWrap })
          expect(wrapper.find(`.${classBlock}`).attributes().style).toContain(`flex-wrap: ${flexWrap}`)
        })
      })
    })
    describe('justifyContent', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.justifyContent.options.includes(YooFlexLayout.props.justifyContent.default)).toBe(true)
      })
      PropsConfig.justifyContent.options.forEach(justifyContent => {
        it(`Includes justifyContent style: ${justifyContent}`, async () => {
          await wrapper.setProps({ justifyContent })
          expect(wrapper.find(`.${classBlock}`).attributes().style).toContain(`justify-content: ${justifyContent}`)
        })
      })
    })
    describe('alignItems', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.alignItems.options.includes(YooFlexLayout.props.alignItems.default)).toBe(true)
      })
      PropsConfig.alignItems.options.forEach(alignItems => {
        it(`Includes alignItems style: ${alignItems}`, async () => {
          await wrapper.setProps({ alignItems })
          expect(wrapper.find(`.${classBlock}`).attributes().style).toContain(`align-items: ${alignItems}`)
        })
      })
    })
    describe('alignContent', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.alignContent.options.includes(YooFlexLayout.props.alignContent.default)).toBe(true)
      })
      PropsConfig.alignContent.options.forEach(alignContent => {
        it(`Includes alignContent style: ${alignContent}`, async () => {
          await wrapper.setProps({ alignContent })
          expect(wrapper.find(`.${classBlock}`).attributes().style).toContain(`align-content: ${alignContent}`)
        })
      })
    })

    describe('gap', () => {
      it('Has a valid default value', () => {
        expect(YooFlexLayout.props.gap.default).toBe('0')
      })
      it('Includes gap class when gap !== 0', async () => {
        await wrapper.setProps({ gap: '1px' })
        expect(wrapper.find(`.${classBlock}`).attributes().style).toContain('gap: 1px')
      })
      it('Does not includes gap class when gap === 0', () => {
        expect(wrapper.find(`.${classBlock}`).attributes().style).not.toContain('gap: 0')
      })
    })

    describe('Childs', () => {
      it('Check mount childs', async () => {
        const wrapper = shallowMount(YooFlexLayout, {
          slots: { default: '<div height="100px" width="100px" order="1" flexGrow="1" flexShrink="0" alignSelf="flex-end" backgroundColor="#FFF">Slot content</div>' }
        })
        expect(wrapper.html()).toContain('Slot content')
      })
      it('Does not check mount childs', async () => {
        const wrapper = shallowMount(YooFlexLayout, {})
        expect(wrapper.html()).not.toContain('Slot content')
      })
    })
  }) // describe Props
})
