# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooSeparator

The component is used as a separation strip between components on the screen

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-separator
    fill="default"
    text="Yoo Warning test component"
    fontSize="md"
  />
  <yoo-separator
    fill="primary"
    text="Yoo Warning test component"
    fontSize="sm"
  />
  <yoo-separator
    fill="danger"
    text="Yoo Warning test component"
    fontSize="sm"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/separator.png">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| fill               | default, primary, danger                      | Sets color for the separator                                                |
| fontSize           | tn, xs, sm, md, lg, xl, hg                    | Sets fontsize for the separator                                             |
| text               | String                                        | Set text for the separator                                                  |


## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
