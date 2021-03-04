# Yonnit Components

[Home](https://cyberlabs.ai/) | [Atoms](https://cyberlabs.ai/) | [Molecules](https://cyberlabs.ai/) | [Bosons](https://cyberlabs.ai/) | [Quarks](https://cyberlabs.ai/)

## YooFormGroup

The component renders a text input.

## Usage

To use the component, simply invoke by passing the information in your props.

### Input
`App.vue`
```vue
<template>
  <yoo-form-group
    label="Label"
    value=""
    :required="false"
    :disabled="false"
    validateOnDataInput
    placeholder="Placeholder"
  />
</template>
```

### Output

The output of the above code will be:

<img src="../../../../public/readme-img/form-group-default.gif" alt="YooFormGroup" width="600">

### Valid

<img src="../../../../public/readme-img/form-group-valid.png" alt="YooFormGroup Valid" width="600">

### Invalid

<img src="../../../../public/readme-img/form-group-invalid.png" alt="YooFormGroup Invalid" width="600">

### Disabled

<img src="../../../../public/readme-img/form-group-disabled.png" alt="YooFormGroup Disabled" width="600">

### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|---------|
| **`label`** | String | `''` | Any String | Informs the label of the input. | false |
| **`value`** | String | `''` | Any String | Informs the value of the input. | false |
| **`required`** | Boolean | `''` | `true` or `false` | Tells whether value is required. | false |
| **`validateOnDataInput`** | Boolean | `false` | `true` or `false` | Informs if the value received in the value field is valid. | false |
| **`requiredRule`** | Function | `''` | i.e let result = result.length > 3 ? true : false | Reports the component validation rule | false |
| **`disabled`** | Boolean | `''` | `true` or `false` | Informs if the input is enabled. | false |


#### [**Next component**](../Header/README.md) :arrow_forward:

#### :arrow_backward: [**Previous component**](../Card/README.md)

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team

