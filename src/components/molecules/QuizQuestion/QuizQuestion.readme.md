# Yonnit Components

[Home](https://cyberlabs.ai/) | [Atoms](https://cyberlabs.ai/) | [Molecules](https://cyberlabs.ai/) | [Bosons](https://cyberlabs.ai/) | [Quarks](https://cyberlabs.ai/)

## YooQuizQuestions

The component renders a list of options to be selected.

## Usage

To use the component, simply invoke by passing the information in your props, question and answers.

### Input
`App.vue`
```vue
<template>
  <yoo-quiz-question
    textPosition="left"
    :question='{"id":"covid-cl1","text":{"ptBR":"Marque os sintomas sentidos nas últimas horas"},"visible":true,"type":"radio","answers":[{"id":"ans1","text":{"ptBR":"Cansaço"},"weight":3},{"id":"ans2","text":{"ptBR":"Corrimento Nasal (Coriza)"},"weight":3,"status":true,"override":true}]}'
    :answers='[{"id":"ans1","text":{"ptBR":"Cansaço"},"weight":3},{"id":"ans2","text":{"ptBR":"Corrimento Nasal (Coriza)"},"weight":3,"status":true,"override":true}]'
  />
</template>
```

### Output

The output of the above code will be:

<img src="../../../../public/readme-img/quiz-questions.png" alt="YooQuizQuestion" width="800">

### Checkbox

<img src="../../../../public/readme-img/quiz-questions-checkbox.png" alt="YooQuizQuestion" width="800">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| textPosition       | left, right                                   | Position of text in the component                                           |
| question           | object                                        | Object with the questions that will be rendered                             |     

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team

