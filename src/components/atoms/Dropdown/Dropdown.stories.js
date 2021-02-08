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
Custom.args = { size: 'medium', options: [{ label: 'YooDropDown 1', value: '1' }, { label: 'YooDropDown 2', value: '2' }, { label: 'YooDropDown 3', value: '3' }], selected: { label: 'YooDropDown 1', value: '1' } }

export const Small = Template.bind({})
Small.args = { size: 'small', options: [{ label: 'YooDropDown 1', value: '1' }, { label: 'YooDropDown 2', value: '2' }], selected: { label: 'YooDropDown 1', value: '1' } }

export const Medium = Template.bind({})
Medium.args = { size: 'medium', options: [{ label: 'YooDropDown 1', value: '1' }, { label: 'YooDropDown 2', value: '2' }, { label: 'YooDropDown 3', value: '3' }], selected: { label: 'YooDropDown 1', value: '1' } }

export const Large = Template.bind({})
Large.args = { size: 'large', options: [{ label: 'YooDropDown 1', value: '1' }, { label: 'YooDropDown 2', value: '2' }, { label: 'YooDropDown 3', value: '3' }, { label: 'YooDropDown 4', value: '4' }], selected: { label: 'YooDropDown 1', value: '1' } }
