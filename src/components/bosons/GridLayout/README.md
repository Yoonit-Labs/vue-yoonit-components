# Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooGridLayout

Component used to assist in building layout based on Grid. You can align your content and organize in rows or columns in a simple way and still have some resources that will help you in the arrangement of the elements in your application.

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-grid-layout
    rows="auto"
    cols="auto"
    gap="10px"
    height="300px"
    horizontalAlign="stretch"
    verticalAlign="stretch"
  >
    <div row="1" col="1/3">Item 1</div>
    <div row="1" col="3">Item 2</div>
    <div row="1" col="4">Item 3</div>
    <div row="2" col="1">Item 4</div>
    <div row="2" col="2">Item 5</div>
    <div row="2" col="3">Item 6</div>
    <div row="2" col="4">Item 7</div>
    <div row="3" col="1">Item 8</div>
    <div row="3" col="2/5">Item 9</div>
    <div row="4/6" col="1/3">Item 10</div>
    <div row="4/6" col="3/5">Item 11</div>
  </yoo-grid-layout>
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/gridlayout.png" alt="Example for FlexLayout component">

### Props

| Parameter     | Type    | Default     | Valid values                                            | Description                                   | Required
|---------------|---------|-------------|---------------------------------------------------------|-----------------------------------------------|---------
| `rows`        | String  |             | "1, 100px, 1, auto"                                     | Defines the configuration of the lines. Accepts unit of measure (`1fr`,` 100px`), numbers (being converted to measure 'fr', and automatic value representative (`*`, `0` or` auto`) | true
| `cols`        | String  |             | "1, 100px, 1, auto" | Defines the configuration of the columns. Accepts unit of measure (`1fr`,` 100px`), numbers (being converted to measure 'fr', and automatic value representative (`*`, `0` or` auto`) | true
| `gap`         | String  | **0px**     | Any valid HTML unit of measure                          | Defines the spacing between cells             | false
| `width`       | String  |             | Any valid HTML unit of measure                          | Determines the length of the component        | false
| `height`      | String  |             | Any valid HTML unit of measure                          | Determines the height of the component        | false
| `horizontalAlign` | String | **stretch** | <ul><li>start</li><li>end</li><li>center</li><li>stretch</li><li>space-around</li><li>space-between</li><li>space-evenly</li></ul> | Determines the alignment of the component's items on the X axis | false
| `verticalAlign` | String | **stretch** | <ul><li>start</li><li>end</li><li>center</li><li>stretch</li><li>space-around</li><li>space-between</li><li>space-evenly</li></ul> | Determines the alignment of the component's items on the Y axis | false

### Child

Each child element of the YooGridLayout can be positioned:

- row="start/end"
- col="start/end"

i.e `<div row="1" col="1/3"> Content </div>`

#
 
 #### [**Next component**](../ScrollView/README.md) :arrow_forward:
 
 #### :arrow_backward: [**Previous component**](../FlexLayout/README.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
