# Yonnit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooNotify

Component used to display a notification space to the user

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-notify
    notifyFill="light"
    notifyText="This is an example text from YooNotify"
    notifyTextColor="dark"
    notifyTextSize="md"
    :showIndicator="false"
    :showIcon="false"
    :closeButton="false"
  />
  <yoo-notify
    notifyFill="light"
    notifyText="This is an example text from YooNotify"
    notifyTextColor="dark"
    notifyTextSize="md"
    :showIndicator="false"
    :showIcon="false"
    :closeButton="true"
  />
  <yoo-notify
    notifyFill="light"
    notifyText="This is an example text from YooNotify"
    notifyTextColor="dark"
    notifyTextSize="md"
    :showIndicator="true"
    :showIcon="false"
    :closeButton="false"
  />
  <yoo-notify
    notifyFill="light"
    notifyText="This is an example text from YooNotify"
    notifyTextColor="dark"
    notifyTextSize="md"
    :showIndicator="false"
    :showIcon="true"
    icon="cog"
    iconStyle="solid"
    iconColor="dark"
  />
  <yoo-notify
    notifyFill="light"
    notifyText="This is an example text from YooNotify"
    notifyTextColor="dark"
    notifyTextSize="md"
    :showIndicator="true"
    :showIcon="false"
    :closeButton="true"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/notify.png">

### Props

| Name               | Input/Format                                  | Description                                                                 |
| -                  | -                                             | -                                                                           |
| title              | String                                        | Sets the component item title                                               |
| notifyText         | String                                        | Sets the component item text                                                |
| notifyTextColor    | dark, light, danger                           | Sets a color for component text                                             |
| notifyTextSize     | tn, xs, sm, md, lg, xl, hg                    | Set a size for the component text                                           |
| notifyFill         | light, primary, danger                        | Set a background color                                                      |
| showIndicator      | true/false                                    | Shows the indicator component                                               |
| indicatorSize      | small, medium, normal, large                  | Set a size for the indicator                                                |
| indicatorFill      | primary, danger, light, dark, neutral         | Set a color for the indicator                                               |
| showIcon           | true/false                                    | When there is no indicator, enable the icon                                 |
| icon               | String                                        | Sets an icon on the button based on fontawesome                             |
| iconColor          | light, dark                                   | Sets a color for the icon                                                   |
| iconStyle          | solid, regular                                | Sets the icon type to filled or bordered only                               |
| closeButton        | true/false                                    | Sets a close button for the component                                       |
| buttonColor        | Hexadecimal                                   | Set a color to the close button                                             |


## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
