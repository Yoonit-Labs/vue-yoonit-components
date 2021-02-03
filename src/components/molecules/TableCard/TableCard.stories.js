import YooTableCard from './TableCard.vue'
import PropsConfig from './TableCard.config'

export default {
  title: 'Yoonit/TableCard',
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
    options: {
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
Custom.args = { title: 'YooTableCard', subtitle: 'Admin', options: [{ text: 'Admin', status: true }, { text: 'Funcionários', status: false }, { text: 'Segurança', status: false }, { text: 'Manutenção' }, { text: 'Nome do Grupo' }, { text: 'Pagode da Firma' }] }

export const Icon = Template.bind({})
Icon.args = { title: 'YooTableCard', subtitle: 'Admin', options: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }], icon: 'cog' }

export const Actionable = Template.bind({})
Actionable.args = { title: 'YooTableCard', subtitle: 'Admin', options: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }], actionable: true, titleFill: 'danger' }

export const Separator = Template.bind({})
Separator.args = { title: 'YooTableCard', subtitle: 'Admin', actionable: true, separator: true, options: [] }

export const Wrap = Template.bind({})
Wrap.args = { title: 'YooTableCard', subtitle: 'Admin', options: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }], wrap: true, detailFill: 'danger' }
