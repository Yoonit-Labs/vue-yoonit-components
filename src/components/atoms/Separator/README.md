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

<img src="../../../../public/readme-img/separator.png" alt="Example for separator component">

### Props
| Parameter | Type    | Default     | Valid values                                            | Description                                 | Required
|-----------|---------|-------------|---------------------------------------------------------|---------------------------------------------|---------
| `fill`    | String  | **default** | <ul><li>default</li><li>primary</li><li>danger</li><ul> | Sets color for the separator                | false
| `fontSize`| String  | **md**      | <ul><li>tn</li><li>xs</li><li>sm</li><li>md</li><li>lg</li><li>xl</li><li>hg</li><ul> | Sets fontsize for the separator | false
| `text`    | String  |             | Any string                                              | Set text for the separator                  | false

#

 #### [**Next component**](../Stepper/README.md) :arrow_forward:
 
 #### :arrow_backward: [**Previous component**](../SelectDate/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
