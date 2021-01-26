import yooPagination from './YooPagination.vue'
import PropsConfig from './YooPagination.config'

export default {
  title: 'Yoonit/YooPagination',
  component: yooPagination,
  argTypes: {
    totalPages: {
      control: {
        type: 'number',
        step: 10
      }
    },
    currentPage: {
      control: {
        type: 'number',
        step: 1
      }
    },
    counterType: {
      control: {
        type: 'select',
        options: PropsConfig.counterType.options
      }
    },
    variationButtonNext: {
      control: {
        type: 'select',
        options: PropsConfig.variationButtonNext.options
      }
    },
    lastButton: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooPagination },
  template:
    '<yoo-pagination v-bind="$props"></yoo-pagination>'
})

export const Custom = Template.bind({})
Custom.args = { totalPages: 5, currentPage: 1 }
