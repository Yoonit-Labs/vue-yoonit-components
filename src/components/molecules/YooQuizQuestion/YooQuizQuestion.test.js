import { mount } from '@vue/test-utils'
import PropsConfig from './YooQuizQuestion.config'
import YooQuizQuestion from './YooQuizQuestion.vue'

const SlotText = 'Default Slot Text'
const answers = [
  {
    id: 'ans1',
    text: {
      ptBR: 'Cansaço'
    },
    weight: 3
  },
  {
    id: 'ans2',
    text: {
      ptBR: 'Corrimento Nasal (Coriza)'
    },
    weight: 3,
    status: true
  }
]

const question = {
  id: 'covid-cl1',
  text: {
    ptBR: 'Marque os sintomas sentidos nas últimas horas'
  },
  visible: true,
  type: 'check',
  answers
}

const mountComponent = () => {
  return mount(YooQuizQuestion, {
    slots: { default: SlotText },
    propsData: {
      question,
      answers
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
    expect(wrapper.find('.yoo-quiz__question').exists()).toBe(true)
    expect(wrapper.find('.yoo-quiz__switch-card').exists()).toBe(true)
  })

  describe('Props', () => {
    describe('textPosition', () => {
      it('Has a valid default value', () => {
        expect(PropsConfig.textPosition.options.includes(YooQuizQuestion.props.textPosition.default)).toBe(true)
      })
      PropsConfig.textPosition.options.forEach(textPosition => {
        it('Loads the Component HTML', async () => {
          await wrapper.setProps({ textPosition })
          expect(wrapper.find(`.yoo-check--text-${textPosition}`).exists()).toBe(true)
        })
      })
    })

    describe('question required', () => {
      it('Does not `*` if question required', async () => {
        expect(wrapper.text()).not.toMatch('*')
      })
      it('Show `*` if question required', async () => {
        await wrapper.setProps({ question: { ...question, required: true } })
        expect(wrapper.text()).toMatch('*')
      })
    })

    describe('answers', () => {
      it('Includes class: .yoo-quiz__switch-card when array answers has lenght', async () => {
        expect(wrapper.find('.yoo-quiz__switch-card').exists()).toBe(true)
      })
      it('Does not include class: .yoo-quiz__switch-card when array answers does not has lenght', async () => {
        await wrapper.setProps({
          answers: [],
          question: {
            id: 'covid-cl1',
            text: {
              ptBR: 'Marque os sintomas sentidos nas últimas horas'
            },
            visible: true,
            type: 'check',
            answers: []
          }
        })
        expect(wrapper.find('.yoo-quiz__switch-card').exists()).toBe(false)
      })
    })
  }) // describe Props

  describe('Events', () => {
    describe('Click', () => {
      it('Emits Click Event', async () => {
        await wrapper.find('.yoo-quiz__switch-card').vm.$emit('response')
        expect(wrapper.emitted()).toHaveProperty('tapChoice')
      })
    })
  }) // describe Events
})
