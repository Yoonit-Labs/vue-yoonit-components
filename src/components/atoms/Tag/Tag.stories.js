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
Custom.args = { tags: [{ text: 'Admin', status: true }, { text: 'Funcionários', status: false }, { text: 'Segurança', status: false }, { text: 'Manutenção' }, { text: 'Nome do Grupo' }, { text: 'Pagode da Firma' }] }

export const Actionable = Template.bind({})
Actionable.args = { tags: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }], actionable: true }
