import { shallowMount } from '@vue/test-utils'
import yooPagination from '@/components/molecules/YooPagination/YooPagination.vue'
import PropsConfig from '@/components/molecules/YooPagination/YooPagination.config'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(yooPagination, {
    slots: { default: SlotText },
    propsData: {
      totalPages: 5,
      currentPage: 1
    }
  })
}

describe('YooPagination Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes('yoo__container--yooPagination')).toBe(true)
    expect(wrapper.find('yooPagination.yoo-btn').exists()).toBe(true)
  })

  /* describe('Props', () => {
    describe('animation', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.animation.options.includes(yooPagination.props.animation.default)).toBe(true)
      })
      PropsConfig.animation.options.forEach(animation => {
        it('Include animation class: ', async () => {
          await wrapper.setProps({ animation })
          expect(wrapper.find('').classes().includes(`--animation-${animation}`)).toBe(true)
        })
      })
    })
  }) */ // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        // @TODO - Incluir trigger do emit antes de testar se a propierdade foi emitida (ex: wrapper.find('button-left').trigger('click'))
        // para emitir um custom event de um custom component, vc precisa utilizar o metodo de emit, pois ao usar o trigger vc está apenas clicando no elemento raiz do custom component, e não no elemento que dispara o custom event.
        await wrapper.find('.button__container--back').vm.$emit('onClick')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
      })
    })
  })

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        wrapper.find('.button__container--back').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('tapPage')
      })
    })
  }) // describe Events
})
