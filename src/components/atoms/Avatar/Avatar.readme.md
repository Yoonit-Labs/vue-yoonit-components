# Yonnit Components

[Home](https://cyberlabs.ai/) | [Atoms](https://cyberlabs.ai/) | [Molecules](https://cyberlabs.ai/) | [Bosons](https://cyberlabs.ai/) | [Quarks](https://cyberlabs.ai/)

## YooAvatar

The component is used to illustrate a user and displays the profile picture or the initials of the word

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
`App.vue`
```vue
<template>
  <yoo-avatar
    size="small"
    fill="primary"
    text="Yoo Avatar"
    textColor="light"
  />
  <yoo-avatar
    size="medium"
    fill="primary"
    text="Yoo Avatar"
    textColor="light"
  />
  <yoo-avatar
    size="large"
    fill="primary"
    text="Yoo Avatar"
    textColor="light"
  />
  <yoo-avatar
    size="xlarge"
    fill="primary"
    text="Yoo Avatar"
    textColor="light"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/avatar.png" width="300">
<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/avatar-image.png" width="300">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| size               | small, medium, large, xlarge                  | Set the component size                                                      |
| fill               | primary, danger, light, dark, neutral         | If the image prop is empty, set a color for the avatar background           |
| textColor          | light, dark                                   | If the image prop is empty, define a color for the text                     |
| text               | string                                        | Set a text for the avatar to take the initials                              |
| image              | require('[pathImage]') or external path image | Set a text for the avatar to take the initials                              |

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
