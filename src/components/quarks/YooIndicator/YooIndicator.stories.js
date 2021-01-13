import yooIndicator from './YooIndicator.vue'
import PropsConfig from './YooIndicator.config'

export default {
  title: 'Yoonit/Indicator',
  component: yooIndicator,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
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
  components: { yooIndicator },
  template:
    '<yoo-indicator v-bind="$props"></yoo-indicator>'
})

export const Custom = Template.bind({})
Custom.args = { text: 'Yoo Indicator test component' }

export const Default = Template.bind({})
Default.args = { text: '1' }

export const Primary = Template.bind({})
Primary.args = { text: '1', fill: 'primary' }

export const Light = Template.bind({})
Light.args = { text: '2', fill: 'light' }

export const Dark = Template.bind({})
Dark.args = { text: '10', fill: 'dark' }

export const Neutral = Template.bind({})
Neutral.args = { text: '5', fill: 'neutral' }
