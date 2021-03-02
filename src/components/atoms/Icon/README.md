# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooIcon

The component is used to render an icon on the screen based on fontawesome

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-icon 
    icon="cog"
    iconStyle="solid"
    size="md"
    fill="primary"
   />
  <yoo-icon 
    icon="cog"
    iconStyle="solid"
    size="lg"
    fill="primary"
   />
  <yoo-icon 
    icon="cog"
    iconStyle="solid"
    size="xl"
    fill="primary"
   />
  <yoo-icon 
    icon="cog"
    iconStyle="solid"
    size="hg"
    fill="primary"
   />
</template>
```
### Output

The output of the above code will be:


<img src="../../../../public/readme-img/icon.png" width="200">


### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|--
| `iconStyle`    | String | **regular** | <ul><li>regular</li><li>solid</li><ul> | Sets the icon type to filled or bordered only | false
| `size`    | String | **lg** | <ul><li>tn</li><li>sm</li><li>md</li><li>lg</li><li>xl</li><li>hg</li><ul> | Set the component size | false
| `fill`    | String | **neutral** | <ul><li>primary</li><li>danger</li><li>neutral</li><li>dark</li><li>white</li><li>black</li><ul> | Sets color for the icon | false
| `icon`    | String |  |  | Sets an icon on the button based on fontawesome | false

#

 #### [**Next component**](../SelectDate/README.md) :arrow_forward:
 
 #### :arrow_backward: [**Previous component**](../CheckButton/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
