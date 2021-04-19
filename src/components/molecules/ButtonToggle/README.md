# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooButton

The component is used to render a toggle button, being possible to inform the number of buttons that will be rendered, being at least two.

## Usage

To use the component, simply invoke it in your template with the desired props.

### Input
`App.vue`
```vue
<template>
  <yoo-button-toggle
    :options='["Yoo Button Toggle","Yoo Button Toggle 1"," Yoo Button Toggle 2"]'
    :current="1"
  />
</template>
```

### Output

The output of the above code will be:

<img src="../../../../public/readme-img/button-toggle.png" alt="YooButtonToggle" width="900">

### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|---------|
| **`options`** | Array | `''` | i.e ['Yoo Button Toggle', 'Yoo Button Toggle 1'] | Set the number of buttons to be rendered and their. | true |
| **`current`** | Number | `0` | Any Number | Arrow which button is active. | false |

#### [**Next component**](../Card/README.md) :arrow_forward:
## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team