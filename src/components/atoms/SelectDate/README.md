[<img src="../../../assets/yoonit-icon.jpg" width="150">](https://github.com/Yoonit-Labs/vue-yoonit-components)

# Vue Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#quarks)

## YooSelectDate

The component is used as a datetime picker

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-select-date 
    type="time"
    value="13:44" />

  <yoo-select-date 
    type="date" 
    locale="en-us"
    value="1998-09-15" />

  <yoo-select-date 
    type="date" 
    locale="pt-br"
    value="15/09/1998" />
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/selectdate-time.png" alt="Example for time type">
<img src="../../../../public/readme-img/selectdate-en.png" alt="Example for date type with english format">
<img src="../../../../public/readme-img/selectdate-br.png" alt="Example for date type with brazilian format">

### Props

| Parameter | Type | Default | Valid values | Description | Required |
|-----------|------|------------------------|--------------|-------------|--
| **`type`**    | String | **date** | <ul><li>date</li><li>time</li><ul> | Sets the type of the component | false
| **`value`**   | String | **Current Date** | Supported formats: <ul><li>YYYY-mm-dd</li><li>dd/mm/YYYY</li><li>HH:mm</li></ul> | Sets initial value to date or time | false
| **`locale`**  | String | **pt-br** | Any locale notation. Ex.: `en-us`, `pt-br` | Sets the locale for date | false

 #### [**Next component**](../Stepper/README.md) :arrow_forward:
 
 #### :arrow_backward: [**Previous component**](../Icon/README.md)
#
## To contribute and make it better

Clone the repo, change what you want and send PR.
For commit messages we use <a href="https://www.conventionalcommits.org/">Conventional Commits</a>.

Contributions are always welcome!

<a href="https://github.com/Yoonit-Labs/vue-yoonit-components/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Yoonit-Labs/vue-yoonit-components" />
</a>
  
---  

Code with ❤ by the [**Yoonit**](https://yoonit.dev/) Team
