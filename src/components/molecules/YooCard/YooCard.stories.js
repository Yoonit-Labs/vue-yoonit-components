import YooCard from './YooCard.vue'
import PropsConfig from './YooCard.config'

export default {
  title: 'Yoonit/YooCard',
  component: YooCard,
  argTypes: {
    justifySlotContent: {
      control: {
        type: 'select',
        options: PropsConfig.justifySlotContent.options
      }
    },
    borderFill: {
      control: {
        type: 'select',
        options: PropsConfig.borderFill.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooCard },
  template:
    '<yoo-card v-bind="$props"></yoo-card>'
})

export const Custom = Template.bind({})
Custom.args = { title: 'YooCard', subtitle: 'Test' }

export const Neutral = Template.bind({})
Neutral.args = { title: 'YooCard', subtitle: 'Test', borderFill: 'neutral' }

export const Primary = Template.bind({})
Primary.args = { title: 'YooCard', subtitle: 'Test', borderFill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { title: 'YooCard', subtitle: 'Test', borderFill: 'danger' }

export const Light = Template.bind({})
Light.args = { title: 'YooCard', subtitle: 'Test', borderFill: 'light' }

export const Dark = Template.bind({})
Dark.args = { title: 'YooCard', subtitle: 'Test', borderFill: 'dark' }

export const Darkest = Template.bind({})
Darkest.args = { title: 'YooCard', subtitle: 'Test', borderFill: 'darkest' }