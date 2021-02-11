import YooDropdown from '@/components/atoms/Dropdown/Dropdown.vue'
import PropsConfig from '@/components/atoms/Dropdown/Dropdown.config'

export default {
  title: 'Yoonit/YooDropdown',
  component: YooDropdown,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: PropsConfig.size.options
      }
    },
    options: {
      type: 'array',
      options: []
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooDropdown },
  template:
    '<yoo-dropdown v-bind="$props"></yoo-dropdown>'
})

export const Custom = Template.bind({})
Custom.args = { size: 'medium', options: [{ label: 'BR', value: '1' }, { label: 'US', value: '2' }], selected: { label: 'BR', value: '1' } }

export const Small = Template.bind({})
Small.args = { size: 'small', options: [{ label: 'BR', value: '1' }, { label: 'US', value: '2' }], selected: { label: 'BR', value: '1' } }

export const Medium = Template.bind({})
Medium.args = { size: 'medium', options: [{ label: 'BR', value: '1' }, { label: 'US', value: '2' }], selected: { label: 'BR', value: '1' } }

export const Large = Template.bind({})
Large.args = { size: 'large', options: [{ label: 'BR', value: '1' }, { label: 'US', value: '2' }], selected: { label: 'US', value: '2' } }
