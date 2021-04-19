# Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooTableAttribute

Component used to create a advanced list item with attributes

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-table-attribute
    title="YooTableAttribute"
    titleWeight="medium"
    titleSize="md"
    detail="detail"
    detailFill="light"
    titleFill="black"
    :actionable="true"
    actionableType="button"
  />
  <yoo-table-attribute
    title="YooTableAttribute"
    titleWeight="medium"
    titleSize="md"
    detail="detail"
    detailFill="light"
    titleFill="black"
    :actionable="true"
    actionableType="check"
  />
  <yoo-table-attribute
    title="YooTableAttribute"
    titleWeight="medium"
    titleSize="md"
    detail="detail"
    detailFill="light"
    titleFill="black"
    :actionable="true"
    actionableType="switch"
    :wrap="true"
  />
  <yoo-table-attribute
    title="YooTableAttribute"
    titleWeight="medium"
    titleSize="md"
    detail="detail"
    detailFill="light"
    titleFill="black"
    iconFill="neutral"
    :actionable="true"
    actionableType="switch"
    icon="cog"
    iconStyle="solid"
  />
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/table-attributes.png">

### Props

| Parameter          | Type    | Default     | Valid values                              | Description                                    | Required |
|--------------------|---------|-------------|-------------------------------------------|------------------------------------------------|----------|
| `fill`             | String  | **none**    | <ul><li>none</li><li>default</li><li>primary</li><li>danger</li><ul> | Sets color for the separator | false    |
| `title`            | String  | **''**      | Any String                                | Sets the component item title                  | true     |
| `titleFill`        | String  | **dark**    | <ul><li>primary</li><li>danger</li><li>dark</li><li>light</li><li>black</li></ul> | Sets a color for title | false    |
| `titleWeight`      | String  | **medium**  | <ul><li>regular</li><li>medium</li><li>semi-bold</li><li>bold</li></ul> | Set a font weight | false   |
| `titleSize`        | String  | **md**      | <ul><li>sm</li><li>md</li><li>lg</li><li>xl</li></ul> | Set a size for the title           | false    |
| `detail`           | String  |   **''**    | Any String                                | Set text to the right of the component         | false    |
| `detailFill`       | String  | **light**   | <ul><li>primary</li><li>danger</li><li>dark</li><li>light</li><li>black</li><li>white</li></ul> | Set a color to the detail  | false    |
| `actionable`       | Boolean | **false**   | true/false                                | Shows an actionable button on the right        | false    |
| `actionableType`   | String  | **button**  | <ul><li>button</li><li>check</li><li>switch</li></ul> | Sets the type of the actionable button   | false    |
| `actionableDisable`| Boolean | **false**   | true/false                                | Sets the actionable button to disabled         | false    |
| `actionableActive` | Boolean | **false**   | true/false                                | Sets the actionable button to active           | false    |
| `buttonTextSize`   | String  | **md**      | <ul><li>xs</li><li>sm</li><li>md</li><li>lg</li><li>xl</li></ul> | Set a size of the button text | false    |
| `buttonIcon`       | String  | **chevron-right** | Any icon related to fontawesome     | Sets an icon on the button based on fontawesome| false    |
| `icon`             | String  |   **''**    | Any icon related to fontawesome           | Sets an icon before title based on fontawesome | false    |
| `iconFill`         | String  | **neutral** | <ul><li>primary</li><li>danger</li><li>neutral</li><li>light</li><li>dark</li><li>black</li><li>white</li></ul> | Sets a color for the icon | false    |
| `iconStyle`        | String  | **solid**   | <ul><li>solid</li><li>regular</li>        | Sets the icon type to filled or bordered only  | false    |
| `separator`        | Boolean | **false**   | true/false                                | Shows a separator line below                   | false    |
| `wrap`             | Boolean | **false**   | true/false                                | When enabled it shows the detail below the title | false  |
#
 #### :arrow_backward: [**Previous component**](../SelectButton/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
