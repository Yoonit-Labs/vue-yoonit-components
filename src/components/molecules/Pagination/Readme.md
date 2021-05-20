# Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/README.md#quarks)

## YooPagination

Component used to perform the pagination of the items, and uses the stepper atom as a dependency

## Usage

To use the component, simply invoke it in your template with the desired props

### Input
```vue
<template>
  <yoo-pagination
    :totalPages="5"
    :currentPage="0"
    counterType="dot"
    variationButtonNext="base"
  />
  <yoo-pagination
    :totalPages="5"
    :currentPage="0"
    counterType="dot"
    variationButtonNext="outline"
  />
  <yoo-pagination
    :totalPages="5"
    :currentPage="0"
    counterType="number"
    variationButtonNext="base"
  />
  <yoo-pagination
    :totalPages="5"
    :currentPage="0"
    counterType="dot"
    nextButton="Next"
    variationButtonNext="base"
  />
  <yoo-pagination
    :totalPages="5"
    :currentPage="0"
    counterType="dot"
    variationButtonNext="base"
    nextButton="Next"
    :disableNextAction="true"
  />
</template>
```
### Output

The output of the above code will be:


### Props

| Parameter               | Type    | Default | Valid values                      | Description                               | Required |
|-------------------------|---------|---------|-----------------------------------|-------------------------------------------|----------|
| `totalPages`          | Number  |   -     | Any number greater than zero      | Set the total number of pages             | true     |
| `currentPage`         | Number  |   0     | Any number less than totalPages   | Set the current page                      | false    |
| `counterType`         | String  | 'dot'   | <ul><li>dot</li><li>number</li></ul> | Set the type of page                      | false    |
| `variationButtonNext` | String  | 'base'  | <ul><li>base</li><li>outline</li></ul> | Set the next button variation             | false    |
| `lastButton`          | String  |   ''    | Any String                        | Set text to the last button               | false    |
| `nextButton`          | String  |   ''    | Any String                        | Set text to the next button               | false    |
| `disableFirstAction`  | Boolean |  false  | true or false                     | Disables the first button                 | false    |
| `disableNextAction`   | Boolean |  false  | true or false                     | Disables the next button                  | false    |
| `disableLastAction`   | Boolean |  false  | true or false                     | Disables the last button                  | false    |

#

 #### [**Next component**](../Notify/Notify.readme.md) :arrow_forward:

 #### :arrow_backward: [**Previous component**](../PostCard/PostCard.readme.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
