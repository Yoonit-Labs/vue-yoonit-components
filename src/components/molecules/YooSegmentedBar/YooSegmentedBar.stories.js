import yooSegmentedBar from './YooSegmentedBar.vue'

export default {
  title: 'Yoonit/YooSegmentedBar',
  component: yooSegmentedBar,
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooSegmentedBar },
  template:
    '<yoo-segmented-bar v-bind="$props"></yoo-segmented-bar>'
})

export const Custom = Template.bind({})
Custom.args = { list: [{ title: 'First' }, { title: 'Second' }] }
