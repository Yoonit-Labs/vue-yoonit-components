[<img src="https://raw.githubusercontent.com/Yoonit-Labs/nativescript-yoonit-camera/development/logo_cyberlabs.png" width="300">](https://cyberlabs.ai/)

## Animation


Component to make an animation using a json generated on the [**LottieFiles**](https://lottiefiles.com/) website


## Usage

To use the component, host a [**LottieFiles**](https://lottiefiles.com/) json file in your project, import the file into your template and send it as a prop to the animation component

### Input
`main.vue`
```javascript
import * as animationData from '@/assets/animations/loading.json'
```
```vue
<template>
  <yoo-animation
    :lottieOptions='animationData.default'
    height="100%"
    width="100%"
  />
</template>
```
### Output

The output of the above code will be:

<img src="../../../../public/readme-img/animation.gif" width="300">

### Props

| Parameter      | Type    | Default  | Valid values                                         | Description                              | Required |
|----------------|---------|----------|------------------------------------------------------|------------------------------------------|----------|
| `lottieOptions`| Object  | **''**   | A json object from lottieFiles                       | Set animation options through an object  | true     |
| `height`       | String  | **100%** | Any string that defines a size, i.e. '100%', '20px'  | Sets component height                    | false    |
| `width`        | String  | **100%** | Any string that defines a size, i.e. '100%', '20px'  | Sets component width                     | false    |

#

 #### :arrow_forward: [**Next component**](../Avatar/Readme.md)

#

## To contribute and make it better

Clone the repo, change what you want and send PR.

Contributions are always welcome!

---

Code with ❤ by the [**Cyberlabs AI**](https://cyberlabs.ai/) Front-End Team
