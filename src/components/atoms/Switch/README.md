# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooSwitch

Component used to change the state of an item

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-switch
    size="medium"
    :initialValue="false"
  />
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/switch.gif" alt="Example for Switch component">

### Props

| Parameter     | Type    | Default     | Valid values                                            | Description                                   | Required
|---------------|---------|-------------|---------------------------------------------------------|-----------------------------------------------|---------
| `size`        | String  | **medium**  | <ul><li>small</li><li>medium</li><li>large</li><ul>     | Sets size for the switch button               | false
| `initialValue`| Boolean | **false**   | true/false                                              | Sets the initial state of the switch (enabled / disabled) | false

#
 
 #### :arrow_backward: [**Previous component**](../Stepper/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
