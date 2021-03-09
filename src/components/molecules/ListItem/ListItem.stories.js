import yooIndicator from '@/components/quarks/Indicator/Indicator.vue'
import yooIcon from '@/components/atoms/Icon/Icon.vue'
import yooButton from '@/components/atoms/Button/Button.vue'
import YooListItem from './ListItem.vue'
import PropsConfig from './ListItem.config'

export default {
  title: 'Yoonit/YooListItem',
  component: YooListItem,
  argTypes: {
    justifySlotContent: {
      control: {
        type: 'select',
        options: PropsConfig.justifySlotContent.options
      }
    },
    borderFill: {
      control: {
        type: 'select',
        options: PropsConfig.borderFill.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
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

export const Custom = Template.bind({})
Custom.args = { title: 'YooListItem', subtitle: 'Admin', details: [{ text: 'Admin' }, { text: 'Funcionários' }, { text: 'Segurança' }] }

export const Neutral = Template.bind({})
Neutral.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'neutral' }

export const Primary = Template.bind({})
Primary.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'primary' }

export const Danger = Template.bind({})
Danger.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'danger' }

export const Light = Template.bind({})
Light.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'light' }

export const Dark = Template.bind({})
Dark.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'dark' }

export const Darkest = Template.bind({})
Darkest.args = { title: 'YooListItem', subtitle: 'Test', borderFill: 'darkest' }
