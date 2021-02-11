import { mount } from '@vue/test-utils'
import PropsConfig from './TableCard.config'
import YooTableCard from '@/components/molecules/TableCard/TableCard.vue'

const classBlock = 'yoo-table-card'

const mountComponent = () => {
  return mount(YooTableCard, {
    propsData: {
      title: 'Title',
      subtitle: 'Subtitle',
      details: [
        {
          text: 'Admin',
          status: true
        },
        {
          text: 'Funcionários',
          status: false
        },
        {
          text: 'Segurança',
          status: false
        },
        {
          text: 'Manutenção'
        }
      ]
    },
    data: () => ({
      flexAlignItems: 'center',
      flexDirection: 'row'
    })
  })
}

describe('YooTableCard Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', async () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes(`${classBlock}`)).toBe(true)
    expect(wrapper.find('.yoo-table-card__title').exists()).toBe(true)
    expect(wrapper.find('.yoo-table-card__subtitle').exists()).toBe(true)
    expect(wrapper.find('.yoo-table-card__detail').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('actionable', () => {
      it('Has a valid default value', () => {
        expect(YooTableCard.props.actionable.default).toBe(false)
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
        expect(PropsConfig.actionableType.options.includes(YooTableCard.props.actionableType.default)).toBe(true)
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

    describe('fill', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.fill.options.includes(YooTableCard.props.fill.default)).toBe(true)
      })
      PropsConfig.fill.options.forEach(fill => {
        it(`Includes fill class: .yoo-table-card__fill--${fill}`, async () => {
          await wrapper.setProps({ fill })
          expect(wrapper.find(`.yoo-table-card__fill--${fill}`).exists()).toBe(true)
        })
      })
    })

    describe('separator', () => {
      it('Has a valid default value', () => {
        expect(YooTableCard.props.separator.default).toBe(false)
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

    describe('buttonDisable', () => {
      it('Has a valid default value', () => {
        expect(YooTableCard.props.buttonDisable.default).toBe(false)
      })
      it('Has a button disabled', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button', buttonDisable: true })
        expect(wrapper.find('.yoo-btn--disabled').exists()).toBe(true)
      })
      it('Has not a button disabled', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button', buttonDisable: false })
        expect(wrapper.find('.yoo-btn--disabled').exists()).toBe(false)
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.setProps({ actionable: true, actionableType: 'button' })
        await wrapper.find('.yoo__container--button').vm.$emit('doClick')
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
