import yooFlexLayout from './FlexLayout.vue'
import PropsConfig from './FlexLayout.config'

export default {
  title: 'Yoonit/YooFlexLayout',
  component: yooFlexLayout,
  argTypes: {
    flexDirection: {
      control: {
        type: 'select',
        options: PropsConfig.flexDirection.options
      }
    },
    flexWrap: {
      control: {
        type: 'select',
        options: PropsConfig.flexWrap.options
      }
    },
    justifyContent: {
      control: {
        type: 'select',
        options: PropsConfig.justifyContent.options
      }
    },
    alignItems: {
      control: {
        type: 'select',
        options: PropsConfig.alignItems.options
      }
    },
    alignContent: {
      control: {
        type: 'select',
        options: PropsConfig.alignContent.options
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { yooFlexLayout },
  template:
    `<yoo-flex-layout v-bind="$props">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3 (Lorem ipsum dolor<br/> sit amet)</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
    </yoo-flex-layout>`
})

export const Custom = Template.bind({})
Custom.args = { gap: '10px', flexWrap: 'wrap',justifyContent: 'flex-start' }

export const Default = Template.bind({})
Default.args = { }

export const Wrap = Template.bind({})
Wrap.args = { flexWrap: 'wrap' }

export const Gap = Template.bind({})
Gap.args = { flexWrap: 'wrap', gap: '20px' }

export const DirectionColumn = Template.bind({})
DirectionColumn.args = { flexDirection: 'column' }
