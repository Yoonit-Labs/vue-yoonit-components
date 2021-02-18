export const answers = [
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
    status: true,
    override: true
  }
]
export const questionCheck = {
  id: 'covid-cl1',
  text: {
    ptBR: 'Marque os sintomas sentidos nas últimas horas'
  },
  visible: true,
  type: 'check',
  answers
}

export const questionAnswersNull = {
  id: 'covid-cl1',
  text: {
    ptBR: 'Marque os sintomas sentidos nas últimas horas'
  },
  visible: true,
  type: 'check',
  answers: []
}
export const questionRadio = {
  id: 'covid-cl1',
  text: {
    ptBR: 'Marque os sintomas sentidos nas últimas horas'
  },
  visible: true,
  type: 'radio',
  answers
}
