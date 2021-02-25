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


<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/icon.png" width="200">


### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| iconStyle          | regular, solid                                | Sets the icon type to filled or bordered only                               |
| size               | small, medium, large                          | Set the component size                                                      |
| fill               | primary, danger, neutral, dark, white, black  | Sets color for the icon                                                     |
| icon               | String                                        | Sets an icon on the button based on fontawesome                             |

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
