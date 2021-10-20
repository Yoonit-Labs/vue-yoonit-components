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

import yooQuizQuestion from '@/components/molecules/QuizQuestion/QuizQuestion.vue'
import PropsConfig from '@/components/molecules/QuizQuestion/QuizQuestion.config'
import * as ConfigMocks from '@/components/molecules/QuizQuestion/QuizQuestion.forms'

var answers = [
  {
    id: 'ans1',
    text: {
      enUS: 'Yes'
    },
    weight: 3
  },
  {
    id: 'ans2',
    text: {
      enUS: 'No'
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
  question: ConfigMocks.questionRadio,
  answers: ConfigMocks.answers
}

export const CheckButton = Template.bind({})
CheckButton.args = {
  question: ConfigMocks.questionCheck,
  answers: answers
}
export const RadioButton = Template.bind({})
RadioButton.args = {
  question: ConfigMocks.questionRadio,
  answers: answers
}
