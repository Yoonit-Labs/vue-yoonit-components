import yooButton from './Button.vue'

export default {
  title: 'Yoo/Button',
  component: yooButton,
  argTypes: {
    variation: {
      control: {
        type: 'select',
        options: [
          'base',
          'outline',
          'clear'
        ]
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooButton },
  template:
    '<yoo-button v-bind="$props"></yoo-button>'
})

export const Default = Template.bind({})
Default.args = { text: "Yoo Button" }
