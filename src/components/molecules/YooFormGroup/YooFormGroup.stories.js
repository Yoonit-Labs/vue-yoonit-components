import yooFormGroup from './YooFormGroup.vue'

export default {
  title: 'Yoonit/YooFormGroup',
  component: yooFormGroup
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooFormGroup },
  template:
    '<yoo-form-group v-bind="$props"></yoo-form-group>'
})

export const Custom = Template.bind({})
Custom.args = { label: 'Label', placeholder: 'Placeholder', validateOnDataInput: true }

export const Disabled = Template.bind({})
Disabled.args = { label: 'Label', placeholder: 'Placeholder', disabled: true }
