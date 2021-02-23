[<img src="https://raw.githubusercontent.com/Yoonit-Labs/nativescript-yoonit-camera/development/logo_cyberlabs.png" width="300">](https://cyberlabs.ai/)

## Animation


Component to make an animation using a json generated on the [**LottieFiles**](https://lottiefiles.com/) website


## Usage

To use the component, host a lsonie json file in your project, import the file into your template and send it as a prop to the animation component

### Input
`main.vue`
```javascript
import * as animationData from '@/assets/animations/loading.json'
```
```vue
<template>
  <yoo-animation
    :options='animationData.default'
    height="100%"
    width="100%"
  />
</template>
```

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
