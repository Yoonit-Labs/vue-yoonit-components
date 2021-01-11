import { shallowMount } from '@vue/test-utils'
import YooHeader from '@/components/molecules/YooHeader/YooHeader.vue'

const classBlock = 'yoo-header'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooHeader, {
    slots: { default: SlotText }
  })
}

describe('YooHeader Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('.yoo-header').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('text', () => {
      it('Includes text in prop', async () => {
        await wrapper.setProps({ text: 'Text test Yooheader' })
        console.log('TESTE BOLADISSOM', wrapper.find(`.${classBlock}`).text())
        expect(wrapper.find(`.${classBlock}`).attributes().style).toBe('color: rgb(210, 210, 210);')
      })
    })
  }) // describe Props
})
