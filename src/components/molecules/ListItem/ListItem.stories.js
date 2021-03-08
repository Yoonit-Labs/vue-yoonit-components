import YooListItem from './ListItem.vue'
import PropsConfig from './ListItem.config'

export default {
  title: 'Yoonit/YooListItem',
  component: YooListItem,
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
  components: { YooListItem },
  template:
    '<yoo-list-item v-bind="$props"></yoo-list-item>'
})

export const Custom = Template.bind({})
Custom.args = { title: 'YooListItem', subtitle: 'Test' }

export const Neutral = Template.bind({})
Neutral.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'neutral' }

export const Primary = Template.bind({})
Primary.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'danger' }

export const Light = Template.bind({})
Light.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'light' }

export const Dark = Template.bind({})
Dark.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'dark' }

export const Darkest = Template.bind({})
Darkest.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'darkest' }
