[<img src="../../../assets/yoonit-icon.jpg" width="150">](https://github.com/Yoonit-Labs/vue-yoonit-components)

# Vue Yoonit Components

[Home](https://github.com/Yoonit-Labs/vue-yoonit-components) | [Atoms](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#atoms) | [Molecules](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#molecules) | [Bosons](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#bosons) | [Quarks](https://github.com/Yoonit-Labs/vue-yoonit-components/blob/feature/readme/README.md#quarks)

## Animation

Component to make an animation using a json generated on the [**LottieFiles**](https://lottiefiles.com/) website


## Usage

To use the component, host a [**LottieFiles**](https://lottiefiles.com/) json file in your project, import the file into your template and send it as a prop to the animation component

### Input
`app.vue`
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

 #### :arrow_forward: [**Next component**](../Avatar/README.md)
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
