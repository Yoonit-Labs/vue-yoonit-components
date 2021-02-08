import yooQuizQuestion from '@/components/molecules/QuizQuestion/QuizQuestion.vue'
import PropsConfig from '@/components/molecules/QuizQuestion/QuizQuestion.config'

var answers = [
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

export default {
  title: 'Yoonit/YooQuizQuestion',
  component: yooQuizQuestion,
  argTypes: {
    textPosition: {
      control: {
        type: 'select',
        options: PropsConfig.textPosition.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooQuizQuestion },
  template:
    '<yoo-quiz-question v-bind="$props"></yoo-quiz-question>'
})

export const Custom = Template.bind({})
Custom.args = {
  question: {
    id: 'covid-cl1',
    text: {
      ptBR: 'Marque os sintomas sentidos nas últimas horas'
    },
    required: true,
    visible: true,
    type: 'check',
    answers: answers
  },
  answers: answers
}

export const Default = Template.bind({})
Default.args = {
  question: {
    id: 'covid-cl1',
    text: {
      ptBR: 'Marque os sintomas sentidos nas últimas horas'
    },
    required: true,
    visible: true,
    type: 'check',
    answers: answers
  },
  answers: answers
}
