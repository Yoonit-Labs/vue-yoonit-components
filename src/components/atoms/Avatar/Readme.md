# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#quarks)

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

<img src="../../../../public/readme-img/avatar.png" width="300">
<img src="../../../../public/readme-img/avatar-image.png" width="300">

### Props

| Parameter    | Type    | Default | Valid values                                    | Description                                                      | Required |
|------------- |---------|---------|-------------------------------------------------|------------------------------------------------------------------|----------|
| `size`       | String  | **medium**  | small, medium, large, xlarge                | Set the component size                                           | false    |
| `fill`       | String  | **primary** | primary, danger, light, dark, neutral       | If the image prop is empty, set a color for the avatar background| false    |
| `textColor`  | String  | **light**  | light, dark                                  | If the image prop is empty, define a color for the text          | false    |
| `text`       | String  |  **''**    | tring                                        | Set a text for the avatar to take the initials                   | false    |
| `image`      | String  |  **''**    | require('[pathImage]') or external path image| Set a text for the avatar to take the initials                   | false    |

#

 #### :arrow_forward: [**Next component**](../Button/Readme.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
