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

export const answers = [
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
    status: true,
    override: false
  },
  {
    id: 'ans3',
    text: {
      enUS: 'Maybe'
    },
    weight: 4,
    status: true,
    override: true
  }
]
export const questionCheck = {
  id: 'yoonit-cl1',
  text: {
    enUS: 'Are you enjoying using Yoonit Components'
  },
  visible: true,
  type: 'check',
  answers
}

export const questionAnswersNull = {
  id: 'yoonit-cl1',
  text: {
    enUS: 'Are you enjoying using Yoonit Components'
  },
  visible: true,
  type: 'check',
  answers: []
}
export const questionRadio = {
  id: 'yoonit-cl1',
  text: {
    enUS: 'Are you enjoying using Yoonit Components'
  },
  visible: true,
  type: 'radio',
  answers
}
