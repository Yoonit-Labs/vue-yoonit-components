import yooIndicator from '@/components/quarks/Indicator/Indicator.vue'
import yooIcon from '@/components/atoms/Icon/Icon.vue'
import yooButton from '@/components/atoms/Button/Button.vue'
import YooListItem from './ListItem.vue'
import PropsConfig from './ListItem.config'

export default {
  title: 'Yoonit/YooListItem',
  component: YooListItem,
  argTypes: {
    tags: {
      control: {
        type: 'text'
      }
    },
    borderFill: {
      control: {
        type: 'select',
        options: PropsConfig.borderFill.options
      }
    },
    actionableType: {
      control: {
        type: 'select',
        options: PropsConfig.actionableType.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooListItem, yooButton, yooIndicator, yooIcon },
  template:
  `<yoo-list-item v-bind="$props">
  </yoo-list-item>`
})

const TemplateSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooListItem, yooButton, yooIndicator, yooIcon },
  template:
  `<yoo-list-item v-bind="$props">
      <template v-slot:control>
        <yoo-indicator fill="danger" size="small" animation></yoo-indicator>
        <yoo-icon class="m__l--xs m__r--xs" icon="virus" fill="neutral" size="lg"></yoo-icon>
        <p>19%</p>
      </template>
    </yoo-list-item>`
})

export const Custom = TemplateSlot.bind({})
Custom.args = { title: 'YooListItem', subtitle: '• Admin', tags: [{ name: 'Admin', status: true }, { name: 'Funcionários' }, { name: 'Segurança' }] }

export const Button = Template.bind({})
Button.args = { title: 'YooListItem', subtitle: '• Admin', borderFill: 'neutral', actionable: true }

export const CheckButton = Template.bind({})
CheckButton.args = { title: 'YooListItem', subtitle: '• Admin', borderFill: 'neutral', actionable: true, actionableType: 'check' }

export const Tags = Template.bind({})
Tags.args = { title: 'Sabrina Angelim Sampaio', subtitle: '• Admin', tags: [{ name: 'Admin', status: true }, { name: 'Funcionários' }, { name: 'Segurança' }], borderFill: 'danger', borderLeft: true }
