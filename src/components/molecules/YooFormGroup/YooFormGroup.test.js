import { shallowMount } from '@vue/test-utils'
import YooFormGroup from '@/components/molecules/YooFormGroup/YooFormGroup.vue'

const mountComponent = () => {
  return shallowMount(YooFormGroup, {
    propsData: {
      required: true,
      label: 'Label',
      value: 'Text',
      placeholder: 'Placeholder'
    }
  })
}

describe('YooFormGroup Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('Disabled mode', () => {
      it('Check if this input is disabled', async () => {
        const wrapper = shallowMount(YooFormGroup, {
          propsData: {
            disabled: true,
            label: 'Disabled',
            placeholder: 'Placeholder'
          }
        })

        expect(wrapper.find('input').element.disabled).toBeTruthy()
      })
    })

    describe('isValid Test', () => {
      it('If not isValid state', async () => {
        await wrapper.setData({ isValid: false })
        expect(wrapper.find('label').classes().includes('yoo-input--error')).toBe(true)
      })

      it('If isValid state', async () => {
        await wrapper.setData({ isValid: true })
        expect(wrapper.find('label').classes().includes('yoo-input--success')).toBe(true)
      })
    })

    describe('Required Test', () => {
      it('If required and text is empty', async () => {
        await wrapper.setProps({ validateOnDataInput: false, value: '' })
        await wrapper.find('input').trigger('blur')
        expect(wrapper.find('label').classes().includes('yoo-input--error')).toBe(true)
      })

      it('If required and has text', async () => {
        await wrapper.setProps({ value: 'Any text' })
        expect(wrapper.vm.required).toBeTruthy()
        await wrapper.find('input').trigger('blur')
        expect(wrapper.find('label').classes().includes('yoo-input--success')).toBe(true)
      })
    })

    describe('Required Rule', () => {
      it('Required rule is executed', async () => {
        await wrapper.setProps({
          validateOnDataInput: true,
          value: 'a',
          requiredRule: value => {
            let status = true
            if (value.length < 3) {
              status = false
            }
            return {
              result: status,
              message: 'The field Text must be more then 3 characters.'
            }
          }
        })
        await wrapper.find('input').setValue('a')

        expect(wrapper.find('label').classes().includes('yoo-input--error')).toBe(true)
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('On input text', () => {
      it('Emits keypress Event', async () => {
        await wrapper.setProps({ validateOnDataInput: false })
        await wrapper.find('input').setValue('a')
        expect(wrapper.emitted()).toHaveProperty('input')
      })
    })
  }) // describe Events
})
