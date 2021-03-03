import { shallowMount } from '@vue/test-utils'
import YooSelectDate from '@/components/atoms/SelectDate/SelectDate.vue'
import PropsConfig from '@/components/atoms/SelectDate/SelectDate.config'

const classBlock = 'yoo-selectdate'
const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return shallowMount(YooSelectDate, {
    slots: { default: SlotText }
  })
}

describe('YooSelectDate Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mountComponent()
  })

  it('Matches Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Loads the Component HTML', () => {
    expect(wrapper.classes(classBlock)).toBe(true)
  })

  describe('Props', () => {
    describe('type', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.type.options.includes(YooSelectDate.props.type.default)).toBe(true)
      })

      describe('The type Time', () => {
        it('Render v-if on HTML', async () => {
          await wrapper.setProps({ type: 'time' })
          expect(wrapper.find('.yoo-selectdate__separator').exists()).toBe(true)
        })

        it('Current time system', async () => {
          const now = new Date()
          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'time'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedTime.hours.current).toBe(now.getHours())
          expect(wrapper.vm.selectedTime.minutes.current).toBe(now.getMinutes())
          expect(wrapper.find('.yoo-selectdate__item--active.hours').text()).toBe(`${('0' + now.getHours()).slice(-2)}`)
          expect(wrapper.find('.yoo-selectdate__item--active.minutes').text()).toBe(`${('0' + now.getMinutes()).slice(-2)}`)
        })
        it('Set time by prop value', async () => {
          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'time',
              value: '23:45'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedTime.hours.current).toBe(23)
          expect(wrapper.vm.selectedTime.minutes.current).toBe(45)
          expect(wrapper.find('.yoo-selectdate__item--active.hours').text()).toBe('23')
          expect(wrapper.find('.yoo-selectdate__item--active.minutes').text()).toBe('45')
        })

        it('Limits of hour time type', async () => {
          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'time',
              value: '00:00'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedTime.hours.prev).toBe(23)
          expect(wrapper.vm.selectedTime.minutes.prev).toBe(59)

          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'time',
              value: '23:59'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedTime.hours.next).toBe(0)
          expect(wrapper.vm.selectedTime.minutes.next).toBe(0)
        })
      })

      describe('The type Date', () => {
        it('Render v-else HTML', async () => {
          await wrapper.setProps({ type: 'date' })
          expect(wrapper.find('.yoo-selectdate__separator').exists()).toBe(false)
        })

        it('Current date system', async () => {
          const now = new Date()
          await wrapper.setProps({ type: 'date' })
          expect(wrapper.vm.selectedDate.year.current).toBe(now.getFullYear())
          expect(wrapper.vm.selectedDate.month.current).toBe(now.getMonth())
          expect(wrapper.vm.selectedDate.day.current).toBe(now.getDate())
          expect(wrapper.find('.yoo-selectdate__separator').exists()).toBe(false)
        })

        it('Set date by prop value - english format', async () => {
          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'date',
              value: '2002-12-03'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedDate.year.current).toBe(2002)
          expect(wrapper.vm.selectedDate.month.current).toBe(11)
          expect(wrapper.vm.selectedDate.day.current).toBe(3)
        })

        it('Set date by prop value - brazilian format', async () => {
          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'date',
              value: '03/12/2002'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedDate.year.current).toBe(2002)
          expect(wrapper.vm.selectedDate.month.current).toBe(11)
          expect(wrapper.vm.selectedDate.day.current).toBe(3)
        })

        it('Limits of month date type', async () => {
          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'date',
              value: '03/12/2002'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedDate.month.next).toBe(0)

          wrapper = shallowMount(YooSelectDate, {
            propsData: {
              type: 'date',
              value: '28/01/1999'
            }
          })
          await wrapper.vm.$nextTick()
          expect(wrapper.vm.selectedDate.month.prev).toBe(11)
        })
      })
    })

    describe('value', () => {
      it('Has no value', () => {
        expect(wrapper.exists()).toBeTruthy()
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits change Event', () => {
        wrapper.find('.yoo-selectdate__item').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('response')
      })
      it('Emits change Event', async () => {
        wrapper = shallowMount(YooSelectDate, {
          propsData: {
            type: 'time',
            value: '02:15'
          }
        })
        await wrapper.vm.$nextTick()
        wrapper.find('.yoo-selectdate__item').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('response')
        expect(wrapper.emitted().response[0][0].toString).toBe('01:15')
      })
    })
  }) // describe Events
})
