# Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooDropDown

The component is used as a datetime picker

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-dropdown
    :options='[{"label":"BRAZIL","value":"1"},{"label":"UNITED STATES","value":"2"},{"label":"ARGENTINA","value":3},{"label":"PORTUGAL","value":4}]'
    :selected='{"label":"BRAZIL","value":"1"}'
    size="medium"
  />
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/dropdown_medium.gif">

### Small

<img src="../../../../public/readme-img/dropdown_small.gif">

### Large

<img src="../../../../public/readme-img/dropdown_large.gif">

### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|---------|
| **`size`** | String | `medium` | `small`, `medium` or `large` | Reports the size of the component. | false |
| **`options`** | Array | `''` | i.e options: [{ label: 'BR', value: '1' }, { label: 'US', value: '2' }] | Informs the options that will be rendered | true |
| **`selected`** | Object | `''` | i.e selected: { label: 'BR', value: '1' } | Reports the option selected in the dropdown | false |

#

 #### [**Next component**](../Icon/README.md) :arrow_forward:
 
 #### :arrow_backward: [**Previous component**](../CheckButton/README.md)

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
