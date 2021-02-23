import YooAnimation from './Animation.vue'
import * as animationData from '@/assets/animations/loading.json'

export default {
  title: 'Yoonit/YooAnimation',
  component: YooAnimation
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooAnimation },
  template:
    '<yoo-animation v-bind="$props"></yoo-animation>'
})

export const Custom = Template.bind({})
Custom.args = { options: { animationData: animationData.default } }
