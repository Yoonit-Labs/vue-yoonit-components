[<img src="../../../assets/yoonit-icon.jpg" width="150">](https://github.com/Yoonit-Labs/vue-yoonit-components)

# Vue Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#quarks)

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
    :question='{"id":"yoonit-cl1","text":{"enUS":"Are you enjoying using Yoonit Components"},"visible":true,"type":"radio","answers":[{"id":"ans1","text":{"enUS":"Yes"},"weight":3},{"id":"ans2","text":{"enUS":"No"},"weight":3,"status":true,"override":false}]}'
    :answers='[{"id":"ans1","text":{"enUS":"Yes"},"weight":3},{"id":"ans2","text":{"enUS":"No"},"weight":3,"status":true,"override":false}]'
  />
</template>
```

### Output

The output of the above code will be:

<img src="../../../../public/readme-img/quiz-questions.png" alt="YooQuizQuestion" width="500">

### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|---------|
| **`textPosition`** | String | `left` | <ul><li>left</li></ul><ul><li>right</li></ul> | Position of text in the component. | false |
| **`question`** | Object | `''` | i.e {"id":"yoonit-cl1","text":{"enUS":"Are you enjoying using Yoonit Components"},"visible":true,"type":"radio","answers":[{"id":"ans1","text":{"enUS":"Yes"},"weight":3},{"id":"ans2","text":{"enUS":"No"},"weight":3,"status":true,"override":false}]} | Object with the questions that will be rendered. | true |

#### [**Next component**](../SegmentedBar/README.md) :arrow_forward:

#### :arrow_backward: [**Previous component**](../PostCard/README.md)
#
## To contribute and make it better

Clone the repo, change what you want and send PR.
For commit messages we use <a href="https://www.conventionalcommits.org/">Conventional Commits</a>.

Contributions are always welcome!

<a href="https://github.com/Yoonit-Labs/vue-yoonit-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Yoonit-Labs/vue-yoonit-components" />
</a>
  
---  

Code with ❤ by the [**Yoonit**](https://yoonit.dev/) Team
