import YooTableCard from './TableCard.vue'
import PropsConfig from './TableCard.config'

export default {
  title: 'Yoonit/YooTableCard',
  component: YooTableCard,
  argTypes: {
    actionableType: {
      control: {
        type: 'select',
        options: PropsConfig.actionableType.options
      }
    },
    actionableTextPosition: {
      control: {
        type: 'select',
        options: PropsConfig.actionableTextPosition.options
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    subtitle: {
      control: {
        type: 'text'
      }
    },
    details: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { YooTableCard },
  template:
    '<yoo-table-card v-bind="$props"></yoo-table-card>'
})

export const Custom = Template.bind({})
Custom.args = { title: 'YooTableCard', subtitle: 'Admin', details: [{ text: 'Admin', status: true }, { text: 'Funcionários', status: false }, { text: 'Segurança', status: false }, { text: 'Manutenção' }, { text: 'Nome do Grupo' }, { text: 'Pagode da Firma' }] }

export const Actionable = Template.bind({})
Actionable.args = { title: 'YooTableCard', subtitle: 'Admin', details: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }], actionable: true }

export const Separator = Template.bind({})
Separator.args = { title: 'YooTableCard', subtitle: 'Admin', actionable: true, separator: true, details: [] }

export const Wrap = Template.bind({})
Wrap.args = { title: 'YooTableCard', subtitle: 'Admin', details: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }], wrap: true }
