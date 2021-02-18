import { mount } from '@vue/test-utils'
import PropsConfig from './QuizQuestion.config'
import YooQuizQuestion from './QuizQuestion.vue'
import * as ConfigMocks from '@/components/molecules/QuizQuestion/QuizQuestion.forms'

const SlotText = 'Default Slot Text'

const mountComponent = () => {
  return mount(YooQuizQuestion, {
    slots: { default: SlotText },
    propsData: {
      question: ConfigMocks.questionCheck
    }
  })
}

describe('YooQuizQuestion Component', () => {
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
    expect(wrapper.classes('yoo-quiz')).toBe(true)
  })

  describe('Props', () => {
    describe('textPosition', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textPosition.options.includes(YooQuizQuestion.props.textPosition.default)).toBe(true)
      })
      PropsConfig.textPosition.options.forEach(textPosition => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ textPosition })
          expect(wrapper.find(`.yoo-checkbox__text--${textPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('question required', () => {
      it('Does not `*` if question required', async () => {
        expect(wrapper.text()).not.toMatch('*')
      })
      it('Show `*` if question required', async () => {
        await wrapper.setProps({ question: { ...ConfigMocks.questionCheck, required: true } })
        expect(wrapper.text()).toMatch('*')
      })
    })

    describe('answers', () => {
      it('Includes class: .yoo-quiz__switch-card when array answers has lenght', async () => {
        expect(wrapper.find('.yoo-quiz__card').exists()).toBe(true)
      })
      it('Does not include class: .yoo-quiz__card when array answers does not has lenght', async () => {
        await wrapper.setProps({
          question: ConfigMocks.questionAnswersNull
        })
        expect(wrapper.find('.yoo-quiz__card').exists()).toBe(false)
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.find('.yoo-quiz__card').vm.$emit('response')
        expect(wrapper.emitted()).toHaveProperty('tapChoice')
      })
    })

    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.setProps({ question: ConfigMocks.questionRadio })
        await wrapper.find('.yoo-quiz__card').vm.$emit('response')
        expect(wrapper.emitted()).toHaveProperty('tapChoice')
      })
    })
  }) // describe Events
})
