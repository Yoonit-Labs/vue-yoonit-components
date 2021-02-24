# Yonnit Components

[**Home**](https://cyberlabs.ai/) | [**Atoms**](https://cyberlabs.ai/) | [**Molecules**](https://cyberlabs.ai/) | [**Bosons**](https://cyberlabs.ai/) | [**Quarks**](https://cyberlabs.ai/)

## Button

The component is used to illustrate a user and displays the profile picture or the beginning of the word

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
`App.vue`
```vue
<template>
  <yoo-button
    variation="base"
    buttonSize="normal"
    fill="primary"
    animation="none"
    text="Button Base"
  />
  
  <yoo-button
    variation="outline"
    buttonSize="normal"
    fill="primary"
    animation="none"
    text="Button Outline"
  />
  
  <yoo-button
    variation="base"
    buttonSize="normal"
    fill="danger"
    icon="check"
    iconPosition="left"
    iconSize="normal"
    iconStyle="solid"
    animation="none"
    text="Button danger + icon check"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/public/readme-img/button-example.png" width="400">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| variation          | base, outline, clear                          | Sets variation for the button - Base (filled) / Outline (bordered, colorless) / Clear (Borderless and colorless)|
| buttonSize         | normal, short, xs                             | Sets size for the button                                                    |
| fill               | primary, danger, light, dark                  | Sets color for the button                                                   |
| iconPosition       | left, right                                   | Defines the position of the icon in relation to the button text             |
| iconSize           | small, normal, large                          | When there is an icon, set the icon size                                    |
| iconStyle          | regular, solid                                | Sets the icon type to filled or bordered only                               |
| animation          | none, pulse                                   | Set a pulse animation to the button                                         |
| iconCustomColor    | Hexadecimal color                             | Sets custom color for the icon                                              |
| text               | String                                        | Set text for the button                                                     |
| icon               | String                                        | Sets an icon on the button based on fontawesome                             |
| disabled           | true/false                                    | Disables the button                                                         |
| hover              | true/false                                    | Enables the style change on the button hover                                |
| active             | true/false                                    | Enables the style change in the button active                               |

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
