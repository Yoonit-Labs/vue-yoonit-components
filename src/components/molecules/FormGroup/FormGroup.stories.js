import yooFormGroup from './FormGroup.vue'

export default {
  title: 'Yoonit/YooFormGroup',
  component: yooFormGroup,
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    value: {
      control: {
        type: 'text'
      }
    },
    required: {
      control: {
        type: 'boolean'
      }
    },
    validateOnDataInput: {
      control: {
        type: 'boolean'
      }
    },
    requiredRule: {
      control: {
        type: 'func'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooFormGroup },
  template:
    '<yoo-form-group v-bind="$props"></yoo-form-group>'
})

export const Custom = Template.bind({})
Custom.args = { label: 'Label', value: '', placeholder: 'Placeholder', validateOnDataInput: true }

export const Default = Template.bind({})
Default.args = { label: 'Label', placeholder: 'Placeholder' }

export const Disabled = Template.bind({})
Disabled.args = { label: 'Label', placeholder: 'Placeholder', disabled: true }

export const Invalid = Template.bind({})
Invalid.args = { label: 'Label', placeholder: 'Placeholder', value: '', required: true }

export const Valid = Template.bind({})
Valid.args = { label: 'Label', placeholder: 'Placeholder', value: 'value', required: true }
