import yooButtonToggle from './ButtonToggle.vue'
import PropsConfig from './ButtonToggle.config'

export default {
  title: 'Yoonit/YooButtonToggle',
  component: yooButtonToggle,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: PropsConfig.size.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooButtonToggle },
  template:
    '<yoo-button-toggle v-bind="$props"></yoo-button-toggle>'
})

export const Custom = Template.bind({})
Custom.args = { options: ['Yoo Button Toggle', 'Yoo Button Toggle 1'] }
