# Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooIndicator

Component used to generate an indication icon

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-indicator 
    fill="danger" 
    size="normal" 
    :animation="true"
  />
  <yoo-indicator 
    fill="primary" 
    size="normal" 
    :animation="true"
    text="10"
  />
  <yoo-indicator 
    fill="dark" 
    size="normal" 
    :animation="true"
    text="20"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/indicator.gif">

### Props

| Parameter     | Type    | Default  | Valid values                              | Description                                    | Required |
|---------------|---------|----------|-------------------------------------------|------------------------------------------------|----------|
| `fill`        | String  | **danger**   | <ul><li>primary</li><li>danger</li><li>dark</li><li>light</li><li>neutral</li></ul> | 
Sets a color for the component  | false    |
| `size`        | String  | **dark** | <ul><li>small</li><li>medium</li><li>normal</li><li>large</li></ul>  | Sets a size for the component | false    |
| `text`        | String  | **''** | Any String   | Set text for the component | false    |
| `animation`   | Boolean | **true** | true/false  | Sets an animation for the component   | false     |

#

 #### :arrow_backward: [**Previous component**](../../TableCard/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
