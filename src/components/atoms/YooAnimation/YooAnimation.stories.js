import YooAnimation from './YooAnimation.vue'

export default {
  title: 'Yoonit/YooAnimation',
  component: YooAnimation
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooAnimation },
  template:
    '<yoo-icon v-bind="$props"></yoo-avatar>'
})

export const Custom = Template.bind({})
Custom.args = { height: '50', width: '50' }