import { shallowMount } from '@vue/test-utils'
import YooGridLayout from '@/components/quarks/GridLayout/GridLayout.vue'
import PropsConfig from '@/components/quarks/GridLayout/GridLayout.config'

const classBlock = 'yoo-grid-layout'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooGridLayout, {
    slots: { default: SlotText },
    propsData: {
      cols: 'auto',
      rows: 'auto'
    }
  })
}

describe('YooGridLayout Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-grid-layout').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('horizontalAlign', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.horizontalAlign.options.includes(YooGridLayout.props.horizontalAlign.default)).toBe(true)
      })
      PropsConfig.horizontalAlign.options.forEach(horizontalAlign => {
        it(`Includes horizontalAlign class: .${classBlock}--h-${horizontalAlign}`, async () => {
          await wrapper.setProps({ horizontalAlign })
          expect(wrapper.find(`.${classBlock}--h-${horizontalAlign}`).exists()).toBe(true)
        })
      })
    })
    describe('verticalAlign', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.verticalAlign.options.includes(YooGridLayout.props.verticalAlign.default)).toBe(true)
      })
      PropsConfig.verticalAlign.options.forEach(verticalAlign => {
        it(`Includes verticalAlign class: .${classBlock}--h-${verticalAlign}`, async () => {
          await wrapper.setProps({ verticalAlign })
          expect(wrapper.find(`.${classBlock}--v-${verticalAlign}`).exists()).toBe(true)
        })
      })
    })

    describe('width', () => {
      it('Has a value', async () => {
        await wrapper.setProps({ width: '100px' })

        expect(wrapper.attributes().style).toContain('width: 100px')
      })
    })

    describe('height', () => {
      it('Has a value', async () => {
        await wrapper.setProps({ height: '100px' })

        expect(wrapper.attributes().style).toContain('height: 100px')
      })
    })

    describe('Test gap', () => {
      it('Has a value', async () => {
        await wrapper.setProps({ gap: '10px' })

        expect(wrapper.attributes().style).toContain('gap: 10px')
      })
    })

    describe('Test grid-area', () => {
      describe('Columns tests', () => {
        it('Has columns size defined: 1fr 2fr 1fr', async () => {
          const wrapper = shallowMount(YooGridLayout, {
            slots: { default: '<div row="1" col="1">Slot content</div>' },
            propsData: {
              cols: '1fr, 2fr, 1fr',
              rows: 'auto'
            }
          })

          expect(wrapper.attributes().style).toContain('grid-template-columns: 1fr 2fr 1fr')
        })
        it('Has columns size only integer: 1 2 1', async () => {
          const wrapper = shallowMount(YooGridLayout, {
            slots: { default: '<div row="1" col="1">Slot content</div>' },
            propsData: {
              cols: '1, 2, 1',
              rows: 'auto'
            }
          })

          expect(wrapper.attributes().style).toContain('grid-template-columns: 1fr 2fr 1fr')
        })
      })

      describe('Rows tests', () => {
        it('Has rows size defined: 50vh, 50vh', async () => {
          const wrapper = shallowMount(YooGridLayout, {
            slots: { default: '<div row="1" col="1">Slot content</div>' },
            propsData: {
              cols: 'auto',
              rows: '50vh, 50vh'
            }
          })

          expect(wrapper.attributes().style).toContain('grid-template-rows: 50vh 50vh')
        })

        it('Has rows size only integer: 1 1', async () => {
          const wrapper = shallowMount(YooGridLayout, {
            slots: { default: '<div row="1" col="1">Slot content</div>' },
            propsData: {
              cols: 'auto',
              rows: '1, 1'
            }
          })

          expect(wrapper.attributes().style).toContain('grid-template-rows: 1fr 1fr')
        })
      })
    })

    describe('Childs', () => {
      it('Check slot has no column and row attributes defined', () => {
        const wrapper = shallowMount(YooGridLayout, {
          slots: { default: '<div style="width: 100%;">Slot content</div>' },
          propsData: {
            cols: 'auto',
            rows: 'auto'
          }
        })

        expect(wrapper.html()).toContain('Slot content')
      })

      it('Check mount childs', () => {
        const wrapper = shallowMount(YooGridLayout, {
          slots: { default: '<div row="1" col="1">Slot content</div>' },
          propsData: {
            cols: 'auto',
            rows: 'auto'
          }
        })

        expect(wrapper.html()).toContain('Slot content')
      })

      it('Check mount Component childs', () => {
        const slotComponent = {
          name: 'yoo-flex-layout',
          template: '<yoo-flex-layout col="1" row="1">Slot content</yoo-flex-layout>'
        }

        const wrapper = shallowMount(YooGridLayout, {
          propsData: {
            cols: 'auto',
            rows: 'auto'
          },
          slots: { default: slotComponent }
        })

        expect(wrapper.html()).toContain('Slot content')
      })
    })
  }) // describe Props
})
