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
import PropsConfig from './Tag.config'
import YooTag from './Tag.vue'

const classBlock = 'yoo-tag'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooTag, {
    slots: { default: SlotText },
    propsData: {
      tags: [
        {
          name: 'Admin',
          status: true
        },
        {
          name: 'Funcionários',
          status: false
        },
        {
          name: 'Segurança',
          status: false
        },
        {
          name: 'Manutenção'
        }
      ]
    }
  })
}

describe('YooTag Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes(`${classBlock}`)).toBe(true)
  })

  describe('Props', () => {
    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooTag.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Has class .${classBlock}__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.${classBlock}__fill--${fill}`).exists()).toBe(true)
        })
      })
    })
  }) // describe Props
})
