# Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooCard

Component used for card creation

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
 <yoo-card
    title="Yoo Card"
    subtitle="Test"
  />
  <yoo-card
    title="Yoo Card"
    subtitle="Test"
    fill="white"
    iconSize="md"
    iconFill="neutral"
    iconStyle="solid"
    appIndicatorFill="danger"
  />
</template>
```
### Output

The output of the above code will be:

<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/public/readme-img/postcard.png">

### Props

| Parameter          | Type    | Default    | Valid values                              | Description                                    | Required |
|--------------------|---------|------------|-------------------------------------------|------------------------------------------------|----------|
| `title`            | String  | **''**     | Any String                                | Sets the component item title                  | false    |
| `subtitle`         | String  | **''**     | Any String                                | Sets the component item text                   | false    |
| `fill`             | String  | **dark**   | <ul><li>white</li><li>primary</li><li>danger</li><li>neutral</li><li>light</li><li>dark</li></ul> | Sets a color for background component   | false    |
| `showIndicator`    | Boolean | **true**   | true/false                                | Shows the indicator component                  | false    |
| `appIndicatorFill` | String  | **danger** | <ul><li>primary</li><li>danger</li> <li>light</li> <li>dark</li> <li>neutral</li>     | Set a color for the indicator                  | false    |
| `icon`             | String  | **''**     | Any icon related to fontawesome           | Sets an icon on the button based on fontawesome| false    |
| `iconFill`         | String  | **dark**   | <ul><li>white</li><li>primary</li><li>danger</li><li>neutral</li><li>light</li><li>dark</li></ul>           | Sets a color for the icon                      | false    |
| `iconSize`         | String  | **md**     | <ul><li>tn</li><li>xs</li><li>sm</li><li>md</li><li>lg</li><li>xl</li><li>hg</li></ul>           | Sets a color for the icon                      | false    |
| `iconStyle`        | String  | **solid**  | <ul><li>solid</li><li>regular</li>        | Sets the icon type to filled or bordered only  | false    |

#

 #### [**Next component**](../FormGroup/README.md) :arrow_forward:

 #### :arrow_backward: [**Previous component**](../ButtonToggle/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
