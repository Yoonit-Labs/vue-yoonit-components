# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooStepper

The component is used to create steps (numbers or dots).

This issues and receives next or previous commands that can be created by the user or using the YooPagination component that is responsible for receiving the navigation buttons

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-stepper
    counterType="number"
    :totalSteps="5"
  />
  <yoo-stepper
    counterType="dot"
    :totalSteps="5"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/stepper.png">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| counterType        | number, dot                                   | Sets the type of pagination the component will use                          |
| totalSteps         | Number                                        | Sets the total number of steps                                              |
| currentStep        | Number                                        | Set the current step                                                        |

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
