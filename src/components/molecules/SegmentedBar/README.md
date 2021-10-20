[<img src="../../../assets/yoonit-icon.jpg" width="150">](https://github.com/Yoonit-Labs/vue-yoonit-components)

# Vue Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#quarks)

## YooSegmentedBar

The component is used to render a segmented navigation bar.

## Usage

To use the component, you must inform the na prop list the number of items that will be rendered.

### Input
`App.vue`
```vue
<template>
  <yoo-segmented-bar
    :list='[{"title":"First"},{"title":"Second"},{"title":"Third"}]'
    :currentIndex="2"
  />
</template>
```

### Output

The output of the above code will be:

<img src="../../../../public/readme-img/segmented-bar.gif" alt="YooSegmentedBar" width="600px">

### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|---------|
| **`list`** | Array | `''` | Array of objects i.e [{"title": "First"}, {"title": "Second"}] | List of items to be rendered. | true | 
| **`currentIndex`** | Number | `0` | Any number respecting the item limit | Item that is selected. | false |

#### [**Next component**](../SelectButton/README.md) :arrow_forward:

#### :arrow_backward: [**Previous component**](../QuizQuestion/README.md)
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
