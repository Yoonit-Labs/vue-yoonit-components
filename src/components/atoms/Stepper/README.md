# Yoonit Components

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

<img src="../../../../public/readme-img/stepper.png" alt="Example for YooStepper">

### Props

| Parameter     | Type    | Default     | Valid values                         | Description                                        | Required
|---------------|---------|-------------|--------------------------------------|----------------------------------------------------|---------
| `counterType` | String  | **number**  | <ul><li>number</li><li>dot</li><ul>  | Sets the type of pagination the component will use | false
| `totalSteps`  | Number  | **1**       | Any positive number                  | Sets the total number of steps                     | false
| `currentStep` | Number  | **0**       | Any positive number                  | Set the current step                               | false

#

 #### [**Next component**](../Switch/README.md) :arrow_forward:
 
 #### :arrow_backward: [**Previous component**](../Separator/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
