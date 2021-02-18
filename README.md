[<img src="https://raw.githubusercontent.com/Yoonit-Labs/nativescript-yoonit-camera/development/logo_cyberlabs.png" width="300">](https://cyberlabs.ai/)

# Vue Yoonit Components

![Version](https://img.shields.io/npm/v/@yoonit/nativescript-camera?color=lightgrey&style=for-the-badge&logo=npm)
![Downloads](https://img.shields.io/npm/dm/@yoonit/nativescript-camera?color=lightgrey&logo=npm&style=for-the-badge)
![Vue](https://img.shields.io/badge/Vue.js-35495E?color=lightgrey&style=for-the-badge&logo=vue.js)
![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)
![MIT license](https://img.shields.io/npm/l/@yoonit/nativescript-camera?color=lightgrey&style=for-the-badge)

A Vue lib to provide:
- 28 Vue Components to create interfaces
- Unit tests with 100% coverage
- Standardized code
- Consistency between interfaces

## Installation

```javascript
npm i -s @yoonit/vue-components
```

## Usage

To see and interact with all components, see the project storybook

```javascript
npm run storybook
```

#### VueJS Plugin
`main.js`
```javascript
import Vue from 'vue'
import YoonitVueComponents from '@yoonit/vue-components'

Vue.use(YoonitVueComponents)
```

After that, you can access each component by calling it in the html template

#### YooButton Component Example
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
[<img src="https://github.com/Yoonit-Labs/vue-yoonit-components/blob/development/public/readme-img/button-example.png" width="400">](https://cyberlabs.ai/)


## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
