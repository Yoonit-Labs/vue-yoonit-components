# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooCheckButton

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-check-button
    text="Yoo Checkbox"
    size="medium"
    textPosition="left" 
  />
  <yoo-check-button
    text="Yoo Checkbox"
    size="medium"
    textPosition="left" 
    :checked:"true"
  />
  <yoo-check-button
    text="Yoo Checkbox"
    size="medium"
    textPosition="left"
    :card="true"
  />
  <yoo-check-button
    text="Yoo Checkbox"
    size="medium"
    textPosition="left"
    :card="true"
    :disable="true"
  />
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/checkbox.png" alt="Example for checkbox" width="250">
<img src="../../../../public/readme-img/checkbox-card.png" alt="Example for Card" width="300">

### Props

| Parameter     | Type    | Default     | Valid values                                            | Description                                   | Required
|---------------|---------|-------------|---------------------------------------------------------|-----------------------------------------------|---------
| `size`        | String  | **medium** | <ul><li>small</li><li>medium</li><li>large</li><ul>     | Set the component size                        | false
| `tetPosition` | String  | **left** | <ul><li>left</li><li>right</li><ul>                     | Defines the position of the text in relation to the input | false
| `text`        | String  | ''          | Any string                                              | Defines the text for the component            | false
| `checked`     | Boolean | **false**   | true/false                                              | Defines the component as checked or not       | false
| `card`        | Boolean | **false**   | true/false                                              | Sets the component to be displayed as a card or not | false
| `disabled`    | Boolean | **false**   | true/false                                              | Disables the checkbutton                      | false

#

 #### [**Next component**](../Icon/README.md) :arrow_forward:

 #### :arrow_backward: [**Previous component**](../Button/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
