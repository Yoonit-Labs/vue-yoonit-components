import yooTableAttribute from './TableAttribute.vue'
import PropsConfig from './TableAttribute.config'

export default {
  title: 'Yoonit/YooTableAttribute',
  component: yooTableAttribute,
  argTypes: {
    detailFill: {
      control: {
        type: 'select',
        options: PropsConfig.detailFill.options
      }
    },
    titleFill: {
      control: {
        type: 'select',
        options: PropsConfig.titleFill.options
      }
    },
    titleWeight: {
      control: {
        type: 'select',
        options: PropsConfig.titleWeight.options
      }
    },
    titleSize: {
      control: {
        type: 'select',
        options: PropsConfig.titleSize.options
      }
    },
    iconFill: {
      control: {
        type: 'select',
        options: PropsConfig.iconFill.options
      }
    },
    actionableType: {
      control: {
        type: 'select',
        options: PropsConfig.actionableType.options
      }
    },
    iconStyle: {
      control: {
        type: 'select',
        options: PropsConfig.iconStyle.options
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    detail: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooTableAttribute },
  template:
    '<yoo-table-attribute v-bind="$props"></yoo-table-attribute>'
})

export const Custom = Template.bind({})
Custom.args = { title: 'YooTableAttribute', detail: 'detail' }

export const Icon = Template.bind({})
Icon.args = { title: 'YooTableAttribute', detail: 'detail', icon: 'cog' }

export const ActionableButton = Template.bind({})
ActionableButton.args = { title: 'YooTableAttribute', detail: 'detail', actionable: true }

export const ActionableCheck = Template.bind({})
ActionableCheck.args = { title: 'YooTableAttribute', detail: 'detail', actionable: true, actionableType: 'check', titleFill: 'danger' }

export const ActionableSwitch = Template.bind({})
ActionableSwitch.args = { title: 'YooTableAttribute', detail: 'detail', actionable: true, actionableType: 'switch' }

export const Separator = Template.bind({})
Separator.args = { title: 'YooTableAttribute', actionable: true, separator: true }

export const Wrap = Template.bind({})
Wrap.args = { title: 'YooTableAttribute', detail: 'detail', wrap: true, detailFill: 'danger' }
