import YooTag from './Tag.vue'
import PropsConfig from './Tag.config'

export default {
  title: 'Yoonit/YooTag',
  component: YooTag,
  argTypes: {
    fill: {
      control: {
        type: 'select',
        options: PropsConfig.fill.options
      }
    },
    tags: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooTag },
  template:
    '<yoo-tag v-bind="$props"></yoo-tag>'
})

export const Custom = Template.bind({})
Custom.args = { tags: [{ name: 'Admin', status: true }, { name: 'Staff', status: false }, { name: 'Support', status: false }, { name: 'Business' }, { name: 'Group' }] }

export const Default = Template.bind({})
Default.args = { tags: [{ name: 'Admin' }, { name: 'Funcionários' }, { name: 'Segurança' }] }
