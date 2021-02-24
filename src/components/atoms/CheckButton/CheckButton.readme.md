# Yonnit Components

[Home](https://cyberlabs.ai/) | [Atoms](https://cyberlabs.ai/) | [Molecules](https://cyberlabs.ai/) | [Bosons](https://cyberlabs.ai/) | [Quarks](https://cyberlabs.ai/)
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

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/checkbox.png" width="250">
<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/checkbox-card.png" width="250">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| size               | small, medium, large                          | Set the component size                                                      |
| textPosition       | left, right                                   | Defines the position of the text in relation to the input                   |
| text               | string                                        | Defines the text for the component                                          |
| checked            | true/false                                    | Defines the component as checked or not                                     |
| card               | true/false                                    | Sets the component to be displayed as a card or not                         |
| disabled           | true/false                                    | Disables the checkbutton                                                    |

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
